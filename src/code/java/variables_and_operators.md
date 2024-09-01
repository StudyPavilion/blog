# 第02章_变量与运算符

讲师：尚硅谷-宋红康（江湖人称：康师傅）

官网：[http://www.atguigu.com](http://www.atguigu.com/)

***

## 本章专题与脉络

<img src="./../../.vuepress/public/assets/images/java/variables_and_operators.assets/第1阶段：Java基本语法-第02章.png" alt="第1阶段：Java基本语法-第02章" style="zoom:40%;" />

## 1. 关键字（keyword）

- 定义：**被Java语言赋予了特殊含义，用做专门用途的字符串（或单词）**
  - HelloWorld案例中，出现的关键字有 `class`、`public `  、 `static` 、  `void`  等，这些单词已经被Java定义好了。
- 特点：全部关键字都是`小写字母`。
- 关键字比较多，不需要死记硬背，学到哪里记到哪里即可。
- 官方地址： https://docs.oracle.com/javase/tutorial/java/nutsandbolts/_keywords.html

![image-20220310234414849](./../../.vuepress/public/assets/images/java/variables_and_operators.assets/image-20220310234414849.png)

>  说明：
>
>  1. 关键字一共`50个`，其中`const`和`goto`是`保留字`(reserved word)。
>  2. `true`，`false`，`null`不在其中，它们看起来像关键字，其实是字面量，表示特殊的布尔值和空值。

<img src="./../../.vuepress/public/assets/images/java/variables_and_operators.assets/image-20220310234557454.png" alt="image-20220310234557454" style="zoom: 67%;" />

<img src="./../../.vuepress/public/assets/images/java/variables_and_operators.assets/image-20220801143635356.png" alt="image-20220801143635356" style="zoom:66%;" />

## 2. 标识符( identifier)

Java中变量、方法、类等要素命名时使用的字符序列，称为标识符。

技巧：凡是自己可以起名字的地方都叫标识符。

**标识符的命名规则**（必须遵守的`硬性规定`）：

```
> 由26个英文字母大小写，0-9 ，_或 $ 组成  
> 数字不可以开头。
> 不可以使用关键字和保留字，但能包含关键字和保留字。
> Java中严格区分大小写，长度无限制。
> 标识符不能包含空格。
```

> 练习：miles、Test、a++、 --a、4#R、$4、 #44、apps、class、public、int、x、y、radius
>

**标识符的命名规范**（建议遵守的`软性要求`，否则工作时容易被鄙视）:

```
> 包名：多单词组成时所有字母都小写：xxxyyyzzz。
  例如：java.lang、com.atguigu.bean
  
> 类名、接口名：多单词组成时，所有单词的首字母大写：XxxYyyZzz
  例如：HelloWorld，String，System等
  
> 变量名、方法名：多单词组成时，第一个单词首字母小写，第二个单词开始每个单词首字母大写：xxxYyyZzz
  例如：age,name,bookName,main,binarySearch,getName
  
> 常量名：所有字母都大写。多单词时每个单词用下划线连接：XXX_YYY_ZZZ
  例如：MAX_VALUE,PI,DEFAULT_CAPACITY
```

注意：在起名字时，为了提高阅读性，要尽量有意义，“见名知意”。

> 更多细节详见《代码整洁之道_关于标识符.txt》《阿里巴巴Java开发手册-1.7.1-黄山版》
>

## 3. 变量

### 3.1 为什么需要变量

![image-20220513235020527](./../../.vuepress/public/assets/images/java/variables_and_operators.assets/image-20220513235020527.png)

一花一世界，如果把一个程序看做一个世界或一个社会的话，那么变量就是程序世界的花花草草、万事万物。即，**变量是程序中不可或缺的组成单位，最基本的存储单元**。

![image-20220513235828042](./../../.vuepress/public/assets/images/java/variables_and_operators.assets/image-20220513235828042.png)

### 3.2 初识变量

- 变量的概念：

  - 内存中的一个存储区域，该区域的数据可以在同一类型范围内不断变化

  - 变量的构成包含三个要素：`数据类型`、`变量名`、`存储的值`

  - Java中变量声明的格式：`数据类型 变量名 = 变量值`

    <img src="./../../.vuepress/public/assets/images/java/variables_and_operators.assets/image-20220311000744867.png" alt="image-20220311000744867" style="zoom:67%;" />

- 变量的作用：用于在内存中保存数据。

- 使用变量注意：

  - Java中每个变量必须先声明，后使用。
  - 使用变量名来访问这块区域的数据。
  - 变量的作用域：其定义所在的一对{ }内。
  - 变量只有在其`作用域`内才有效。出了作用域，变量不可以再被调用。
  - 同一个作用域内，不能定义重名的变量。

### 3.3 Java中变量的数据类型

Java中变量的数据类型分为两大类：

- **基本数据类型**：包括 `整数类型`、`浮点数类型`、`字符类型`、`布尔类型`。 

- **引用数据类型**：包括`数组`、 `类`、`接口`、`枚举`、`注解`、`记录`。 

  ![Java的数据类型](./../../.vuepress/public/assets/images/java/variables_and_operators.assets/Java的数据类型.png)

### 3.4 变量的使用

#### 3.4.1 步骤1：变量的声明

```
格式：数据类型  变量名;
```

```java
//例如：
//存储一个整数类型的年龄
int age; 

//存储一个小数类型的体重
double weight;

//存储一个单字符类型的性别 
char gender;

//存储一个布尔类型的婚姻状态
boolean marry;

//存储一个字符串类型的姓名
String name;

//声明多个同类型的变量
int a,b,c; //表示a,b,c三个变量都是int类型。
```

> 注意：变量的数据类型可以是基本数据类型，也可以是引用数据类型。

#### 3.4.2 步骤2：变量的赋值

给变量赋值，就是把“值”存到该变量代表的内存空间中。同时，给变量赋的值类型必须与变量声明的类型一致或兼容。

**变量赋值的语法格式：**

```java
变量名 = 值;
```

举例1：可以使用合适类型的`常量值`给已经声明的变量赋值

```java
age = 18;
weight = 109;
gender = '女';
```

举例2：可以使用其他`变量`或者`表达式`给变量赋值

```java
int m = 1;
int n = m;
        
int x = 1;
int y = 2;
int z = 2 * x + y;
```

3：变量可以反复赋值

```java
//先声明，后初始化
char gender;
gender = '女';

//给变量重新赋值，修改gender变量的值
gender = '男';
System.out.println("gender = " + gender);//gender = 男
```

举例4：也可以将变量的声明和赋值一并执行

```java
boolean isBeauty = true;
String name = "迪丽热巴";
```

内存结构如图：

<img src="./../../.vuepress/public/assets/images/java/variables_and_operators.assets/image-20220514152216148.png" alt="image-20220514152216148" style="zoom: 80%;" />



## 4. 基本数据类型介绍

### 4.1 整数类型：byte、short、int、long

<img src="./../../.vuepress/public/assets/images/java/variables_and_operators.assets/image-20220520111756274.png" alt="image-20220520111756274" style="zoom: 50%;" />

- Java各整数类型有固定的表数范围和字段长度，不受具体操作系统的影响，以保证Java程序的可移植性。

<img src="./../../.vuepress/public/assets/images/java/variables_and_operators.assets/image-20220311001553945.png" alt="image-20220311001553945" style="zoom:80%;" />

- 定义long类型的变量，赋值时需要以"`l`"或"`L`"作为后缀。

- Java程序中变量通常声明为int型，除非不足以表示较大的数，才使用long。

- Java的整型`常量默认为 int 型`。

#### 4.1.1 补充：计算机存储单位


- **字节（Byte）：**是计算机用于`计量存储容量`的`基本`单位，一个字节等于8 bit。

- **位（bit）：**是数据存储的`最小`单位。二进制数系统中，每个0或1就是一个位，叫做bit（比特），其中8 bit 就称为一个字节(Byte)。

- **转换关系：**
  - 8 bit = 1 Byte
  - 1024 Byte = 1 KB
  - 1024 KB = 1 MB
  - 1024 MB = 1 GB
  - 1024 GB = 1 TB

### 4.2 浮点类型：float、double

- 与整数类型类似，Java 浮点类型也有固定的表数范围和字段长度，不受具体操作系统的影响。

<img src="./../../.vuepress/public/assets/images/java/variables_and_operators.assets/image-20220311001749699.png" alt="image-20220311001749699" style="zoom:80%;" />

- 浮点型常量有两种表示形式：
  - 十进制数形式。如：5.12       512.0f        .512   (必须有小数点）
  - 科学计数法形式。如：5.12e2      512E2     100E-2
- float：`单精度`，尾数可以精确到7位有效数字。很多情况下，精度很难满足需求。    
- double：`双精度`，精度是float的两倍。通常采用此类型。
- 定义float类型的变量，赋值时需要以"`f`"或"`F`"作为后缀。
- Java 的浮点型`常量默认为double型`。

#### 4.2.1 关于浮点型精度的说明

- 并不是所有的小数都能可以精确的用二进制浮点数表示。二进制浮点数不能精确的表示0.1、0.01、0.001这样10的负次幂。

- 浮点类型float、double的数据不适合在`不容许舍入误差`的金融计算领域。如果需要`精确`数字计算或保留指定位数的精度，需要使用`BigDecimal类`。

- 测试用例：


```java
//测试1：（解释见章末企业真题：为什么0.1 + 0.2不等于0.3）
System.out.println(0.1 + 0.2);//0.30000000000000004

//测试2：
float ff1 = 123123123f;
float ff2 = ff1 + 1;
System.out.println(ff1);
System.out.println(ff2);
System.out.println(ff1 == ff2);

```

#### 4.2.2 应用举例

案例1：定义圆周率并赋值为3.14，现有3个圆的半径分别为1.2、2.5、6，求它们的面积。

```java
/**
 * @author 尚硅谷-宋红康
 * @create 12:36
 */
public class Exercise1 {
    public static void main(String[] args) {
        double PI = 3.14; //圆周率

        double radius1 = 1.2;
        double radius2 = 2.5;
        int radius3 = 6;

        System.out.println("第1个圆的面积：" + PI * radius1 * radius1);
        System.out.println("第2个圆的面积：" + PI * radius2 * radius2);
        System.out.println("第3个圆的面积：" + PI * radius3 * radius3);
    }
}
```

案例2：小明要到美国旅游，可是那里的温度是以华氏度为单位记录的。
它需要一个程序将华氏温度（80度）转换为摄氏度，并以华氏度和摄氏度为单位分别显示该温度。

```
℃ = (℉ - 32) / 1.8
```

```java
/**
 * @author 尚硅谷-宋红康
 * @create 12:51
 */
public class Exercise2 {
    public static void main(String[] args) {
        double hua = 80;
        double she = (hua-32)/1.8;
        System.out.println("华氏度" + hua+"℉转为摄氏度是" +she+"℃");
    }
}
```

### 4.3 字符类型：char

- char 型数据用来表示通常意义上“`字符`”（占2字节）

- Java中的所有字符都使用Unicode编码，故一个字符可以存储一个字母，一个汉字，或其他书面语的一个字符。

- 字符型变量的三种表现形式：
  - **形式1：**使用单引号(' ')括起来的`单个字符`。
  
    例如：char c1 = 'a';   char c2 = '中'; char c3 =  '9';

  - **形式2：**直接使用 `Unicode值`来表示字符型常量：‘`\uXXXX`’。其中，XXXX代表一个十六进制整数。
  
    例如：\u0023 表示 '#'。
  
  - **形式3：**Java中还允许使用`转义字符‘\’`来将其后的字符转变为特殊字符型常量。
  
    例如：char c3 = '\n';  // '\n'表示换行符
  
  | 转义字符 |  说明  | Unicode表示方式 |
  | :------: | :----: | :-------------: |
  |   `\n`   | 换行符 |     \u000a      |
  |   `\t`   | 制表符 |     \u0009      |
  |   `\"`   | 双引号 |     \u0022      |
  |   `\'`   | 单引号 |     \u0027      |
  |   `\\`   | 反斜线 |     \u005c      |
  |   `\b`   | 退格符 |     \u0008      |
  |   `\r`   | 回车符 |     \u000d      |
  
- char类型是可以进行运算的。因为它都对应有Unicode码，可以看做是一个数值。

### 4.4 布尔类型：boolean

- boolean 类型用来判断逻辑条件，一般用于流程控制语句中：
  - if条件控制语句；                  
  - while循环控制语句；     
  - for循环控制语句；
  - do-while循环控制语句； 

- **boolean类型数据只有两个值：true、false，无其它。**
  - 不可以使用0或非 0 的整数替代false和true，这点和C语言不同。
  - 拓展：Java虚拟机中没有任何供boolean值专用的字节码指令，Java语言表达所操作的boolean值，在编译之后都使用java虚拟机中的int数据类型来代替：true用1表示，false用0表示。——《java虚拟机规范 8版》
- 举例：

```java
boolean isFlag = true;

if(isFlag){
    //true分支
}else{  
    //false分支
}
```

> 经验之谈：
>
> Less is More！建议不要这样写：if ( isFlag = = true )，只有新手才如此。关键也很容易写错成if(isFlag = true)，这样就变成赋值isFlag为true而不是判断！`老鸟的写法`是if (isFlag)或者if ( !isFlag)。

## 5. 基本数据类型变量间运算规则

在Java程序中，不同的基本数据类型（只有7种，不包含boolean类型）变量的值经常需要进行相互转换。

转换的方式有两种：`自动类型提升`和`强制类型转换`。

### 5.1 自动类型提升

**规则：将取值范围小（或容量小）的类型自动提升为取值范围大（或容量大）的类型 。**

<img src="./../../.vuepress/public/assets/images/java/variables_and_operators.assets/image-20220523162200891.png" alt="image-20220523162200891" style="zoom:67%;" />

基本数据类型的转换规则如图所示：

![image-20220311002543688](./../../.vuepress/public/assets/images/java/variables_and_operators.assets/image-20220311002543688.png)

（1）当把存储范围小的值（常量值、变量的值、表达式计算的结果值）赋值给了存储范围大的变量时

```java
int i = 'A';//char自动升级为int，其实就是把字符的编码值赋值给i变量了
double d = 10;//int自动升级为double
long num = 1234567; //右边的整数常量值如果在int范围呢，编译和运行都可以通过，这里涉及到数据类型转换

//byte bigB = 130;//错误，右边的整数常量值超过byte范围
long bigNum = 12345678912L;//右边的整数常量值如果超过int范围，必须加L，显式表示long类型。否则编译不通过
```

（2）当存储范围小的数据类型与存储范围大的数据类型变量一起混合运算时，会按照其中最大的类型运算。

```java
int i = 1;
byte b = 1;
double d = 1.0;

double sum = i + b + d;//混合运算，升级为double
```

（3）当byte,short,char数据类型的变量进行算术运算时，按照int类型处理。

```java
byte b1 = 1;
byte b2 = 2;
byte b3 = b1 + b2;//编译报错，b1 + b2自动升级为int

char c1 = '0';
char c2 = 'A';
int i = c1 + c2;//至少需要使用int类型来接收
System.out.println(c1 + c2);//113 
```

**练习：**

```
设 x 为float型变量，y为double型变量，a为int型变量，b为long型变量，c为char型变量，则表达式
x + y * a / x + b / y + c的值类型为：

A. int   B. long  C. double  D. char
```

### 5.2 强制类型转换

将`3.14` 赋值到`int` 类型变量会发生什么？产生编译失败，肯定无法赋值。

```java
int i = 3.14; // 编译报错
```

想要赋值成功，只有通过`强制类型转换`，将`double` 类型强制转换成`int` 类型才能赋值。

<img src="./../../.vuepress/public/assets/images/java/variables_and_operators.assets/image-20220523162407722.png" alt="image-20220523162407722" style="zoom:67%;" />

**规则：将取值范围大（或容量大）的类型强制转换成取值范围小（或容量小）的类型。**

> 自动类型提升是Java自动执行的，而强制类型转换是自动类型提升的逆运算，需要我们自己手动执行。
>

**转换格式：**

```java
数据类型1 变量名 = (数据类型1)被强转数据值;  //()中的数据类型必须<=变量值的数据类型
```

（1）当把存储范围大的值（常量值、变量的值、表达式计算的结果值）强制转换为存储范围小的变量时，可能会`损失精度`或`溢出`。

```java
int i = (int)3.14;//损失精度

double d = 1.2;
int num = (int)d;//损失精度

int i = 200;
byte b = (byte)i;//溢出
```

（2）当某个值想要提升数据类型时，也可以使用强制类型转换。这种情况的强制类型转换是`没有风险`的，通常省略。

```java
int i = 1;
int j = 2;
double bigger = (double)(i/j);
```

（3）声明long类型变量时，可以出现省略后缀的情况。float则不同。

```java
long l1 = 123L;
long l2 = 123;//如何理解呢？ 此时可以看做是int类型的123自动类型提升为long类型

//long l3 = 123123123123; //报错，因为123123123123超出了int的范围。
long l4 = 123123123123L;


//float f1 = 12.3; //报错，因为12.3看做是double，不能自动转换为float类型
float f2 = 12.3F;
float f3 = (float)12.3;
```

**练习：判断是否能通过编译**

```java
1）short  s = 5;
   s = s-2;                     //判断：no
2） byte b = 3;
    b = b + 4;                  //判断：no
    b = (byte)(b+4);            //判断：yes
3）char c = ‘a’;
   int  i = 5;
   float d = .314F;
   double result = c+i+d;       //判断：yes
4） byte b = 5;
    short s = 3;
    short t = s + b;            //判断：no

```

**问答：为什么标识符的声明规则里要求不能数字开头？**

```java
//如果允许数字开头，则如下的声明编译就可以通过：
int 123L = 12;
//进而，如下的声明中l的值到底是123？还是变量123L对应的取值12呢？ 出现歧义了。
long l = 123L;
```

### 5.3 基本数据类型与String的运算

#### 5.3.1 字符串类型：String

- String不是基本数据类型，属于引用数据类型
- 使用一对`""`来表示一个字符串，内部可以包含0个、1个或多个字符。
- 声明方式与基本数据类型类似。例如：String str = “尚硅谷”;

#### 5.3.2 运算规则

1、任意八种基本数据类型的数据与String类型只能进行连接“+”运算，且结果一定也是String类型

```java
System.out.println("" + 1 + 2);//12

int num = 10;
boolean b1 = true;
String s1 = "abc";

String s2 = s1 + num + b1;
System.out.println(s2);//abc10true

//String s3 = num + b1 + s1;//编译不通过，因为int类型不能与boolean运算
String s4 = num + (b1 + s1);//编译通过
```

2、String类型不能通过强制类型()转换，转为其他的类型

```java
String str = "123";
int num = (int)str;//错误的

int num = Integer.parseInt(str);//正确的，后面才能讲到，借助包装类的方法才能转
```

#### 5.3.3 案例与练习

**案例：公安局身份登记**

要求填写自己的姓名、年龄、性别、体重、婚姻状况（已婚用true表示，单身用false表示）、联系方式等等。

```java
/**
 * @author 尚硅谷-宋红康
 * @create 12:34
 */
public class Info {
    public static void main(String[] args) {
        String name = "康师傅";
        int age = 37;
        char gender = '男';
        double weight = 145.6;
        boolean isMarried = true;
        String phoneNumber = "13112341234";

        System.out.println("姓名：" + name);
        System.out.println("年龄：" + age);
        System.out.println("性别：" + gender);
        System.out.println("体重：" + weight);
        System.out.println("婚否：" + isMarried);
        System.out.println("电话：" + phoneNumber);
		//或者
        System.out.println("name = " + name + ",age = " + age + "，gender = " + 
                           gender + ",weight = " + weight + ",isMarried = " + isMarried +
                           ",phoneNumber = " + phoneNumber);
    }
}
```

**练习：**

练习1：

```java
String str1 = 4;                       //判断对错：
String str2 = 3.5f + "";               //判断str2对错：
System.out.println(str2);              //输出：
System.out .println(3+4+"Hello!");     //输出：
System.out.println("Hello!"+3+4);      //输出：
System.out.println('a'+1+"Hello!");    //输出：
System.out.println("Hello"+'a'+1);     //输出：
```

练习2：

```java
System.out.println("*    *");				//输出：
System.out.println("*\t*");					//输出：
System.out.println("*" + "\t" + "*");		//输出：
System.out.println('*' + "\t" + "*");		//输出：
System.out.println('*' + '\t' + "*");		//输出：
System.out.println('*' + "\t" + '*');		//输出：
System.out.println("*" + '\t' + '*');		//输出：
System.out.println('*' + '\t' + '*');		//输出：
```

## 6. 计算机底层如何存储数据

计算机世界中只有二进制，所以计算机中存储和运算的`所有数据`都要转为`二进制`。包括数字、字符、图片、声音、视频等。

<img src="./../../.vuepress/public/assets/images/java/variables_and_operators.assets/010101.jpg" alt="010101" style="zoom: 33%;" />

**世界上有10种人 ，认识和不认识二进制的。**

### 6.1 进制的分类

- **十进制（decimal）**
  - 数字组成：0-9
  - 进位规则：满十进一

- **二进制（binary）**
  - 数字组成：0-1
  - 进位规则：满二进一，以`0b`或`0B`开头

- **八进制（octal）：很少使用**
  - 数字组成：0-7
  - 进位规则：满八进一，以数字`0`开头表示

- **十六进制**
  - 数字组成：0-9，a-f
  - 进位规则：满十六进一，以`0x`或`0X`开头表示。此处的 a-f 不区分大小写

代码演示：

```java
class BinaryTest {
	public static void main(String[] args) {
		
		int num1 = 123;		//十进制
		int num2 = 0b101;	//二进制
		int num3 = 0127;	//八进制
		int num4 = 0x12aF;	//十六进制

		System.out.println(num1);
		System.out.println(num2);
		System.out.println(num3);
		System.out.println(num4);

	}
}
```

### 6.2 进制的换算举例

| 十进制 | 二进制 | 八进制 | 十六进制 |
| ------ | ------ | ------ | -------- |
| 0      | 0      | 0      | 0        |
| 1      | 1      | 1      | 1        |
| 2      | 10     | 2      | 2        |
| 3      | 11     | 3      | 3        |
| 4      | 100    | 4      | 4        |
| 5      | 101    | 5      | 5        |
| 6      | 110    | 6      | 6        |
| 7      | 111    | 7      | 7        |
| 8      | 1000   | 10     | 8        |
| 9      | 1001   | 11     | 9        |
| 10     | 1010   | 12     | a或A     |
| 11     | 1011   | 13     | b或B     |
| 12     | 1100   | 14     | c或C     |
| 13     | 1101   | 15     | d或D     |
| 14     | 1110   | 16     | e或E     |
| 15     | 1111   | 17     | f或F     |
| 16     | 10000  | 20     | 10       |

### 6.3 二进制的由来

二进制，是计算技术中广泛采用的一种数制，由德国数理哲学大师`莱布尼茨`于1679年发明。

二进制数据是用0和1两个数码来表示的数。它的基数为2，进位规则是“`逢二进一`”。

二进制广泛应用于我们生活的方方面面。比如，广泛使用的摩尔斯电码（Morse Code），它由两种基本信号组成：短促的点信号“`·`”，读“`滴`”；保持一定时间的长信号“`—`”，读“`嗒`”。然后，组成了26个字母，从而拼写出相应的单词。

<img src="./../../.vuepress/public/assets/images/java/variables_and_operators.assets/image-20220520105721126.png" alt="image-20220520105721126" style="zoom:67%;" />

记忆技巧：

<img src="./../../.vuepress/public/assets/images/java/variables_and_operators.assets/morsecode.jpg" alt="morsecode" style="zoom:50%;" />

我们偶尔会看到的：SOS，即为：

![image-20220520110206899](./../../.vuepress/public/assets/images/java/variables_and_operators.assets/image-20220520110206899.png)


### 6.4 二进制转十进制

**二进制如何表示整数？**

- 计算机数据的存储使用二进制`补码`形式存储，并且`最高位是符号位`。
  - 正数：`最高位是0`
  - 负数：`最高位是1`


- 规 定
  - 正数的补码与反码、原码一样，称为`三码合一`
  - 负数的补码与反码、原码不一样：
    - 负数的`原码`：把十进制转为二进制，然后最高位设置为1
    - 负数的`反码`：在原码的基础上，最高位不变，其余位取反（0变1,1变0）
    - 负数的`补码`：反码+1

**二进制转十进制：权相加法**

针对于byte数据举例来说：

![image-20220523114701881](./../../.vuepress/public/assets/images/java/variables_and_operators.assets/image-20220523114701881.png)


- 例如：byte类型（1个字节，8位）

  25 ==> 原码  0001 1001 ==> 反码  0001 1001 -->补码  0001 1001

  -25 ==>原码  1001 1001 ==> 反码1110 0110 ==>补码 1110 0111

```java
整数：
正数：25   00000000 00000000 000000000 00011001（原码）
正数：25   00000000 00000000 000000000 00011001（反码）
正数：25   00000000 00000000 000000000 00011001（补码）

负数：-25  10000000 00000000 000000000 00011001（原码）
负数：-25  11111111 11111111 111111111 11100110（反码）
负数：-25  11111111 11111111 111111111 11100111（补码）
```

**一个字节可以存储的整数范围是多少？**

```java
//1个字节：8位

0000 0001  ~  0111 111 ==> 1~127

1000 0001 ~ 1111 1111 ==> -127 ~ -1

0000 0000 ==>0

1000 0000 ==> -128（特殊规定）=-127-1
```

### 6.5 十进制转二进制

十进制转二进制：`除2取余的逆`

<img src="./../../.vuepress/public/assets/images/java/variables_and_operators.assets/image-20220312000042595.png" alt="image-20220312000042595" style="zoom:67%;" />

### 6.6 二进制与八进制、十六进制间的转换

**二进制转八进制**

<img src="./../../.vuepress/public/assets/images/java/variables_and_operators.assets/image-20220312000233863.png" alt="image-20220312000233863" style="zoom:80%;" />

**二进制转十六进制**

<img src="./../../.vuepress/public/assets/images/java/variables_and_operators.assets/image-20220312000251113.png" alt="image-20220312000251113" style="zoom:80%;" />

**八进制、十六进制转二进制**

<img src="./../../.vuepress/public/assets/images/java/variables_and_operators.assets/image-20220312000341297.png" alt="image-20220312000341297" style="zoom: 67%;" />

### 6.7 各进制间的转换

<img src="./../../.vuepress/public/assets/images/java/variables_and_operators.assets/image-20220312000143438.png" alt="image-20220312000143438" style="zoom:80%;" />

**练习：**

```
1.将以下十进制数转换为十六进制和二进制
123  256  87  62


2.将以下十六进制数转换为十进制和二进制
0x123   0x25F  0x38  0x62
```

## 7. 运算符（Operator）（掌握）

运算符是一种特殊的符号，用以表示数据的运算、赋值和比较等。

运算符的分类：

- 按照`功能`分为：算术运算符、赋值运算符、比较(或关系)运算符、逻辑运算符、位运算符、条件运算符、Lambda运算符

|           分类            |                        运算符                        |
| :-----------------------: | :--------------------------------------------------: |
|     算术运算符（7个）     |                +、-、*、/、%、++、--                 |
|    赋值运算符（12个）     | =、+=、-=、*=、/=、%=、>>=、<<=、>>>=、&=、\|=、^=等 |
| 比较(或关系)运算符（6个） |                 >、>=、<、<=、==、!=                 |
|     逻辑运算符（6个）     |                &、\|、^、!、&&、\|\|                 |
|      位运算符（7个）      |               &、\|、^、~、<<、>>、>>>               |
|     条件运算符（1个）     |               (条件表达式)?结果1:结果2               |
|    Lambda运算符（1个）    |                  ->（第18章时讲解）                  |

* 按照`操作数个数`分为：一元运算符（单目运算符）、二元运算符（双目运算符）、三元运算符 （三目运算符）

|           分类            |                  运算符                  |
| :-----------------------: | :--------------------------------------: |
| 一元运算符（单目运算符）  |    正号（+）、负号（-）、++、--、!、~    |
| 二元运算符（双目运算符）  | 除了一元和三元运算符剩下的都是二元运算符 |
| 三元运算符 （三目运算符） |         (条件表达式)?结果1:结果2         |

### 7.1 算术运算符

#### 7.1.1 基本语法

![image-20220312000848332](./../../.vuepress/public/assets/images/java/variables_and_operators.assets/image-20220312000848332.png)

举例1：加减乘除模

```java
public class ArithmeticTest1 {
	public static void main(String[] args) {
		int a = 3;
		int b = 4;
		
		System.out.println(a + b);// 7
		System.out.println(a - b);// -1
		System.out.println(a * b);// 12
		System.out.println(a / b);// 计算机结果是0，为什么不是0.75呢？
		System.out.println(a % b);// 3
        
        //结果与被模数符号相同
        System.out.println(5%2);//1
		System.out.println(5%-2);//1
		System.out.println(-5%2);//-1
		System.out.println(-5%-2);//-1		
		//商*除数 + 余数 = 被除数
		//5%-2  ==>商是-2，余数时1    (-2)*(-2)+1 = 5
		//-5%2  ==>商是-2，余数是-1   (-2)*2+(-1) = -4-1=-5
	}
}
```

举例2：“+”号的两种用法

* 第一种：对于`+`两边都是数值的话，`+`就是加法的意思
* 第二种：对于`+`两边至少有一边是字符串的话，`+`就是拼接的意思

```java
public class ArithmeticTest2 {
	public static void main(String[] args) {
		// 字符串类型的变量基本使用
		// 数据类型 变量名称 = 数据值;
		String str1 = "Hello";
		System.out.println(str1); // Hello
		
		System.out.println("Hello" + "World"); // HelloWorld
		
		String str2 = "Java";
		// String + int --> String
		System.out.println(str2 + 520); // Java520
		// String + int + int
		// String		+ int
		// String
		System.out.println(str2 + 5 + 20); // Java520
	}
}
```

举例3：自加自减运算

理解：`++`  运算，表示`自增1`。同理，`--` 运算，表示`自减1`，用法与++ 一致。

1、单独使用

* 变量在单独运算的时候，变量`前++`和变量`后++`，是没有区别的。
* 变量`前++`   ：例如 `++a` 。
* 变量`后++`   ：例如 `a++` 。

```java
public class ArithmeticTest3 {
	public static void main(String[] args) {
		// 定义一个int类型的变量a
		int a = 3;
		//++a;
		a++;
        // 无论是变量前++还是变量后++，结果都是4
		System.out.println(a);
	}
}
```

2、复合使用

* 和`其他变量放在一起使用`或者和`输出语句放在一起使用`，`前++`和`后++`就产生了不同。

- 变量`前++` ：变量先自增1，然后再运算。
- 变量`后++` ：变量先运算，然后再自增1。

```java
public class ArithmeticTest4 {
	public static void main(String[] args) {
		// 其他变量放在一起使用
		int x = 3;
		//int y = ++x; // y的值是4，x的值是4，
		int y = x++; // y的值是3，x的值是4
		
		System.out.println(x);
		System.out.println(y);
		System.out.println("==========");
        
		// 和输出语句一起
		int z = 5;
		//System.out.println(++z);// 输出结果是6，z的值也是6
		System.out.println(z++);// 输出结果是5，z的值是6
		System.out.println(z);
        
	} 
}
```

#### 7.1.2 案例与练习

**案例1：**

```
随意给出一个整数，打印显示它的个位数，十位数，百位数的值。
格式如下：
数字xxx的情况如下：
个位数：
十位数：
百位数：

例如：
数字153的情况如下：
个位数：3
十位数：5
百位数：1

```

```java
/**
 * @author 尚硅谷-宋红康
 * @create 12:20
 */
class ArithmeticExer1 {
	public static void main(String[] args) {
		
		int num = 187;
		
		int bai = num / 100;
		int shi = num % 100 / 10;//int shi = num / 10 % 10;
		int ge = num % 10;
		
		System.out.println("百位为：" + bai);
		System.out.println("十位为：" + shi);
		System.out.println("个位为：" + ge);

	}
}
```

拓展：获取一个四位数的个位，十位，百位，千位

```java
/**
 * @author 尚硅谷-宋红康
 * @create 12:39
 */
public class ArithmeticExer01 {
    public static void main (String [] args) {
        //1.定义一个变量，赋值为一个四位数整数，例如1234
        int num = 1234;

        //2.通过运算操作求出个位，十位，百位，千位
        int ge = num % 10;
        int shi = num /10 % 10;
        int bai = num /100 % 10;
        int qian = num / 1000 % 10;

        System.out.println("个位上的数字是：" + ge);
        System.out.println("十位上的数字是：" + shi);
        System.out.println("百位上的数字是：" + bai);
        System.out.println("千位上的数字是：" + qian);
    }
}
```

**案例2：**为抵抗洪水，战士连续作战89小时，编程计算共多少天零多少小时？

```java
/**
 * @author 尚硅谷-宋红康
 * @create 17:47
 */
public class ArithmeticExer2 {
    public static void main(String[] args){
        int hours = 89;
        int day = hours / 24;
        int hour = hours % 24;
        System.out.println("为抵抗洪水，战士连续作战89小时：");
        System.out.println(hours + "是" + day + "天" + hour +"小时");
    }
}
```

练习1：算术运算符：自加、自减

```java
public class ArithmeticExer3{
    public static void main(String[] args){
        int i1 = 10;
        int i2 = 20;
        int i = i1++;
        System.out.print("i="+i); //
        System.out.println("i1="+i1);//
        i = ++i1;
        System.out.print("i="+i);//
        System.out.println("i1="+i1);//
        i = i2--;
        System.out.print("i="+i);//
        System.out.println("i2="+i2);//
        i = --i2;
        System.out.print("i="+i);//
        System.out.println("i2="+i2);//
    }
}
```

练习2：

```java
System.out.println("5+5=" + 5 + 5); //打印结果是？ 5+5=55 ?
```

练习3：

```java
byte bb1 = 127;
bb1++;
System.out.println("bb1 = " + bb1);//-128
```

练习4：

```java
int i = 1;
int j = i++ + ++i * i++;
System.out.println("j = " + j);
```

练习5：（企业真题）写出下列程序的输出结果

```java
int i = 2;
int j = i++;
System.out.println(j);

int m = 2;
m = m++; //(1)先取b的值“2”放操作数栈 (2)m再自增,m=3 (3)再把操作数栈中的"2"赋值给m,m=2
System.out.println(m);
```

### 7.2 赋值运算符

#### 7.2.1 基本语法

- 符号：= 
  - 当“=”两侧数据类型不一致时，可以使用自动类型转换或使用强制类型转换原则进行处理。
  - 支持`连续赋值`。

- 扩展赋值运算符： +=、 -=、*=、 /=、%=

  | 赋值运算符 |                           符号解释                           |
  | :--------: | :----------------------------------------------------------: |
  |    `+=`    | 将符号`左边的值`和`右边的值`进行`相加`操作，最后将结果`赋值给左边的变量` |
  |    `-=`    | 将符号`左边的值`和`右边的值`进行`相减`操作，最后将结果`赋值给左边的变量` |
  |    `*=`    | 将符号`左边的值`和`右边的值`进行`相乘`操作，最后将结果`赋值给左边的变量` |
  |    `/=`    | 将符号`左边的值`和`右边的值`进行`相除`操作，最后将结果`赋值给左边的变量` |
  |    `%=`    | 将符号`左边的值`和`右边的值`进行`取余`操作，最后将结果`赋值给左边的变量` |


```java
public class SetValueTest1 {
	public static void main(String[] args) {
		int i1 = 10;
		long l1 = i1; //自动类型转换

		byte bb1 = (byte)i1; //强制类型转换

		int i2 = i1;

		//连续赋值的测试
		//以前的写法
		int a1 = 10;
		int b1 = 10;
		
		//连续赋值的写法
		int a2,b2;
		a2 = b2 = 10;
		
		int a3 = 10,b3 = 20;

		//举例说明+=  -=  *=  /=   %=  
		int m1 = 10;
		m1 += 5; //类似于 m1 = m1 + 5的操作，但不等同于。
		System.out.println(m1);//15
		
		//练习1：开发中，如何实现一个变量+2的操作呢？
		// += 的操作不会改变变量本身的数据类型。其他拓展的运算符也如此。
		//写法1：推荐
		short s1 = 10;
		s1 += 2; //编译通过，因为在得到int类型的结果后，JVM自动完成一步强制类型转换，将int类型强转成short
		System.out.println(s1);//12
		//写法2：
		short s2 = 10;
		//s2 = s2 + 2;//编译报错，因为将int类型的结果赋值给short类型的变量s时，可能损失精度
		s2 = (short)(s2 + 2);
		System.out.println(s2);


		//练习2：开发中，如何实现一个变量+1的操作呢？
		//写法1：推荐
		int num1 = 10;
		num1++;
		System.out.println(num1);

		//写法2：
		int num2 = 10;
		num2 += 1;
		System.out.println(num2);

		//写法3：
		int num3 = 10;
		num3 = num3 + 1;
		System.out.println(num3);

	}
}
```

#### 7.2.2 练习

练习1：

```java
short s = 3; 
s = s+2;  //① 编译报错
s += 2;   //② 正常执行

//①和②有什么区别？ 

```

练习2：

```java
int i = 1;
i *= 0.1;
System.out.println(i);//0
i++;
System.out.println(i);//1

```

练习3：

```java
int m = 2;
int n = 3;
n *= m++; 	//n = n * m++;
System.out.println("m=" + m);//3
System.out.println("n=" + n);//6

```

练习4：

```java
int n = 10;
n += (n++) + (++n);  //n = n + (n++) + (++n)
System.out.println(n);//32

```

练习5：你有几种办法实现变量值减1？变量值减2呢？

```java
/**
 * @author 尚硅谷-宋红康
 * @create 16:55
 */
public class MinusTest {
    public static void main(String[] args) {
        //练习①：变量值减1
        short s = 10;
        //方式1：
        //s = (short)(s - 1);
        //方式2：推荐
        s--; //或者 --s
        //方式3：
        s -= 1;

        //练习②：变量值减2
        short s1 = 10;
        //方式1：
        //s1 = (short)(s1 - 2);
        //方式2：推荐
        s1 -= 2;
    }
}
```

### 7.3 比较(关系)运算符

![image-20220312001742263](./../../.vuepress/public/assets/images/java/variables_and_operators.assets/image-20220312001742263.png)

- 比较运算符的结果都是boolean型，也就是要么是true，要么是false。

- \>   <   >=  <= ：只适用于基本数据类型（除boolean类型之外）

  ==   != ：适用于基本数据类型和引用数据类型

- 比较运算符“`==`”不能误写成“`=`” 

举例：

```java
class CompareTest {
	public static void main(String[] args) {
		int i1 = 10;
		int i2 = 20;
		
		System.out.println(i1 == i2);//false
		System.out.println(i1 != i2);//true
		System.out.println(i1 >= i2);//false


		int m = 10;
		int n = 20;
		System.out.println(m == n);//false
		System.out.println(m = n);//20

		boolean b1 = false;
		boolean b2 = true;
		System.out.println(b1 == b2);//false
		System.out.println(b1 = b2);//true
	}
}
```

思考：

```java
boolean b1 = false;
//区分好==和=的区别。
if(b1 == true)  //if(b1 = true)
	System.out.println("结果为真");
else
	System.out.println("结果为假");

```

### 7.4 逻辑运算符

#### 7.4.1 基本语法

<img src="./../../.vuepress/public/assets/images/java/variables_and_operators.assets/image-20220312001943403.png" alt="image-20220312001943403" style="zoom: 67%;" />

- 逻辑运算符，操作的都是boolean类型的变量或常量，而且运算得结果也是boolean类型的值。

- 运算符说明：
  - & 和 &&：表示"且"关系，当符号左右两边布尔值都是true时，结果才能为true。否则，为false。
  - | 和 || ：表示"或"关系，当符号两边布尔值有一边为true时，结果为true。当两边都为false时，结果为false
  - ! ：表示"非"关系，当变量布尔值为true时，结果为false。当变量布尔值为false时，结果为true。
  - ^ ：当符号左右两边布尔值不同时，结果为true。当两边布尔值相同时，结果为false。
    - 理解：`异或，追求的是“异”！`

- 逻辑运算符用于连接布尔型表达式，在Java中不可以写成 3 < x < 6，应该写成x > 3 & x < 6 。


- **区分“&”和“&&”：**
  
  - 相同点：如果符号左边是true，则二者都执行符号右边的操作
  
  - 不同点：& ： 如果符号左边是false,则继续执行符号右边的操作
  
                       && ：如果符号左边是false,则不再继续执行符号右边的操作
  
  - 建议：开发中，推荐使用 && 
  
- **区分“|”和“||”：**


  - 相同点：如果符号左边是false，则二者都执行符号右边的操作

  - 不同点：| ： 如果符号左边是true，则继续执行符号右边的操作

                   || ：如果符号左边是true，则不再继续执行符号右边的操作

  - 建议：开发中，推荐使用 ||

 代码举例：

```java
public class LoginTest {
	public static void main(String[] args) {
		int a = 3;
		int b = 4;
		int c = 5;

		// & 与，且；有false则false
		System.out.println((a > b) & (a > c)); 
		System.out.println((a > b) & (a < c)); 
		System.out.println((a < b) & (a > c)); 
		System.out.println((a < b) & (a < c)); 
		System.out.println("===============");
		// | 或；有true则true
		System.out.println((a > b) | (a > c)); 
		System.out.println((a > b) | (a < c)); 
		System.out.println((a < b) | (a > c));
		System.out.println((a < b) | (a < c));
		System.out.println("===============");
		// ^ 异或；相同为false，不同为true
		System.out.println((a > b) ^ (a > c));
		System.out.println((a > b) ^ (a < c)); 
		System.out.println((a < b) ^ (a > c)); 
		System.out.println((a < b) ^ (a < c)); 
		System.out.println("===============");
		// ! 非；非false则true，非true则false
		System.out.println(!false);
		System.out.println(!true);
        
        //&和&&的区别
        System.out.println((a > b) & (a++ > c)); 
        System.out.println("a = " + a);
        System.out.println((a > b) && (a++ > c)); 
        System.out.println("a = " + a);
        System.out.println((a == b) && (a++ > c)); 
        System.out.println("a = " + a);
        
        //|和||的区别
        System.out.println((a > b) | (a++ > c)); 
        System.out.println("a = " + a);
        System.out.println((a > b) || (a++ > c)); 
        System.out.println("a = " + a);
        System.out.println((a == b) || (a++ > c)); 
        System.out.println("a = " + a);
	}
}
```

#### 7.4.2 案例与练习

**案例：**

```
1. 定义类 CompareLogicExer
2. 定义 main方法
3. 定义一个int类型变量a,变量b,都赋值为20
4. 定义boolean类型变量bo1 , 判断++a 是否被3整除,并且a++ 是否被7整除,将结果赋值给bo1
5. 输出a的值,bo1的值
6. 定义boolean类型变量bo2 , 判断b++ 是否被3整除,并且++b 是否被7整除,将结果赋值给bo2
7. 输出b的值,bo2的值
```

```java
/**
 * @author 尚硅谷-宋红康
 * @create 12:42
 */
public class CompareLogicExer {
    public static void main(String[] args){
        int a = 20;
        int b = 20;
        boolean bo1 = ((++a % 3) == 0) && ((a++ % 7) == 0);
        System.out.println("bo1的值：" + bo1);
        System.out.println("a的值：" + a);
        System.out.println("----------------------------");
        
        boolean bo2 = ((b++ % 3) == 0) && ((++b % 7) == 0); 
        System.out.println("bo2的值：" + bo2);
        System.out.println("b的值：" + b);
    }
}
```

**练习1：**区分 & 和 && 

```java
int x = 1;
int y = 1;

if(x++ == 2 & ++y == 2){
	x = 7;
}
System.out.println("x=" + x + ",y=" + y);

```

```java
int x = 1,y = 1;

if(x++ == 2 && ++y == 2){
	x =7;
}
System.out.println("x="+x+",y="+y);

```

**练习2：**区分 | 和 ||

```java
int x = 1,y = 1;

if(x++==1 | ++y==1){
	x =7;
}
System.out.println("x="+x+",y="+y);

```

```java
int x = 1,y = 1;

if(x++==1 || ++y==1){
	x =7;
}
System.out.println("x="+x+",y="+y);

```

**练习3：**程序输出

```java
class  Test  {
	public static void main (String []  args)  {
		boolean x = true;
        boolean y = false;
        short z = 42;
        
        if ((z++ == 42) && (y = true)) {
            z++;
        }
        if ((x = false) || (++z == 45)) {
            z++;
        }

        System.out.println("z=" + z);
	}
}
```

```java
//结果为：
//z= 46
```

### 7.5 位运算符（难点、非重点）

#### 7.5.1 基本语法

<img src="./../../.vuepress/public/assets/images/java/variables_and_operators.assets/image-20220313174721111.png" alt="image-20220313174721111" style="zoom:75%;" />

<img src="./../../.vuepress/public/assets/images/java/variables_and_operators.assets/image-20220312002506339.png" alt="image-20220312002506339" style="zoom:67%;" />

- 位运算符的运算过程都是基于二进制的补码运算

**（1）左移：<<**

运算规则：在一定范围内，数据每向左移动一位，相当于原数据*2。（正数、负数都适用）

【注意】当左移的位数n超过该数据类型的总位数时，相当于左移（n-总位数）位

```java
3<<4  类似于  3*2的4次幂 => 3*16 => 48
```

![image-20200225113651675](./../../.vuepress/public/assets/images/java/variables_and_operators.assets/image-20200225113651675.png)

```java
-3<<4  类似于  -3*2的4次幂 => -3*16 => -48
```

![image-20200225114707524](./../../.vuepress/public/assets/images/java/variables_and_operators.assets/image-20200225114707524.png)

**（2）右移：>>**

运算规则：在一定范围内，数据每向右移动一位，相当于原数据/2。（正数、负数都适用）

【注意】如果不能整除，`向下取整`。

```java
69>>4  类似于  69/2的4次 = 69/16 =4
```

![image-20200225115636844](./../../.vuepress/public/assets/images/java/variables_and_operators.assets/image-20200225115636844.png)

```
-69>>4  类似于  -69/2的4次 = -69/16 = -5
```

![image-20200225120112188](./../../.vuepress/public/assets/images/java/variables_and_operators.assets/image-20200225120112188.png)

**（3）无符号右移：>>>**

运算规则：往右移动后，左边空出来的位直接补0。（正数、负数都适用）

```
69>>>4  类似于  69/2的4次 = 69/16 =4
```

![image-20200225121104734](./../../.vuepress/public/assets/images/java/variables_and_operators.assets/image-20200225121104734.png)

```
-69>>>4   结果：268435451
```

![image-20200225121244290](./../../.vuepress/public/assets/images/java/variables_and_operators.assets/image-20200225121244290.png)

**（4）按位与：&**

运算规则：对应位都是1才为1，否则为0。

- 1 & 1 结果为1

- 1 & 0 结果为0

- 0 & 1 结果为0


- 0 & 0 结果为0


```java
9 & 7 = 1
```

![image-20200225122440953](./../../.vuepress/public/assets/images/java/variables_and_operators.assets/image-20200225122440953.png)

```java
-9 & 7 = 7
```

![image-20200225122221616](./../../.vuepress/public/assets/images/java/variables_and_operators.assets/image-20200225122221616.png)

**（5）按位或：|**

运算规则：对应位只要有1即为1，否则为0。

- 1 | 1 结果为1

- 1 | 0 结果为1

- 0 | 1 结果为1

- 0 & 0 结果为0


```java
9 | 7  //结果： 15
```

![image-20200225122758851](./../../.vuepress/public/assets/images/java/variables_and_operators.assets/image-20200225122758851.png)

```java
-9 | 7 //结果： -9
```

![image-20200225123409130](./../../.vuepress/public/assets/images/java/variables_and_operators.assets/image-20200225123409130.png)

**（6）按位异或：^**

运算规则：对应位一个为1一个为0，才为1，否则为0。

- 1 ^ 1 结果为0

- 1 ^ 0 结果为1

- 0 ^ 1 结果为1


- 0 ^ 0 结果为0


```java
9 ^ 7  //结果为14
```

![image-20200225123445305](./../../.vuepress/public/assets/images/java/variables_and_operators.assets/image-20200225123445305.png)

```java
-9 ^ 7 //结果为-16
```

![image-20200225133145727](./../../.vuepress/public/assets/images/java/variables_and_operators.assets/image-20200225133145727.png)

**（7）按位取反：~**

运算规则：对应位为1，则结果为0；对应位为0，则结果为1。

- ~0就是1  

- ~1就是0

```java
~9  //结果：-10
```

![image-20200225124112662](./../../.vuepress/public/assets/images/java/variables_and_operators.assets/image-20200225124112662.png)

```java
~-9  //结果：8
```

![image-20200225124156862](./../../.vuepress/public/assets/images/java/variables_and_operators.assets/image-20200225124156862.png)

#### 7.5.2 举例

**举例1：**

<img src="./../../.vuepress/public/assets/images/java/variables_and_operators.assets/snipaste_20220312_002549.jpg" alt="snipaste_20220312_002549" style="zoom: 67%;" />

**举例2：体会 m = k ^ n = (m ^ n) ^ n**

<img src="./../../.vuepress/public/assets/images/java/variables_and_operators.assets/image-20220312002736157.png" alt="image-20220312002736157" style="zoom:67%;" />

#### 7.5.3 案例

**案例1：**高效的方式计算2 * 8的值（经典面试题）

```
答案：2 << 3 、  8  << 1
```

**案例2：**如何交换两个int型变量的值？String呢？

```java
/**
 * @author 尚硅谷-宋红康
 * @create 16:58
 */
public class BitExer {
    public static void main(String[] args) {
        int m = 10;
		int n = 5;

		System.out.println("m = " + m + ", n = " + n);

		//（推荐）实现方式1：优点：容易理解，适用于不同数据类型    缺点：需要额外定义变量
		//int temp = m;
		//m = n;
		//n = temp;

		//实现方式2：优点：没有额外定义变量    缺点：可能超出int的范围；只能适用于数值类型
		//m = m + n; //15 = 10 + 5
		//n = m - n;//10 = 15 - 5
		//m = m - n;//5 = 15 - 10
	
		//实现方式3：优点：没有额外定义变量    缺点：不易理解；只能适用于数值类型
		m = m ^ n; 
		n = m ^ n; //(m ^ n) ^ n
		m = m ^ n;

		System.out.println("m = " + m + ", n = " + n);
    }
}
```

### 7.6 条件运算符

#### 7.6.1 基本语法

- 条件运算符格式：

```java
(条件表达式)? 表达式1:表达式2
```

- 说明：条件表达式是boolean类型的结果，根据boolean的值选择表达式1或表达式2

  <img src="./../../.vuepress/public/assets/images/java/variables_and_operators.assets/image-20220312002841945.png" alt="image-20220312002841945" style="zoom:67%;" />

- 如果运算后的结果赋给新的变量，要求表达式1和表达式2为同种或兼容的类型

```java
public static void main(String[] args) {
    int i = (1==2 ? 100 : 200);
    System.out.println(i);//200
    
    boolean marry = false;
	System.out.println(marry ? "已婚" : "未婚"  );
    
    double d1 = (m1 > m2)? 1 : 2.0;
	System.out.println(d1);
    
    int num = 12;
    System.out.println(num > 0? true : "num非正数");
}
```

#### 7.6.2 案例

**案例1：**获取两个数中的较大值

```java
/**
 * @author 尚硅谷-宋红康
 * @create 12:40
 */
public class ConditionExer1 {
    public static void main(String[] args) {
        //获取两个数的较大值
        int m1 = 10;
        int m2 = 20;

        int max1 = (m1 > m2)? m1 : m2;
        System.out.println("m1和m2中的较大值为" + max1);
    }
}
```

**案例2：**获取三个数中的最大值

```java
/**
 * @author 尚硅谷-宋红康
 * @create 12:43
 */
public class ConditionExer2 {
    public static void main(String[] args) {
        int n1 = 23;
        int n2 = 13;
        int n3 = 33;
        //写法1：
        int tempMax = (n1 > n2)? n1:n2;
        int finalMax = (tempMax > n3)? tempMax : n3;
        System.out.println("三个数中最大值为：" + finalMax);

        //写法2：不推荐，可读性差
        int finalMax1 = (((n1 > n2)? n1:n2) > n3)? ((n1 > n2)? n1:n2) : n3;
        System.out.println("三个数中最大值为：" + finalMax1);
    }
}
```

**案例3：**今天是周2，10天以后是周几？

要求：控制台输出"今天是周2，10天以后是周x"。

```java
/**
 * @author 尚硅谷-宋红康
 * @create 12:46
 */
public class ConditionExer3 {

    public static void main(String[] args) {
        int week = 2;
        week += 10;
        week %= 7;
        System.out.println("今天是周2,10天以后是周" + (week == 0 ? "日" : week));
    }

}
```

#### 7.6.3 与if-else的转换关系

- 凡是可以使用条件运算符的地方，都可以改写为if-else结构。反之，不成立。


- 开发中，如果既可以使用条件运算符，又可以使用if-else，推荐使用条件运算符。因为执行效率稍高。

```java
//if-else实现获取两个数的较大值

int i1 = 10;
int i2 = 20;

int max;//声明变量max，用于记录i1和i2的较大值

if(i1 > i2){
    max = i1;
}else{
    max = i2;
}

System.out.println(max);
```



### 7.7 运算符优先级

运算符有不同的优先级，所谓优先级就是在表达式运算中的运算符顺序。

上一行中的运算符总是优先于下一行的。

| 优先级 |    运算符说明    |             Java运算符             |
| ------ | :--------------: | :--------------------------------: |
| 1      |       括号       |          `()`、`[]`、`{}`          |
| 2      |      正负号      |              `+`、`-`              |
| 3      |    单元运算符    |       `++`、`--`、`~`、`！`        |
| 4      | 乘法、除法、求余 |           `*`、`/`、`%`            |
| 5      |    加法、减法    |              `+`、`-`              |
| 6      |    移位运算符    |         `<<`、`>>`、`>>>`          |
| 7      |    关系运算符    | `<`、`<=`、`>=`、`>`、`instanceof` |
| 8      |    等价运算符    |             `==`、`!=`             |
| 9      |      按位与      |                `&`                 |
| 10     |     按位异或     |                `^`                 |
| 11     |      按位或      |                `|`                 |
| 12     |      条件与      |                `&&`                |
| 13     |      条件或      |                `||`                |
| 14     |    三元运算符    |               `? :`                |
| 15     |    赋值运算符    | `=`、`+=`、`-=`、`*=`、`/=`、`%=`  |
| 16     |   位赋值运算符   |  `&=`、`|=`、`<<=`、`>>=`、`>>>=`  |

> 开发建议：
>
> 1. 不要过多的依赖运算的优先级来控制表达式的执行顺序，这样可读性太差，尽量`使用()来控制`表达式的执行顺序。
> 2. 不要把一个表达式写得过于复杂，如果一个表达式过于复杂，则把它`分成几步`来完成。例如：
>     (num1 + num2) * 2 > num3 && num2 > num3 ? num3 : num1 + num2;

## 8. 【拓展】关于字符集

### 8.1 字符集

- **编码与解码**

计算机中储存的信息都是用`二进制数`表示的，而我们在屏幕上看到的数字、英文、标点符号、汉字等字符是二进制数转换之后的结果。按照某种规则，将字符存储到计算机中，称为`编码` 。反之，将存储在计算机中的二进制数按照某种规则解析显示出来，称为`解码` 。

- **字符编码（Character Encoding）** : 就是一套自然语言的字符与二进制数之间的对应规则。

- **字符集**：也叫编码表。是一个系统支持的所有字符的集合，包括各国家文字、标点符号、图形符号、数字等。

### 8.2 ASCII码

- ASCII码（American Standard Code for Information Interchange，美国信息交换标准代码）：上个世纪60年代，美国制定了一套字符编码，对`英语字符`与二进制位之间的关系，做了统一规定。这被称为ASCII码。
- ASCII码用于显示现代英语，主要包括控制字符（回车键、退格、换行键等）和可显示字符（英文大小写字符、阿拉伯数字和西文符号）。
- 基本的ASCII字符集，使用7位（bits）表示一个字符（最前面的1位统一规定为0），共`128个`字符。比如：空格“SPACE”是32（二进制00100000），大写的字母A是65（二进制01000001）。
- 缺点：不能表示所有字符。

![image-20220513095907601](./../../.vuepress/public/assets/images/java/variables_and_operators.assets/image-20220513095907601.png)

### 8.3 ISO-8859-1字符集

* 拉丁码表，别名Latin-1，用于显示欧洲使用的语言，包括荷兰语、德语、意大利语、葡萄牙语等
* ISO-8859-1使用单字节编码，兼容ASCII编码。

### 8.4 GBxxx字符集

* GB就是国标的意思，是为了`显示中文`而设计的一套字符集。
* **GB2312**：简体中文码表。一个小于127的字符的意义与原来相同，即向下兼容ASCII码。但两个大于127的字符连在一起时，就表示一个汉字，这样大约可以组合了包含`7000多个简体汉字`，此外数学符号、罗马希腊的字母、日文的假名们都编进去了，这就是常说的"全角"字符，而原来在127号以下的那些符号就叫"半角"字符了。
* **GBK**：最常用的中文码表。是在GB2312标准基础上的扩展规范，使用了`双字节`编码方案，共收录了`21003个`汉字，完全兼容GB2312标准，同时支持`繁体汉字`以及日韩汉字等。
* **GB18030**：最新的中文码表。收录汉字`70244个`，采用`多字节`编码，每个字可以由1个、2个或4个字节组成。支持中国国内少数民族的文字，同时支持繁体汉字以及日韩汉字等。

### 8.5 Unicode码

- Unicode编码为表达`任意语言的任意字符`而设计，也称为统一码、标准万国码。Unicode 将世界上所有的文字用`2个字节`统一进行编码，为每个字符设定唯一的二进制编码，以满足跨语言、跨平台进行文本处理的要求。

- Unicode 的缺点：这里有三个问题：
  - 第一，英文字母只用一个字节表示就够了，如果用更多的字节存储是`极大的浪费`。
  - 第二，如何才能`区别Unicode和ASCII`？计算机怎么知道两个字节表示一个符号，而不是分别表示两个符号呢？
  - 第三，如果和GBK等双字节编码方式一样，用最高位是1或0表示两个字节和一个字节，就少了很多值无法用于表示字符，`不够表示所有字符`。
- Unicode在很长一段时间内无法推广，直到互联网的出现，为解决Unicode如何在网络上传输的问题，于是面向传输的众多 UTF（UCS Transfer Format）标准出现。具体来说，有三种编码方案，UTF-8、UTF-16和UTF-32。

### 8.6 UTF-8

* Unicode是字符集，UTF-8、UTF-16、UTF-32是三种`将数字转换到程序数据`的编码方案。顾名思义，UTF-8就是每次8个位传输数据，而UTF-16就是每次16个位。其中，UTF-8 是在互联网上`使用最广`的一种 Unicode 的实现方式。
* 互联网工程工作小组（IETF）要求所有互联网协议都必须支持UTF-8编码。所以，我们开发Web应用，也要使用UTF-8编码。UTF-8 是一种`变长的编码方式`。它可以使用 1-4 个字节表示一个符号它使用一至四个字节为每个字符编码，编码规则：
  1. 128个US-ASCII字符，只需一个字节编码。
  2. 拉丁文等字符，需要二个字节编码。 
  3. 大部分常用字（含中文），使用三个字节编码。
  4. 其他极少使用的Unicode辅助字符，使用四字节编码。


- 举例

Unicode符号范围  | UTF-8编码方式

```
(十六进制)           | （二进制）

————————————————————|—–—–—–—–—–—–—–—–—–—–—–—–—–—–

0000 0000-0000 007F | 0xxxxxxx（兼容原来的ASCII）

0000 0080-0000 07FF | 110xxxxx 10xxxxxx

0000 0800-0000 FFFF | 1110xxxx 10xxxxxx 10xxxxxx

0001 0000-0010 FFFF | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
```

![image-20220525164636164](./../../.vuepress/public/assets/images/java/variables_and_operators.assets/image-20220525164636164.png)

### 8.7 小结

![字符集](./../../.vuepress/public/assets/images/java/variables_and_operators.assets/字符集.jpg)

> 注意：在中文操作系统上，ANSI（美国国家标准学会、AMERICAN NATIONAL STANDARDS INSTITUTE: ANSI）编码即为GBK；在英文操作系统上，ANSI编码即为ISO-8859-1。



***

## 一、随堂复习

### 1.1 关键字、保留字

- 关键字：被Java赋予特殊含义的字符串。
  - 官方规范中有50个关键字
  - true、false、null虽然不是关键字，但是可以当做关键字来看待。

- 保留字：goto 、 const

### 1.2 标识符

- 标识符：凡是可以自己命名的地方，都是标识符。
  - 比如：类名、变量名、方法名、接口名、包名、常量名等
- 记住：标识符命名的规则（必须要遵守的，否则编译不通过）

```
> 由26个英文字母大小写，0-9 ，_或 $ 组成
> 数字不可以开头。
> 不可以使用关键字和保留字，但能包含关键字和保留字。
> Java中严格区分大小写，长度无限制。
> 标识符不能包含空格。
```

- 记住：标识符命名的规范（建议遵守。如果不遵守，编译和运行都能正常执行。只是容易被人鄙视）

```
> 包名：多单词组成时所有字母都小写：xxxyyyzzz。
  例如：java.lang、com.atguigu.bean
  
> 类名、接口名：多单词组成时，所有单词的首字母大写：XxxYyyZzz
  例如：HelloWorld，String，System等
  
> 变量名、方法名：多单词组成时，第一个单词首字母小写，第二个单词开始每个单词首字母大写：xxxYyyZzz
  例如：age,name,bookName,main,binarySearch,getName
  
> 常量名：所有字母都大写。多单词时每个单词用下划线连接：XXX_YYY_ZZZ
  例如：MAX_VALUE,PI,DEFAULT_CAPACITY
```

- “见名知意”

```java
class IdentifierTest{
	public static void main(String[] args){
		
		int abc = 12;
		int age = 12; //age :标识符


		char gender = '男';

		char c1 = '女';
		
		//不推荐的写法
		//int myage = 12;

		//System.out.println(myage);

		int myAge = 12;
		
	}

	public static void main1(String[] args){
		
	}
}


class _a$bc{
}

/*
class 1abc{
}
*/

class Public{
}

class publicstatic{
}

class BiaoShiFuTest{
}
```



### 1.3 变量的基本使用（重点）

1. 变量的理解：内存中的一个存储区域，该区域的数据可以在同一类型范围内不断变化
2. 变量的构成包含三个要素：数据类型、变量名、存储的值
3. Java中变量声明的格式：数据类型 变量名 = 变量值

```java
class VariableTest {
	public static void main(String[] args) {
		
		
		//定义变量的方式1：
		char gender; //过程1：变量的声明
		gender = '男'; //过程2：变量的赋值（或初始化）

		gender = '女';
		
		//定义变量的方式2：声明与初始化合并
		int age = 10;


		System.out.println(age);
		System.out.println("age = " + age);
		System.out.println("gender = " + gender);

		//在同一个作用域内，不能声明两个同名的变量
		//char gender = '女';

		gender = '男';
		
		//由于number前没有声明类型，即当前number变量没有提前定义。所以编译不通过。
		//number = 10;

		byte b1 = 127;
		//b1超出了byte的范围，编译不通过。
		//b1 = 128;

	}

	public static void main123(String[] args) {
		//System.out.println("gender = " + gender);

		char gender = '女';
		
	}
}
```

说明：

1. 定义变量时，变量名要遵循标识符命名的规则和规范。
2. 说明：
   ① 变量都有其作用域。变量只在作用域内是有效的，出了作用域就失效了。
   ② 在同一个作用域内，不能声明两个同名的变量
   ③ 定义好变量以后，就可以通过变量名的方式对变量进行调用和运算。
   ④ 变量值在赋值时，必须满足变量的数据类型，并且在数据类型有效的范围内变化。

### 1.4 基本数据类型变量的使用（重点）

1、Java中的变量按照数据类型来分类：

```

	基本数据类型（8种）:
		整型：byte \ short \ int \ long 
		浮点型：float \ double 
		字符型：char
		布尔型：boolean

	引用数据类型：
		类(class)
		数组(array)
		接口(interface)

		枚举(enum)
		注解(annotation)
		记录(record)
```

测试整型和浮点型：

```java
/*
测试整型和浮点型变量的使用


*/
class VariableTest1 {
	public static void main(String[] args) {
		
		//1.测试整型变量的使用
		// byte(1字节=8bit) \ short(2字节) \ int(4字节) \ long(8字节) 

		byte b1 = 12;
		byte b2 = 127;
		//编译不通过。因为超出了byte的存储范围
		//byte b3 = 128;

		short s1 = 1234;

		int i1 = 123234123;
		//① 声明long类型变量时，需要提供后缀。后缀为'l'或'L'
		long l1 = 123123123L;

		//② 开发中，大家定义整型变量时，没有特殊情况的话，通常都声明为int类型。

		//2.测试浮点类型变量的使用
		//float \ double
		double d1 = 12.3;
		//① 声明long类型变量时，需要提供后缀。后缀为'f'或'F'
		float f1 = 12.3f;
		System.out.println("f1 = " + f1);

		//② 开发中，大家定义浮点型变量时，没有特殊情况的话，通常都声明为double类型，因为精度更高。

		//③ float类型表数范围要大于long类型的表数范围。但是精度不高。

		//测试浮点型变量的精度
		//结论：通过测试发现浮点型变量的精度不高。如果在开发中，需要极高的精度，需要使用BigDecimal类替换浮点型变量。
		//测试1
		System.out.println(0.1 + 0.2);

		//测试2:
		float ff1 = 123123123f;
		float ff2 = ff1 + 1;
		System.out.println(ff1);
		System.out.println(ff2);
		System.out.println(ff1 == ff2);
		
	}
}
```

测试字符型和布尔型：

```java
/*
测试字符类型和布尔类型的使用


*/
class VariableTest2 {
	public static void main(String[] args) {
		
		//1.字符类型：char(2字节)

		//表示形式1：使用一对''表示，内部有且仅有一个字符
		char c1 = 'a';
		char c2 = '中';
		char c3 = '1';
		char c4 = '%';
		char c5 = 'γ';
		
		//编译不通过
		//char c6 = '';
		//char c7 = 'ab';

		//表示形式2：直接使用Unicode值来表示字符型常量。
		char c8 = '\u0036';
		System.out.println(c8);

		//表示形式3：使用转义字符
		char c9 = '\n';
		char c10 = '\t';
		System.out.println("hello" + c10 + "world");

		//表示形式4：使用具体字符对应的数值（比如ASCII码）
		char c11 = 97;
		System.out.println(c11);//a

		char c12 = '1';
		char c13 = 1;

		//2. 布尔类型：boolean
		//① 只有两个取值：true 、 false
		boolean bo1 = true;
		boolean bo2 = false;
		
		//编译不通过
		//boolean bo3 = 0;
		//② 常使用在流程控制语句中。比如：条件判断、循环结构等
		boolean isMarried = true;
		if(isMarried){
			System.out.println("很遗憾，不能参加单身派对了");
		}else{
			System.out.println("可以多谈几个女朋友或男朋友");
		}
		//③ 了解：我们不谈boolean类型占用的空间大小。但是，真正在内存中分配的话，使用的是4个字节。
	}
}

```



### 1.5 基本数据类型变量间的运算规则（重点）

#### 1.5.1 自动类型提升

```java
/*
测试基本数据类型变量间的运算规则。

1. 这里提到可以做运算的基本数据类型有7种，不包含boolean类型。
2. 运算规则包括：
		① 自动类型提升
		② 强制类型转换

3. 此VariableTest3.java用来测试自动类型提升

规则：当容量小的变量与容量大的变量做运算时，结果自动转换为容量大的数据类型。

    byte 、short 、char ---> int  --->  long  ---> float ---> double

	特别的：byte、short、char类型的变量之间做运算，结果为int类型。

说明：此时的容量小或大，并非指占用的内存空间的大小，而是指表示数据的范围的大小。
     long(8字节) 、 float(4字节)

*/
class VariableTest3 {
	public static void main(String[] args) {
		
		int i1 = 10;
		int i2 = i1;

		long l1 = i1;

		float f1 = l1;


		byte b1 = 12;
		int i3 = b1 + i1;

		//编译不通过
		//byte b2 = b1 + i1;
		
		//**********************************************
		//特殊的情况1：byte、short之间做运算
		byte b3 = 12;
		short s1 = 10;
		//编译不通过
		//short s2 = b3 + s1;
		i3 = b3 + s1;

		byte b4 = 10;
		//编译不通过
		//byte b5 = b3 + b4;

		//特殊的情况2：char
		char c1 = 'a';
		//编译不通过
		//char c2 = c1 + b3;
		int i4 = c1 + b3;


		//**********************************************
		//练习1：
		long l2 = 123L;
		long l3 = 123; //理解为：自动类型提升 （int--->long）

		//long l4 = 123123123123; //123123123123理解为int类型，因为超出了int范围，所以报错。
		long l5 = 123123123123L;//此时的123123123123L就是使用8个字节存储的long类型的值
		
		//练习2：
		float f2 = 12.3F;
		//编译不通过
		//float f3 = 12.3; //不满足自动类型提升的规则（double --> float）。所以报错

		//练习3：
		//规定1：整型常量，规定是int类型。
		byte b5 = 10;
		//byte b6 = b5 + 1;
		int ii1 = b5 + 1;
		//规定2：浮点型常量，规定是double类型。
		double dd1 = b5 + 12.3;

		//练习4：说明为什么不允许变量名是数字开头的。为了“自洽”
		/*
		int 123L = 12;
		long l6 = 123L;
		*/
	}
}
```



#### 1.5.2 强制类型转换

```java
/*
此VariableTest4.java用来测试强制类型转换

规则：
1. 如果需要将容量大的变量的类型转换为容量小的变量的类型，需要使用强制类型转换
2. 强制类型转换需要使用强转符：()。在()内指明要转换为的数据类型。
3. 强制类型转换过程中，可能导致精度损失。
*/
class VariableTest4 {
	public static void main(String[] args) {
		
		double d1 = 12;//自动类型提升
		
		//编译失败
		//int i1 = d1;

		int i2 = (int)d1;
		System.out.println(i2);


		long l1 = 123;
		//编译失败
		//short s1 = l1;
		short s2 = (short)l1;
		System.out.println(s2);


		//练习
		int i3 = 12;
		float f1 = i3;//自动类型提升
		System.out.println(f1); //12.0

		float f2 = (float)i3; //编译可以通过。只不过可以省略()而已。
		
		//精度损失的例子1：
		double d2 = 12.9;
		int i4 = (int)d2;
		System.out.println(i4);

		//精度损失的例子2：
		int i5 = 128;
		byte b1 = (byte)i5;
		System.out.println(b1); //-128


		//实际开发举例：
		byte b2 = 12;
		method(b2);

		long l2 = 12L;
		//编译不通过
		//method(l2);
		method((int)l2);
	}

	public static void method(int num){   //int num = b2;自动类型提升
		System.out.println("num = " + num);
	}
}
```



### 1.6 String类的使用、与基本数据类型变量间的运算（重点）

- String的认识：字符串。使用一对""表示，内部包含0个、1个或多个字符。
- String与8种基本数据类型变量间的运算：+。运算的结果是String类型。

```java
/*

基本数据类型与String的运算

一、关于String的理解
1. String类，属于引用数据类型，俗称字符串。
2. String类型的变量，可以使用一对""的方式进行赋值。
3. String声明的字符串内部，可以包含0个，1个或多个字符。

二、String与基本数据类型变量间的运算
1. 这里的基本数据类型包括boolean在内的8种。
2. String与基本数据类型变量间只能做连接运算，使用"+"表示。
3. 运算的结果是String类型。

*/
class StringTest {
	public static void main(String[] args) {
		String str1 = "Hello World!";
		System.out.println("str1");
		System.out.println(str1);


		String str2 = ""; 
		String str3 = "a";//char c1 = 'a';


		//测试连接运算
		int num1 = 10;
		boolean b1 = true;
		String str4 = "hello";

		System.out.println(str4 + b1);

		String str5 = str4 + b1;
		String str6 = str4 + b1 + num1;
		System.out.println(str6);//hellotrue10
		
		//思考：如下的声明编译能通过吗？不能
		//String str7 = b1 + num1 + str4;

		//如何将String类型的变量转换为基本数据类型？
		String str8 = "abc";//不能考虑转换为基本数据类型的。

		int num2 = 10;
		String str9 = num2 + ""; //"10"
		//编译不通过
		//int num3 = (int)str9;

		//如何实现呢？使用Integer类。暂时大家了解。
		int num3 = Integer.parseInt(str9);
		System.out.println(num3 + 1);
		
	}
}
```

- 练习1

```java
/*
要求填写自己的姓名、年龄、性别、体重、婚姻状况（已婚用true表示，单身用false表示）、联系方式等等。
*/
class StringExer {
	public static void main(String[] args) {
		
		String name = "李进";
		int age = 24;
		char gender = '男';
		double weight = 130.5;
		boolean isMarried = false;
		String phoneNumber = "13012341234";

		String info = "name = " + name + ",age = " + age + ",gender = " + gender + ",weight = " + 
			weight + ",isMarried = " + isMarried + ",phoneNumber = " + phoneNumber;

		System.out.println(info);
	}
}

```

- 练习2

```java
class StringExer1 {
	public static void main(String[] args) {
		
		//练习1：
		//String str1 = 4;                       //判断对错：no
		String str2 = 3.5f + "";               //判断str2对错：yes
		System.out.println(str2);              //输出：3.5
		System.out .println(3+4+"Hello!");     //输出：7Hello!
		System.out.println("Hello!"+3+4);      //输出：Hello!34
		System.out.println('a'+1+"Hello!");    //输出：98Hello!
		System.out.println("Hello"+'a'+1);     //输出：Helloa1

		//练习2：
		System.out.println("*    *");				//输出：*    *
		System.out.println("*\t*");					//输出：*	*
		System.out.println("*" + "\t" + "*");		//输出：*	*
		System.out.println('*' + "\t" + "*");		//输出：*	*
		System.out.println('*' + '\t' + "*");		//输出：51*
		System.out.println('*' + "\t" + '*');		//输出：*	*
		System.out.println("*" + '\t' + '*');		//输出：*	*
		System.out.println('*' + '\t' + '*');		//输出：93

	}
}

```



### 1.7 常识：进制的认识

- 熟悉：二进制（以0B、0b开头）、十进制、八进制（以0开头）、十六进制（以0x或0X开头）的声明方式。
- 二进制的理解
  - 正数：原码、反码、补码三码合一。
  - 负数：原码、反码、补码不相同。了解三者之间的关系。
  - 计算机的底层是以`补码`的方式存储数据的。
- 熟悉：二进制与十进制之间的转换
- 了解：二进制与八进制、十六进制间的转换

### 1.8 运算符（较常用的是重点）

#### 1.8.1 算术运算符

```java
/*
测试运算符的使用1：算术运算符的使用


1. +  -  +  -  *  /  %  (前)++  (后)++  (前)--  (后)--  +


*/
class AriTest {
	public static void main(String[] args) {
		//*******************************
		//除法： /
		int m1 = 12;
		int n1 = 5;
		int k1 = m1 / n1;
		System.out.println(k1);//2

		System.out.println(m1 / n1 * n1);//10
		
		//*******************************
		//取模（或取余）： %
		int i1 = 12;
		int j1 = 5;
		System.out.println(i1 % j1); //2

		//开发中，经常用来判断某个数num1能整除另外一个数num2。  num1 % num2 == 0
		//比如：判断num1是否是偶数： num1 % 2 == 0
		
		//结论：取模以后，结果与被模数的符号相同
		int i2 = -12;
		int j2 = 5;
		System.out.println(i2 % j2); //-2

		int i3 = 12;
		int j3 = -5;
		System.out.println(i3 % j3); //2

		int i4 = -12;
		int j4 = -5;
		System.out.println(i4 % j4); //-2
		

		//*******************************
		//(前)++ :先自增1，再运算
		//(后)++ :先运算，后自增1
		int a1 = 10;
		int b1 = ++a1;
		System.out.println("a1 = " + a1 + ",b1 = " + b1); //a1 = 11,b1 = 11

		int a2 = 10;
		int b2 = a2++;
		System.out.println("a2 = " + a2 + ",b2 = " + b2); //a2 = 11,b2 = 10

		//练习1：
		int i = 10;
		//i++;
		++i;
		System.out.println("i = " + i);//11

		//练习2：
		short s1 = 10;
		//方式1：

		//编译不通过
		//s1 = s1 + 1;

		//s1 = (short)(s1 + 1);
		//System.out.println(s1);

		//方式2：
		s1++;
		System.out.println(s1);

		//*******************************
		//(前)-- :先自减1，再运算
		//(后)-- :先运算，再自减1
		//略
		
		//结论：++ 或 -- 运算，不会改变变量的数据类型！

		//+ :连接符，只适用于String与其他类型的变量间的运算，而且运算的结果也是String类型。

	}
}

```

练习1：

```java
/*
随意给出一个三位的整数，打印显示它的个位数，十位数，百位数的值。
格式如下：
数字xxx的情况如下：
个位数：
十位数：
百位数：

例如：
数字153的情况如下：
个位数：3
十位数：5
百位数：1

*/
class AriExer {
	public static void main(String[] args) {
		
		int num = 153;
		int ge = num % 10; //个位
		int shi = num / 10 % 10; //十位.   或者 int shi = num % 100 / 10
		int bai = num / 100;

		System.out.println("个位是：" + ge);
		System.out.println("十位是：" + shi);
		System.out.println("百位是：" + bai);

	}
}

```

练习2：

```java
/*

案例2：为抵抗洪水，战士连续作战89小时，编程计算共多少天零多少小时？
*/
class AriExer1 {
	public static void main(String[] args) {

		int hours = 89;

		int day = hours / 24;
		int hour = hours % 24;

		System.out.println("共奋战了" + day + "天零" + hour + "小时");


		//额外的练习1：
		System.out.println("5+5=" + 5 + 5);
		System.out.println("5+5=" + (5 + 5));

		//额外的练习2：
		byte bb1 = 127;
		bb1++;
		System.out.println("bb1 = " + bb1);

		//额外的练习3：
		//int i = 1;
		//int j = i++ + ++i * i++;

		//System.out.println("j = " + j);//10

		//额外的练习4：
		int i = 2;
		int j = i++;
		System.out.println(j); //2


		int k = 2;
		int z = ++k;
		System.out.println(z);//3

		int m = 2;
		m = m++;
		System.out.println(m); //2

	}
}

```



#### 1.8.2 赋值运算符

```java
/*
测试运算符的使用2：赋值运算符

1. =   +=、 -=、*=、 /=、%=  

2. 说明：
① 当“=”两侧数据类型不一致时，可以使用自动类型转换或使用强制类型转换原则进行处理。
② 支持连续赋值。
③ +=、 -=、*=、 /=、%=  操作，不会改变变量本身的数据类型。
*/
class SetValueTest {
	public static void main(String[] args) {

		//***********************************
		int i = 5;

		long l = 10; //自动类型提升

		byte b = (byte)i; //强制类型转换

		
		//操作方式1：
		int a1 = 10;
		int b1 = 10;

		//操作方式2：连续赋值
		int a2;
		int b2;
		//或合并：int a2,b2;
		a2 = b2 = 10;

		System.out.println(a2 + "," + b2);

		//操作方式3：
		//int a3 = 10;
		//int b3 = 20;

		int a3 = 10,b3 = 20;
		System.out.println(a3 + "," + b3);

		//***********************************
		//说明 += 的使用
		int m1 = 10;
		m1 += 5; //类似于m1 = m1 + 5;
		System.out.println(m1);

		byte by1 = 10;
		by1 += 5; //by1 = by1 + 5操作会编译报错。应该写为： by1 = (byte)(by1 + 5);
		System.out.println(by1);


		int m2 = 1;
		m2 *= 0.1; // m2 = (int)(m2 * 0.1)
		System.out.println(m2);

		//练习1：如何实现变量的值增加2。
		//方式1：
		int n1 = 10;
		n1 = n1 + 2;
		

		//方式2：推荐
		int n2 = 10;
		n2 += 2;

		//错误的写法：
		//int n3 = 10;
		//n3++++;

		//练习2：如何实现变量的值增加1。
		//方式1：
		int i1 = 10;
		i1 = i1 + 1;
		

		//方式2：
		int i2 = 10;
		i2 += 1;

		//方式3：推荐
		int i3 = 10;
		i3++; //++i3;

	}
}

```



#### 1.8.3 比较运算符

```java
/*
测试运算符的使用3：比较运算符

1.  ==  !=  >   <   >=   <=  instanceof

2. 说明
① instanceof 在面向对象的多态性的位置讲解。
② ==  !=  >   <   >=   <= 适用于基本数据类型。(细节：>   <   >=   <=不适用于boolean类型)
  运算的结果为boolean类型。
③ 了解： ==  !=  可以适用于引用数据类型
④ 区分：== 与 = 

*/
class CompareTest {
	public static void main(String[] args) {
		int m1 = 10;
		int m2 = 20;
		boolean compare1 = m1 > m2;
		System.out.println(compare1);

		int n1 = 10;
		int n2 = 20;
		System.out.println(n1 == n2);//false
		System.out.println(n1 = n2);//20

		boolean b1 = false;
		boolean b2 = true;
		System.out.println(b1 == b2);//false
		System.out.println(b1 = b2);//true

	}
}

```



#### 1.8.4 逻辑运算符

```java
/*
测试运算符的使用4：逻辑运算符

1.  & &&  |  ||  ! ^
2. 说明：
① 逻辑运算符针对的都是boolean类型的变量进行的操作
② 逻辑运算符运算的结果也是boolean类型。
③ 逻辑运算符常使用条件判断结构、循环结构中


*/
class LogicTest {
	public static void main(String[] args) {
				
		/*
		区分：& 和 &&
		
		1、相同点：两个符号表达的都是"且"的关系。只有当符号左右两边的类型值均为true时，结果才为true。

		2、执行过程：
			1）如果符号左边是true，则& 、&& 都会执行符号右边的操作
			2）如果符号左边是false，则 & 会继续执行符号右边的操作
			                           && 不会执行符号右边的操作
		3、开发中，我们推荐使用&& 
		*/
		boolean b1 = true;
		b1 = false;

		int num1 = 10;

		if(b1 & (num1++ > 0)){
			System.out.println("床前明月光");
		}else{
			System.out.println("我叫郭德纲");
		}
		
		System.out.println("num1 = " + num1);

		//

		boolean b2 = true;
		b2 = false;

		int num2 = 10;

		if(b2 && (num2++ > 0)){
			System.out.println("床前明月光");
		}else{
			System.out.println("我叫郭德纲");
		}
		
		System.out.println("num2 = " + num2);

		//********************************************
		/*
		区分：| 和 ||
		
		1、相同点：两个符号表达的都是"或"的关系。只要符号两边存在true的情况，结果就为true.

		2、执行过程：
			1）如果符号左边是false，则| 、|| 都会执行符号右边的操作
			2）如果符号左边是true，则 | 会继续执行符号右边的操作
			                          || 不会执行符号右边的操作
		3、开发中，我们推荐使用||
		*/
		boolean b3 = false;
		b3 = true;

		int num3 = 10;

		if(b3 | (num3++ > 0)){
			System.out.println("床前明月光");
		}else{
			System.out.println("我叫郭德纲");
		}
		
		System.out.println("num3 = " + num3);

		//

		boolean b4 = false;
		b4 = true;

		int num4 = 10;

		if(b4 || (num4++ > 0)){
			System.out.println("床前明月光");
		}else{
			System.out.println("我叫郭德纲");
		}
		
		System.out.println("num4 = " + num4);
	}
}

```

练习：

```java
/*
1. 定义类 LogicExer
2. 定义 main方法
3. 定义一个int类型变量a,变量b,都赋值为20
4. 定义boolean类型变量bo1 , 判断++a 是否被3整除,并且a++ 是否被7整除,将结果赋值给bo1
5. 输出a的值,bo1的值
6. 定义boolean类型变量bo2 , 判断b++ 是否被3整除,并且++b 是否被7整除,将结果赋值给bo2
7. 输出b的值,bo2的值

*/
class LogicExer {
	public static void main(String[] args) {
		int a,b;
		a = b = 20;
		
		boolean bo1 = (++a % 3 == 0) && (a++ % 7 == 0);

		System.out.println("a = " + a + ",bo1 = " + bo1);

		
		boolean bo2 = (b++ % 3 == 0) && (++b % 7 == 0);
		
		System.out.println("b = " + b + ",bo2 = " + bo2);
		

	}
}

```



#### 1.8.5 位运算符(了解)

```java
/*
测试运算符的使用5：位运算符

1. <<   >>   >>>   &  |  ^  ~

2. 说明：

① <<   >>   >>>   &  |  ^  ~ ：针对数值类型的变量或常量进行运算，运算的结果也是数值
② 
<< : 在一定范围内，每向左移动一位，结果就在原有的基础上 * 2。（对于正数、负数都适用）
>> : 在一定范围内，每向右移动一位，结果就在原有的基础上 / 2。（对于正数、负数都适用）

3. 面试题：高效的方式计算2 * 8 ？ 

2 << 3 或 8 << 1

*/
class BitTest {
	public static void main(String[] args) {
		int num1 = 7;
		System.out.println("num1 << 1 : " + (num1 << 1));
		System.out.println("num1 << 2 : " + (num1 << 2));
		System.out.println("num1 << 3 : " + (num1 << 3));
		System.out.println("num1 << 28 : " + (num1 << 28));
		System.out.println("num1 << 29 : " + (num1 << 29));//过犹不及

		int num2 = -7;
		System.out.println("num2 << 1 : " + (num2 << 1));
		System.out.println("num2 << 2 : " + (num2 << 2));
		System.out.println("num2 << 3 : " + (num2 << 3));

		System.out.println(~9);
		System.out.println(~-10);

		
		

	}
}

```

练习：

```java
/*
案例2：如何交换两个int型变量的值？String呢？

*/
class BitExer {
	public static void main(String[] args) {
		
		int m = 10;
		int n = 20;

		System.out.println("m = " + m + ",n = " + n);

		//交换两个变量的值
		//方式1：声明一个临时变量。（推荐）
		//int temp = m;
		//m = n;
		//n = temp;

		//方式2：优点：不需要定义临时变量。  缺点：难、适用性差（不适用于非数值类型）、可能超出int的范围
		//m = m + n; //30 = 10 + 20;
		//n = m - n; //10 = 30 - 20;
		//m = m - n; //20 = 30 - 10;

		//方式3：优点：不需要定义临时变量。  缺点：真难、适用性差（不适用于非数值类型）
		m = m ^ n;
		n = m ^ n;//(m ^ n) ^ n ---> m
		m = m ^ n;


		System.out.println("m = " + m + ",n = " + n);
		

	}
}

```



#### 1.8.6 条件运算符

```java
/*
测试运算符的使用6：条件运算符

1. (条件表达式)? 表达式1 : 表达式2

2. 说明：
① 条件表达式的结果是boolean类型。
② 如果条件表达式的结果是true，则执行表达式1。否则，执行表达式2。
③ 表达式1 和 表达式2 需要是相同的类型或能兼容的类型。

④ 开发中，凡是可以使用条件运算符的位置，都可以改写为if-else。
          反之，能使用if-else结构，不一定能改写为条件运算符。
  
  建议，在二者都能使用的情况下，推荐使用条件运算符。因为执行效率稍高。

*/
class ConditionTest {
	public static void main(String[] args) {
		
		String info = (2 > 10)? "表达式1" : "表达式2";
		System.out.println(info);

		double result = (2 > 1)? 1 : 2.0;
		System.out.println(result);

		//练习1：获取两个整数的较大值
		int m = 10;
		int n = 20;

		int max = (m > n)? m : n;
		System.out.println("较大值为：" + max);

		//练习2：获取三个整数的最大值
		int i = 20;
		int j = 30;
		int k = 23;

		int tempMax = (i > j)? i : j;
		int finalMax = (tempMax > k)? tempMax : k;
		System.out.println(finalMax);

		//合并以后的写法：不推荐
		int finalMax1 = (((i > j)? i : j) > k)? ((i > j)? i : j) : k;
		System.out.println(finalMax1);
	}
}

```

#### 1.8.7 运算符的优先级

- 如果想体现优先级比较高，使用()
- 我们在编写一行执行语句时，不要出现太多的运算符。

## 二、企业真题

### 1. 高效的方式计算2 * 8的值 (文\*\*辉、轮*科技)

使用 << 

### 2. &和&&的区别？(恒\*电子、\*度)

略

### 3. Java中的基本类型有哪些？String 是最基本的数据类型吗？(恒*电子)

8种基本数据类型。（略）

String不是，属于引用数据类型。

### 4. Java中的基本数据类型包括哪些？（*米）

```
类似问题：
> Java的基础数据类型有哪些？String是吗？（贝壳）
```

略

### 5. Java开发中计算金额时使用什么数据类型？（5*到家）

不能使用float或double，因为精度不高。

使用BigDecimal类替换，可以实现任意精度的数据的运算。

### 6. char型变量中能不能存储一个中文汉字，为什么？(*通快递)

可以的。char c1 = '中';

char c2 = 'a'。

因为char使用的是unicode字符集，包含了世界范围的所有的字符。

### 7. 代码分析(君\*科技、新\*陆)

```java
short s1=1; 
s1=s1+1;  //有什么错？  =右边是int类型。需要强转
```

```java
short s1=1;
s1+=1; //有什么错?   没错
```



### 8. int i=0; i=i++执行这两句化后变量 i 的值为（*软）

0。

### 9. 如何将两个变量的值互换（北京\*彩、中外\*译咨询）

```java
String s1 = "abc";
String s2 = "123";

String temp = s1;
s1 = s2;
s2 = temp;
```



### 10. boolean 占几个字节（阿**巴）

```
编译时不谈占几个字节。

但是JVM在给boolean类型分配内存空间时，boolean类型的变量占据一个槽位(slot，等于4个字节)。
细节：true:1  false:0

>拓展：在内存中，byte\short\char\boolean\int\float : 占用1个slot
              double\long :占用2个slot
```



### 11. 为什么Java中0.1 + 0.2结果不是0.3？（字*跳动）

在代码中测试0.1 + 0.2，你会惊讶的发现，结果不是0.3，而是0.3000……4。这是为什么？

几乎所有现代的编程语言都会遇到上述问题，包括 JavaScript、Ruby、Python、Swift 和 Go 等。引发这个问题的原因是，它们都采用了`IEEE 754标准`。

> IEEE是指“电气与电子工程师协会”，其在1985年发布了一个IEEE 754计算标准，根据这个标准，小数的二进制表达能够有最大的精度上限提升。但无论如何，物理边界是突破不了的，它仍然`不能实现“每一个十进制小数，都对应一个二进制小数”`。正因如此，产生了0.1 + 0.2不等于0.3的问题。

具体的：

**整数变为二进制，能够做到“每个十进制整数都有对应的二进制数”**，比如数字3，二进制就是11；再比如，数字43就是二进制101011，这个毫无争议。

**对于小数，并不能做到“每个小数都有对应的二进制数字”**。举例来说，二进制小数0.0001表示十进制数0.0625 （至于它是如何计算的，不用深究）；二进制小数0.0010表示十进制数0.125；二进制小数0.0011表示十进制数0.1875。看，对于四位的二进制小数，二进制小数虽然是连贯的，但是十进制小数却不是连贯的。比如，你无法用四位二进制小数的形式表示0.125 ~ 0.1875之间的十进制小数。

所以在编程中，遇见小数判断相等情况，比如开发银行、交易等系统，可以采用`四舍五入`或者“`同乘同除`”等方式进行验证，避免上述问题。



