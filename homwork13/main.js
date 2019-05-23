
let namesArray = []

function nameadder()
{
    for(let i=0; i<5; i++){
        let name = prompt();
        namesArray.push(name)
    }
    return namesArray;
}

function biggerone(numbers){
   let biggest = [0], i=0;
 while( i < numbers.length )
    {
if (numbers[i] > biggest) {
    biggest = numbers[i]
}
i++
    } 
    return biggest
}
console.log(biggerone([22, 33, 44, 55, 78, 10, 32]));
 
function smollerone(numbers){
    let smollest = numbers[0], i=0;
  while( i < numbers.length )
     {
 if (numbers[i] < smollest) {
     smollest = numbers[i]
 }
 i++
     } 
     return smollest
 }
 console.log(smollerone([22, 33, 44, 55, 10, 4, 3, 21, 328]));
  

 function oddmaxmin(numbers){
 let biggest = [0],smollest = numbers[0], i=0;
 while( i < numbers.length )
    {
if (numbers[i] > biggest) {
    biggest = numbers[i]
}
i++
    } 
 i=0
  while( i < numbers.length )
     {
 if (numbers[i] < smollest) {
     smollest = numbers[i]
 }
 i++
     } 
     return smollest +biggest
 }
 console.log(oddmaxmin([22, 33, 44, 55, 10, 4, 3, 21, 328, 400]));


let counter =0,
 word = prompt("soz daxil edin"),
letter = prompt("herf daxil edin")

 function lettercounter() {
    let i =0
    while (i< word.length){
     if(word[i] == letter)
     {
     counter++
 }
 i++
     }
   return counter
}

console.log(counter);







 
