"use strict"

// default export adds !important suffix
module.exports = suffix(' !important')

// also allow arbitrary suffixes. I can't think of any but !important.
module.exports.suffix = suffix 

/**
 * Add `suffixText` to each declaration.
 */

function suffix(suffixText) {
  return function(style){
    style.rules.forEach(function(rule){
      if (!rule.declarations) return;
      rule.declarations = rule.declarations.map(function(decl){
        if (!new RegExp(suffixText+'$').test(decl.value)) decl.value += suffixText
        return decl
      });
    });
  }
}

