import { sidebar } from "vuepress-theme-hope";
import { code } from "./code.js";
import { stm32 } from "./stm32.js";
import { front_end } from "./front_end.js";

export const zhSidebarConfig = sidebar({

  // "/code/": code,
  "/code/": "structure",

  "/code/stm32/": stm32,
  "/code/stm32/hal": "structure",

  // "/code/front_end": front_end,
  "/code/front_end": "structure",
  "/code/front_end/html4": "structure",
  "/code/front_end/css2": "structure",



  // fallback
  "/": ["", "code/", "software/", "STM32"],
});


