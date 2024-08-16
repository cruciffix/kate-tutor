function rollUpDown() {
	let section2Opens = document.querySelectorAll('.section_2__open');
	for (let i = 0; i < section2Opens.length; i++) section2Opens[i].hidden = true;

	let section2Wrapper = document.querySelector('.section_2__wrapper');

	section2Wrapper.addEventListener('click', function (event) {
		// Делегирование событий
		let target = event.target;
		if (target.classList[0] !== 'see__more') return;

		// Вычисляем какой порядковый номер у элемента

		let currentNumber = +target.className[target.className.length - 1];

		// При клике прячем "посмотреть дальше"
		// Вычитаем 1 т.к. в БД у нас айди начинаются с единицы
		// а в массивах, начинается все с нуля
		section2Opens[currentNumber - 1].hidden = false;

		// При клике показываем контент
		target.hidden = true;

		let rollingUpId = document.querySelector('.roll_up' + currentNumber);

		// Закрытие
		rollingUpId.addEventListener('click', function (event) {
			target.hidden = false;
			section2Opens[currentNumber - 1].hidden = true;
		});
	});

	// Выставляем раскрывающуюся секцию прям под секцией с картинкой
}
function messengers() {
	let section6ImgSettings = document.querySelectorAll(
		'.section_6__img-setting'
	);

	section6ImgSettings.forEach(el => {
		if (el.src.slice(47, 49) == 'vk') {
			if (window.innerWidth > 1800) {
				el.style.height = 11 + 'px';
				return;
			} else if (window.innerWidth > 577 && window.innerWidth < 768) {
				el.style.height = 4 + 'px';
				return;
			} else if (window.innerWidth > 769 && window.innerWidth < 992) {
				el.style.height = 5 + 'px';
				return;
			} else if (window.innerWidth > 993 && window.innerWidth < 1200) {
				el.style.height = 7 + 'px';
				return;
			}
			el.style.height = 6 + 'px';
		}
	});

	let section6ContentBody = document.querySelectorAll(
		'.section_6__content-body'
	);
	section6ContentBody.forEach(element => {});

	let section6AvaNamebeen = document.querySelectorAll(
		'.section_6__content__ava-name-been'
	);

	section6ContentBody.forEach((element, index) => {
		element.style.background = `url(/img/section_6_messengers/${section6[index].name}/bg.png) repeat-y`;
		element.style.backgroundSize = 'cover';
		element.style.backgroundPosition = 'center center';
	});

	// section6Student.forEach(nameSocial => {
	section6AvaNamebeen.forEach(element => {
		element.style.background = 'url(/img/section_6_messengers/)';

		if (element.id.slice(element.id.length - 2, element.id.length) == 'wp') {
			element.style.marginLeft = -40 + 'px';
			// console.log(
			// 	element.id.slice(element.id.length - 2, element.id.length) == 'wp'
			// );
		} else if (
			element.id.slice(element.id.length - 2, element.id.length) == 'tg'
		) {
			element.style.color = '#FFFFFF';
		}
	});
}
function slider() {
	// Это код слайдера
	let section8HorizontalLine = document.querySelector(
		'.section_8__horizontal-line'
	); // slider
	let section8Circle = document.querySelector('.section_8__circle'); // thumb
	let section8RatingSlider = document.querySelector(
		'.section_8__rating-slider'
	);

	// Выставляем линию горизнотальную  всегда посередине!

	function section8Slider() {
		let section8Circle = document.querySelectorAll('.section_8__circle'); // thumb
		let section8HorizontalLine = document.querySelectorAll(
			'.section_8__horizontal-line'
		);

		// Хранится самая высоко вложеная оболочка avito и profi
		let section8Place = document.querySelectorAll('.section_8__place');

		for (let i = 0; i < section8Circle.length; i++) {
			// Выравниваем ползунок по центру
			section8HorizontalLine[i].style.marginLeft =
				section8RatingSlider.offsetWidth / 2 -
				section8HorizontalLine[i].offsetWidth / 2 +
				'px';
			if (window.innerWidth < 574) {
				section8HorizontalLine[i].style.marginLeft = 0;
			}

			section8Circle[i].onmousedown = function (event) {
				event.preventDefault(); // предотвратить запуск выделения (действие браузера)

				let shiftX =
					event.clientX - section8Circle[i].getBoundingClientRect().left;
				// shiftY здесь не нужен, слайдер двигается только по горизонтали

				document.addEventListener('mousemove', onMouseMove);
				document.addEventListener('mouseup', onMouseUp);

				function onMouseMove(event) {
					let newLeft =
						event.clientX -
						shiftX -
						section8HorizontalLine[i].getBoundingClientRect().left;

					// курсор вышел из слайдера => оставить бегунок в его границах.
					if (newLeft < 0) {
						newLeft = 0;
					}
					let rightEdge =
						section8HorizontalLine[i].offsetWidth -
						section8Circle[i].offsetWidth;
					if (newLeft > rightEdge) {
						newLeft = rightEdge;
					}

					section8Circle[i].style.left = newLeft + 'px';

					// На сколько процентов мы прокрутили ползунок
					let leftCircle = parseFloat(section8Circle[i].style.left);
					let precent = Math.round(
						(leftCircle * 100) / (section8HorizontalLine[i].clientWidth - 30)
					);

					// Вот тут, вся движуха на счет прокрутки!!!!

					let section8Carousel = section8Place[i].querySelector(
						'.section_8__rainting-content'
					);
					// Собираем в кучу все отзывы
					// Это переменная, для вычисления размера 1 отзыва
					let section8WrapperContent = section8Carousel.querySelectorAll(
						'.section_8__wrapper-content'
					);

					// Работаем уже со сладером
					let fullCarouselWidthPx =
						// Чтоб не выходило за края
						section8WrapperContent[0].offsetWidth *
							section8WrapperContent.length -
						section8RatingSlider.offsetWidth +
						110;

					let offsetResult = (fullCarouselWidthPx * precent) / 100;
					// Чтоб не выходило за края

					section8Carousel.style.marginLeft = -offsetResult + 'px';
				}

				function onMouseUp() {
					document.removeEventListener('mouseup', onMouseUp);
					document.removeEventListener('mousemove', onMouseMove);
				}
			};

			section8Circle.ondragstart = function () {
				return false;
			};
		}
	}

	section8Slider();
}

