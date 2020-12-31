// Finds "PascalCase" words in a given string
// then sorts uppercase characters
// then add numbers if any

const example = "This iS a PascalCase3 eXample."; // "CPT3"

function getPascalCases(text){

    let textParts = text.replace(/[^ \w]/g, '').split(' '), string = '';
    let storeLetters = [];
    let storeNumbers = [];

    for(let text of textParts){

      if(text[0].toUpperCase() !== text[0]) {
        continue;
      }

      for(char of text){
        if(char.toUpperCase() === char) {
          if(isNaN(char)) {
            storeLetters.push(char);
          } else {
            storeNumbers.push(char);
          }
        }

      }
    }

    storeLetters = storeLetters.sort();
    storeNumbers = storeNumbers.sort();

    return [...storeLetters, ...storeNumbers].join('');
}

console.log(getPascalCases(example));