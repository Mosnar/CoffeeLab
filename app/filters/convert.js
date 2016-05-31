'use strict'
/* @flow */
/**
 * Converts units
 * @param parameters
 * @returns String
 */
export default function(parameters): String {
  var value = parameters.val;
  var from = parameters.from;
  var to = parameters.to;
  var displayUnits = (parameters.showUnits == null ? true : parameters.showUnits);
  var precision = (parameters.precision == null ? 1 : parameters.precision);

  let convert = require('convert-units');

  value = convert(value).from(from).to(to);
  value = value.toFixed(precision);
  if (displayUnits === true) {
    value += convert().describe(to).abbr;
  }

  return value;
}
