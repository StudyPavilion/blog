---
title: docker 介绍与安装
# index: false
icon: pen-to-square
date: 2024-07-26
category:
  - docker
tag:
  - docker
---

## 1. docker 介绍

## 2. docker 安装

### 2.1 ubuntu 安装 docker

> [!tip]
>
> ubuntu 版本：24.04
>
> [Ubuntu 22.04下Docker安装（最全指引）_ubuntu22.04 docker 分区-CSDN博客](https://blog.csdn.net/u011278722/article/details/137673353?spm=1001.2014.3001.5501)

### 3 docker 换源

[2024年7月，解决国内无法拉取docker官方镜像问题_docker拉取镜像失败-CSDN博客](https://blog.csdn.net/btaworld/article/details/140437122)

[AtomHub 可信镜像仓库平台 · OpenAtom Foundation (atomgit.com)](https://hub.atomgit.com/)

```sh
docker run \
-p 80:80 \
--name nginx \
-v /home/study/nginx/conf/nginx.conf:/etc/nginx/nginx.conf \
-v /home/study/nginx/conf/conf.d:/etc/nginx/conf.d \
-v /home/study/nginx/log:/var/log/nginx \
-v /home/study/nginx/html:/usr/share/nginx/html \
-d nginx:latest
```



