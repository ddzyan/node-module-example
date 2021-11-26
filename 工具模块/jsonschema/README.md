### 简介

能够快速和简单的使用 JSON schema 验证器。

参考文档：https://www.npmjs.com/package/jsonschema,https://blog.csdn.net/silence_xiao/article/details/81303935

下载量：178164

#### 安装

```bash
npm install jsonschema --save
```

#### API

##### validator.addSchema({json}, {title});

添加验证的参数格式

###### 参数

- json [json]：定义的参数格式，json 类型
- title [string]：格式名称

##### validator.validate(${object}, ${string})

验证传入参数

###### 参数

使用指定的验证名称，验证传入的参数

- object：验证的参数
- string：参数格式，可以是 json,可以是已经添加的 schema 名称

###### 返回值

object

- instance：传入参数
- schema：参数验证格式
- valid：验证是否通过，验证通过返回 true，否则为 false
- errors：错误信息，当验证失败时，返回具体的错误信息，为数组格式
