---
title: 定理2.4
icon: pen-to-square
date: 2024-11-09
order: 2
category:
  - 课程
tag:
  - 算法与设计
  - 数学知识
---

设 $b$ 和 $d$ 是非负常数， $n$ 是 $2$ 的幂，那么下面递推式
$$
f(n) = \begin{cases}
d & n = 1 \\
2f(n/2)+bn\log{n} & n \geq 2 \\
\end{cases}
$$
的解是
$$
f(n) = \mathcal{O}(n \log^2{n})
$$
证明：由例2.23可知：

$$
\begin{align*}
f(n) & = dn + \frac{bn \log^2{n}}{2} + \frac{bn \log{n}}{2} \\[5mm]
& = dn + \frac{b}{2}n \log^2n + \frac{b}{2}n \log{n}
\end{align*}
$$
从而可以得到 $f(n)$ 的解为：
$$
f(n) = \mathcal{O}(n \log^2{n})
$$
