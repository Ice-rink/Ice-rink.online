// 工具元数据模块
// 每个工具包含：id、name、desc、tags、icon、url

const toolData = [
    {
        id: "json-formatter",
        name: "JSON 格式化",
        desc: "在线美化、压缩、验证 JSON 数据，支持一键复制结果。",
        tags: ["JSON", "格式化", "前端"],
        icon: "🔧",
        url: "tool/json-formatter.html"
    },
    {
        id: "regex-tester",
        name: "正则表达式测试器",
        desc: "实时匹配正则表达式，高亮显示匹配结果，支持常用标志位。",
        tags: ["正则", "测试", "前端"],
        icon: "🔍",
        url: "tool/regex-tester.html"
    },
    {
        id: "color-converter",
        name: "颜色格式转换",
        desc: "HEX、RGB、HSL 三种颜色格式互转，支持实时预览颜色。",
        tags: ["颜色", "CSS", "设计"],
        icon: "🎨",
        url: "tool/color-converter.html"
    },
    {
        id: "timestamp",
        name: "时间戳转换",
        desc: "Unix 时间戳与日期字符串双向转换，支持秒/毫秒自动识别。",
        tags: ["时间戳", "日期", "后端"],
        icon: "⏰",
        url: "tool/timestamp.html"
    },
    {
        id: "base64",
        name: "Base64 编解码",
        desc: "文本与 Base64 互转，支持中文编码，一键复制结果。",
        tags: ["Base64", "编码", "后端"],
        icon: "🔐",
        url: "tool/base64.html"
    },
    {
        id: "word-count",
        name: "字数统计",
        desc: "中英文混合计数，支持字符、单词、行数、段落数统计。",
        tags: ["统计", "写作", "前端"],
        icon: "📊",
        url: "tool/word-count.html"
    },
    {
        id: "url-encoder",
        name: "URL 编解码",
        desc: "URL 编码与解码工具，处理特殊字符和中文参数。",
        tags: ["URL", "编码", "前端"],
        icon: "🔗",
        url: "tool/url-encoder.html"
    },
    {
        id: "markdown-preview",
        name: "Markdown 预览",
        desc: "在线 Markdown 编辑器，实时预览渲染效果，支持导出 HTML。",
        tags: ["Markdown", "写作", "前端"],
        icon: "📝",
        url: "tool/markdown-preview.html"
    },
    {
        id: "uuid-generator",
        name: "UUID 生成器",
        desc: "一键生成 UUID v4，支持批量生成和自定义格式。",
        tags: ["UUID", "生成器", "后端"],
        icon: "🆔",
        url: "tool/uuid-generator.html"
    },
    {
        id: "diff-checker",
        name: "文本差异对比",
        desc: "对比两段文本的差异，高亮显示新增、删除和修改部分。",
        tags: ["对比", "文本", "前端"],
        icon: "🔀",
        url: "tool/diff-checker.html"
    }
];