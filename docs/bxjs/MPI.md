# MPI编程

此篇是在完成TJU的并行计算这门课之后整理的相关知识，这门课主要涉及了多线程，MPI，异构计算等知识点。
由于MPI这几个函数比较常用，遂总结记录一下。

## MPI介绍

选摘：[【MPI】 六大金刚：六个最基本、最常用的函数-CSDN博客](https://blog.csdn.net/jokerMingge/article/details/143711210)

​	   [MPI 与并行计算入门 - 知乎](https://zhuanlan.zhihu.com/p/590277732)

* MPI 全名叫 Message Passing Interface，即信息传递接口，其作用是在不同进程间传递消息，从而可以并行地处理任务，即进行**并行计算**。需要注意的是，尽管我们偶尔会说使用 MPI 编写了某某可执行程序，但是 MPI 其实只是一个标准，而不是一种编程语言。其具体的实现由OpenMPI, MPICH, IntelMPI等库完成，这些库遵循MPI标准，并且可以被Fortran、C、C++、Python调用。

* 有关 MPI 的一些基本概念：

  首先是**通信域(communicating domain)**，通信域定义了一组能够互相发消息的进程。在这组进程中，每个进程会被分配一个序号，称为 **rank**，进程间显性地通过指定 rank 作为标识来进行通信，一个进程 rank 可以指定另一个进程的 rank 以及独一无二的**消息标签 tag** 来发送消息。接收者也可以发送一个特定标签标记的消息的请求。类似于这样的涉及一个发送者以及一个接收者的通信被称为**点对点(point-to-point)通信**。

  * #### Rank

    - **定义**：在 MPI 中，`rank` 是一个整数值，用来唯一标识一个进程在特定通信子中的位置。
    - **作用**：rank 使得进程能够被唯一地识别，从而可以在通信时指定具体的发送者或接收者。
    - **获取方式**：通过 `MPI_Comm_rank` 函数可以获得当前进程在某个通信子中的 rank。

  * #### Communicator

    - **定义**：`communicator` 是一组进程的集合，这些进程共享一个通信上下文，可以相互通信。
    - **作用**：定义了哪些进程可以相互通信，并提供了这些进程间通信的环境。
    - **默认通信子**：`MPI_COMM_WORLD` 是最常见的默认通信子，它包含了启动 MPI 程序的所有进程。
    - **获取大小**：通过 `MPI_Comm_size` 函数可以知道某个通信子中包含了多少个进程。

### 安装MPI

在对应实验环境下只需首先加载MPI环境即可：

```bash
module load openmpi/4.1.4-mpi-x-gcc9.3.0
```

### 常用函数

6个函数API如下：

```cpp
/* Initialize and Finalize */
int MPI_Init(int *argc, char ***argv)
int MPI_Finalize()

/* MPI comm size and rank */
int MPI_Comm_size(MPI_Comm comm, int *size)
int MPI_Comm_rank(MPI_Comm comm, int *rank)

/* MPI send and recv */
int MPI_Send(const void *buf, int count, MPI_Datatype datatype, int dest,
             int tag, MPI_Comm comm)
int MPI_Recv(void *buf, int count, MPI_Datatype datatype, int source, int tag,
             MPI_Comm comm, MPI_Status *status)
```

#### MPI_Init

`MPI_Init` 用于**初始化 MPI 环境**，是 MPI 程序开始执行的**第一步**。它负责设置 MPI 库，使进程能够参与到 MPI 通信中来。

##### 函数原型

```cpp
int MPI_Init(int *argc, char ***argv);
```

##### 参数

- `argc`：指向命令行参数计数的指针。通常，这是传给主函数 `main` 的第一个参数。
- `argv`：指向命令行参数数组的指针。通常，这是传给主函数 `main` 的第二个参数。

##### 返回值

- 成功时返回 `MPI_SUCCESS`。
- 发生错误时返回一个负的错误码。

##### 说明

`MPI_Init` 可能会修改 `argc` 和 `argv` 的值。在 `MPI_Init` 调用后，`argc` 和 `argv` 应被视为未定义，除非它们在 `MPI_Init` 内部没有被改变。

#### MPI_Finalize

`MPI_Finalize` 用于**关闭 MPI 环境，释放由 MPI 库分配的所有资源，并确保所有未完成的通信请求都已完成**。

#####  函数原型

```c
int MPI_Finalize();
```

##### 返回值

- 成功时返回 `MPI_SUCCESS`。
- 发生错误时返回一个负的错误码。

##### 说明

在 `MPI_Finalize` 被调用之后，除了 `MPI_Get_processor_name` 和 `MPI_Finalized` 之外，不应再调用任何其他 MPI 函数。一旦 `MPI_Finalize` 被调用，MPI 环境就无法再次初始化

#### MPI_Comm_size

`MPI_Comm_size` 用于查询给定通信子中的进程数量。

#####  函数原型

```c
int MPI_Comm_size(MPI_Comm comm, int *size);
```

##### 参数

- `comm`：要查询的通信子。
- `size`：一个指向整数的指针，用于存储通信子中的进程数量。

##### 返回值

- 成功时返回 `MPI_SUCCESS`。
- 发生错误时返回一个负的错误码。

#### MPI_Comm_rank

`MPI_Comm_rank` 用于查询调用进程在给定通信子中的标识符（rank）。

##### 函数原型

```c
int MPI_Comm_rank(MPI_Comm comm, int *rank);
```

##### 参数

- `comm`：要查询的通信子。
- `rank`：一个指向整数的指针，用于存储调用进程在通信子中的标识符。

##### 返回值

- 成功时返回 `MPI_SUCCESS`。
- 发生错误时返回一个负的错误码。

#### MPI_Send

`MPI_Send` 用于将数据从一个进程发送到另一个进程。其函数原型如下：

```c
int MPI_Send(const void *buf, int count, MPI_Datatype datatype, int dest, int tag, MPI_Comm comm);
```

##### 参数

- `buf`：指向要发送的数据缓冲区的指针。
- `count`：要发送的数据项数量。
- `datatype`：每个数据项的类型（例如 `MPI_INT` 对应整型）。

- `dest`：目标进程的 rank（在通信子中的标识符）。
- `tag`：消息标签，用于区分不同类型的消息。
- `comm`：通信子，定义了发送和接收进程之间的上下文。

##### 返回值

- 成功时返回 `MPI_SUCCESS`。
- 如果出现错误，则返回一个负的错误码

### MPI_Recv

`MPI_Recv` 用于从另一个进程接收数据。其函数原型如下：

```c
int MPI_Recv(void *buf, int count, MPI_Datatype datatype, int source, int tag, MPI_Comm comm, MPI_Status *status);
```

##### 参数

- `buf`：指向用于存放接收到的数据的缓冲区的指针。
- `count`：接收缓冲区能够容纳的数据项的最大数量。
- `datatype`：每个数据项的类型。
- `source`：发送进程的 rank。如果设置为 `MPI_ANY_SOURCE`，则可以从任意源接收消息。

- `tag`：期望的消息标签。如果设置为 `MPI_ANY_TAG`，则可以接收任何标签的消息。
- `comm`：通信子。

- `status`：一个指向 `MPI_Status` 结构体的指针，用来提供关于接收到的消息的信息（如源进程rank和实际接收到的数据项数量）。如果不关心这些信息，可以传递 `MPI_STATUS_IGNORE`。

##### 返回值

- 成功时返回 `MPI_SUCCESS`。
- 如果出现错误，则返回一个负的错误码。

## MPI应用实例

TJU并行计算lab3代码如下：

利用MPI计算矩阵，完整代码如下，有三个输入参数`M,N,K`，分别对应两矩阵相乘的三个参数以标记矩阵规模：

```c
#include <mpi.h>
#include <iostream>
#include <vector>

using namespace std;

int M, K, N;
vector<vector<double>> A, B, C;

// 将二维 vector 扁平化为一维数组用于 MPI 通信
void flatten(const vector<vector<double>> &matrix, double *flat) {
    int rows = matrix.size();
    int cols = matrix[0].size();
    for (int i = 0; i < rows; ++i)
        for (int j = 0; j < cols; ++j)
            flat[i * cols + j] = matrix[i][j];
}

void unflatten(double *flat, vector<vector<double>> &matrix) {
    int rows = matrix.size();
    int cols = matrix[0].size();
    for (int i = 0; i < rows; ++i)
        for (int j = 0; j < cols; ++j)
            matrix[i][j] = flat[i * cols + j];
}

int main(int argc, char *argv[]) {
    MPI_Init(&argc, &argv);

    int rank, num_procs;
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);
    MPI_Comm_size(MPI_COMM_WORLD, &num_procs);

    if (argc != 4) {
        if (rank == 0)
            cout << "Usage: ./test.o M K N" << endl;
        MPI_Finalize();
        return 0;
    }
    // else{
    //     cout << "Running test_mpi version with argc = " << argc << endl;
    // }

    M = atoi(argv[1]);
    K = atoi(argv[2]);
    N = atoi(argv[3]);

    int rows_per_proc = M / num_procs;
    int remainder = M % num_procs;
    int local_rows = (rank < remainder) ? rows_per_proc + 1 : rows_per_proc;
    int offset = (rank < remainder) ? rank * local_rows : rank * rows_per_proc + remainder;

    vector<vector<double>> local_A(local_rows, vector<double>(K));
    vector<vector<double>> local_C(local_rows, vector<double>(N, 0.0));
    B.resize(K, vector<double>(N));

    // Only root process initializes full A and B
    if (rank == 0) {
        A.resize(M, vector<double>(K));
        C.resize(M, vector<double>(N, 0));
        srand(time(0));
        for (int i = 0; i < M; ++i)
            for (int j = 0; j < K; ++j)
                A[i][j] = rand() % 10;

        for (int i = 0; i < K; ++i)
            for (int j = 0; j < N; ++j)
                B[i][j] = rand() % 10;
    }

    // Flattened B to broadcast
    double *flat_B = new double[K * N];
    if (rank == 0)
        flatten(B, flat_B);

    MPI_Bcast(flat_B, K * N, MPI_DOUBLE, 0, MPI_COMM_WORLD);
    unflatten(flat_B, B);

    // Prepare sending counts and displacements
    if (rank == 0) {
        double *flat_A = new double[M * K];
        flatten(A, flat_A);
        vector<int> send_counts(num_procs), displs(num_procs);
        for (int i = 0, pos = 0; i < num_procs; ++i) {
            int rows = (i < remainder) ? rows_per_proc + 1 : rows_per_proc;
            send_counts[i] = rows * K;
            displs[i] = pos;
            pos += send_counts[i];
        }

        double *flat_local_A = new double[local_rows * K];
        MPI_Scatterv(flat_A, send_counts.data(), displs.data(), MPI_DOUBLE,
                     flat_local_A, local_rows * K, MPI_DOUBLE, 0, MPI_COMM_WORLD);
        unflatten(flat_local_A, local_A);
        delete[] flat_local_A;
        delete[] flat_A;
    } else {
        double *flat_local_A = new double[local_rows * K];
        MPI_Scatterv(NULL, NULL, NULL, MPI_DOUBLE,
                     flat_local_A, local_rows * K, MPI_DOUBLE, 0, MPI_COMM_WORLD);
        unflatten(flat_local_A, local_A);
        delete[] flat_local_A;
    }

    // Local matrix multiplication
    for (int i = 0; i < local_rows; ++i) {
        for (int j = 0; j < N; ++j) {
            for (int k = 0; k < K; ++k) {
                local_C[i][j] += local_A[i][k] * B[k][j];
            }
        }
    }

    // Gather result
    double *flat_local_C = new double[local_rows * N];
    flatten(local_C, flat_local_C);

    double *flat_C = nullptr;
    vector<int> recv_counts, displs;
    if (rank == 0) {
        flat_C = new double[M * N];
        recv_counts.resize(num_procs);
        displs.resize(num_procs);
        for (int i = 0, pos = 0; i < num_procs; ++i) {
            int rows = (i < remainder) ? rows_per_proc + 1 : rows_per_proc;
            recv_counts[i] = rows * N;
            displs[i] = pos;
            pos += recv_counts[i];
        }
    }

    MPI_Gatherv(flat_local_C, local_rows * N, MPI_DOUBLE,
                flat_C, recv_counts.data(), displs.data(), MPI_DOUBLE,
                0, MPI_COMM_WORLD);

    if (rank == 0) {
        unflatten(flat_C, C);
        // 可选择输出矩阵C
        // for (int i = 0; i < M; ++i){
        //     for (int j = 0; j < N; ++j)
        //         cout << C[i][j] << " ";
        //     cout << endl;
        // }
        delete[] flat_C;
    }

    delete[] flat_local_C;
    delete[] flat_B;

    MPI_Finalize();
    return 0;
}

```

