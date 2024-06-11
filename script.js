// Задание 1
// 1. Поиск в интернете (бесплатные api примеры)
// 2. Найти любые данные, на произвольную тему
// 3. Установить расширение в браузер “JSON viewer”
// 4. Пример найденного json объекта

//Задание 2
// 1. Создать файл data.js
// 2. Создать переменную dataInfo
// 3. Добавить несколько данных в dataInfo

// Задание 3
// 1. Создать файл index.html
// 2. Подключить data.js
// 3. Добавить блок <div class="content"></div>
// 4. Создать переменную data и добавить в нее JSON parse данные из
// файла data.js
// 5. Вывести в консоль объект data
// 6. С помощью foreach обойти массив data
// 7. Вывести все изображения из данных

// Задание 4
// 1. Создать все необходимые заголовки, параграфы изображения (из
//   данных json)
//   2. Добавить все содержимое в блок контент
//   3. Добавить стили при необходимости

const parseData = JSON.parse(data);
console.log(parseData);

const divEl = document.querySelector(".content");
parseData.forEach((item) => {
	divEl.insertAdjacentHTML(
		"beforeend",
		`
    <h2>${item.name}</h2>
    <p>${item.username}</p>
    <span>${item.email}</span>
    <span>${item.address.city}</span>
    `
	);
});
