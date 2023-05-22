const numberList=[];
let i=0;
sum=0;
for(i=0;i<10;i++){
    numberList[i]=parseInt(prompt('Insert a number'))
    sum=sum+numberList[i]
}
const media= sum / numberList.length;
console.log(sum)
console.log(media.toFixed(2))


