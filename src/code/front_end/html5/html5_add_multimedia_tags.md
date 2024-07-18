---
title: 四、新增多媒体标签
# icon: pen-to-square
order: 4
date: 2024-07-18
category:
  - language
  - HTML
tag:
  - language
  - HTML
  - 前端
---

## 1. 视频标签

<span style="color: #e96900;">\<video></span> 标签用来定义视频，它是双标签。

| 属性                                          | 值                                                           | 描述                                                         |
| --------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| <span style="color: #e96900;">src</span>      | URL地址                                                      | 视频地址                                                     |
| <span style="color: #e96900;">width</span>    | 像素值                                                       | 设置视频播放器的宽度                                         |
| <span style="color: #e96900;">height</span>   | 像素值                                                       | 设置视频播放器的高度                                         |
| <span style="color: #e96900;">controls</span> | -                                                            | 向用户显示视频控件（比如播放/暂停按钮）                      |
| <span style="color: #e96900;">muted</span>    | -                                                            | 视频静音                                                     |
| <span style="color: #e96900;">autoplay</span> | -                                                            | 视频自动播放                                                 |
| <span style="color: #e96900;">loop</span>     | -                                                            | 循环播放                                                     |
| <span style="color: #e96900;">poster</span>   | URL地址                                                      | 视频封面                                                     |
| <span style="color: #e96900;">preload</span>  | <span style="color: #e96900;">auto</span> / <span style="color: #e96900;">metadata</span> / <span style="color: #e96900;">none</span> | 视频预加载，如果使用 <span style="color: #e96900;">autoplay</span> ，则忽略该属性。<br><span style="color: #e96900;">none</span> : 不预加载视频。<br/><span style="color: #e96900;">metadata</span> : 仅预先获取视频的元数据（例如长度）。<br/><span style="color: #e96900;">auto</span> : 可以下载整个视频文件，即使用户不希望使用它。 |

> [!tip]
>
> 实现视频自动播放效果，需要 <span style="color: #e96900;">autoplay</span> 与 <span style="color: #e96900;">muted</span> 一起使用。
>
> 如果网站媒体参与度高，视频不静音也可播放。
>
> 网站媒体参与度查询方式：
>
> 在地址栏输入：
>
> ```
> chrome://media-engagement/
> ```

示例：

:::normal-demo 演示

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>01_新增视频标签</title>
    <style>
        video {
            width: 600px;
        }
    </style>
</head>
<body>
    <video src="./小电影.mp4" controls muted loop poster="./封面.png" preload="auto"></video>
</body>
</html>
```



:::

## 2. 音频标签

<span style="color: #e96900;">\<audio></span> 标签用来定义音频，它是双标签。

| 属性                                          | 值                                                           | 描述                                                         |
| --------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| <span style="color: #e96900;">src</span>      | URL地址                                                      | 音频地址                                                     |
| <span style="color: #e96900;">controls</span> | -                                                            | 向用户显示音频控件（比如播放/暂停按钮）                      |
| <span style="color: #e96900;">autoplay</span> | -                                                            | 音频自动播放                                                 |
| <span style="color: #e96900;">muted</span>    | -                                                            | 音频静音                                                     |
| <span style="color: #e96900;">loop</span>     | -                                                            | 循环播放                                                     |
| <span style="color: #e96900;">preload</span>  | <span style="color: #e96900;">auto</span> / <span style="color: #e96900;">metadata</span> / <span style="color: #e96900;">none</span> | 音频预加载，如果使用 <span style="color: #e96900;">autoplay</span> ，则忽略该属性。<br><span style="color: #e96900;">none</span> : 不预加载音频。<br/><span style="color: #e96900;">metadata</span> : 仅预先获取音频的元数据（例如长度）。<br/><span style="color: #e96900;">auto</span> : 可以下载整个音频文件，即使用户不希望使用它。 |

示例：

:::normal-demo 演示

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>02_新增音频标签</title>
    <style>
        audio {
            width: 600px;
            /* height: 500px; */
            border: 1px solid black;
        }
    </style>
</head>
<body>
    <audio src="./小曲.mp3" controls loop preload="metadata"></audio>
</body>
</html>
```



:::