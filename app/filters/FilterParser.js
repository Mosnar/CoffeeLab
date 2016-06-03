'use strict'
/* @flow */
/**
 * Converts units
 * @returns String
 * @param originalText
 */
export default function (originalText:String):String {
  var convert = require('./Convert');
  var REGEX_WT = /{(.+)\|(\d+)}/gi;

  /**
   * Todo: Export to store config
   * @type {string}
   */
  const WT_TO = 'g';
  const WT_FROM = 'g';

  if (!originalText || originalText.length == 0) {
    return "";
  }

  console.warn(REGEX_WT.test(originalText));
  return originalText.replace(REGEX_WT, function (original, type, val) {
    console.log("GOT:", original, type, val);
    switch (type) {
      case 'wt':
        // Convert weight from standard grams to whatever the user has set
        return convert({
          val: val,
          from: this.WT_FROM,
          to: this.WT_TO,
          displayUnits: true
        });
      case 'tm':
        return original;
      default:
        return original;
    }
  });
}
