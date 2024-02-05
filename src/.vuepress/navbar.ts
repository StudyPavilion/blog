import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "guide/",
  {
    text: "指南",
    link: "/",
    icon: "lightbulb",
  },
  {
    text: "实时操作系统",
    icon: "pen-to-square",
    prefix: "/rtos/",
    children: [
      {
        text: "实时操作系统",
        icon: "pen-to-square",
        prefix: "/rtos/",
        children: [
          { text: "OneOS Lite", icon: "pen-to-square", link: "oneos/" },
          { text: "RT-Thread", icon: "pen-to-square", link: "rt-thread/" },
        ]
      },
    ],
  },
  {
    text: "软件教程",
    icon: "book",
    prefix: "/software/",
    children: [
      { text: "软件教程", icon: "pen-to-square", link: "" },
      { text: "Git", icon: "git", link: "git/" },
      { text: "nvm", icon: "nvm", link: "nvm/" },
    ]
  },
  {
    text: "课程笔记",
    icon: "book",
    prefix: "/course/",
    children: [
      { text: "数据结构", icon: "pen-to-square", link: "数据结构/" },
      { text: "计算机组成原理", icon: "pen-to-square", link: "计算机组成原理/" },
      { text: "操作系统", icon: "pen-to-square", link: "操作系统/" },
      { text: "计算机网络", icon: "pen-to-square", link: "计算机网络/" },
    ]
  },
]);
