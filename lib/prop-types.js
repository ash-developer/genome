const PropTypes = require('prop-types');
const _ = require('lodash');

const types = require('./const/types');

function mapValueToPropType (value) {
  switch (value) {
    case types.STRING: return PropTypes.string;
    case types.NUMBER: return PropTypes.number;
    case types.BOOLEAN: return PropTypes.bool;
  }
}

module.exports = (config) => {
  return _.mapValues(config, mapValueToPropType);
};
