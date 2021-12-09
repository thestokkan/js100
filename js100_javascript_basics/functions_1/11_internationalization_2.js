// Internationalization 2
//
// Building on your solutions from the previous exercises, write a function
// localGreet that takes a locale as input, and returns a greeting.
// The locale allows us to greet people from different countries differently
// also when they share the language, for example:


localGreet('en_US.UTF-8'); // 'Hey!'
localGreet('en_GB.UTF-8'); // 'Hello!'
localGreet('en_AU.UTF-8'); // 'Howdy!'

// Distinguish greetings for English speaking countries like the US, UK, Canada,
// or Australia in your implementation, and feel free to fall back on the
// language-specific greetings in all other cases, for example:


localGreet('fr_FR.UTF-8'); // 'Salut!'
localGreet('fr_CA.UTF-8'); // 'Salut!'
localGreet('fr_MA.UTF-8'); // 'Salut!'

// When implementing localGreet, make sure to re-use your extractLanguage,
// extractRegion and greet functions from the previous exercises.
//
// (If you're interested, you can find a list of locales here:
// http://www.localeplanet.com/icu/iso639.html)



function extractLanguage(locale) {
  return locale.split('_')[0];
}

function extractRegion(locale) {
  return locale.split('_')[1]
              .split('.')[0];
}

function greet(language) {
  switch (language) {
    case 'en': return 'Hi!';
    case 'fr': return 'Salut!';
    case 'pt': return 'Olá!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': return 'Haai!';
  }
}


function localGreet(locale) {
  let language = extractLanguage(locale);
  let region = extractRegion(locale);

  switch (region) {
    case 'US': return 'Hey!';
    case 'GB': return 'Hello!';
    case 'AU': return 'Howdy!';
    case 'CA': return 'Hi!';
    default: return greet(language);
  }
}

console.log(localGreet('en_US.UTF-8'));
console.log(localGreet('en_GB.UTF-8'));
console.log(localGreet('en_AU.UTF-8'));
console.log(localGreet('en_CA.UTF-8'));
console.log(localGreet('fr_CA.UTF-8'));
console.log(localGreet('fr_MA.UTF-8'));
console.log(localGreet('de_DE.UTF-8'));
console.log(localGreet('pt_PT.UTF-8'));
console.log(localGreet('sv_SV.UTF-8'));