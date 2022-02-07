const crypto = require("crypto");

exports.base64Decode = function(data) {
  const buffer = Buffer.from(data, "base64");
  const decodeData = buffer.toString("utf-8");
  return decodeData;
};

exports.sha256Encryption = function(data, secretKey) {
  const hmac = crypto.createHmac("sha256", secretKey);

  const str = hmac.update(JSON.stringify(data)).digest("base64");
  return str;
};
//console.log(base64Decode('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'));
