// const sumReduce = (numberList) => {
//     return numberList.reduce((sum,number) => {
//         const newSum = sum+number;
//     },0);
// };

// console.log(sumReduce([1,2,3,4,5]));

const findWord = (wordList) => {
  if (!Array.isArray(wordList) || wordList.length < 0) return null;

  return wordList.reduce((theLongestWord, currentWord) => {
    return theLongestWord.length > currentWord.length ? theLongestWord : currentWord;
  }, wordList[0]);
};
const wordList = ["I", "love", "Messi"];
console.log(findWord(wordList));
