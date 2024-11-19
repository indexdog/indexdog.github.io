## 0.

```cpp
#include<bits/stdc++.h>
 using namespace std;
 
 int main() {

     return 0;
 }
"D:\\10648\\Documents\\mingw64\\bin\\g++.exe",
```

```cpp
//类
class 类名
{
    public:
    //公共的行为或属性
 
    private:
    //公共的行为或属性
}; //结束要有分号
```

```cpp
// 头文件

#include<algorithm>
```



## 类的实现

```cpp
返回类型 类名::成员函数名(参数列表)
{
     //函数体
}
 
 
 
#include <iostream>
 
using namespace std;
 
class Point
 
{
 
    public:
 
    void setPoint(int x, int y); //在类内对成员函数进行声明
 
    void printPoint();
 
 
    private:
 
    int xPos;
 
    int yPos;
 
};
 
void Point::setPoint(int x, int y) //通过作用域操作符 '::' 实现setPoint函数
 
{
 
    xPos = x;
 
    yPos = y;
 
}
 
void Point::printPoint() //实现printPoint函数
 
{
 
    cout<< "x = " << xPos << endl;
 
    cout<< "y = " << yPos << endl;
 
}
 
int main()
 
{
 
    Point M; //用定义好的类创建一个对象 点M
 
    M.setPoint(10, 20); //设置 M点 的x,y值
 
    M.printPoint(); //输出 M点 的信息
 
 
    return 0;
 
}
```



## 数学函数

```cpp
#include <math.h>

//平方 pow()
int a = pow(4,2);// 4的平方=16
//开方
int b = pow(4,0.5);// 4的平方根=2
int c = sqrt(4);// 4的平方根=2
//整数绝对值
int c = abs(b-c);
//浮点数绝对值
double d = fabs(b-c);
```



## 遍历字符串

```c++
 //1,下标,可以遍历也可以该
 
for (size_t i = 0; i < s2.size(); i++)
{
	cout << s2[i] << " ";
}
cout << endl;
```

```cpp
//2,迭代器
string::iterator it = s2.begin();
 
while (it != s2.end())
{
	cout << *it++ << " ";
	//it++;
}
cout << endl;
```

```cpp
//3,范围for
for (auto e : s2)
{
	cout << e << " ";
}
cout << endl;
```

## 保留小数

```c++
	#include <iomanip> //不要忘了头文件
	//第一种写法
	cout<<setiosflags(ios::fixed)<<setprecision(2);
	//第二种写法
	cout.setf(ios::fixed);
	cout<<setprecision(2);
	//第三种写法
	cout<<fixed<<setprecision(2);
//例:
int avg;
cout << fixed << setprecision(2) << avg <<endl;
```

## C++中vector＜int＞& nums和vector＜int＞ nums的区别

先看一段代码：

```cpp
vector<vector<int>> allrot(const vector<int>& a)
{  
   vector<vector<int>> result;
   for (int i = 0; i < a.size(); i ++ ){
      rotate(a.begin(), a.begin() + 1, a.end());
      result.push_back(a);
   }
   return result;
}

```

当vector当作形参输入到函数时，有两种方法：

```cpp
vector<int>& a;
vector<int> a;
```

**传入函数的是vector的引用（即物理位置），函数内部对vector改动，vector就会改变；
不带&表示传入的是vector的复制品（开辟了另一块位置），函数内部对其改动，不会影响原本的vector；**

原英文解释如下：

When you pass vector<int> then function gets a copy of that vector. You can do anything you want with it in the function and your original data would not change.
When you pass vector<int>& then function gets the reference which means that any changes in the function would modify the original data.
————————————————

原文链接：https://blog.csdn.net/leviopku/article/details/121026264



## hashmap和unordered_map和map函数

```cpp
#include<iostream>
#include<unordered_map>
#include<map>
#include<string>
using namespace std;

int main()
{
    // 注意：c++11才开始支持括号初始化
    unordered_map<int, string> myMap = {
        {5, "zhangsan"},
        {6, "lisi"},
    };  // 使用{}赋值
    
    myMap[2] = "wanger";  // 使用[ ] 进行当个插入，若已存在键值2，则赋值修改，若无则插之。
    
    myMap.insert(pair<int, string>(3, "mazi"));  // 使用insert和pair插入。

    // 遍历输出+迭代器的使用。
    auto iter = myMap.begin();  // auto自动识别为迭代器类型unordered_map<int, string>::iterator
    while(iter != myMap.end())
    {
        cout << iter->first << "," << iter->second << endl;
        ++iter;
    }

    // 查找元素并输出 + 迭代器的使用
    auto iterator = myMap.find(6);  // find()返回一个指向2的迭代器。
    if(iterator != myMap.end())
        cout << endl << iterator->first << "," << iterator->second << endl;
    system("pause");
    return 0;
}

```

