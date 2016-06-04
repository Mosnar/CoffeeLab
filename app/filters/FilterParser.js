'use strict'
/* @flow */
/**
 * Converts units
 * @returns String
 * @param originalText
 */
export default function (originalText:String):String {
  var convert = require('./Convert').default;
  var REGEX_WT = /{(.+)\|(.+)}/gi;

  if (!originalText || originalText.length == 0) {
    return "";
  }

  /**
   * Todo: Export to store config
   * @type {string}
   */
  var WT_TO = 'g';
  var WT_FROM = 'g';

  return originalText.replace(REGEX_WT, function (original, type, val) {
    switch (type) {
      case 'wt':
        // Convert weight from standard grams to whatever the user has set
        return convert({
          val: val,
          from: WT_FROM,
          to: WT_TO,
          displayUnits: true
        });
      default:
        return original;
    }
  });
}
