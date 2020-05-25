# Yulang 鱼语言
> 基于Js的逗比编程语言

## 特性
1. 性能贼高，就比Js慢一丢丢
1. 完全兼容Js
1. 幽默风趣，且不失优雅
1. 简单易用

## 使用
1. 下载yulang代码
1. 在src目录下可以开发yu文件（如test.yu），也可以使用反编译命令生成.yu（下面有介绍）
1. 开发完成，运行yulang.sh脚本，将无后缀文件名作为参数
```bash
    ./yulang.sh test
```

## 其他命令
*所有命令请在/yulang根目录下执行！*
1. 反编译（.js转.yu）
    ```bash
    node ./core/decompile <filename>
    ```
2. 编译（.yu转.js）
    ```bash
    node ./core/compile <filename>
    ```
3. 查看文档
    ```bash
    npm run doc
    ```
4. 校验映射文件
    ```bash
    npm run validate
    ```

## 项目结构
- core 核心包（编译器、反编译器等）
- src 开发目录
- yulang.sh 执行脚本

## 贡献
欢迎贡献！

可以修改core/map.js新增表情 => 关键字映射，并用 `npm run validate` 命令校验合法性。

