---
title: vscode
icon: pen-to-square
date: 2024-07-16
category:
  - 软件教程
tag:
  - 软件教程
  - vscode
---

## 资源管理器取消紧凑模式

现象描述：使用VSCode新建空文件夹时，会出现文件夹折叠。

![新建子文件夹](./../../.vuepress/public/assets/images/front_end/software/vscode/README.assets/QQ_1721113396138.png)

![文件夹折叠](./../../.vuepress/public/assets/images/front_end/software/vscode/README.assets/QQ_1721113608065.png)

原因：vscode 默认开启紧凑模式。

解决方法：关闭紧凑模式。

管理 => 设置 => 搜索 紧凑 => 取消勾选 Explorer: Compact Folders 

![管理 => 设置](./../../.vuepress/public/assets/images/front_end/software/vscode/README.assets/QQ_1721114164986.png)

![搜索 紧凑 => 取消勾选 Explorer: Compact Folders](./../../.vuepress/public/assets/images/front_end/software/vscode/README.assets/QQ_1721114408422.png)

最终效果：

![最终效果](./../../.vuepress/public/assets/images/front_end/software/vscode/README.assets/QQ_1721114463967.png)

## 同时显示两个文件

解决方法：打开要同时查看的文件，点击拆分按钮。

![拆分按钮](./../../.vuepress/public/assets/images/front_end/software/vscode/README.assets/QQ_1721116748443.png)

效果：

![拆分效果](./../../.vuepress/public/assets/images/front_end/software/vscode/README.assets/QQ_1721116814310.png)

## 关闭缩略图

缩略图在这

![缩略图](./../../.vuepress/public/assets/images/front_end/software/vscode/README.assets/QQ_1721115824662.png)

关闭方法：查看 => 外观 => 取消勾选缩略图 

![取消勾选缩略图](./../../.vuepress/public/assets/images/front_end/software/vscode/README.assets/QQ_1721116386039.png)

效果：

![效果](./../../.vuepress/public/assets/images/front_end/software/vscode/README.assets/QQ_1721116438803.png)

## CSS 自定义折叠区

方法：

```css
/* #region */
内容
/* #endregion */
```

