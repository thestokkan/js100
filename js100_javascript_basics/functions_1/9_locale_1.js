// Locale Part 1
//
// Write a function that extracts the language code from a locale.
// A locale is a combination of a language code, a region, and usually also a
// character set, e.g en_US.UTF-8.

function extractLanguage(locale) {
  return locale.split('_')[0];
}


console.log(extractLanguage('en_US.UTF-8'));  // 'en'
console.log(extractLanguage('en_GB.UTF-8'));  // 'en'
console.log(extractLanguage('ko_KR.UTF-16')); // 'ko'
