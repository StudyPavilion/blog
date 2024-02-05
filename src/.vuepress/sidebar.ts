import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "实时操作系统",
      icon: "book",
      link:"rtos/",
      prefix: "rtos/",
      
      children: [
        { text: "OneOS Lite", icon: "pen-to-square", link: "oneos/" },
        { text: "RT-Thread", icon: "pen-to-square", link: "rt-thread/" },
      ],
    },
    {
      text: "课程笔记",
      icon: "book",
      link:"course/",
      prefix: "course/",
      children: [
        { text: "数据结构", icon: "pen-to-square", link: "数据结构/" },
        { text: "计算机组成原理", icon: "pen-to-square", link: "计算机组成原理/" },
        { text: "操作系统", icon: "pen-to-square", link: "操作系统/" },
        { text: "计算机网络", icon: "pen-to-square", link: "计算机网络/" },
        
      ],
      // children: "structure"
    },
    "intro",
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    },
  ],

  // 实时操作系统单独侧边栏
  "/rtos/oneos/":  "structure",
  "/rtos/rt-thread/":  "structure",

  "/course/数据结构/": "structure",
  "/course/计算机组成原理/": "structure",
  "/course/操作系统/": "structure",
  "/course/计算机网络/": "structure",
});
