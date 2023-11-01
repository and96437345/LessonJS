// 1. Создайте кнопку, при нажатии на которую будет меняться текст внутри элемента <div>.
let textBtn = document.querySelector('.text-remake');
textBtn.addEventListener('click', () => {
    textBtn.innerHTML = 'Нажато';
});

// 2. Напишите скрипт, который добавляет новый элемент (например <li>) в список <ul> при клике на кнопку
let btnCreate = document.querySelector('.create')
let parent = document.querySelector('.table');
btnCreate.addEventListener('click', () => {
    let element = document.createElement('li');
    parent.append(element);
})

// 3. Реализуйте функцию, которая скрывает/показывает текстовый блок при клике на кнопку Показать/Скрыть.


const btn = document.querySelector(".btn");
const content = document.querySelector(".content");

btn.addEventListener("click", btnClick);

function btnClick() {
    console.log(content.classList);

    if (content.classList.contains("hidden")) {
        btn.textContent = "Скрыть элемент";
    } else {
        btn.textContent = "Показать элемент";
    }

    content.classList.toggle("hidden");
}

// 6. Реализуйте функцию, которая принимает массив чисел и возвращает новый массив, в котором все отрицательные числа заменены на 0.

let arrayNum = [1, -34, 67, 76, -45, -23];
let arrayNew = [];
function arrayZero(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            arrayNew.push(0);
        } else {
            arrayNew.push(array[i]);
        }
    }
    console.log(arrayNew)
}
arrayZero(arrayNum);

// 10. Создайте массив чисел и найдите максимальное и минимальное значение в этом массиве без использования встроенных функций

let arrayNumber = [254, 45, -35, 6, -2, -10, 76];
function maxMin(arr){
    let min = arr[0];
    let max = arr[0];
    for (let i=0 ; i<arr.length; i++) {
        if (arr[i]<min) min = arr[i];
        if (arr[i]>max) max = arr[i];
    }
    console.log(min);
    console.log(max);
}
maxMin(arrayNumber);