此时用**unordered_map** 的输出结果如下所示：

![CSDN图标](https://img-blog.csdnimg.cn/20200822095629967.png#pic_center)

用**map** 的输出结果如下所示：

![CSDN图标](https://img-blog.csdnimg.cn/20200822095846846.png#pic_center)

### c++ unordered_map容器的成员方法

下表列出了 **unordered_map** 类模板提供的所有常用的成员方法、各自的功能和常规的用法。

[c++中unordered_map的用法的详述（包含unordered_map和map的区别）_unorder map-CSDN博客](https://blog.csdn.net/jpc20144055069/article/details/108170073#前言)

## 字符串相关函数 ##

* ### string类型的长度

  ```cpp
  string s = "Hello, world!"
  int len = s.size();
  int len = s.length();   //这两种方式是等价的
  ```

* ### 字符串末尾添加字符

  可以用+号和append()函数在函数的末尾添加字符。

  ```cpp
  string s;
  s += 'a';
  s.append('a');
  ```

* ### 查找字符串的子字符串

  ```cpp
  string s = abcdefg, subs = "efg";
  int pos = s.find(subs); // 如果找到子字符串则返回首次匹配的位置，否则返回-1
  ```

* ### empty(), clear()

  empty()可以用来检查字符串是否为空，clear()用来清空字符串。

  ```cpp
  string s1 = "012345";
  if(!s1.empty()){
      cout << s1.length << endl;
      s1.clear();
  }
  ```

* ### insert()在指定index处插入字符或字符串

  ```cpp
  // insert原型函数，在index插入count个字符ch。
  // insert(size_type index, size_type count, char ch)
  
  string s1 = "abc";
  s1.insert(1, 2, 'D')    // "aDDbc"
  ```

* ### erase()删除字符

  erase()函数有三个原型:

  ```cpp
  string& erase(size_t pos = 0, size_t n = npos);
  iterator erase(iterator position);
  iterator erase(iterator first, iterator last);
  ```

  因此erase()总共有三种用法:

  ```cpp
  erase(pos, n);      //删除从pos开始的n个字符,比如erase(0, 1)就是删除第一个字符
  erase(position);    //删除从position处的一个字符(position是个string类型的迭代器)
  erase(first, last); //删除从first到last之间的字符(first和last都是迭代器)
  ```

  应用实例：

  ```cpp
  string str ("This is an example phrase.");
  string::iterator it;
  
  // 第(1)种用法
  str.erase (10,8);
  cout << str << endl;        // "This is an phrase."
  
  // 第(2)种用法
  it=str.begin()+9;
  str.erase (it);
  cout << str << endl;        // "This is a phrase."
  
  // 第(3)种用法
  str.erase (str.begin()+5, str.end()-7);
  cout << str << endl;        // "This phrase."
  ```

* ### 获取子字符串substr()

  - 函数原型: `string substr(size_t pos = 0, size_t len = npos) const;`
  - 功能: 从子字符串中获取想要的子字符串
  - 参数：
    - pos: 想要获取的子字符串的第一个字符的位置，如果pos等于字符串长度，则该函数返回一个空字符串，如果等于字符串长度，则该函数返回一个空的字符串，如果该长度大于字符串长度，则抛出一个out_of_range。 注：第一个字符的下标从0开始。
    - len： 子字符串中要包含的字符数, string::npos的值表示知道字符串末尾的所有字符。
  - 
  - 返回值：带有对象子字符串的字符串对象。

  应用实例:

  ```cpp
  string s1 = "Hello World"
  string s2 = s1.substr(3, 5);
  string s3 = s1.substr(3, str::npos); //截取从下标3到结束的子字符串
  ```

* ### sting类型变量的访问

  string字符串变量访问可以采用at, operator[]来访问指定index对应的字符。其中at有越界检查,如果index越界，无论Debug还是在Release编译的环境下，程序异常跳出执行；operator[]无越界检查，如果index越界，则会取得不可预知的字符。

  ```cpp
  string s("abcd");
  cout << s[0] << s.at(2) << endl;
  ```

* ### string类型的读入

  ```cpp
  string s;
  cin >> s;   //不能读入空格，以空格，制表符，回车符作为结束标志
  getline(cin, s); //可以读入空格和制表符，以回车符作为结束的标志
  ```

  

`str[i]`：取字符数组第i位的元素

`strcmp(str1,str2)`：比价两个字符串大小，为0表示两个字符串相等

`strcpy,strcat,strstr`……：复制、连接、查找……

`string类`：是字符数组的封装，提供了更强大的功能，操作字符串更方便，但是效率低于直接操作字符数组

输入：``string str; cin >> str;``

整行输入：``getline(cin,str);``

在字符串中查找指定子字符串,并返回其第一次出现的位置: `` size_t pos = str.find("World"); // 在str中查找子字符串"World"的位置``

```cpp
//输入字符串（四种）
string str;
getline(cin,str);//可以读入一行字符串，可以包含空格，遇到回车结束

char str[100];//输入字符数组
cin.getline(str,sizeof(str));//需要提前固定好输入的字符串的长度，避免输入的字符超出界限

string str;
cin>>str;//可以读入一连串的字符，遇到空格或换行（回车）结束

string str;
scanf("%s",&str);//遇到空格结束（C++中不推荐使用）

```

## C++ string 成员函数 length() size() 和 C strlen() 的区别

（1）当 string 中含有空字符’\0’，使用 strlen() 获取 string 的长度时会被截断，使用成员函数 length() 和 size() 可以返回 string 的真实长度。
（2）cout 对 string 输出时，会过滤掉空字符，输出不会被截断。
（3）在构造或者拼接 string 时，建议同时指定 string 的长度，比如：

```cpp
// 构造时使用
string strTest(buf, 6);
// 而非，因为会被截断
string strTest(buf);

// 拼接时使用
strTest.append(buf, 6);
// 而非，因为会被截断
strTest += buf;

```



## STL的应用 | 堆 ##

```#include <algorithm>				//头文件```

（1）make_heap()构造堆

void make_heap(first_pointer,end_pointer,compare_function);

默认比较函数是(<)，即最大堆。

函数的作用是将[begin,end)内的元素处理成堆的结构

（2）push_heap()添加元素到堆void pus

h_heap(first_pointer,end_pointer,compare_function);

新添加一个元素在末尾，然后重新调整堆序。该算法必须是在一个已经满足堆序的条件下。

先在vector的末尾添加元素，再调用push_heap

3）pop_heap()从堆中移出元素

void pop_heap(first_pointer,end_pointer,compare_function);

把堆顶元素取出来，放到了数组或者是vector的末尾。

要取走，则可以使用底部容器（vector）提供的pop_back()函数。

先调用pop_heap再从vector中pop_back元素

## 栈的表示和实现 ##

![image-20240520203713878](C:\Users\10648\AppData\Roaming\Typora\typora-user-images\image-20240520203713878.png)

![image-20240520203736403](C:\Users\10648\AppData\Roaming\Typora\typora-user-images\image-20240520203736403.png)



![image-20240520203756828](C:\Users\10648\AppData\Roaming\Typora\typora-user-images\image-20240520203756828.png)

![image-20240520203814127](C:\Users\10648\AppData\Roaming\Typora\typora-user-images\image-20240520203814127.png)

## STL的应用 | 栈

![image-20240520204212916](C:\Users\10648\AppData\Roaming\Typora\typora-user-images\image-20240520204212916.png)

## 树和堆 | 二叉树的遍历

V:当前访问到的结点

L:当前结点的左子树

R:当前结点的右子树

前序遍历(VLR次序):访问当前结点，前序遍历左子树，前序遍历右子树。

中序遍历(LVR次序)中序遍历左子树，访问当前结点，中序遍历右子树。

后续遍历(LRV次序)后序遍历左子树，后序遍历右子树，访问当前结点。

![image-20240520204935911](C:\Users\10648\AppData\Roaming\Typora\typora-user-images\image-20240520204935911.png)

![image-20240520204947775](C:\Users\10648\AppData\Roaming\Typora\typora-user-images\image-20240520204947775.png)

![image-20240520205000549](C:\Users\10648\AppData\Roaming\Typora\typora-user-images\image-20240520205000549.png)

##  队列 | 循环队列

队头、队尾指针加1，可用取模(余数)运算实现。

队头指针进1:  front = (front+1) %maxsize;

队尾指针进1:  rear = (rear+1) % maxsize;

队列初始化：front = rear = 0;

队空条件：front == rear;

队满条件：(rear+1) % maxsize == front;

![image-20240520205245015](C:\Users\10648\AppData\Roaming\Typora\typora-user-images\image-20240520205245015.png)

![image-20240520205258229](C:\Users\10648\AppData\Roaming\Typora\typora-user-images\image-20240520205258229.png)

![image-20240520205315687](C:\Users\10648\AppData\Roaming\Typora\typora-user-images\image-20240520205315687.png)

## STL的应用 | 队列

```cpp
 #include <queue>				//头文件

std::queue<int> myqueue;		//定义

myqueue.empty();				//判断队列是否为空

myqueue.size();				//队列大小

myqueue.push(10);			//元素进队

myqueue.front();				//获得队首元素

myqueue.back();				//获得队尾元素

myqueue.pop();				//队首出队 
```

## 辗转相除

辗转相除法是求最大公约数的一种方法。它的具体做法是：用较小数除较大数，再用出现的余数（第一余数）去除除数，再用出现的余数（第二余数）去除第一余数，如此反复，直到最后余数是0为止。如果是求两个数的最大公约数，那么最后的除数就是这两个数的最大公约数。

同理计算最小公倍数：只要用这两个数的乘积除以最大公因数即可

```cpp
#include<iostream>
#include<cstdio>
#include<iomanip>
#include<cstring>
using namespace std;

int main(){
    //辗转相除法
    /*
    用较大的数除以较小的数，再用出现的余数除以除数(变成被除数)，
    再用余数（第二余数）除以第一余数，如此反复，知道最后余数是0
    为止。如果是求两个数的最大公约数，那么最后的除数就是这两个数
    的最大公约数 
    */ 
    int m,n;
    cin>>m>>n;
    int r=m;
    while(r!=0){
        r=m%n;
        m=n;
        n=r;
    }
    cout<<m;
    return 0;
}
```

## new的用法

1. new( ) 分配这种类型的一个大小的内存空间,并以括号中的值来初始化这个变量;
2. new[ ] 分配这种类型的n个大小的内存空间,并用默认构造函数来初始化这些变量;  
3. char* p=new char[6];     strcpy (p,"Hello");  
4. 当使用new运算符定义一个多维数组变量或数组对象时，它产生一个指向数组第一个元素的指针，返回的类型保持了除最左边维数外的所有维数。例如：  
5. int *p1 = new int[10];   
6. *返回的是一个指向int的指针int*  
7. int (*p2)[10] = new int[2][10]; 
   new了一个二维数组, 去掉最左边那一维[2], 剩下int[10], 所以返回的是一个指向int[10]这种一维数组的指针int (*)[10].  
8. int (*p3)[2][10] = new int[5][2][10];  new了一个三维数组, 去掉最左边那一维[5], 还有int[2][10], 所以返回的是一个指向二维数组int[2][10]这种类型的指针int (*)[2][10].
9. C++中用new动态创建二维数组的格式一般是这样： TYPE (*p)[N] = new TYPE [][N]; 其中，TYPE是某种类型，N是二维数组的列数。采用这种格式，列数必须指出，而行数无需指定。在这里，p的类型是TYPE*[N]，即是指向一个有N列元素数组的指针。
   还有一种方法，可以不指定数组的列数：
   int **p; p = new int*[10];    //注意，int*[10]表示一个有10个元素的指针数组
   for (int i = 0; i != 10; ++i) 
    { p[i] = new int[5]; }

new和delete都是运算符，不是库函数，不需要单独添加头文件
格式：
new
1、类型指针 指针变量名 = new 类型
2、类型指针 指针变量名 = new 类型(初始值)
3、类型指针 指针变量名 = new 类型[元素个数]
delete
1、delete 指针变量名
2、delete[] 指针变量名

```cpp
	//申请空间
	int* ptr = new int;
	//申请空间并初始化
	int* ptr2 = new int(1);
	//申请连续的空间，空间大小为4*10=40
	int* arr = new int[10];//c++98不允许连续空间初始化

	//释放单个空间
	delete ptr;
	delete ptr2;

	//释放连续的多个空间
	delete[] arr;

```

```cpp
int *p1=new int[10];   //10个未初始化的int
int *p2=new int[10](); //10个初始化为0的int
string *p3=new string[10];  //10个空的string
string *p4=new string[10]();//10个空的string
```

```cpp
/*
使用delete释放，并且在数组名前需要加上“[]”
释放的顺序：数组中的元素按照逆序销毁，即最后一个元素首先被销毁，然后倒数第二个....以此类推
typedef int arrT[10];
*/
typedef int arrT[10];
 
int *p=new arrT;
delete []p 
```



## malloc()的使用

头文件 #include <malloc.h> 或 #include <alloc.h> 

### malloc 与 new 的区别：

new 返回的是指定类型的指针，new的参数也是要新建多少个指定类型的数据对应的空间

malloc返回的是一个void类型的指针，malloc的参数是字节个数

```cpp
#include <iostream>
#include <math.h>
#include <malloc.h>
 
 
int main()
{
    int *p;
    p = (int*)malloc(sizeof(int)*10);
    for(int i=0;i<10;i++)
    {
        p[i]=i*10;
    }
 
    for(int i=0;i<10;i++)
    {
        std::cout<< p[i] << std::endl;
    }
 
    free(p);    //记得free()
 
    return 0;
}
```

## getchar解析

getchar——读取字符的函数

```int getchar(void)```

返回类型为int,参数为void.(键盘输入)
1、getchar其实返回的是字符的ASCII码值（整数）。

2、getchar在读取结束或者失败的时候，会返回EOF。

```EOF意思是end of file,本质上是-1.```

当getchar读取空格时，可以使用rewind()函数来清理输入缓冲区中的数据。该函数的格式为

```cpp
void rewind( FILE* stream );
```

```cpp
char test1 = getchar();
 
rewind(stdin);//rewind（stdin）就是将stdin（标准输入流）的指针指向该流文件的开头。
 
char test2 = getchar();
 
rewind(stdin);
```

## STL的应用 | vector

```cpp
#include <vector> //头文件

//创建vector
vector<int> arr1;								//一个空数组
vector<int> arr2 {1, 2, 3, 4, 5};				//包含1、2、3、4、5五个变量
vector<int> arr3(4);							//开辟4个空间，值默认为0
vector<int> arr4(5, 3);							//5个值为3的数组
vector<int> arr5(arr4);							//将arr4的所有值复制进去，和arr4一样
vector<int> arr6(arr4.begin(), arr4.end());		//将arr4的值从头开始到尾复制
vector<int> arr7(arr4.rbegin(), arr4.rend());	//将arr4的值从尾到头复制

```

* vector 常用算法

1. push_back、pop_back 和 emplace_back

```cpp
vector<int> arr;
for (int i = 0; i < 5; i++)
{
    arr.push_back(i);
}
for (int i = 0; i < 5; i++)
{
    arr.pop_back();
}

//emplace_back的效果和push_back一样，都是尾部插入元素
arr.emplace(10);
```

两者的差别在于**底层实现的机制不同**：`push_back`将这个元素**拷贝或者移动**到容器中（如果是拷贝的话，事后会自行销毁先前创建的这个元素）；而 `emplace_back` 在实现时，则是直接在容器尾部**创建**这个元素，省去了拷贝或移动元素的过程。所以emplace_back的速度更快。

2.insert和 emplace

insert有三种用法：

在指定位置插入值为val的元素。

```cpp
//在arr的头部插入值为10的元素
vector<int> arr;
arr.insert(arr.begin(), 10);
```

在指定位置插入n个值为val的元素

``` cpp
//从arr的头部开始，连续插入3个值为10的元素
vector<int> arr;
arr.insert(arr.begin(), 3, 10); ```
```


在指定位置插入区间[start, end]的所有元素

```cpp
//从arr的头部开始，连续插入arrs区间[begin, end]的所有元素
vector<int> arr;
vector<int> arrs = { 1, 2, 3, 4, 5 };
arr.insert(arr.begin(), arrs.begin(), arrs.end());
```

emplace和insert同为插入元素，不过emplace只能插入一个元素：

```cpp
//在arr的头部插入值为10的元素
vector<int> arr;
arr.emplace(arr.begin(), 10);
```



iterators（迭代器）

名字	描述
begin	返回指向容器中第一个元素的迭代器。
end	返回指向容器最后一个元素所在位置后一个位置的迭代器
rbegin	返回容器逆序的第一个元素的迭代器
rend	返回容器逆序的最后一个元素的前一个位置的迭代器
cbegin	和begin()功能相同，在其基础上增加了 const 属性，不能用于修改元素。
cend	和end()功能相同，在其基础上增加了 const 属性，不能用于修改元素。
crbegin	和rbegin()功能相同，在其基础上增加了 const 属性，不能用于修改元素。
crend	和rend()功能相同，在其基础上增加了 const 属性，不能用于修改元素。
Capacity（容量）

名字	描述
size	返回实际元素的个数
capacity	返回总共可以容纳的元素个数
max_size	返回元素个数的最大值。这个值非常大，一般是2^32-1
empty	判断vector是否为空，为空返回true否则false
resize	改变实际元素的个数，对应于size
reserve	增加容器的容量，控制vector的预留空间
shrink_to_fit	减少capacity到size的大小，即减小到size的大小
Element access（元素访问）

名字	描述
operator[]	vector可以和数组一样用[]访问元素
at	vector.at(i)等同于vector[i]，访问数组下表的元素
front	返回第一个元素
back	返回最后一个元素
data	返回指向容器中第一个元素的指针
Modifiers（修改器）

名字	描述
push_back	在容器的尾部插入元素
pop_back	删除最后一个元素
insert	插入元素
erase	删除元素
clear	清除容器内容，size=0，存储空间不变
swap	交换两个元素的所有内容
assign	用新元素替换原有内容。
emplace	插入元素，和insert实现原理不同，速度更快
emplace_back	在容器的尾部插入元素，和push_back不同

## memset()函数

```cpp
#include <cstring>
void *memset(void *str, int c, size_t n)
```

- 解释：复制字符 c（一个无符号字符）到参数 str 所指向的字符串的前 n 个字符。
- 作用：是在一段内存块中填充某个给定的值，它是对较大的结构体或数组进行清零操作的一种最快方法
- 头文件：C中`#include<string.h>`，C++中`#include<cstring>`

为地址str开始的n个字节赋值c，注意：是逐个字节赋值，str开始的n个字节中的每个字节都赋值为c。
（1） 若str指向char型地址，value可为任意字符值；
（2） 若str指向非char型，如int型地址，要想赋值正确，value的值只能是-1或0，因为-1和0转化成二进制后每一位都是一样的，设int型占4个字节，则-1=0XFFFFFFFF, 0=0X00000000。

举例：给数组赋值-1

```cpp
int A[2];  
memset(A, -1, sizeof A);  
```

## 背包问题

### 01背包

1. 不装入第i件物品，即`dp[i−1][j]`；

2. 装入第i件物品（前提是能装下），即`dp[i−1][j−w[i]] + v[i]`。

   即状态转移方程为

   ```cpp
   dp[i][j] = max(dp[i−1][j], dp[i−1][j−w[i]]+v[i]) // j >= w[i]
   ```

例：

```cpp
#include <iostream>
#include <vector>
using namespace std;
#define max(N1,N2) N1>N2?N1:N2
int main()
{
	/*
	第一行输入背包容量V和物体的个数n
	接下来有n行，每行包含两个数字，分别为该物体的花费和价值
	*/
	vector<int> w, v;//w为花费，v为价值
	vector<vector<int>> f;//f状态矩阵
	int V, n;//V背包容量，n物体数
	while (cin >> V >> n)
	{
		w.clear();
		v.clear();
		f.clear();
		w.push_back(0);
		v.push_back(0);

		//输入原始数据
		for (int i = 1; i <= n; i++)
		{
			int cur_w, cur_v;
			cin >> cur_w >> cur_v;
			w.push_back(cur_w);
			v.push_back(cur_v);
		}

		//初始化状态矩阵
		for (int i = 0; i <= n; i++)
		{
			vector<int> buff(V + 1, 0);
			f.push_back(buff);
		}

		//动态规划过程
		for (int i = 1; i <= n; i++)
		{
			for (int j = V; j >= 0; j--)
			{
				if (j >= w[i])
				{
					f[i][j] = max(f[i - 1][j], f[i - 1][j - w[i]] + v[i]);
				}
				else
				{
					f[i][j] = f[i - 1][j];
				}
			}
		}

		//输出答案
		int ans = f[n][V];
		cout << ans << endl;
	}
	return 0;
}

```

### 完全背包

 题目

完全背包（unbounded knapsack problem）与01背包不同就是每种物品可以有无限多个：一共有N种物品，每种物品有无限多个，第i（i从1开始）种物品的重量为w[i]，价值为v[i]。在总重量不超过背包承载上限W的情况下，能够装入背包的最大价值是多少？

初始状态也是一样的，我们将dp[0][0...W]初始化为0，表示将前0种物品（即没有物品）装入书包的最大价值为0。那么当 i > 0 时`dp[i][j]`也有两种情况：

1. 不装入第i种物品，即`dp[i−1][j]`，同01背包；
2. 装入第i种物品，此时和01背包不太一样，因为每种物品有无限个（但注意书包限重是有限的），所以此时不应该转移到`dp[i−1][j−w[i]]`而应该转移到`dp[i][j−w[i]]`，即装入第i种商品后还可以再继续装入第种商品。

所以状态转移方程为

```cpp
dp[i][j] = max(dp[i−1][j], dp[i][j−w[i]]+v[i]) // j >= w[i]
```

这个状态转移方程与01背包问题唯一不同就是max第二项不是dp[i-1]而是dp[i]。

### 多重背包

 题目

多重背包（bounded knapsack problem）与前面不同就是每种物品是有限个：一共有N种物品，第i（i从1开始）种物品的数量为n[i]，重量为w[i]，价值为v[i]。在总重量不超过背包承载上限W的情况下，能够装入背包的最大价值是多少？

此时的分析和完全背包的分析二差不多，也是从装入第 i 种物品多少件出发：装入第i种物品0件、1件、...n[i]件（还要满足不超过限重）。所以状态方程为：

```cpp
// k为装入第i种物品的件数, k <= min(n[i], j/w[i])
dp[i][j] = max{(dp[i-1][j − k*w[i]] + k*v[i]) for every k}
```

## STL的应用 | map

1. 必须引入包

```cpp
#include<map>
```

2.map的定义

map<type1name,type2name> maps;//第一个是键的类型，第二个是值的类型

```cpp
map<string,int> maps;
```

**3.map容器内元素的访问**

- **通过下标进行访问**

如：maps['c']=5;

- **通过迭代器进行访问**

map可以使用it->first来访问键，使用it->second访问值

```cpp
#include<map>
#include<iostream>
using namespace std;
int main()
{
   map<char,int>maps;
   maps['d']=10;
   maps['e']=20;
   maps['a']=30;
   maps['b']=40;
   maps['c']=50;
   maps['r']=60;
   for(map<char,int>::iterator it=mp.begin();it!=mp.end();it++)
   {
       cout<<it->first<<" "<<it->second<<endl;
   }
   return 0;
}
```

4.**map的常用用法**

- maps.insert() 插入

```cpp
// 定义一个map对象
map<int, string> m;
 
//用insert函数插入pair
m.insert(pair<int, string>(111, "kk"));
 
// 用insert函数插入value_type数据
m.insert(map<int, string>::value_type(222, "pp"));
 
// 用数组方式插入
m[123] = "dd";
m[456] = "ff";
```

- maps.find() 查找一个元素

find(key): 返回键是key的映射的迭代器

```cpp
map<string,int>::iterator it;
it=maps.find("123");
```

- maps.clear()清空

- maps.erase()删除一个元素

```cpp
//迭代器刪除
it = maps.find("123");
maps.erase(it);

//关键字删除
int n = maps.erase("123"); //如果刪除了返回1，否则返回0

//用迭代器范围刪除 : 把整个map清空
maps.erase(maps.begin(), maps.end());
//等同于mapStudent.clear()
```

- maps.szie()长度

```cpp
int len=maps.size();获取到map中映射的次数
```

- maps.begin()返回指向map头部的迭代器
- maps.end()返回指向map末尾的迭代器

```cpp
//迭代
map< string,int>::iterator it;
for(it = maps.begin(); it != maps.end(); it++)
    cout<<it->first<<" "<<itr->second<<endl;//输出key 和value值
```

- maps.rbegin()返回指向map尾部的逆向迭代器
- maps.rend()返回指向map头部的逆向迭代器

```cpp
//反向迭代
map<string,int>::reverse_iterator it;
for(it = maps.rbegin(); it != maps.rend(); it++)
    cout<<it->first<<' '<<it->second<<endl;
```

- maps.empty()判断其是否为空
- maps.swap()交换两个map

## 如何将字符串与整数相互转换

stoi()，atoi() ，to_string 这三个函数都是对[字符串](https://so.csdn.net/so/search?q=字符串&spm=1001.2101.3001.7020)处理的函数，前两者是将字符串转化为十进制 int 类型，最后一个是将十进制类型 int、double 等转化为string，下面就简单介绍一下；
[头文件](https://so.csdn.net/so/search?q=头文件&spm=1001.2101.3001.7020)都是：`#include<cstring>`

stoi() 和 atoi()
这两个功能虽然都是将字符串转化为 int 类型，但是还是有区别的，
stoi 的参数是 const string* 类型
atoi 的参数是 const char* 类型

stoi() 会对转化后的数进行检查，判断是否会超出 int 范围，如果超出范围就会报错；
atoi() 不会对转化后的数进行检查，超出上界，输出上界，超出下界，输出下界；

还有一点，如果使用 atoi 对字符串 string 进行转化的话，就需要 c_str() 函数将 const string* 类型 转化为 cons char* 类型


使用 *stoi()* 函数将字符串转换为整数。这是一种有效的方法，适用于较新版本的C++，从C++11开始引入。它接受一个字符串作为输入，并返回其整数形式作为输出。

```cpp
#include <iostream>
#include <string>
using namespace std;
 
int main() {
   string str = "7";
   cout << "我是一个字符串 " << str << endl;
 
   int num = stoi(str);
   
   cout << "我是一个整数 " << num << endl;
}
```



to_string()

功能：将**数字常量**（int,double,long等）转换为**字符串**（string），返回转换好的字符串

```cpp
#include<iostream>
#include<cstring>
using namespace std;

int main() {
	int num = 123456789;
	string s = to_string(num);
	cout << s << endl;
	return 0;
}

//输出：字符串123456789
```



## sort排序（快速排序）的使用方法

需要的头文件：

```cpp
#include<algorithm>
1
```

只需要一行代码：

```cpp
sort(a,a+n,cmp);
1
```

a表示要排序的数组，含n个元素，而cmp是判定条件。
如果想要从a[1]开始存储数据，则代码应该改为：

```cpp
sort(a+1,a+n+1,cmp);
```



* 在C++中，`std::sort` 函数用于对数组或容器中的元素进行排序。其语法为：

```cpp
cpp
复制代码
std::sort(first, last);
```

这里，`first` 是排序范围的起始迭代器，`last` 是排序范围的结束迭代器，但排序不包括 `last` 所指的元素。这意味着 `std::sort` 对 `[first, last)` 范围内的元素进行排序。

## char

char非常好 可以与字符比较，可以与字符加减，注意要用单引号

## 结构体数组

* 定义结构体

```cpp
//1、定义结构体 
struct  student
{
	string name;
	int age;
	int score;
};
```

* 创建结构体数组

  ```cpp
  	//2、创建结构体数组
  	struct student stuarr[3] = {
  		{"张三",18,100},
  		{"李四",17,90},
  		{"王二",16,80}
  	};
  ```

  

* 给结构体数组中的元素赋值

  ```cpp
  	//3、给结构体数组中的元素赋值
  	stuarr[2].name = "李三";
  	stuarr[2].age = 17;
  	stuarr[2].score = 10;
  ```

  

* 遍历结构体数组

  ```cpp
  	for (int i = 0; i < 3; i++)
  	{
  		cout << "姓名:" << stuarr[i].name << "\t年龄：" << stuarr[i].age << "\t分数:" << stuarr[i].score << endl;
   
  	}
  ```

  

* 结构体创建代码演示

```cpp
#include<iostream>
#include<string>
using namespace std;
//通过结构体创建变量的方式有三种
//1、struct结构体名 变量名
//2、struct 结构体名 变量名={成员值1，成员值2，...}
//3、定义结构体时顺便定义变量
struct Student
{
	string name;
	int age;
	int score;
};
struct Student2
{
	string name;
	int age;
	int score;
}s3;
int main() {
	//第一种
	Student s1;
	s1.name = "张三";
	s1.age = 18;
	s1.score = 99;
	cout << "name=" << s1.name << "  age=" << s1.age << "  score=" << s1.score << endl;
	//第二种
	Student s2 = {"王二",18,97};
	cout << "name=" << s2.name << "  age=" << s2.age << "  score=" << s2.score << endl;
	//第三种
	s3.name = "王二";
	s3.age = 17;
	s3.score = 78;
	cout << "name=" << s3.name << "  age=" << s3.age << "  score=" << s3.score << endl;
	system("pause");
	return 0;
}
/*输出：
name=张三  age=18  score=99
name=王二  age=18  score=97
name=王二  age=17  score=78
请按任意键继续. . .
```

