const randomstring = require("randomstring");

exports.getRandomString = function(length = 8, charset = "numeric") {
  const randomString = randomstring.generate({
    length,
    charset
  });
  return randomString;
};
