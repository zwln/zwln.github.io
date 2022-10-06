module.exports = {
    title: "科技趣玩",
    description: "分享各类资源、教程、黑科技软件、工具等等",
    markdown: {
      lineNumbers: true,
    },
    base: "./",
    themeConfig: {
      sidebar: [
        {
          title: '软件资源',
          children: ['/软件资源/软件资源' ],
          initialOpenGroupIndex: 5 // 可选的, 默认值是 0
        },
        {
            title: '软件资源2',
            children: ['/软件资源/软件资源2' ],
            initialOpenGroupIndex: 10 // 可选的, 默认值是 0
          }
      ]
    },
  };