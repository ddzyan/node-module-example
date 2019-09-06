const { Validator } = require('jsonschema');
const _ = require('lodash');

const address = require('./schemas/address.json');
const getBalance = require('./schemas/balance.json');

const p = {
  name: 'Barack Obama',
  address: [
    {
      lines: ['1600 Pennsylvania Avenue Northwest'],
      zip: 'DC 20500',
      city: 'Washington',
      country: 'USA'
    }
  ],
  votes: 1
};

const validator = new Validator();
validator.addSchema(address, address.title);
validator.addSchema(getBalance, getBalance.title);

const schema = validator.getSchema('getBalance');
if (!_.isUndefined(schema)) {
  const result = validator.validate(p, schema);
  if (!result.valid) {
    console.error(result.errors.join());
  } else {
    console.log('验证通过');
  }
}

/* const result = validator.validate(p, SimplePerson);
if (!result.valid) {
  console.error(result.errors.join());
} else {
  console.log('通过');
} */
