---
title: 例2.23
icon: pen-to-square
date: 2024-11-09
order: 1
category:
  - 课程
tag:
  - 算法与设计
  - 数学知识
---

## 考虑递推式 f(n)


$$
f(n) = \begin{cases}
d & n = 1 \\
2f(n/2)+bn\log{n} & n \geq 2 \\
\end{cases}
$$

这里 $b$ 和 $d$ 是非负常数， $n$ 是2的幂。我们用下面的方法求解递推式（设 $k=\log{n}$ ）
$$
\begin{align*}
f(n) & = 2f(n/2) + bn \log{n} \\[5mm]
	 & = 2 \left( 2f \left( \frac{n}{2^2} \right) + b \left(\frac{n}{2} \right) \log \left( {\frac{n}{2}} \right) \right) + b \log{n} \\[5mm]
	 & = 2^2 f \left( \frac{n}{2^2} \right) + bn \log \left( \frac{n}{2} \right) + bn \log{n} \\[5mm]
	 & = 2^2 \left( 2f \left( \frac{n}{2^3} \right) + b \left(\frac{n}{2^2} \right) \log \left( {\frac{n}{2^2}} \right) \right) + bn \log \left( \frac{n}{2} \right) + bn \log{n} \\[5mm]
	 & = 2^3 f \left( \frac{n}{2^3} \right) + bn \log \left( \frac{n}{2^2} \right) + bn \log \left( \frac{n}{2} \right) + bn \log{n} \\[5mm]
	 & \ \ \vdots \\[5mm]
	  & = 2^k f \left( \frac{n}{2^k} \right) + bn \left( \log \left( \frac{n}{2^{k-1}} \right) + \log \left( \frac{n}{2^{k-2}} \right) + \dots+ \log \left( \frac{n}{2^{k-k}} \right) \right) \\[5mm]
\end{align*}
$$
当 $k = \log{n}$ 时：
$$
2^k = n
$$

$$
n = 2^{k}
$$

$$
f \left( \frac{n}{2^k} \right) = f(1) = d
$$



故有：
$$
\begin{align*}
2^k f \left( \frac{n}{2^k} \right) & = n f \left( \frac{2^k}{2^k} \right) \\[5mm]
								   & = n f(1) \\[5mm]
								   & = n d
\end{align*}
$$

$$
\begin{align*}
& \ \ \ \ \ \log \left( \frac{n}{2^{k-1}} \right) + \log \left( \frac{n}{2^{k-2}} \right) + \dots+ \log \left( \frac{n}{2^{k-k}} \right)  \\[5mm]
 & = \log \left( \frac{2^k}{2^{k-1}} \right) + \log \left( \frac{2^k}{2^{k-2}} \right) + \dots+ \log \left( \frac{2^k}{2^{k-k}} \right) \\[5mm]
 & = \log{2^1} + \log{2^2} + \dots + \log{2^n}
\end{align*}
$$





所以：
$$
\begin{align*}
f(n) & = 2^k f \left( \frac{n}{2^k} \right) + bn \left( \log \left( \frac{n}{2^{k-1}} \right) + \log \left( \frac{n}{2^{k-2}} \right) + \dots+ \log \left( \frac{n}{2^{k-k}} \right) \right) \\[5mm]
 & = dn + bn(\log{2^1} + \log{2^2} + \dots + \log{2^n}) \\[5mm]
 & = dn + bn \displaystyle \sum^k_{j=1} \log{2^j} \\[5mm]
 & = dn + bn \displaystyle \sum^k_{j=1} j \\[5mm]
 & = dn + bn \frac{k(k+1)}{2} \\[5mm]
 & = dn + bn \frac{k^2+k}{2} \\[5mm]
 & = dn + \frac{bn k^2}{2} + \frac{bn k}{2}
\end{align*}
$$
将 $k=\log{n}$ 带回有：
$$
dn + \frac{bn k^2}{2} + \frac{bn k}{2}= dn + \frac{bn \log^2{n}}{2} + \frac{bn \log{n}}{2}
$$
即：
$$
f(n) = dn + \frac{bn \log^2{n}}{2} + \frac{bn \log{n}}{2}
$$
