import { sidebar } from "vuepress-theme-hope";
import { code } from "./code.js";

export const zhSidebarConfig = sidebar({

  "/code/": code,

  // fallback
  "/": ["", "note/", "code/", "software/", "about/"],
});


