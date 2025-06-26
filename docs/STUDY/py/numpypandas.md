# Numpy & Pandas (数据处理教程)

pandas和numpy则是python中最好用的两个数据分析库，使用它们，能够解决超过90%的数据分析问题。

### numpy属性

```python
import numpy as np #import...as...把numpy简写为np
array = np.array([[1,2,3],
                  [2,3,4]]) #
array.ndim #数组维数 2
array.shape #shape为数组行数和列数 （2，3）
array.size #数组元素 6
```

### numpy创建array

```py
import numpy as np 
a = np.array([1,2,3],dtype=np.int) #dtype为数据类型 默认64位
a = np.zeros((3,4)) #3行4列的零矩阵
a = np.ones((3,4)) #3行4列元素全为1的矩阵
a = np.empty((3,4)) #3行4列的空矩阵
a = np.arange((10,20,2)) #[10 12 14 16 18]起 始 步长
a = np.arange(12).reshape((3,4)) #3行4列的从0到11的矩阵
a = np.linspace(1,10,20) #起 始 duan'shu
```

### numpy的基础运算

```py
#a,b为矩阵
c = a-b
c = b**2 #b的平方
c = 10*np.sin(a)
print(b<3)
c = a*b #逐个元素相乘
#矩阵乘法
	np.dot(a,b) 
	a.dot(b) 
np.sum(a)
np.sum(a,axis=1) #在行中求和 axis是维度
np.sum(a,axis=0) #在列中求和
np.min(a) #最大小值
np.max(a)
np.argmin(a) #最大小值索引
np.argmax(a)
#均值
	np.mean(a)
	a.mean()
	np.average(a)
np.median(a) #中位数
np.cumsum(a) #前缀和
np.diff(a) #累差
np.sort(a) #排序
#矩阵转置
	np.transpose(a)
	a.T
np.clip(a,5,9) #卡尔曼滤波    

```

### numpy的索引

```python
# a为一维数组
	a[2] #a中第2位数据（有0
# a为二维数组
	a[2] #a中第2行数据（有0
    a[2][1] 或 a[2,1] #a中第2行第1列数据（有0
    a[:,2] #第二列
```

### array的合并

```py
# a,b为一维序列
	c = np.vstack((a,b)) # vertical stack 上下合并，c为两行的矩阵
    c = np.hstack((a,b)) # horizontal stack 左右合并，c为一维序列
    a[:,np.newaxis] #横向序列变为纵向，在列上加了一个维度
    np.concatenate((a,b,b,a),axis=1) #多序列纵向或横向合并
```

### array的分割

```py
np.split(a,2,axis=1) #均等分割2份 纵向
np.array_split(a,2,axis=1) #不等分割
# 设axis=i，则numpy沿着第i个下标变化的'方向'进行操作

np.vsplit(a,3) #横向分割3份 相当于axis=0
np.hsplit(a,2) #纵向分割2份 相当于axis=1
```

### copy&deep copy

```py
b = a #赋值，则b is a 二者完全相同 地址相同，会互相改变
b = a.copy() #赋值，但a，b无关联 不会互相改变
```

### pandas

```py
import numpy as np
import pandas as pd

# series是一个一维数组，线性的数据结构,创建一个series数据,索引值自定义
s2 = pd.Series([1, 3, 14, 521], index=['第一个数', '第二个数', '第三个数', '第四个数'])

# 获取series的数据值 使用pandas.values()函数

# 提取series的数据的值
s3 = pd.Series([1, 3, 14, 521])
# 直接获取值
print(s3.values) # 直接print有index，这样只有一横行values

# 根据索引获取值
print(s3[0:3]) # 1，3，14
```

```py
# 使用pandas.DataFrame函数

import pandas as pd

data = {
    'class': [1, 2, 3, 4],
    'people': [16, 15, 17, 18]
}
df1 = pd.DataFrame(data)
# 输出有3列 index class people
# 获取值、行索引、列索引、转置 使用values、index、columns、axes、T

print(df6) #原数据
print(df6.sort_index(axis=0)) # 行排序
print(df6.sort_index(axis=1)) # 列排序
print(df6.sort_values(by='E')) #值排序(对E列里的值进行排序)
```

