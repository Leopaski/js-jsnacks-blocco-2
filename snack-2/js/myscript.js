const winnerNumber = parseInt(Math.random()*100);
let userNumber = parseInt(prompt('Try to guess the lucky number'));
let counter=1;
while (userNumber!=winnerNumber){
    counter=counter+1;
    if (winnerNumber>userNumber){
        userNumber = parseInt(prompt('Try to guess the lucky number, bigger'))
    } else {
        userNumber = parseInt(prompt('Try to guess the lucky numbe,smaller'))
    };
}
console.log('Finally you have get the lucky number');
console.log(winnerNumber);
console.log(counter);