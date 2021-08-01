
// //creates a random number 
// function getRandomNum(maxNum) {
//   return Math.random() * Math.floor(maxNum)
// };

//creates a random number between two numbers
function getRandomNumBetweenTwoNums(min, max) {
  return Math.random() * (max - min) + min;
};



export const generateNumbers = (numOfNums, lowNum, highNum) => {
  let bagOfNumbers = Array(numOfNums);

  for(let i = 0; i <= bagOfNumbers.length - 1; i++) {
    bagOfNumbers[i] = getRandomNumBetweenTwoNums(lowNum, highNum).toFixed(3)
  };

  return bagOfNumbers;
};



// console.log(`----here is the random cannabis weights----`, cannabisBasket)
// const reducer = (acc, val) => acc + val;


// const totalDreamBerry = cannabisBasket.reduce(reducer);
// console.log(`the total weight is, ${totalDreamBerry}`);