'use strict'
/* @flow */
/**
 * Converts units
 * @param parameters
 * @returns String
 */
export default function(parameters: Object): String {
  var value = parameters.value || null;
  var from = parameters.from;
  var to = parameters.to || from;
  var displayUnits = parameters.showUnits || true;
  var floorResult = parameters.floorResult || false;

  let convert = require('convert-units');

  if (from != to) {
    value = convert(value).from(from).to(to);
  }
  if (floorResult === true) {
    value = Math.floor(value);
  }
  if (displayUnits === true) {
    value += convert().describe(to).abbr;
  }

  return value;
}
