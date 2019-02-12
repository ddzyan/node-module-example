const xlsx = require('xlsx');
const randomstring = require('randomstring');
const fs = require('fs');

const workbook = xlsx.readFile('./withorder.xlsx');
const first_sheet_name = workbook.SheetNames[0];

const getRandomString = function(length = 10, charset = 'alphanumeric') {
  const randomString = randomstring.generate({
    length,
    charset
  });
  return randomString;
};

const start = function() {
  if (fs.existsSync('./output_sql.txt')) {
    fs.unlinkSync('./output_sql.txt');
  }
  const worksheet = workbook.Sheets[first_sheet_name];
  const data = xlsx.utils.sheet_to_json(worksheet);
  let sqlStr = '';
  for (const item of data) {
    const order_no = item.currency.trim() + getRandomString() + Date.now();
    sqlStr +=
      'insert into withdraw_order (`order_no`,`tx_hash`,`currency_name`,`output_address`,`withdraw_label`,`amount`,`biz_fee`,`source`,`order_status`,`expired`,`desc`,`ext_properties`,`reconciled`,`wallet_id`,`notified`,`trade_no`)';
    sqlStr += ` values ("${order_no}","","${item.currency.trim()}","${item.address.trim()}","","${
      item.amount
    }","0","cb62e9cdff7c49709fa3e430a140e0f1","2","0","",NULL,"1","","0","${order_no}");\n\n`;
  }

  fs.writeFile('./output_sql.txt', sqlStr, { flag: 'a' }, function(err) {
    if (err) {
      throw err;
    }
  });
};

start();
