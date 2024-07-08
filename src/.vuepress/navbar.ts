import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "代码笔记",
    icon: "code",
    link: "/code/",
    activeMatch: "^/code/$",
  },
  {
    text: "软件教程",
    icon: "book",
    prefix: "/software/",
    children: [
      { text: "软件教程", icon: "pen-to-square", link: "" },
      { text: "git", icon: "git", link: "git/" },
      { text: "nvm", icon: "nvm", link: "nvm/" },
    ]
  },
  // {
  //   text: "软件教程",
  //   icon: "software",
  //   prefix: "/software/",
  //   children: [
  //     {
  //       text: "软件教程",
  //       icon: "software",
  //       link: "",
  //       activeMatch: "^/software/$",
  //     },
  //     "git/",
  //   ],
  // },
]);


