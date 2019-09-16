### 简介
参考文档：https://www.cnblogs.com/itshare/p/11028299.html

vsCode 开发 nodejs 的一些环境配置，内容包括以下几点：
- js 语法提示
- nodejs 自带模块提示
- 代码规范性监测
- 代码自动修复

### 配置
#### 初始化配置文件
```shell
npm init
```

#### js 语法提示
在项目跟目录下创建 jsconfig.json
```json
{
  "compilerOptions": {
    "target": "es6"
  },
  "exclude": ["node_modules"]
}
```

#### nodejs 模块提示
```shell
npm i typings -g

typings init

typings i dt~node --global --save
```

在使用第三方模块的时候，也可以通过下载 dt 声明模块，来进行代码编写提示(不是必选)
```shell
# 查询模块 axios
typings search  axios

# 下载
typings install dt~axios --global --save
```

#### 代码规范化配置 eslint + prettier
首先 vsCode 下载  eslint + prettier 插件

项目配置依赖
```shell
npm i -D prettier

npm i -D eslint-plugin-prettier

npm i -D eslint-config-prettier
```

创建 .eslintignore 忽略文件（不是必须，填写的路径将忽略验证）
```
/test
```

创建 .eslintrc.js 规则文件，规则采用 [standard](https://standardjs.com/readme-zhcn.html)
```js
module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'standard',
    'plugin:vue/essential',
    'eslint:recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    'prettier/prettier': 'error',
    // allow async-await
    'generator-star-spacing': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    //强制使用单引号
    quotes: ['error', 'single'],
    //强制不使用分号结尾
    semi: ['error', 'never']
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
```

创建 .prettierrc 规则文件，如果与 eslint 冲突，则以 .prettierrc 为准。如果编译器报警，则去除注释内容。
```js
{
  //一行的字符数，如果超过会进行换行，默认为80
  "printWidth": 80, 
  //一个tab代表几个空格数，默认为80
  "tabWidth": 2, 
  //是否使用tab进行缩进，默认为false，表示用空格进行缩减
  "useTabs": false, 
  //字符串是否使用单引号，默认为false，使用双引号
  "singleQuote": false, 
  //行位是否使用分号，默认为true
  "semi": true, 
  //是否使用尾逗号，有三个可选值"<none|es5|all>"
  "trailingComma": "none", 
  //对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
  "bracketSpacing": true, 
  //代码的解析引擎，默认为babylon，与babel相同
  "parser": "babel", 

  //开启 eslint 支持
  "eslintIntegration": true
}
```

#### vsCode 配置
打开 setting.json 文件，加入如下配置
```json
{
  "editor.formatOnSave": true,
  "eslint.enable": true,
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "html",
      "autoFix": true
    },
    {
      "language": "vue",
      "autoFix": true
    },
    {
      "language": "react",
      "autoFix": true
    }
  ],
}
```

配置完毕后，每次 ctrl + s 保存代码，都将对代码进行规则验证和自动修复，如果没有自动修复，则将在控制台报警