// Подключаем сервер express
const express = require('express');

// Запускаем express сервер
// Запускаем express в виде функции
const app = express();
app.set('view engine', 'ejs');

// Подключаем статическую папку
app.use(express.static('public'));

// ПОдключаемся к БД sql2
const mysql2 = require('mysql2/promise');

// Создаем ПУЛЛ, который позволяет подключаться к БД только тогда когда нам нужно
// В createPool(obj) идет obj с параметрами подключения к БД
const pool = mysql2.createPool({
	host: 'localhost',
	user: 'root',
	database: 'kate_tutor',
	password: '',
});

// Подключаем body-parser, который нужен чтобы брать значения
// из полей из формы
const bodyParser = require('body-parser');

// Отрисовываем главную страницу

app.get('/', async function (req, res) {
	let data = await pool.query('SELECT * FROM menu');
	let items = await pool.query('SELECT * FROM section2_item');
	let section4 = await pool.query('SELECT * FROM stages');
	let [section6] = await pool.query('SELECT * FROM section6_messengers');
	let [section7] = await pool.query('SELECT * FROM section7_items');
	let [section8] = await pool.query('SELECT * FROM section8_rating');
	let arrForRenderFeedback = [0, 1];

	// Отрисовываем страницу index.ejs и цепляем туда БД
	res.render('index.ejs', {
		data,
		items,
		section4,
		section6,
		section7,
		section8,
		arrForRenderFeedback,
	});
});

app.get('/about-lessons', async function (req, res) {
	let data = await pool.query('SELECT * FROM menu');
	let [section6] = await pool.query('SELECT * FROM section6_messengers');
	console.log(data, section6);
	res.render('about_lessons.ejs', { data, section6 });
});

// http://localhost:3002/about-lessons
// http://localhost:3002/about_lessons

// Для использования body-parser используем app.use
http: app.use(bodyParser.urlencoded());
const port = process.env.PORT || 3002;
// Колбек выведится тогда, когда сервак уже запущен
app.listen(port, function () {
	console.log('localhost:' + port);
	console.log('Сервер запущен');
	console.log('localhost/phpmyadmin');
});
