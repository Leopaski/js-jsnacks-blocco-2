const raccoltaPeperoni =[];
const nOfPeperoni=10;
let pesotot=0;
for (let i=0;i<nOfPeperoni-1;i++){
    raccoltaPeperoni[i]=creaPeperone()
    pesotot= pesotot + raccoltaPeperoni[i].weight
}
function creaPeperone(){
    const randomNumber = Math.floor( Math.random() * ( 30 - 1 +1) + 1);
    const peperone={
        variety:['rosso','giallo','verde'],
        weight: randomNumber,
        lenght: randomNumber,
    }
    return peperone;
}
console.log(pesotot)
