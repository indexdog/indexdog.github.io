
## Docker简介

Docker 是一个开源的应用容器引擎，基于 Go语言并遵从 Apache2.0 协议开源。

Docker 可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。

* Docker基本组成

* 镜像（image）       =>   模板

* 容器（container）  =>   一个简易的Linux系统

* 仓库（repository） =>   存放镜像

## Docker 架构的工作流程

- **构建镜像**：使用 `Dockerfile` 创建镜像。
- **推送镜像到注册表**：将镜像上传到 Docker Hub 或私有注册表中。
- **拉取镜像**：通过 `docker pull` 从注册表中拉取镜像。
- **运行容器**：使用镜像创建并启动容器。
- **管理容器**：使用 Docker 客户端命令管理正在运行的容器（例如查看日志、停止容器、查看资源使用情况等）。
- **网络与存储**：容器之间通过 Docker 网络连接，数据通过 Docker 卷或绑定挂载进行持久化。