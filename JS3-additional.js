// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

let arrayA=[];
for (let i=0; i<50; i++){
    let x=Math.round((Math.random()*1000));
    if (x % 2 === 0){
        arrayA[i]=x;
} else {
        arrayA[i]=x+1;
    }
}
console.log(arrayA);

let arrayB=[];
for (let i=0; i<50; i++){
    let x=Math.round((Math.random()*1000));
    if (x % 2 !== 0){
        arrayB[i]=x;
    } else {
        arrayB[i]=x+1;
    }
}
console.log(arrayB);

let arrayC=[];
for (let i=0; i<20; i++){
        arrayC[i]=Math.round((Math.random()*1000));
}
console.log(arrayC);
let arrayD=[];
for (let i=0; i<20; i++){
    arrayD[i]=Math.round((Math.random()*724))+8;
}
console.log(arrayD);

// Вивести за допомогою console.log кожен третій елемен
for (let i=0; i<arrayD.length; i+=3){
     console.log(arrayD[i]);
}
// Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним
// (парний індект елементу).
for (let i=0; i<arrayD.length; i+=3){
    if (arrayD[i]%2===0) {
        console.log(arrayD[i]);
    }
}
//парне значення елементу
for (let i=0; i<arrayD.length; i++){
       if (arrayD[i]%2===0) {
        console.log(arrayD[i]);
    }
}
//Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let newArray =[];
for (let i=0; i<arrayD.length; i+=3){
       if (arrayD[i]%2===0) {
        newArray.push(arrayD[i])
    }
}
console.log(newArray)
// Вивести кожен елемент масиву, сусід справа якого є парним
let arrayExample=[ 1, 2, 3, 5, 7, 9, 56, 8, 67];
for (let i = 0; i < arrayExample.length; i++) {
if (arrayExample[i+1]%2===0){
    console.log(arrayExample[i])
}
}

// Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

let values=[100,250,50,168,120,345,188];
let sum=0;
for (let i = 0; i < values.length; i++) {
    sum=sum+values[i];
}
console.log(sum/values.length);

// Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

let arrayRandom=[];
for (let i=0; i<20; i++){
    arrayRandom[i]=Math.round((Math.random()*500));
}
console.log(arrayRandom);
let newArrayRandom=[];
for (let i = 0; i <arrayRandom.length; i++) {
    newArrayRandom.push(arrayRandom[i]*5)
}
console.log(newArrayRandom);
// Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому,
// і якщо елемент є числом - додати його в інший масив.
let arrayBigger=[1,10,'vasya',42,'petya', true, 'masha', 500, 800];
let arraySmaller=[];
for (let i = 0; i < arrayBigger.length; i++) {
    if (typeof arrayBigger[i]==='number'){
        arraySmaller.push(arrayBigger[i])
    }
}
console.log(arraySmaller);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let arrayOfTenNumbers=[];
for (let i=0; i<10; i++){
    arrayOfTenNumbers[i]=Math.round((Math.random()*500));
}
console.log(arrayOfTenNumbers);
for (let i = 0; i < arrayOfTenNumbers.length; i++) {
    if(arrayOfTenNumbers[i]%2===0){
        console.log(arrayOfTenNumbers[i])
    }
}
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
//     За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let emptyArray=[];

for (let i = 0; i < arrayOfTenNumbers.length; i++) {
    emptyArray.push(arrayOfTenNumbers[i])
}
console.log(emptyArray);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

 let lettersArray =[ 'a', 'b', 'c'];
 let word='';
for (let i = 0; i < lettersArray.length; i++) {
    word=word+lettersArray[i];
}
 console.log(word);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let arrayOfLetters =  ['a', 'b', 'c'];
let word2='';
let n=0;
while (n<arrayOfLetters.length){
    word2=word2+arrayOfLetters[n];
    n++;
}
console.log(word2);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let arrayLetter =  ['a', 'b', 'c'];
let word3='';
for (let a of arrayLetter){
    word3=word3+a;
}
console.log(word3);

