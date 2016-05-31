'use strict'
/* @flow */
/**
 * Converts units
 * @param parameters
 * @returns String
 */
// TODO: Generify this to all data types
export default function (originalText:String):String {
  var convert = require('./Convert');
  const REGEX_WT = new RegExp(/{(.+)\|(\d+)}/, 'gi');

  const WT_TO = 'g';
  const WT_FROM = 'g';

  return originalText.replace(REGEX_WT, function (original, type, val) {
    switch (type) {
      case 'wt':
        return convert({
          val: val,
          from: this.WT_FROM,
          to: this.WT_TO,
          displayUnits: true
        });
      default:
        return original;
    }
  });
}
