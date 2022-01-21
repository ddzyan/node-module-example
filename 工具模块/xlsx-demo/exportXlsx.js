// 导出 xlsx 文件
const xlsx = require("xlsx");
const assert = require("assert");
const fs = require("fs");

class Excel {
  constructor() {
    this.workbook = xlsx.utils.book_new();
    this.sheetMap = new Map();
  }

  // 创建表单
  createSheet(sheetName, headers) {
    assert(sheetName, "sheetName is required");
    assert(Array.isArray(headers), "headers must is Array");

    if (this.sheetMap.has(sheetName)) {
      return this;
    }

    this.sheetMap.set(sheetName, [headers]);
  }

  // 给指定表单添加一行数据
  addSheetRow(sheetName, row) {
    assert(Array.isArray(row), "row must is Array");

    const sheetData = this.getSheet(sheetName);

    sheetData.push(row);

    this.sheetMap.set(sheetName, sheetData);

    return this;
  }

  // 给指定表单添加多行数据
  addSheetRows(sheetName, rows) {
    assert(Array.isArray(rows), "rows must is Array");

    if (rows.every(row => Array.isArray(row))) {
      assert(Array.isArray(rows), "rows item must is Array");
    }

    const sheetData = this.getSheet(sheetName);

    rows.forEach(row => {
      sheetData.push(row);
    });

    this.sheetMap.set(sheetName, sheetData);

    return this;
  }

  // 获取表单数据
  getSheet(sheetName) {
    if (!this.sheetMap.has(sheetName)) {
      throw new Error("sheetName is not exist");
    }

    return this.sheetMap.get(sheetName);
  }

  // 导出表单
  export(filePath) {
    assert(filePath, "filePath is required");
    for (const [sheetName, sheetData] of this.sheetMap.entries()) {
      const worksheet = xlsx.utils.aoa_to_sheet(sheetData);
      xlsx.utils.book_append_sheet(this.workbook, worksheet, sheetName);
    }

    const xlsxBuffer = xlsx.write(this.workbook, {
      type: "buffer",
      bookType: "xlsx"
    });

    fs.writeFileSync(filePath, xlsxBuffer);
  }
}

const main = function() {
  const excel = new Excel();
  excel.createSheet("资产清算", ["创建时间", "冻资金额", "解锁金额"]);
  excel.addSheetRows("资产清算", [
    ["2022-01-01", 123123, 454545],
    ["2022-01-10", 10000, 20200]
  ]);
  excel.addSheetRow("资产清算", ["2022-01-03", 55555, 88888]);

  excel.export("./tmp/资产.xlsx");
};

main();
