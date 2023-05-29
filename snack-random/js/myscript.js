const firstNumber=Math.floor(Math.random()*5+1);
let secondNumber=Math.floor(Math.random()*5+1);
let thirdNumber=Math.floor(Math.random()*5+1);

function getRandomNumber(min,max){
    const numberList=[];
}

while(firstNumber==secondNumber || firstNumber==thirdNumber || secondNumber==thirdNumber){
    secondNumber=Math.floor(Math.random()*5);
    while(secondNumber==thirdNumber){
        thirdNumber==Math.floor(Math.random()*5);
        secondNumber!=thirdNumber;
    }
    secondNumber!=firstNumber;
}
console.log(firstNumber)
console.log(secondNumber)
console.log(thirdNumber)