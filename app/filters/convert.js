'use strict'
/* @flow */
export default function(value: string, from = 'g', to = 'oz', units = true): string {
  let convert = require('convert-units');
  if (from != to) {
    value = convert(value).from(from).to(to);
  }
  if (units === true) {
    value += convert().describe(to).abbr;
  }

  return value;
}
