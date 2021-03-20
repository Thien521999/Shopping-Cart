// const sumReduce = (numberList) => {
//     return numberList.reduce((sum,number) => {
//         const newSum = sum+number;
//     },0);
// };

// console.log(sumReduce([1,2,3,4,5]));

// const findWord = (wordList) => {
//   if (!Array.isArray(wordList) || wordList.length < 0) return null;

//   return wordList.reduce((theLongestWord, currentWord) => {
//     return theLongestWord.length > currentWord.length ? theLongestWord : currentWord;
//   }, wordList[0]);
// };
// const wordList = ["I", "love", "Messi"];
// console.log(findWord(wordList));

var arr1 = ["A1", "A2", "A3"];
var arr2 = ["B1", "B2", "B3"];
var arr3 = ["C1", "C2", "C3"];

for (var i = 0; i < arr1.length; i++) {
  for (var j = 0; j < arr2.lenth; j++) {
    for (var k = 0; k < arr3.lenth; k++) {
      var temp = [];
      temp.push(arr1[i]);
      temp.push(arr2[j]);
      temp.push(arr3[k]);
      console.log(temp);
    }
  }
}
