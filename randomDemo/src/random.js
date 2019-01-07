const randomstring = require("randomstring");

exports.getRandomString = function(length = 15, charset = "alphabetic") {
  const randomString = randomstring.generate({
    length,
    charset
  });
  return randomString;
};
