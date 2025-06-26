# STL

转载自[C++ STL总结 | 行码棋](https://wyqz.top/p/870124582.html)

## 1.vector

包含头文件：

```cpp
#include <vector>
```

### 初始化

* 一维初始化

```cpp
vector<int> a; //定义了一个名为a的一维数组,数组存储int类型数据
vector<double> b; //定义了一个名为b的一维数组，数组存储double类型数据
vector<node> c; //定义了一个名为c的一维数组，数组存储结构体类型数据，node是结构体类型
```

* 指定长度和初始值的初始化

```cpp
vector<int> v(n); // 定义一个长度为n的数组，初始值默认为0，下标范围[0, n - 1]
vector<int> v(n, 1); // v[0] 到 v[n - 1]所有的元素初始值均为1
//注意：指定数组长度之后（指定长度后的数组就相当于正常的数组了）
```

* 拷贝初始化

```cpp
vector<int> a(n + 1, 0); vector<int> b(a); // 两个数组中的类型必须相同,a和b都是长度为n+1，初始值都为0的数组 vector<int> c = a; // 也是拷贝初始化,c和a是完全一样的数组
```

* 二维初始化

定义第一维固定长度为`5`，第二维可变化的二维数组

```cpp
vector<int> v[5];//定义可变长二维数组
//注意：行不可变（只有5行）, 而列可变,可以在指定行添加元素
//第一维固定长度为5，第二维长度可以改变
```

行列均可变

```cpp
//初始化二维均可变长数组
vector<vector<int>> v;//定义一个行和列均可变的二维数组
```

行列长度均固定 `n + 1`行 `m + 1`列初始值为0

```cpp
vector<vector<int>> a(n + 1, vector<int>(m + 1, 0));
```

### 


### 函数

注：c指定为数组名称

| 代码                              | 算法复杂度   | 返回值类型 | 含义                                                         |
| :-------------------------------- | :----------- | :--------- | :----------------------------------------------------------- |
| `c.front()`                       | O(1)*O*(1)   | 引用       | 返回容器中的第一个数据                                       |
| `c.back()`                        | O(1)*O*(1)   | 引用       | 返回容器中的最后一个数据                                     |
| `c.at(idx)`                       |              | 引用       | 返回 `c[idx]` ，会进行边界检查，如果越界会报错，比直接使用 `[]` 更好一些，常在项目中使用 |
| `c.size()`                        | O(1)*O*(1)   |            | 返回实际数据个数（unsigned类型）                             |
| `c.begin()`                       | O(1)*O*(1)   | 迭代器     | 返回首元素的迭代器（通俗来说就是地址）                       |
| `c.end()`                         | O(1)*O*(1)   | 迭代器     | 返回最后一个元素后一个位置的迭代器（地址）                   |
| `c.empty()`                       | O(1)*O*(1)   | bool       | 判断是否为空，为空返回真，反之返回假                         |
| `c.reserve(sz)`                   |              |            | 为数组提前分配`sz`的内存大小，即改变了 `capacity` 的大小，主要是为了防止在 `push_back` 过程中多次的内存拷贝 |
| `c.assign(beg, end)`              |              |            | 将另外一个容器`[x.begin(), x.end())` 里的内容拷贝到`c`中     |
| `c.assign(n, val)`                |              |            | 将`n` 个`val`值拷贝到`c`数组中，这会清除掉容器中以前的内容，`c`数组的`size`将变为`n`，`capacity` 不会改变 |
| `c.pop_back()`                    | O(1)*O*(1)   |            | 删除最后一个数据                                             |
| `c.push_back(element)`            | O(1)*O*(1)   |            | 在尾部加一个数据                                             |
| `c.emplace_back(ele)`             | O(1)*O*(1)   |            | 在数组中加入一个数据，和 `push_back` 功能基本一样，在某些情况下比它效率更高，支持传入多个构造参数 |
| `c.clear()`                       | O(N)*O*(*N*) |            | 清除容器中的所有元素                                         |
| `c.resize(n, v)`                  |              |            | 改变数组大小为`n`,`n`个空间数值赋为`v`，如果没有默认赋值为`0` |
| `c.insert(pos, x)`                | O(N)*O*(*N*) |            | 向任意迭代器`pos`插入一个元素`x`                             |
| 例：`c.insert(c.begin() + 2, -1)` |              |            | 将`-1`插入`c[2]`的位置                                       |
| `c.erase(first, last)`            | O(N)*O*(*N*) |            | 删除`[first, last)`的所有元素                                |

## 2.stack

包含头文件：

```cpp
#include<stack>
```

### 初始化

```cpp
stack<int> s;
stack<string> s;
stack<node> s;//node是结构体类型
```

### 函数

| 代码          | 含义                                |
| :------------ | :---------------------------------- |
| `s.push(ele)` | 元素`ele`入栈，增加元素 O(1)*O*(1)  |
| `s.pop()`     | 移除栈顶元素 O(1)*O*(1)             |
| `s.top()`     | 取得栈顶元素（但不删除）O(1)*O*(1)  |
| `s.empty()`   | 检测栈内是否为空，空为真 O(1)*O*(1) |
| `s.size()`    | 返回栈内元素的个数 O(1)*O*(1)       |

## 3.queue

包含头文件：

```cpp
#include<queue>
```

### 初始化

```cpp
queue<int> q;
```

### 函数

| 代码              | 含义                                                    |
| :---------------- | :------------------------------------------------------ |
| `q.front()`       | 返回队首元素 O(1)*O*(1)                                 |
| `q.back()`        | 返回队尾元素 O(1)*O*(1)                                 |
| `q.push(element)` | 尾部添加一个元素`element` 进队O(1)*O*(1)                |
| `q.pop()`         | 删除第一个元素 出队 O(1)*O*(1)                          |
| `q.size()`        | 返回队列中元素个数，返回值类型`unsigned int` O(1)*O*(1) |
| `q.empty()`       | 判断是否为空，队列为空，返回`true` O(1)*O*(1)           |

## 4.deque

包含头文件：

```cpp
#include<queue>
```

### 初始化

```cpp
queue<int> q;
```

### 函数

> 注意双端队列的常数比较大。

| 代码                                  | 含义                                 |
| :------------------------------------ | :----------------------------------- |
| `push_back(x)/push_front(x)`          | 把`x`插入队尾后 / 队首 O(1)*O*(1)    |
| `back()/front()`                      | 返回队尾 / 队首元素 O(1)*O*(1)       |
| `pop_back() / pop_front()`            | 删除队尾 / 队首元素 O(1)*O*(1)       |
| `erase(iterator it)`                  | 删除双端队列中的某一个元素           |
| `erase(iterator first,iterator last)` | 删除双端队列中`[first,last)`中的元素 |
| `empty()`                             | 判断deque是否空 O(1)*O*(1)           |
| `size()`                              | 返回deque的元素数量 O(1)*O*(1)       |
| `clear()`                             | 清空deque                            |

## 5.priority_queue(大根堆)

包含头文件：

```cpp
#include<queue>
```

### 初始化

```cpp
priority_queue<int> q;
```

### 函数

| 代码                                                    | 含义                                          |
| :------------------------------------------------------ | :-------------------------------------------- |
| `q.top()`                                               | 访问队首元素 O(1)*O*(1)                       |
| `q.push()`                                              | 入队 O(logN)*O*(*l**o**g**N*)                 |
| `q.pop()`                                               | 堆顶（队首）元素出队 O(logN)*O*(*l**o**g**N*) |
| `q.size()`                                              | 队列元素个数 O(1)*O*(1)                       |
| `q.empty()`                                             | 是否为空 O(1)*O*(1)                           |
| **注意**没有`clear()`！                                 | 不提供该方法                                  |
| 优先队列只能通过`top()`访问队首元素（优先级最高的元素） |                                               |

## 6.map

包含头文件：

```cpp
#include<map> 
```

### 初始化

```cpp
//初始化定义
map<string, string> mp;
map<string, int> mp;
map<int, node> mp;//node是结构体类型
```

> map特性：map会按照键的顺序从小到大自动排序，键的类型必须可以比较大小

### 函数

| 代码                   | 含义                                                         | 复杂度                                         |
| :--------------------- | :----------------------------------------------------------- | :--------------------------------------------- |
| `mp.find(key)`         | 返回键为key的映射的迭代器 注意：用find函数来定位数据出现位置，它返回一个迭代器。当数据存在时，返回数据所在位置的迭代器，数据不存在时，返回mp.end()*m**p*.*e**n**d*() | O(logN)*O*(*l**o**g**N*)                       |
| `mp.erase(it)`         | 删除迭代器对应的键和值                                       | O(logN)*O*(*l**o**g**N*)                       |
| `mp.erase(key)`        | 根据映射的键删除键和值                                       | O(logN)*O*(*l**o**g**N*)                       |
| `mp.erase(first,last)` | 删除左闭右开区间迭代器对应的键和值                           | O(last−first)*O*(*l**a**s**t*−*f**i**r**s**t*) |
| `mp.size()`            | 返回映射的对数                                               | O(1)*O*(1)                                     |
| `mp.clear()`           | 清空map中的所有元素                                          | O(N)*O*(*N*)                                   |
| `mp.insert()`          | 插入元素，插入时要构造键值对                                 | O(N)*O*(*N*)                                   |
| `mp.empty()`           | 如果map为空，返回true，否则返回false                         | O(1)*O*(1)                                     |
| `mp.begin()`           | 返回指向map第一个元素的迭代器（地址）                        | O(1)*O*(1)                                     |
| `mp.end()`             | 返回指向map尾部的迭代器（最后一个元素的**下一个**地址）      | O(1)*O*(1)                                     |
| `mp.rbegin()`          | 返回指向map最后一个元素的迭代器（地址）                      | O(1)*O*(1)                                     |
| `mp.rend()`            | 返回指向map第一个元素前面(上一个）的逆向迭代器（地址）       | O(1)*O*(1)                                     |
| `mp.count(key)`        | 查看元素是否存在，因为map中键是唯一的，所以存在返回1，不存在返回0 | O(logN)*O*(*l**o**g**N*)                       |
| `mp.lower_bound()`     | 返回一个迭代器，指向键值>= **key**的第一个元素               |                                                |
| `mp.upper_bound()`     | 返回一个迭代器，指向键值> key的第一个元素                    |                                                |

## 7.set
set容器中的元素不会重复，当插入集合中已有的元素时，并不会插入进去，而且set容器里的元素自动从小到大排序。

即：set里面的元素 不重复且有序
包含头文件：

```cpp
#include<set>
```

### 初始化

```cpp
set<int> s;
```

### 函数

| 代码                    | 复杂度                   | 含义                                                         |
| :---------------------- | :----------------------- | :----------------------------------------------------------- |
| `s.begin()`             | O(1)*O*(1)               | 返回set容器的第一个元素的地址（迭代器）                      |
| `s.end()`               | O(1)*O*(1)               | 返回set容器的最后一个元素的下一个地址（迭代器）              |
| `s.rbegin()`            | O(1)*O*(1)               | 返回逆序迭代器，指向容器元素最后一个位置                     |
| `s.rend()`              | O(1)*O*(1)               | 返回逆序迭代器，指向容器第一个元素前面的位置                 |
| `s.clear()`             | O(N)*O*(*N*)             | 删除set容器中的所有的元素,无返回值                           |
| `s.empty()`             | O(1)*O*(1)               | 判断set容器是否为空                                          |
| `s.insert(element)`     | O(logN)*O*(*l**o**g**N*) | 插入一个元素                                                 |
| `s.size()`              | O(1)*O*(1)               | 返回当前set容器中的元素个数                                  |
| `erase(iterator)`       | O(logN)*O*(*l**o**g**N*) | 删除定位器iterator指向的值                                   |
| `erase(first, second）` |                          | 删除定位器first和second之间的值                              |
| `erase(key_value)`      | O(logN)*O*(*l**o**g**N*) | 删除键值key_value的值                                        |
| 查找                    |                          |                                                              |
| `s.find(element)`       |                          | 查找set中的某一元素，有则返回该元素对应的迭代器，无则返回结束迭代器 |
| `s.count(element)`      |                          | 查找set中的元素出现的个数，由于set中元素唯一，此函数相当于查询element是否出现 |
| `s.lower_bound(k)`      | O(logN)*O*(*l**o**g**N*) | 返回大于等于k的第一个元素的迭代器                            |
| `s.upper_bound(k)`      | O(logN)*O*(*l**o**g**N*) | 返回大于k的第一个元素的迭代器                                |

## 8.pair

pair只含有两个元素，可以看作是只有两个元素的结构体。

**应用：**

- 代替二元结构体
- 作为map键值对进行插入

包含头文件：

```cpp
#include<utility>
```

### 初始化

```cpp
//1.初始化定义 
pair<string, int> p("wangyaqi", 1);//带初始值的 
pair<string, int> p;//不带初始值的 
//2.赋值 
p = {"wang", 18}; 
p = make_pair("wang", 18); 
p = pair<string, int>("wang", 18);
```

### 访问

```cpp
//定义结构体数组
pair<int,int> p[20];
for(int i = 0; i < 20; i++) {
	//和结构体类似，first代表第一个元素，second代表第二个元素
	cout << p[i].first << " " << p[i].second;
}
```

## 9.string

包含头文件：

```cpp
#include<string>
```

### 初始化

```cpp
//1.
string str1; //生成空字符串

//2.
string str2("123456789"); //生成"1234456789"的复制品

//3.
string str3("12345", 0, 3);//结果为"123" ，从0位置开始，长度为3

//4.
string str4("123456", 5); //结果为"12345" ，长度为5
//5. 
string str5(5, '2'); //结果为"22222" ,构造5个字符'2'连接而成的字符串 

//6. 
string str6(str2, 2); //结果为"3456789"，截取第三个元素（2对应第三位）到最后
```

### 函数

- **获取字符串长度**

| 代码                     | 含义                                                       |
| :----------------------- | :--------------------------------------------------------- |
| `s.size()`和`s.length()` | 返回string对象的字符个数，他们执行效果相同。               |
| `s.max_size()`           | 返回string对象最多包含的字符数，超出会抛出length_error异常 |
| `s.capacity()`           | 重新分配内存之前，string对象能包含的最大字符数             |

- **插入**

| 代码                          | 含义                         |
| :---------------------------- | :--------------------------- |
| `s.push_back()`               | 在末尾插入                   |
| 例：`s.push_back('a')`        | 末尾插入一个字符a            |
| `s.insert(pos,element)`       | 在pos位置插入element         |
| 例：`s.insert(s.begin(),'1')` | 在第一个位置插入1字符        |
| `s.append(str)`               | 在s字符串结尾添加str字符串   |
| 例：`s.append("abc")`         | 在s字符串末尾添加字符串“abc” |

- **删除**

| 代码                                   | 含义                                           |
| :------------------------------------- | :--------------------------------------------- |
| `erase(iterator p)`                    | 删除字符串中p所指的字符                        |
| `erase(iterator first, iterator last)` | 删除字符串中迭代器区间`[first,last)`上所有字符 |
| `erase(pos, len)`                      | 删除字符串中从索引位置pos开始的len个字符       |
| `clear()`                              | 删除字符串中所有字符                           |

- **字符替换**

| 代码                     | 含义                                                        |
| :----------------------- | :---------------------------------------------------------- |
| `s.replace(pos,n,str)`   | 把当前字符串从索引pos开始的n个字符替换为str                 |
| `s.replace(pos,n,n1,c)`  | 把当前字符串从索引pos开始的n个字符替换为n1个字符c           |
| `s.replace(it1,it2,str)` | 把当前字符串`[it1,it2)`区间替换为str **it1 ,it2为迭代器哦** |

- **大小写转换**

法一：

| 代码            | 含义       |
| :-------------- | :--------- |
| `tolower(s[i])` | 转换为小写 |
| `toupper(s[i])` | 转换为大写 |

法二：

通过stl的`transform`算法配合`tolower` 和`toupper` 实现。
有4个参数，前2个指定要转换的容器的起止范围，第3个参数是结果存放容器的起始位置，第4个参数是一元运算。

```cpp
string s;
transform(s.begin(),s.end(),s.begin(),::tolower);//转换小写
transform(s.begin(),s.end(),s.begin(),::toupper);//转换大写
```

- **分割**

| 代码              | 含义                       |
| :---------------- | :------------------------- |
| `s.substr(pos,n)` | 截取从pos索引开始的n个字符 |

- **查找**

| 代码                             | 含义                                                         |
| :------------------------------- | :----------------------------------------------------------- |
| `s.find (str, pos)`              | 在当前字符串的pos索引位置（默认为0）开始，查找子串str，返回找到的位置索引，-1表示查找不到子串 |
| `s.find (c, pos)`                | 在当前字符串的pos索引位置（默认为0）开始，查找字符c，返回找到的位置索引，-1表示查找不到字符 |
| `s.rfind (str, pos)`             | 在当前字符串的pos索引位置开始，反向查找子串s，返回找到的位置索引，-1表示查找不到子串 |
| `s.rfind (c,pos)`                | 在当前字符串的pos索引位置开始，反向查找字符c，返回找到的位置索引，-1表示查找不到字符 |
| `s.find_first_of (str, pos)`     | 在当前字符串的pos索引位置（默认为0）开始，查找子串s的字符，返回找到的位置索引，-1表示查找不到字符 |
| `s.find_first_not_of (str,pos)`  | 在当前字符串的pos索引位置（默认为0）开始，查找第一个不位于子串s的字符，返回找到的位置索引，-1表示查找不到字符 |
| `s.find_last_of(str, pos)`       | 在当前字符串的pos索引位置开始，查找最后一个位于子串s的字符，返回找到的位置索引，-1表示查找不到字符 |
| `s.find_last_not_of ( str, pos)` | 在当前字符串的pos索引位置开始，查找最后一个不位于子串s的字符，返回找到的位置索引，-1表示查找不到子串 |

## 10.bitset

bitset 在 bitset 头文件中，它类似数组，并且每一个元素只能是０或１，每个元素只用１bit空间

包含头文件：

```cpp
#include<bitset>
```

### 初始化

初始化方法

| 代码                     | 含义                             |
| :----------------------- | :------------------------------- |
| `bitset<n> a`            | a有n位，每位都为0                |
| `bitset<n> a(b)`         | a是unsigned long型u的一个副本    |
| `bitset<n> a(s)`         | a是string对象s中含有的位串的副本 |
| `bitset<n> a(s, pos, n)` | a是s中从位置pos开始的n个位的副本 |

> 注意：`n`必须为常量表达式

### 函数

|      代码      |                    含义                    |
| :------------: | :----------------------------------------: |
|   `b.any()`    |  b中是否存在置为1的二进制位，有 返回true   |
|   `b.none()`   |        b中是否没有1，没有 返回true         |
|  `b.count()`   |                b中为1的个数                |
|   `b.size()`   |             b中二进制位的个数              |
| `b.test(pos)`  |     测试b在pos位置是否为1，是 返回true     |
|    `b[pos]`    |           返回b在pos处的二进制位           |
|   `b.set()`    |             把b中所有位都置为1             |
|  `b.set(pos)`  |             把b中pos位置置为1              |
|  `b.reset()`   |             把b中所有位都置为0             |
| `b.reset(pos)` |             把b中pos位置置为0              |
|   `b.flip()`   |           把b中所有二进制位取反            |
| `b.flip(pos)`  |              把b中pos位置取反              |
| `b.to_ulong()` | 用b中同样的二进制位返回一个unsigned long值 |

## 11.array

包含头文件：

```cpp
#include<array>
```

### 初始化

* **基础数据类型**

声明一个大小为100的`int`型数组，元素的值不确定

```cpp
array<int, 100> a;
```

声明一个大小为100的`int`型数组，初始值均为`0`(初始值与默认元素类型等效)

```cpp
array<int, 100> a{};
```

声明一个大小为100的`int`型数组，初始化部分值，其余全部为`0`

```cpp
array<int, 100> a{1, 2, 3};
```

或者可以用等号

```cpp
array<int, 100> a = {1, 2, 3};
```



* **高级数据类型**

不同于数组的是对元素类型不做要求，可以套结构体

```cpp
array<string, 2> s = {"ha", string("haha")};
array<node, 2> a;
```



### 函数

| 成员函数              | 功能                                                         |
| :-------------------- | :----------------------------------------------------------- |
| `begin()`             | 返回容器中第一个元素的访问迭代器（地址）                     |
| `end()`               | 返回容器最后一个元素之后一个位置的访问迭代器（地址）         |
| `rbegin()`            | 返回最后一个元素的访问迭代器（地址）                         |
| `rend()`              | 返回第一个元素之前一个位置的访问迭代器（地址）               |
| `size()`              | 返回容器中元素的数量，其值等于初始化 array 类的第二个模板参数`N` |
| `max_size()`          | 返回容器可容纳元素的最大数量，其值始终等于初始化 array 类的第二个模板参数 N |
| `empty()`             | 判断容器是否为空                                             |
| `at(n)`               | 返回容器中 n 位置处元素的引用，函数会自动检查 n 是否在有效的范围内，如果不是则抛出 out_of_range 异常 |
| `front()`             | 返回容器中第一个元素的直接引用，函数不适用于空的 array 容器  |
| `back()`              | 返回容器中最后一个元素的直接引用，函数不适用于空的 array 容器。 |
| `data()`              | 返回一个指向容器首个元素的指针。利用该指针，可实现复制容器中所有元素等类似功能 |
| `fill(x)`             | 将 `x` 这个值赋值给容器中的每个元素,相当于初始化             |
| `array1.swap(array2)` | 交换 array1 和 array2 容器中的所有元素，但前提是它们具有相同的长度和类型 |

## 12.tuple

tuple模板是pair的泛化，可以封装不同类型任意数量的对象。

可以把tuple理解为pair的扩展，tuple可以声明二元组，也可以声明三元组。

tuple可以等价为**结构体**使用

包含头文件：

```cpp
#include <tuple>
```

### 初始化

声明一个空的`tuple`三元组

```cpp
tuple<int, int, string> t1;
```

赋值

```cpp
t1 = make_tuple(1, 1, "hahaha");
```

创建的同时初始化

```cpp
tuple<int, int, int, int> t2(1, 2, 3, 4);
```

可以使用pair对象构造tuple对象，但tuple对象必须是两个元素

```cpp
auto p = make_pair("wang", 1);
tuple<string, int> t3 {p}; //将pair对象赋给tuple对象
```

### 函数

- 获取元素个数

```cpp
tuple<int, int, int> t(1, 2, 3);
cout << tuple_size<decltype(t)>::value << "\n"; // 3
```

- 获取对应元素的值

通过`get<n>(obj)`方法获取,`n`必须为数字不能是变量

```cpp
tuple<int, int, int> t(1, 2, 3);
cout << get<0>(t) << '\n'; // 1
cout << get<1>(t) << '\n'; // 2
cout << get<2>(t) << '\n'; // 3
```

- 通过`tie`解包 获取元素值

`tie`可以让tuple变量中的三个值依次赋到tie中的三个变量中

```cpp
int one, three;
string two; 
tuple<int, string, int> t(1, "hahaha", 3);
tie(one, two, three) = t;
cout << one << two << three << "\n"; // 1hahaha3
```

## STL函数

### accumulate

```cpp
accumulate(beg, end, init)
//accumulate(起始迭代器, 结束迭代器, 初始值, 自定义操作函数)
```

**复杂度：** O(N)*O*(*N*)

> 作用：对一个序列的元素求和

例：
```cpp
 vector<int> h;
 int ans = accumulate(h.begin(),h.end(),0);
```

### atoi

```cpp
atoi(const char *)
```

> 将字符串转换为`int`类型

### fill

```cpp
fill(beg, end, num)
```

**复杂度：** O(N)*O*(*N*)

> 对一个序列进行初始化赋值

### is_sorted

```cpp
is_sorted(beg, end)
```

**复杂度：** O(N)*O*(*N*)

> 判断序列是否有序（升序），返回`bool`值

### iota

```cpp
iota(beg, end, start)
```

> 让序列递增赋值

### lower_bound +upper_bound

**复杂度：** O(logN)*O*(*l**o**g**N*)

> 作用：二分查找

```cpp
//在a数组中查找第一个大于等于x的元素，返回该元素的地址
lower_bound(a, a + n, x);
//在a数组中查找第一个大于x的元素，返回该元素的地址
upper_bound(a, a + n, x);

//如果未找到，返回尾地址的下一个位置的地址
```

### max_element+min_element

**复杂度：** O(N)*O*(*N*)

> 找最大最小值

```cpp
//函数都是返回地址，需要加*取值
int mx = *max_element(a, a + n);
int mn = *min_element(a, a + n);
```

例：
```cpp
vector<int> h;
auto max_it = max_element(h.begin(),h.end());
//auto自动推导变量类型
max_it = *max_element(h.begin(),h.end());
```

### max+min

**复杂度：** O(1)*O*(1)

> 找多个元素的最大值和最小值

```cpp
//找a，b的最大值和最小值
mx = max(a, b);
mn = min(a, b);
```

```cpp
//找到a,b,c,d的最大值和最小值
mx = max({a, b, c, d});
mn = min({a, b, c, d});
```

### minmax

```cpp
minmax(a, b)
```

**复杂度：** O(1)*O*(1)

> 返回一个`pair`类型，第一个元素是`min(a, b)`， 第二个元素是`max(a, b)`

```cpp
pair<int, int> t = minmax(4, 2);
// t.first = 2, t.second = 4
```

### minmax_element

```cpp
minmax_element(beg, end)
```

**复杂度：** O(N)*O*(*N*)

> 返回序列中的最小和最大值组成pair的对应的地址，返回类型为`pair<vector<int>::iterator, vector<int>::iterator>`

### nth_element

```cpp
nth_element(beg, nth, end)
```

**复杂度：** 平均O(N)*O*(*N*)

> 寻找第序列第n小的值

### next_permutation

```cpp
next_permutation(beg, end)
```

**复杂度：** O(N)*O*(*N*)

> 求序列的下一个排列，下一个排列是字典序大一号的排列

### partial_sort

```cpp
partial_sort(beg, mid, end)
```

**复杂度：** 大概O(NlogM)*O*(*N**l**o**g**M*) `M`为距离

> 部分排序,排序mid-beg个元素，mid为要排序区间元素的尾后的一个位置
>
> 从beg到mid**前**的元素都排好序

### random_shuffle

**复杂度：** O(N)*O*(*N*)

> 1. 随机打乱序列的顺序
> 2. `random_shuffle` 在 `C++14` 中被弃用，在 `C++17` 中被废除，C++11之后应尽量使用`shuffle`来代替。

### reverse

```cpp
reverse(beg,end)
```

**复杂度：** O(N)*O*(*N*)

> 对序列进行翻转

### set_union,set_intersection,set_difference

复杂度： O(N+M)*O*(*N*+*M*)

> 求两个集合的并集，交集，差集。手动实现双指针就可以搞定，嫌麻烦可以使用该函数。

### sort

**复杂度：** O(NlogN)*O*(*N**l**o**g**N*)

> 作用：对一个序列进行排序

```cpp
//原型：
sort(beg, end);
sort(beg, end, cmp);
```
例：
```cpp
vector<int> a[n];
sort(a,a+n);
```

### stable_sort

**复杂度：** O(NlogN)*O*(*N**l**o**g**N*)

> 功能和 `sort()` 基本一样
>
> 区别在于`stable_sort()`能够保证相等元素的相对位置，排序时不会改变相等元素的相对位置

使用用法和`sort()`一样，见上

### stoi

```cpp
stoi(const string*)
```

> 将对应string类型字符串转换为数字（`int` 型），记忆：`s -> t 分别对应两个数据类型的某个字母`

注意参数为`string`字符串类型。

如果要转换为其他类型的数字可使用 `stoll(转换为long long)` ， `stoull(转换为unsigned long long)` 等函数。

### transform

**复杂度：** O(N)*O*(*N*)

> 作用：使用给定操作，将结果写到dest中

### to_string

> 将数字转化为字符串，支持小数（double）

### unique

```cpp
unique(beg, end)
```

**复杂度：** O(N)*O*(*N*)

> 消除重复元素，返回消除完重复元素的下一个位置的地址
>
> 如：`a[] = {1, 3, 2, 3, 6}`;
>
> `unique` 之后 `a` 数组为`{1, 2, 3, 6, 3}`前面为无重复元素的数组，后面则是重复元素移到后面，返回`a[4]`位置的地址（不重复元素的尾后地址）

### __gcd

```cpp
__gcd(a, b)
```

> 求a和b的最大公约数

### __lg

```cpp
__lg(a)
```

> 1. 求一个数二进制下最高位位于第几位（从**第0位**开始）（或二进制数下有几位）
> 2. `__lg(x)`相当于返回⌊log2x⌋⌊*l**o**g*2*x*⌋
> 3. 复杂度O(1)*O*(1)

###  `__builtin_` 内置位运算函数

> 需要注意：内置函数有相应的`unsigned lnt`和`unsigned long long`版本，`unsigned long long`只需要在函数名后面加上`ll`就可以了，比如`__builtin_clzll(x)` ，默认是32位`unsigned int`
>
> 很多题目和 `long long` 数据类型有关，如有需要注意添加 `ll`

- `__builtin_ffs`

```cpp
__builtin_ffs(x)
```

> 二进制中对应最后一位`1`的位数，比如`4`会返回`3`（100）

- `__builtin_popcount`

```cpp
__builtin_popcount(x)
```

> `x`中`1`的个数

- `__builtin_ctz`

```cpp
__builtin_ctz(x)
```

> `x`末尾`0`的个数（`count tail zero`）

- `__builtin_clz`

```cpp
__builtin_clz(x)
```

> `x`前导`0`的个数（`count leading zero`）

```cpp
cout << __builtin_clz(32); // 26
//因为共有6位,默认数据范围为32位，32 - 6 = 26
```

- `__builtin_parity`

```cpp
__builtin_parity(x)
```

> ```
> x`中1的个数的奇偶性， 奇数输出`1`，偶数输出`0
> ```

