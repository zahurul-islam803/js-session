// function for number validation
// function add(a, b){
//   if(typeof a !== 'number' || typeof b !== 'number'){
//     return "please give me two number";
//   }
//   return a + b;
// }

// console.log(add(3, 4));


// function for array validation
// function sumArray(arr){
//   if(!Array.isArray(arr)){
//     return "please give me an Array";
//   }
//   let sum = 0;
//   for(let item of arr){
//     sum += item;
//   }
//   return sum;
// }

// const arr = [5,4,2,1,8,9];
// const result = sumArray(arr);
// console.log(result);


// function for find how many vowel in a sentence;
// function findVowel(s){
//   if(typeof s !== 'string'){
//     return "please provide me a string";
//   }
//   let vowel = 0;
//   let consonant = 0;
//   let space = 0;
//   let vowelArray = [];
//   for(let item of s){
//     item = item.toLocaleLowerCase();
//     if(item === 'a' || item === 'e' || item === 'i' || item === 'o' || item === 'u'){
//       vowel ++;
//       vowelArray.push(item);
//     }
//     else if(item !== " "){
//       consonant ++;
//     }
//     else{
//       space ++;
//     }
//   }
//   const obj = {
//     vowelCount : vowel,
//     consonantCount : consonant,
//     spaceCount : space,
//     vowelArray : vowelArray
//   }
//   return obj;
// }

// const sentence = "My country name is Bangladesh";
// const result = findVowel(sentence);
// console.log(result);


// function for taka to dollar convert
// function takaToDollar(taka){
//   const dollar = taka * 0.0091720196;
//   return dollar;
// }

// const taka = 1000;
// const getDollar = takaToDollar(taka);
// console.log(getDollar);


// function barbieKen(string){
//     string = string.length;
//     if(string % 2 === 0){
//       return 'Hi Ken';
//     }
//     else{
//       return 'Hi Barbie';
//     }
// }


// const result = barbieKen('barbie');
// console.log(result);
