const Validator = require('jsonschema').Validator;
const simpleAddress = require('./SimpleAddress.json');
const SimplePerson = require('./SimplePerson.json');

const validator = new Validator();
validator.addSchema(simpleAddress, '/simpleAddress');

const p = {
    "name": "Barack Obama",
    "address": {
        "lines": ["1600 Pennsylvania Avenue Northwest"],
        "zip": "DC 20500",
        "city": "Washington",
        "country": "USA"
    },
    "votes": "wqeqw"
};
const result = validator.validate(p, SimplePerson)
if(!result.valid){
    console.error(result.errors.join());
}else{
    console.log('通过');
}