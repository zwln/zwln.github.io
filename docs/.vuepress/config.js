module.exports = {
  title: '个人主页',
  description: 'Personal Website',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/images/photo.jpg' }],
    ['link', { rel: 'manifest', href: '/images/photo.jpg' }],
    ['link', { rel: 'apple-touch-icon', href: '/images/photo.jpg' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache'}],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache,must-revalidate'}],
    ['meta', { 'http-quiv': 'expires', cotent: '0'}]
  ],
  serviceWorker: true, // 是否开启 PWA
  base: '/', // 部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块是否显示行号
  },
  themeConfig: {
    nav: [
      {
         text: 'Home',
         link: '/'
      },
      {
        text: '文章推荐',
        link: '/good/'
     },
     {
      text: '关于我',
      link: '/about/'
   },
      {//这个导航栏对应多个子导航栏
          text: 'CS与浏览器', // 这里的text就是导航栏上的名字
          items: [
            {text: '计算机网络', link: '/cs/network/'},
            {text: '浏览器相关', link: '/cs/browser/'}, // 对应的路径如下图所示
            {text: '数据库', link: '/cs/database/'},
            {text: '操作系统', link: 'cs/os/'}
          ]
       }
       
    ],
    sidebar: { //侧边栏
      '/good/':[
        ['','优秀文章推荐']
      ],
      '/about/':[
        "2021年总结",
        "大二上半学期寒假总结",
        "关于蓝桥杯、天梯赛的乱七八糟的心得"
      ],
      '/cs/network/':[
        "【http学习笔记一】破冰篇",
        "【http学习笔记二】基础篇",
        "【http学习笔记三】进阶篇",
        "【http学习笔记四】安全篇",
        "【http学习笔记五】飞翔篇",
        "【http学习笔记六】探索篇"
      ]
    }
  }
};