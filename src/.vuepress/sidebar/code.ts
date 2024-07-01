import { arraySidebar } from "vuepress-theme-hope";

export const code = arraySidebar([
  "",
  {
    text: "嵌入式开发",
    icon: "code",
    children: [
      "stm32/",
      "rtos/",
    ],
    
  },

  {
    text: "前端开发", 
    icon: "code", 
    prefix: "front_end",
    link: "front_end/",
    children: [
      "html/",
      "css/",
    ],
  },

  {
    text: "语言",
    icon: "language",
    prefix: "language/",
    link: "language/",
    children: [
      // "learning",
    ],
  },
  
]);
