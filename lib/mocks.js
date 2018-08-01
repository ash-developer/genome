const _ = require('lodash');
const faker = require('faker');

const types = require('./const/types');

function mapValueToMock (value) {
  switch (value) {
    case types.STRING: return faker.random.word();
    case types.NUMBER: return faker.random.number();
    case types.BOOLEAN: return faker.random.boolean();
  }
}

module.exports = (config) => {
  return _.mapValues(config, mapValueToMock);
};