function verticalCarousel() {
	// Обертка над оберткой, под которой будет все скрываться
	let contentWrapper = document.querySelector('.section_4__content-wrapper');

	// Обертка, непосредственно сразу над элементами
	let contentAboveElement = document.querySelector('.section_4__content');

	// Все элементы
	let elems = document.querySelectorAll('.section_4__content-container');

	// 1 элемент
	let elem = elems[0];

	// Кнопки вниз/вверх
	let up = document.querySelector('.section_4__up ');
	let down = document.querySelector('.section_4__down ');

	// Количество элементов, на которое мы будем передвигаться
	let count = 3;
	// Верхний отступ, заввисящий от размера экрана (мы его сами задаем)
	let marginTop = 30;

	if (window.innerWidth < 769) {
		count = 1;
		marginTop = 0;
	} else if (window.innerWidth < 1200) {
		count = 2;
		marginTop = 10;
	}
	// Количество px на которое мы будем смещать
	let px = 0;

	// Высота всех элементов
	let elemsHeight = elems.length * (elem.offsetHeight + marginTop);

	// Высота одного элемента
	let elemHeight = elem.offsetHeight;

	// Высота, на которую мы будем смещать (учитывается количество элементов и их высота) =>
	// Смещение = (высота элемента + верхний отступ) * количество элементов
	let offsetHeight = (elemHeight + marginTop) * count;

	// Зададим высоту оболочке, РОВНО НА COUNT элементов
	contentWrapper.style.height = offsetHeight + 'px';

	function moveItems(flag) {
		flag ? (px -= offsetHeight) : (px += offsetHeight);

		contentAboveElement.style.marginTop = px + 'px';

		// Првоерка, выходит ли за края
		if (flag) {
			if (
				parseInt(contentAboveElement.style.marginTop) <
				-elemsHeight + offsetHeight
			) {
				contentAboveElement.style.marginTop =
					-elemsHeight + offsetHeight + 'px';

				px = -elemsHeight + offsetHeight;
			}
		} else {
			if (parseInt(contentAboveElement.style.marginTop) > 0) {
				contentAboveElement.style.marginTop = 0;
				px = 0;
			}
		}
	}

	document
		.querySelector('.section_4__buttons')
		.addEventListener('click', event => {
			// debugger;
			if (
				event.target.classList[0] !== 'section_4__up' &&
				event.target.classList[0] !== 'section_4__down'
			)
				return;

			// Движение карусели
			event.target.classList[0] == 'section_4__down'
				? moveItems(true)
				: moveItems(false);
		});
}

// =========== SECTIION 2 =============
rollUpDown();
// =========== SECTIION 2 =============

// =========== SECTIION 4 =============
verticalCarousel();
// =========== SECTIION 4 =============

// =========== SECTIION 6 =============
messengers();
// =========== SECTIION 6 ============

// =========== SECTIION 8 =============
slider();
// =========== SECTIION 8 =============
