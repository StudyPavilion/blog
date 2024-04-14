import { arraySidebar } from "vuepress-theme-hope";

export const code = arraySidebar([
  "",
  // {
  //   text: "基础介绍",
  //   icon: "module",
  //   children: ["github/"],
  // },
  {
    text: "语言",
    icon: "language",
    prefix: "language/",
    link: "language/",
    children: [
      "learning",
      // "js/",
      // "typescript/",
      // "python/",
      // "json/",
      // "yaml/",
      // "linter/",
    ],
  },
]);
