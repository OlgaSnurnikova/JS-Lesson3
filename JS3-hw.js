// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let numbers=[1,158,15,86,100500,250];
// let text=['note','table','phone','book','text'];
// let allTypes=['text', 10, 500,false,true];
// console.log(numbers);
// console.log(text);
// console.log(allTypes);

// Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let array = [];
//
// for (let i=0; i<10; i++) {
//     array[i] =Math.round((Math.random()*1000));
// }
// console.log(array);

// let array = [];
// array[0]=26;
// array[1]=true;
// array[2]='books';
// array[3]='apple';
// array[4]='15';
// console.log(array);

// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// for (let i=0; i<10; i++) {
//     document.write(`<div>text</div>`)
// }
// for (let i=1; i<=10; i++) {
//     document.write(`<div>text ${i}</div>`)
// }
//
// let i=1;
// while (i<=20){
//     document.write(`<h1>hello okten</h1>`);
//     i++;
// }
// let i=1;
// while (i<=20){
//     document.write(`<h1>hello okten ${i}</h1>`);
//     i++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// / - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let arrayOfNumbers = [];
// for (let i=0; i<10; i++) {
//     arrayOfNumbers[i] =Math.round((Math.random()*100));
//     console.log(arrayOfNumbers[i]);
// }
// let arrayOfText = ['note','table','phone','book','text', 'evening', 'js lecture', 'friday', 'weekends', 'rain'];
// for (let i=0; i<arrayOfText.length; i++) {
//     console.log (arrayOfText[i])

// let arrayAllTypes = ['note','table',1,12,false, 'evening', 'js lecture', true, 'weekends', 'rain'];
// for (let i=0; i<arrayAllTypes.length; i++) {
//     console.log (arrayAllTypes[i])
// }
//
//
// for (let i=0; i<arrayAllTypes.length; i++) {
//     if (typeof arrayAllTypes[i]=== 'boolean')
//     console.log (arrayAllTypes[i])
// }
// for (let i=0; i<arrayAllTypes.length; i++) {
//     if (typeof arrayAllTypes[i]=== 'number')
//         console.log (arrayAllTypes[i])
// }
// for (let i=0; i<arrayAllTypes.length; i++) {
//     if (typeof arrayAllTypes[i]=== 'string')
//         console.log (arrayAllTypes[i])
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// let array = [];
// array[0]=100;
// array[1]=true;
// array[2]=2;
// array[3]='note';
// array[4]='mandarin';
// array[5]=5000;
// array[6]=100500;
// array[7]=false;
// array[8]='target';
// array[9]= {type: 'homework', task: 'js', number: 10}
// console.log(array)
// for (let i=0; i<array.length; i++) {
//     console.log(array[i])
// }
//
// for (let i=1; i<=10; i++) {
//     console.log(i)
//     document.write(i)
// }
// for (let i=1; i<=100; i++) {
//     console.log(i)
//     document.write(i)
// }
// for (let i=1; i<=100; i+=2) {
//     console.log(i)
//     document.write(i)
// }
// for (let i=1; i<=100; i++) {
//     if (i%2===0){
//         console.log(i)
//         document.write(i)
//     }
// }
// for (let i=1; i<=100; i++) {
//     if (i%2!==0){
//         console.log(i)
//         document.write(i)
//     }
// }