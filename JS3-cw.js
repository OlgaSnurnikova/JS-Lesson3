// // зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// //     1. перебрати його циклом while
//
// let arrayOfNumbers = [2,17,13,6,22,31,45,66,100,-18];
// let i=0;
// while (i<arrayOfNumbers.length){
//     console.log(arrayOfNumbers[i])
//     i++
// }
// // перебрати його циклом for
// let arrayOfNumbers = [2,17,13,6,22,31,45,66,100,-18];
// for (let i=0; i<arrayOfNumbers.length; i++) {
//     console.log(arrayOfNumbers[i]);
// }
//
// перебрати циклом while та вивести  числа тільки з непарним індексом
// let arrayOfNumbers = [2,17,13,6,22,31,45,66,100,-18];
// let i=0;
// while (i<arrayOfNumbers.length){
//     let oddIndex = arrayOfNumbers[i];
//     if (oddIndex%2 !== 0){
//         console.log(oddIndex);
//     } i++;
// }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let arrayOfNumbers = [2,17,13,6,22,31,45,66,100,-18];
// for (let i=0; i<arrayOfNumbers.length; i++){
//         if (i%2 !== 0){
//         console.log(arrayOfNumbers[i]);
//     }
// }
// замінити кожне число кратне 3 на слово "okten"
// let arrayOfNumbers = [2,17,13,6,22,31,45,66,100,-18];
// for (let i=0; i<arrayOfNumbers.length; i++){
//         if (arrayOfNumbers[i]%3 === 0){
//             arrayOfNumbers[i]= 'okten';
//         console.log(arrayOfNumbers);
//     }
// }
// 8. вивести масив в зворотньому порядку.
// let arrayOfNumbers = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = arrayOfNumbers.length - 1; i >= 0; i--) {
//     const arrayOfNumber = arrayOfNumbers[i];
//     console.log(arrayOfNumbers[i])
// }
//
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// let arrayOfNumbers = [2,17,13,6,22,31,45,66,100,-18];
// let i=arrayOfNumbers.length-1;
// while (i>=0){
//     console.log(arrayOfNumbers[i])
//     i--
// }
//
// let arrayOfNumbers = [2,17,13,6,22,31,45,66,100,-18];
// let i=arrayOfNumbers.length-1;
// while (i>=0){
//     let oddIndex = arrayOfNumbers[i];
//     if (oddIndex%2 !== 0){
//         console.log(oddIndex);
//     } i--;
// }
// let arrayOfNumbers = [2,17,13,6,22,31,45,66,100,-18];
// for (let i=arrayOfNumbers.length-1; i>=0; i--) {
//     if (i % 2 !== 0) {
//         console.log(arrayOfNumbers[i]);
//     }
// }
// let arrayOfNumbers = [2,17,13,6,22,31,45,66,100,-18];
// for (let i=arrayOfNumbers.length-1; i>=0; i--){
//         if (arrayOfNumbers[i]%3 === 0){
//             arrayOfNumbers[i]= 'okten';
//         console.log(arrayOfNumbers);
//     }
// }