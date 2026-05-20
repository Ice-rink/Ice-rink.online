export async function onRequest({ request, env }) {
    const url = new URL(request.url);
    const mode = url.searchParams.get('mode') || 'query'; // mode=query/add/find
    const key = url.searchParams.get('key'); // 操作的键名
    const prefix = url.searchParams.get('prefix') || 'blog_'; // 查找模式用的前缀

    // ========== 模式1：查询模式（不计数） ==========
    if (mode === 'query') {
        if (!key) {
            return new Response(JSON.stringify({ error: '缺少 key 参数' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const value = await counter.get(key);
        return new Response(JSON.stringify({
            key: key,
            value: value !== null ? Number(value) : 0
        }), {
            headers: { 'Content-Type': 'application/json' }
        });
    }

    // ========== 模式2：添加模式（计数 +1） ==========
    if (mode === 'add') {
        if (!key) {
            return new Response(JSON.stringify({ error: '缺少 key 参数' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        let currentCount = await counter.get(key);
        let newCount = 1;

        if (currentCount !== null) {
            newCount = Number(currentCount) + 1;
        }

        await counter.put(key, String(newCount));

        return new Response(JSON.stringify({
            key: key,
            visits: newCount,
            mode: 'add'
        }), {
            headers: { 'Content-Type': 'application/json' }
        });
    }

    // ========== 模式3：查找模式（获取所有匹配前缀的键） ==========
    if (mode === 'find') {
        const result = await counter.list({ prefix: prefix });
        const kvList = result.keys;

        const resultData = {};
        for (const item of kvList) {
            const value = await counter.get(item.name);
            resultData[item.name] = value !== null ? Number(value) : 0;
        }

        return new Response(JSON.stringify(resultData), {
            headers: { 'Content-Type': 'application/json' }
        });
    }

    // 未知模式
    return new Response(JSON.stringify({ error: '未知的 mode 参数，支持: query/add/find' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
    });
}