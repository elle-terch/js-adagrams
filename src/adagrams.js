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

    letterScores: {
      'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1, 'N': 1, 'R': 1, 'S': 1, 'T': 1,
      'D': 2, 'G': 2,
      'B': 3, 'C': 3, 'M': 3, 'P': 3,
      'F': 4, 'H': 4, 'V': 4, 'W': 4, 'Y': 4,
      'K': 5,
      'J': 8, 'X': 8,
      'Q': 10, 'Z': 10,
    },


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


    usesAvailableLetters(word, drawnLetters) {
      const letters = word.split('');
      const drawnLettersCopy = drawnLetters.slice(0);

      letters.forEach((letter) => {

        if (drawnLettersCopy.includes(letter)) {
          let index = drawnLettersCopy.indexOf(letter);

          drawnLettersCopy.splice(index, 1)[0];

        } else {

          return false;
        }
        return true;
      });
    },


    scoreWord(word) {

      let score = 0;

      const wordLetters = word.toUpperCase().split('');

      wordLetters.forEach((letter) => {

        score += Adagrams.letterScores[letter];

      });

      if (word.length >= 7) {
        score += 8;
      }

      return score;
    },



    highestScoreFrom(words) {
      const bestWord = (word1, word2) => {
        if(word1.score > word2.score) return word1;
        if(word1.score < word2.score) return word2;

        if(word1.word.length === word2.word.length) return word1;

        if(word1.word.length === 10) return word1;
        if(word2.word.length === 10) return word2;

        if(word1.word.length < word2.word.length) return word1;
        return word2;
      };

      return words.map((word) => ({
        word,
        score: Adagrams.scoreWord(word),
      })).reduce(bestWord);
    },


};


// Do not remove this line or your tests will break!
export default Adagrams;
