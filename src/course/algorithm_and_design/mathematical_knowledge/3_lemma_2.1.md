---
title: 引理2.1
icon: pen-to-square
date: 2024-11-10
order: 3
category:
  - 课程
tag:
  - 算法与设计
  - 数学知识
---

## 设 $a$ 和 $c$ 是非负整数， $b$ ， $d$ ， $x$ ，是非负常数，并且对于某个非负整数 $k$ ，令 $n=c^k$ 那么，下面递推式

$$
f(n) = \begin{cases}
d & n = 1 \\[5mm]
af(n/c)+bn^x & n \geq 2 \\
\end{cases}
$$
的解是
$$
\begin{equation}
f(n) =\left \{
\begin{aligned}
& bn^x \log_c{n} + dn^x & \quad \text  a = c^x \\[5mm]
& \left( d + \frac{b c^x}{a-c^x} \right )n^{\log_c{a}} - (\frac{b c^x}{a - c^x})n^x & \quad  a \neq c^x \\[5mm]
\end{aligned}
\right.
\end{equation}
$$
### 证明：用展开法来求解这个递推式

$$
\begin{align*}
f(n) & = a f \left( \frac{n}{c} \right) + b n^x \\[5mm]
	 & = a \left( a f \left( \frac{n}{c^2} \right)  + b \left( \frac{n}{c} \right)^x \right) + b n^x \\[5mm]
	 & = a^2 f \left( \frac{n}{c^2} \right) + \left( \frac{a}{c^x} \right) bn^x + bn^x \\[5mm]
	 & = a^2 \left( a f \left( \frac{n}{c^3} \right)  + b \left( \frac{n}{c^2} \right)^x \right) + b n^x \\[5mm]
	  & = a^3 f \left( \frac{n}{c^3} \right) + \left( \frac{a}{c^x} \right)^2 bn^x + \left( \frac{a}{c^x} \right) bn^x + bn^x \\
	  & \ \ \vdots \\
	  & = a^k f \left( \frac{n}{c^k} \right) + \left( \frac{a}{c^x} \right)^{k-1} bn^x + \cdots + \left( \frac{a}{c^x} \right) bn^x + bn^x \\[5mm]
\end{align*}
$$
当 $f(1) = d$ ，故令
$$
n = c^k
$$
则：
$$
k = \log_c{n}
$$

$$
a^k = a^{\log_c{n}}
$$

$$
f \left( \frac{n}{c^k} \right) = f(1) = d
$$

 

故有：
$$
\begin{align*}
f(n) & = a^k f \left( \frac{n}{c^k} \right) + \left( \frac{a}{c^x} \right)^{k-1} bn^x + \cdots + \left( \frac{a}{c^x} \right) bn^x + bn^x \\[5mm]
	 & = d a^{\log_c{n}} + b n^x \displaystyle \sum^{k-1}_{j=0} \left( \frac{a}{c^x} \right)^j \\[5mm]
\end{align*}
$$

因有换底公式：
$$
a^{\log_c{n}} = n^{\log_c{a}}
$$
故：
$$
\begin{align*}
f(n) & = d a^{\log_c{n}} + b n^x \displaystyle \sum^{k-1}_{j=0} \left( \frac{a}{c^x} \right)^j \\[5mm]
	 & = d n^{\log_c{a}} + b n^x \displaystyle \sum^{k-1}_{j=0} \left( \frac{a}{c^x} \right)^j \\[5mm]
\end{align*}
$$

#### 分情况讨论：

（1） $a = c^x$ 。在这种情况下
$$
\begin{align*}
\displaystyle \sum^{k-1}_{j=0} \left( \frac{a}{c^x} \right)^j & = \displaystyle \sum^{k-1}_{j=0} \left( 1 \right)^j \\[5mm]
															  & = k \\[5mm]	
															  & = \log_c{n}
\end{align*}
$$
又有：
$$
\begin{align*}
\log_c{a} & = \log_c{c^x} \\[5mm]
		  & = x
\end{align*}
$$
故：
$$
\begin{align*}
f(n) = dn^x +  b n^x \log_c{n}
\end{align*}
$$
（2） $a \neq c$ 。在这种情况下

由等比数列求和：
$$
\begin{equation}
S_n =\left \{
\begin{aligned}
& \frac{a_1 (1 - q^n)}{1 - q} = \frac{a_1 - a_1 q^n}{1 - q} = \frac{a_n q - a_1}{q - 1}  & \quad q \neq 1 \\[5mm]
& na & \quad  q = 1 \\[5mm]
\end{aligned}
\right.
\end{equation}
$$
故有：
$$
\begin{align*}
 b n^x \displaystyle \sum^{k-1}_{j=0} \left( \frac{a}{c^x} \right)^j & = b n^x \frac{ \left( \frac{a}{c^x} \right)^k - 1 }{\left( \frac{a}{c^x} \right) - 1} \\[5mm]
 																	 & =  \frac{ b n^x \left( \frac{a}{c^x} \right)^k - b n^x }{\left( \frac{a}{c^x} \right) - 1} \\[5mm]
 																	 & = \frac{ b n^x  \frac{a^k}{c^{xk}} - b n^x }{\left( \frac{a}{c^x} \right) - 1} \\[5mm]
\end{align*}
$$
因有 $n = c^k$ ，故
$$
\begin{align*}
 \frac{ b n^x  \frac{a^k}{c^{xk}} - b n^x }{\left( \frac{a}{c^x} \right) - 1}  & =  \frac{ b c^{xk}  \frac{a^k}{c^{xk}} - b n^{x} }{\left( \frac{a}{c^x} \right) - 1} \\[5mm]
 																			   & =  \frac{ b a^k - b n^x }{\left( \frac{a}{c^x} \right) - 1} \\[5mm]
 																			   & = \frac{ b c^x  a^k - b c^x  n^x  }{ a - c^x} \\[5mm]
 																			   & = \frac{ b c^x  a^{\log_c{n}} - b c^x  n^x  }{ a - c^x} \\[5mm]
 																			   & = \frac{ b c^x  n^{\log_c{a}} - b c^x  n^x  }{ a - c^x} \\[5mm]
\end{align*}
$$
因此：
$$
\begin{align*}
f(n) & = d n^{\log_c{a}} + b n^x \displaystyle \sum^{k-1}_{j=0} \left( \frac{a}{c^x} \right)^j \\[5mm]
	 & = d n^{\log_c{a}} + \frac{ b c^x  n^{\log_c{a}} - b c^x  n^x  }{ a - c^x} \\[5mm]
	 & =  d n^{\log_c{a}} + \frac{ b c^x  n^{\log_c{a}} }{ a - c^x} - \frac{ b c^x  n^x  }{ a - c^x} \\[5mm]
	 & = \left( d + \frac{b c^x}{a - c^x} \right) n^{\log_c{a}}  - \frac{ b c^x  n^x  }{ a - c^x} \\[5mm]
\end{align*}
$$



$$

$$
