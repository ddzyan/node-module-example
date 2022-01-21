## 简介
xlsx 模块的简单使用，功能包括文件获取，对象转换，属性获取



## 更新记录
## [2022-01-19]
1. 输出表格

## [2019-1-24]
1. 初始化项目
2. 读取表格内容


workbook 数据结构
```
// workbook
{
    SheetNames: ['sheet1', 'sheet2'],
    Sheets: {
        // worksheet
        'sheet1': {
            // cell
            'A1': { ... },
            // cell
            'A2': { ... },
            ...
        },
        // worksheet
        'sheet2': {
            // cell
            'A1': { ... },
            // cell
            'A2': { ... },
            ...
        }
    }
}

```
