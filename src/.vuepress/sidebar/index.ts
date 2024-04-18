import { sidebar } from "vuepress-theme-hope";
import { code } from "./code.js";
import { stm32 } from "./stm32.js";

export const zhSidebarConfig = sidebar({

  "/code/": code,

  "/code/stm32/": stm32,

  "/code/stm32/hal": "structure",

  // "/stm32/hal": stm32,


  // fallback
  "/": ["", "code/", "software/", "STM32"],
});


