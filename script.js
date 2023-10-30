// // Задание 1
// let n = 4;  
  
// function factorial(n) {  
//     let ans = 1;  
      
//     if(n === 0) 
//         return 1; 
//     for (let i = 2; i <= n; i++)  
//         ans = ans * i;  
//     return ans;  
// } 
// console.log(factorial(n));

// // Задание 2
// function isPrime(num) {
//     for (let i = 2; i < num; i++) {
//       if (num % i === 0) return false;
//     }
//     return num !== 1;
//   }
// let array = [];
//   function printPrimes(max) {
//     for (let i = 2; i <= max; i++) {
//       if (isPrime(i)) {
//         array.push(i);
//       };
//     }
//     console.log(array)
//   }
//   printPrimes(20);

//   // Задание 3

//   let str = "asloirasdjhfgkjas"; //строка
//   let vowels = "aeiouy"; //гласные
//   let pos, res = "";
//   let i = 0;
//   while (i < str.length) {
//     res += str[i];
//     if(vowels.indexOf(str[i]) > -1) {
//       i += 3;
//     } else {
//       i += 2;
//     }
//   }
//   console.log(res);

// Задание 1


// function sum(a, b) {
//     let a = +prompt('Введите первое число','');
//     let b = +prompt('Введите второе число','');
//     let sum = a + b;
//     alert(`Сумма ${sum}`);
// }
// sum(a,b);

// Задание 2

// function even(num) {
//     let res = num%2;
//     if (res == 0) {
//         return true;
//     } else return false;
// }
// alert(even(9));

// Задание 3

// let array = [3, -13, 56, 34, 98, -45]
// function max(array) {
//     let maxNum = array[0];
//     array.forEach(i => {
//         if (i > maxNum){
//             maxNum = i;
//         }
//     });
//     alert(maxNum);
// }
// max(array);

// Задание 4

// let str = 'flasdikfhlksjdhfikusyd'
// function strLength(str) {
//     let length = str.length;
//     alert(length);
// }
// strLength(str);

// Задание 5

// function random(dia) {
//     let ran = Math.random() * dia;
//     ran = Math.round(ran);
//     alert(ran);
// }
// random(100);

// Задание 6

// function tab(num){
//     for (let i = 1; i<10; i ++ ) {
//         pro = i*num;
//         console.log(`${i}*${num}=${pro}`)
//     }
// }
// tab(4);

// Задание 7

// function hello(name) {
//     alert('Hello '+ name)
// }
// hello('Иван');

// Задание 9


// function counterVowels(line){
//     line = line.toLowerCase();
//     counter = 0;
//     for(let i = 0; i<line.length; i++){
//         let char = line[i];
//         if (char == 'a' ||  char == 'e' || char == 'i' || char == 'o' || char == 'u'){
//             counter++;
//         } 
//     }
//     console.log(counter)
// }
// counterVowels('sdhfglsikglaeeeeeksgleeeekjsdh')


// function strReverse(str){
//     str = str.split('').reverse().join('');
//     console.log(str)
// }
// strReverse('Привет');

















