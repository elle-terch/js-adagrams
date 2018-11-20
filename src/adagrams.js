const Adagrams = {

    allLetters: {
      "A": 9,
      "B": 2,
      "C": 2,
      "D": 4,
      "E": 12,
      "F": 2,
      "G": 3,
      "H": 2,
      "I": 9,
      "J": 1,
      "K": 1,
      "L": 4,
      "M": 2,
      "N": 6,
      "O": 8,
      "P": 2,
      "Q": 1,
      "R": 6,
      "S": 4,
      "T": 6,
      "U": 4,
      "V": 2,
      "W": 2,
      "X": 1,
      "Y": 2,
      "Z": 1,
    },

    SCORE_CHART: {
      'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1, 'N': 1, 'R': 1, 'S': 1, 'T': 1,
      'D': 2, 'G': 2,
      'B': 3, 'C': 3, 'M': 3, 'P': 3,
      'F': 4, 'H': 4, 'V': 4, 'W': 4, 'Y': 4,
      'K': 5,
      'J': 8, 'X': 8,
      'Q': 10, 'Z': 10,
    },

    LENGTH_BONUS: 8,


    drawLetters() {

      const availableLetters = [];

      Object.entries(Adagrams.allLetters).forEach(([key, value]) => {
        for(let i = 1; i <= value; i += 1) {
          availableLetters.push(key);
        }
      });

      const drawnLetters = [];

      for(let j = 0; j<10; j += 1) {
        let random = availableLetters[Math.floor(Math.random() * availableLetters.length)];

        let randomIndex = availableLetters.indexOf(random);

        drawnLetters.push(availableLetters.splice(randomIndex, 1)[0]);
      }

      return drawnLetters;
    },


    // Object.entries(object2).forEach(([key, value]) => console.log(`${key}: ${value}`))

//     var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Kiwi");

    // [1,2,3].forEach(function(i) {
    //   something();
    // });


//     var foo = [];
//
// for (var i = 1; i <= N; i++) {
//    foo.push(i);
// }

//
//     const letters = this.allLetters.forEach(function(letter, count) {
//       let i = 0;
//       while (i < count) {
//
//       }
//
//
//
//       let i = 0;
// while (i < 10) {
//     console.log(`Iteration ${i}`);
//     i++;
// }
//
//     });
//
//     const letterPool = Object.entries(Adagrams.LETTER_COUNTS).reduce((letters, [count, letterSet]) => {
//       return letters + letterSet.repeat(count);
//     }, '').split('');
//     let letters = [];
//     for(let i = 0; i < 10; i++) {
//       const index = Math.floor(Math.random() * this.allLetters.length);
//       letters.push(this.allLetters.splice(index, 1)[0]); // Remove entry from letter_pool at index, add to letters array
//     }
//
//     return letters;
//   },


  // usesAvailableLetters(word, drawnLetters) {
  //   const letters = word.split('');
  //   const drawnCopy = drawnLetters.slice(0); // Create a copy of the drawn letters which we can modify
  //
  //   return letters.every((letter) => {
  //     const index = drawnCopy.indexOf(letter);
  //     if(index === -1) return false;
  //
  //     delete drawnCopy[index];
  //     return true;
  //   });
  // },

  // scoreWord(word) {
  //   return word.toUpperCase().split('').reduce((wordScore, letter) => {
  //     const letterScore = Adagrams.SCORE_CHART[letter];
  //     if(letterScore === undefined) {
  //       throw `${letter} is not in the English alphabet!`;
  //     }
  //
  //     return wordScore + letterScore;
  //   }, word.length < 7 ? 0 : Adagrams.LENGTH_BONUS);
  // },

  // highestScoreFrom(words) {
  //   // This operates on "scored words" which are { word, score } objects
  //   const comparer = (left, right) => {
  //     // Select the word with best score
  //     if(left.score > right.score) return left;
  //     if(left.score < right.score) return right;
  //
  //     // Return left if they have the same length
  //     if(left.word.length === right.word.length) return left;
  //
  //     // Return either if they have 10 letters
  //     if(left.word.length === 10) return left;
  //     if(right.word.length === 10) return right;
  //
  //     // Return the word with the fewest letters
  //     if(left.word.length < right.word.length) return left;
  //     return right;
  //   };
  //
  //   return words.map((word) => ({
  //     word,
  //     score: Adagrams.scoreWord(word),
  //   })).reduce(comparer);
  // },



};


// Do not remove this line or your tests will break!
export default Adagrams;
