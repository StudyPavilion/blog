import { arraySidebar } from "vuepress-theme-hope";

export const code = arraySidebar([
  "",
  {
    text: "嵌入式开发",
    icon: "code",
    // prefix: "stm32/",
    // link: "stm32/",
    children: [
      "stm32/",
      "rtos/",
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
