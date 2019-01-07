# 简介
npm模块地址：https://www.npmjs.com/package/randomstring

帮助你创建随机字符串。

## 安装
```bash
npm install randomstring
```

## 使用
```bash
var randomstring = require("randomstring");
 
randomstring.generate();
// >> "XwPp9xazJ0ku5CZnlmgAx2Dld8SHkAeT"
 
randomstring.generate(7);
// >> "xqm5wXX"
 
randomstring.generate({
  length: 12,
  charset: 'alphabetic'
});
// >> "AqoTIzKurxJi"
 
randomstring.generate({
  charset: 'abc'
});
```

## API
### generate(options)
#### length
随机字符串的长度（默认值：32）
#### readable
排除可读性差的字符：0OIl。（默认值：false）
##### charset
定义字符串的字符集。（默认：'alphanumeric'）
- alphanumeric - [0-9 a-z A-Z]
- alphabetic - [a-z A-Z]
- numeric - [0-9]
- hex - [0-9 a-f]
- custom - any given characters
#### capitalization
定义输出是否应仅为小写/大写。
- lowercase
- uppercase

## 命令行使用方法
```bash
$ npm install -g randomstring

$ randomstring
> sKCx49VgtHZ59bJOTLcU0Gr06ogUnDJi

$ randomstring 7
> CpMg433

$ randomstring length=24 charset=github readable
> hthbtgiguihgbuttuutubugg
```