import { defineUserConfig } from "vuepress";
import theme from "./theme.js";



export default defineUserConfig({
  base: "/blog/",
  // base: "/",

  lang: "zh-CN",
  title: "学习阁",
  description: "vuepress-theme-hope 的博客演示",
  theme,
  
 

  // 和 PWA 一起启用
  // shouldPrefetch: false,
  
});
