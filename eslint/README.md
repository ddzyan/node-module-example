## 简介
可以统一配置工程代码规范标准，并且可以进行自动修复。

eslint 规则参考文档：https://eslint.org/docs/rules/

### 全局安装
```bash
//全局安装 eslint
npm install -g eslint

//初始化配置文件
eslint --init
```
参考文档：http://eslint.cn/docs/user-guide/getting-started

### 使用
模版继承于 eslint-config-airbnb 规则，规则具体内容参考 https://github.com/yuche/javascript

在继承规则后，再修改属性将覆盖继承的规则属性。

```bash
//使用前先安装必要模块，这里采用的是全局安装
npm install -g eslint-config-airbnb-base

npm install -g eslint-plugin-import

//检测
eslint index.js

//自动修复
eslint index.js --fix
```
### vsCode 中使用
下载安装ESLint插件，可以在命令面板中输入命令操作：
- Create '.eslintrc.json' file：创建一个新.eslintrc.json文件。
- Fix all auto-fixable problems：将ESLint自动修复解决方案应用于所有可修复的问题。
- Disable ESLint for this Workspace：禁用此工作空间的ESLint扩展。
- Enable ESLint for this Workspace：为此工作空间启用ESLint扩展。

在项目中启动后，会实时检测代码，不需要再执行ESLint指令检测。