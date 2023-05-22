let firstWord=prompt('Insert the first word');
let secondWord=prompt('Insert a second word')

function wordMore (firstWord, secondWord){
    if (firstWord.length === secondWord.length){
        return (firstWord,secondWord)
    } else if (firstWord.length>secondWord.length){
        return (firstWord)
    } else {
        return(secondWord)
    }
}
console.log(wordMore())