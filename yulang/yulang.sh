#!/usr/bin/env bash
# 基本路径
basePath="./src"

# 屏蔽npm warn日志
export npm_config_loglevel=silent

# 环境监测
echo node version = `node -v`
echo npm version = `npm -v`

# 依赖安装
echo "☕️ starting install dependencies..."
npm install

# 参数校验
if [[ ! -n $1 ]]; then
    echo "❌ error: no filename!"
    exit 1
fi

# 编译
node ./core/compile.js $1

# 执行
node ${basePath}/$1

# 清理
rm -rf ${basePath}/$1.js