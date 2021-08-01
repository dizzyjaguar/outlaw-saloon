
// //creates a random number 
// function getRandomNum(maxNum) {
//   return Math.random() * Math.floor(maxNum)
// };

//creates a random number between two numbers
function getRandomNumBetweenTwoNums(min, max) {
  return Math.random() * (max - min) + min;
};

// console.log(getRandomNumBetweenTwoNums(4, 9));

// how many baskets
const cannabisBasket = Array(74);

// generate the numbers for each basket
// for(let i = 0; i <= cannabisBasket.length - 1; i++) {
//   cannabisBasket[i] = getRandomNumBetweenTwoNums(.3, 1.1)
// };

export const generateNumbers = (numOfNums, lowNum, highNum) => {
  let bagOfNumbers = Array(numOfNums);

  for(let i = 0; i <= bagOfNumbers.length - 1; i++) {
    bagOfNumbers[i] = getRandomNumBetweenTwoNums(lowNum, highNum)
  };

  return bagOfNumbers;
};



// console.log(`----here is the random cannabis weights----`, cannabisBasket)
// const reducer = (acc, val) => acc + val;


// const totalDreamBerry = cannabisBasket.reduce(reducer);
// console.log(`the total weight is, ${totalDreamBerry}`);