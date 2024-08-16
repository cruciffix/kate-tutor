function modal() {
	let consult = document.getElementById('consult');
	let modal = document.querySelector('.modal');
	let modalBg = document.querySelector('.modal__bg');

	// Выставили модальное окно посередине
	modalBg.style.paddingLeft =
		window.innerWidth * 0.5 - modal.offsetWidth / 2 + 'px';
	modalBg.hidden = true;

	// При клике по кнопке
	consult.addEventListener('click', event => {
		event.preventDefault();
		document.body.style.overflow = 'hidden';

		// Координаты modal
		let coords = modal.getBoundingClientRect();

		let close = document.createElement('div');

		if (window.innerWidth < 576) {
			close.style.height = 17 + 'px';
			close.style.width = 17 + 'px';
		} else if (window.innerWidth < 768) {
			close.style.height = 22 + 'px';
			close.style.width = 22 + 'px';
		} else if (window.innerWidth < 992) {
			close.style.height = 25 + 'px';
			close.style.width = 25 + 'px';
		} else {
			close.style.height = 30 + 'px';
			close.style.width = 30 + 'px';
		}

		close.style.background = '#4D4D4D';
		close.style.position = 'absolute';
		close.style.top = coords.top + 15 + 'px';
		close.style.right = coords.right + 15 + 'px';
		close.style.borderRadius = 9 + 'px';
		// close.style.right = 0;

		modal.append(close);

		modalBg.hidden = false;

		close.addEventListener('click', event => {
			modalBg.hidden = true;
			document.body.style.overflow = '';
		});
	});
}

function sendMessage() {
	let modalInput = document.querySelector('.input');
	let sendA = document.querySelector('.sendMessage');
	let inputValue = '';
	modalInput.addEventListener('input', () => {
		inputValue = modalInput.value;
	});

	//  Привет!%20Я%20хочу%20купить%20печенье./
	let res = '';

	sendA.addEventListener('click', event => {
		// event.preventDefault();
		// console.log(inputValue);
		let arr = inputValue.trim().split(' ');
		arr.forEach((item, index) => {
			if (arr.length == 2) index == 0 ? (res = item) : (res += '%20' + item);
			else {
				if (index == 0) {
					res = item;
					return;
				} else if (index == arr.length - 1) {
					res += '%20' + item;
					return;
				}

				res += '%20' + item;
			}
			return;
		});
		sendA.href = 'https://wa.me/79083388325/?text=' + res;
	});
}

function navbar() {
	let close = document.querySelector('.close');
	let open = document.querySelector('.menu');
	let bg = document.querySelector('header');

	// Изначально крестик скрываем
	close.hidden = true;
	// Бургер открываем
	open.hidden = false;

	open.addEventListener('click', event => {
		// Для отображения заднего фона
		bg.style.marginLeft = 0 + 'px';

		// Когда меню открыто, то скроллить нельзя
		document.body.style.overflow = 'hidden';

		// Меняем закрытиый на незакрытый
		close.hidden = !close.hidden;
		open.hidden = !open.hidden;
		close.addEventListener('click', () => {
			// Когда меню закрыто, то скроллить можно
			document.body.style.overflow = '';

			close.hidden = !close.hidden;
			if (close.hidden != true) {
				close.hidden = true;
				open.hidden = false;
				return;
			}
			open.hidden = !open.hidden;

			// Смещаем задний фон обратно (убираем)
			bg.style.marginLeft = -bg.offsetWidth + 'px';
		});
	});
}

// Модальное окно
modal();
// Отправка сообщения в мессенджеры
sendMessage();

navbar();
