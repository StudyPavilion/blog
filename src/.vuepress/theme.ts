import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
// import sidebar from "./sidebar.js";
// import {zhNavbarConfig } from "./navbar.js";
import {zhSidebarConfig } from "./sidebar/index.js";


export default hopeTheme({
  hostname: "https://studypavilion.github.io/blog/",

  license: "MIT",
  
  author: {
    name: "学习阁",
    url: "https://space.bilibili.com/636126449?spm_id_from=333.1007.0.0",
  },

  favicon: "/favicon.ico",

  iconAssets: [
    "//at.alicdn.com/t/c/font_4508980_pqbxirnmsmk.css",
  ],

  logo: "/logo.jpg",

  // repo: "vuepress-theme-hope/vuepress-theme-hope",
  repo: "studypavilion/blog/",

  repoLabel: "GitHub",

  repoDisplay: true,

  docsDir: "src",

  // 导航栏
  navbar,
  // navbar: zhNavbarConfig,

  // 侧边栏
  // sidebar,
  sidebar: zhSidebarConfig,

  // 页脚
  footer: "",
  displayFooter: true,

  // 博客相关
  blog: {
    description: "正在翻身的咸鱼",
    roundAvatar: true,
    intro: "/intro.html",
    medias: {
      BiliBili: "https://space.bilibili.com/636126449?spm_id_from=333.1007.0.0",
      Gitee: "https://gitee.com/StudyPavilion",
      GitHub: "https://github.com/StudyPavilion",
      Weibo: "https://weibo.com/u/6610771451",
      Zhihu: "https://www.zhihu.com/people/chen-mi-xue-xi-wu-fa-zi-ba-36-54",
    },
  },

  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,
  
  // 在这里配置主题提供的插件
  
  plugins: {

    blog: true,

    searchPro: true,

    copyright: {
      global: true,
      // license: "MIT",
      triggerLength: 100,
    },

    comment: {
      // 选择一个评论服务
      provider: "Giscus",

      // 服务选项
      repo: "StudyPavilion/blog",
      repoId: "R_kgDOLOUMTA",
      category: "Announcements",
      categoryId: "DIC_kwDOLOUMTM4CexWE",
    },

    


    // 在启用之前需要安装 @waline/client
    // 警告: 这是一个仅供演示的测试服务器，在生产环境中请自行部署并使用自己的服务器！
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },

    components: {
      components: [
        "Badge", 
        "VPCard", 
        "PDF",
      ],
    },

    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,

      // 在启用之前安装 chart.js
      // chart: true,

      // insert component easily

      // 在启用之前安装 echarts
      // echarts: true,

      // 在启用之前安装 flowchart.ts
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // 在启用之前安装 katex
      // katex: true,

      // 在启用之前安装 mathjax-full
      // mathjax: true,

      // 在启用之前安装 mermaid
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // 在启用之前安装 reveal.js
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // 在启用之前安装 @vue/repl
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // 如果你需要 PWA。安装 vuepress-plugin-pwa2 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
