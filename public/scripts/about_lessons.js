function carousel() {
	// Карусель в About Lessons
	let tumblers = document.querySelector('.tumblers');
	let go = document.querySelector('.go');
	let back = document.querySelector('.back');

	let section1Carousel = document.querySelector('.section_1__carousel');
	let imgs = section1Carousel.querySelectorAll('img');

	// Начальное значение для смещения
	let offset = 0;

	let section1Circles = document.querySelector('.section_1__circles');
	let circles = section1Circles.querySelectorAll('div');

	// Повесим активный класс на первый кружочек
	let active = 0;
	circles[active].classList = 'section_1__active';

	// Ширина изображения a.k.a расстояние на которое мы будем прокручивать (400px)
	let imgOffsetWidth = imgs[0].offsetWidth;

	// Установим ширину section1Carousel
	section1Carousel.style.width = imgOffsetWidth * (imgs.length - 1) + 'px';

	// Функция, отвечающая за переключение section_1__active на кружочках под фото
	function toggleCircles(value) {
		// Если go -> смещаем img в лево
		// иначе вправо (если back)
		value === 'go' ? (offset -= imgOffsetWidth) : (offset += imgOffsetWidth);

		// Убираем класс section_1__active c предыдущего элемента
		circles[active].classList = '';

		// Если go -> то увеличиваем счетчик active для того, чтобы кружочки под фото менялись
		value === 'go' ? active++ : active--;

		// Тут мы не даем классу active не выходить за пределы (0 и length)
		if (value === 'go') {
			if (active >= circles.length - 1) {
				active = circles.length - 1;
			}
		} else {
			if (active < 0) {
				active = 0;
			}
		}

		// Присваиваем класс section_1__active следующему элементу
		circles[active].classList = 'section_1__active';
	}

	tumblers.addEventListener('click', function (event) {
		// Делегирование событий
		// Если не DIV с классами go || back, то return
		if (event.target.tagName !== 'DIV') return;

		// Переключение кружочков под фото в зависимости от нажатия кнопки
		event.target.className === go.className
			? toggleCircles(go.className)
			: toggleCircles(back.className);

		// Смещаем в право/в лево в зависимости от того go или back
		section1Carousel.style.marginLeft = offset + 'px';

		// Если выходит за границу, то стоп машина
		if (parseInt(section1Carousel.style.marginLeft) >= 0) {
			offset = 0;
			section1Carousel.style.marginLeft = offset + 'px';
		}
		if (
			parseInt(section1Carousel.style.marginLeft) <=
			(imgs.length - 1) * -imgOffsetWidth
		) {
			offset = (imgs.length - 2) * -imgOffsetWidth;
			section1Carousel.style.marginLeft = offset + 'px';
		}
	});
}

// Это код слайдера
function slider() {
	// Линяя сладйера
	let horizontalLine = document.querySelector('.horizontalLine');
	// Круг слайдера
	let circle = document.querySelector('.circle');

	// Width
	let section2Wrapper = document.querySelector('.section_2__wrapper');
	let section2WrapperWidth = section2Wrapper.offsetWidth;

	let section2Block2Row1Content = document.querySelector(
		'.section_2__block-2__row-1__content'
	);

	let section2 = document.querySelector('.section_2');

	// if  (window.innerWidth < )
	circle.addEventListener('mousedown', event => {
		// Теперь не выделяется
		event.preventDefault();

		// Сдвиг по X
		let offsetX = event.clientX - circle.getBoundingClientRect().left;

		document.addEventListener('mousemove', onMouseMove);
		document.addEventListener('mouseup', onMouseUp);

		let precent = 0;

		function onMouseMove(event) {
			let newLeft =
				event.clientX - offsetX - horizontalLine.getBoundingClientRect().left;

			// курсор вышел из слайдера => оставить бегунок в его границах.
			if (newLeft < 0) {
				newLeft = 0;
			}
			let rightEdge = horizontalLine.offsetWidth - circle.offsetWidth;
			if (newLeft > rightEdge) {
				newLeft = rightEdge;
			}

			circle.style.left = newLeft + 'px';

			// На сколько процентов мы прокрутили ползунок
			let leftCircle = parseFloat(circle.style.left);
			let precent = Math.round((leftCircle * 100) / horizontalLine.clientWidth);

			// Вот тут, вся движуха на счет прокрутки!!!!
			// Работаем со слайдером
			let fullCarouselWidthPx = -(
				section2Block2Row1Content.offsetWidth - section2Wrapper.offsetWidth
			);

			let offsetResult = (fullCarouselWidthPx * precent) / 100;
			// Чтобы не выходило за края
			section2Wrapper.style.marginLeft = -offsetResult + 'px';
		}

		function onMouseUp() {
			document.removeEventListener('mouseup', onMouseUp);
			document.removeEventListener('mousemove', onMouseMove);
		}
	});
}

// Это код счетчика

function counter() {
	let timeLessonsTeacherBlock = document.querySelectorAll(
		'.time_lessons_teacher__block'
	);

	function forTimer(values, elem) {
		let headline = elem.querySelector('h3');

		// Шаг
		let step = 0;
		let flag = 0;

		let timerId = setTimeout(function request() {
			step++;

			values == 0 ? (flag = 2600) : (flag = 1200);
			if (flag == 2600) if (step == 1) step = 1500;
			if (step > flag) {
				headline.innerHTML = flag + '+';
				clearTimeout(timerId);
				step = flag + '+';
				return;
			}

			headline.innerHTML = step;

			timerId = setTimeout(request, 0.5);
		}, 0.5);
	}
	timeLessonsTeacherBlock.forEach((elem, index) => {
		if (index == 0) {
			forTimer(0, elem);
		} else if (index == 1) {
			forTimer(1, elem);
		} else {
			elem.querySelector('h3').innerHTML = 1;
		}
	});
}



function modal(btn) {
	let consult = document.getElementById(btn);
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

// section 1
carousel();
// section 2
slider();
// Section 3
counter();

