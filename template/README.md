# {{ name }}

> {{ description }}

## Build Setup

```bash
# 初始化项目
vue init mpvue/mpvue-quickstart myproject
cd myproject

# 安装依赖
yarn

# 开发时构建
yarn dev

# 打包构建
yarn build

# 指定平台的开发时构建(微信、百度、头条、支付宝)
yarn dev:wx
yarn dev:swan
yarn dev:tt
yarn dev:my

# 指定平台的打包构建
yarn build:wx
yarn build:swan
yarn build:tt
yarn build:my

# 生成 bundle 分析报告
yarn build --report
{{#unit}}

# run unit tests
yarn unit
{{/unit}}
{{#e2e}}

# run e2e tests
yarn e2e
{{/e2e}}
{{#if_or unit e2e}}

# run all tests
yarn test
{{/if_or}}
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
