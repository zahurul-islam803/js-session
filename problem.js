// includes function
// const pets = ['cat', 'dog', 'horse', 'mouse'];
// const result = pets.includes('dog');
// console.log(result);


// slice function
// const pets = ["cat", "dog", "horse", "mouse", "got", "cow"];
// const result = pets.slice(1, 3);
// console.log(result);

// splice function
// const  fruits = ['banana', 'apple', 'strawberry', 'dragon', 'orange', 'coconut'];
// fruits.splice(3,1,'grape');
// console.log(fruits);

// let fruits = ['apple', 'banana', 'grape'];
// fruits.splice(1, 0, 'orange', 'cherry');
// console.log(fruits); 

// object
// let person = {
//   name: 'zahurl',
//   age: 24,
//   address: 'Rajshahi',
//   phone: '0145032410'
// }

// for of function
// let keys = Object.keys(person);
// let values = Object.values(person);
// console.log(Object.values(person));
// for(let key of keys){
//   console.log(person[key]);
// }


// for in function
// let person = {
//   name: "zahurl",
//   age: 24,
//   address: "Rajshahi",
//   phone: "0145032510",
// };

// for(let i in person){
//   console.log(person[i]);
// }

// return function
// function number(x,y){
//   const total = x +y;
//   return total;
// }
// const result = number(3,4);
// console.log(result);


// function for sum
// function sumOfArray(arr){
//   let sum = 0;
//   for(let item of arr){
//     sum += item;
//   }
//   return sum;
// } 

// const number = [1,2,3,4,5,6];
// const result = sumOfArray(number);
// console.log(result);

// function for odd numbers sum
// function oddNumbers(arr){
//   let sum = 0;
//  for(let item of arr){
//   if(item % 2 === 1){
//     sum = sum + item;
//   }
//  }
//  return sum;
// }

// const numbers = [1,2,3,4,5,6,7,8,9,10,15];
// const total = oddNumbers(numbers);
// console.log(total);


// function for even numbers sum
// function oddNumbers(arr){
//   let sum = 0;
//  for(let item of arr){
//   if(item % 2 === 0){
//     sum = sum + item;
//   }
//  }
//  return sum;
// }

// const numbers = [1,2,3,4,5,6,7,8,9,10,15];
// const total = oddNumbers(numbers);
// console.log(total);


// amar nam zahurul, amar bari rajshahi, amar boyos 23.

// function information(info){
//   const sentence = 'amar nam ' + info.name + ',' + ' amar bari ' + info.address + ',' + ' amar boyos ' + info.age + '.';
//   return sentence;
// }

// const myInfo ={
//   name: 'zahurul',
//   address: 'rajshahi',
//   age: 23
// }

// const result = information(myInfo);
// console.log(result);

// factorial function
// function factorial(number){
//   if(number == 0 || number == 1){
//     return 1;
//   }
//   let result = 1;
//   for(let i = number; i >= 1; i--){
//     result *= i;
//   }
//   return result;
// }

// const num = (5);
// console.log(factorial(num));

// find largest number of array
// function largestNumber(x){
//   let largest = x[0];
//   for(let item of x){
//     if(item > largest){
//       largest = item;
//     }
//   }
//   return largest;
// }

// const arr = [5,12,7,15,2,40,8,4];
// const result = largestNumber(arr);
// console.log(result);


// find biggest friends name
function biggestFriends(friends){
  let biggest = friends[0];
  for(let item of friends){
    if (item.length > biggest.length) {
      biggest = item;
    }
  }
  return biggest;
}

const friends = ['zahurul', 'rassel', 'akram', 'mahim', 'mashiurrassel'];
const getBiggestName = biggestFriends(friends);
console.log(getBiggestName); 