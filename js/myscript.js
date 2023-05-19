let fifty=[];
let sum=0;
let i=0;
while (sum < 50){
    fifty[i]=parseInt(prompt('inserisci un numero che vuoi sommare'));
    sum= fifty[i] + sum;
    i++
}
console.log(fifty);
console.log(sum);