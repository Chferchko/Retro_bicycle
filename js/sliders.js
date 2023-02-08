// Slider-certificate options
	var swiper = new Swiper(".social__slider", {
		
		pagination: {  // пагинация
			el: '.swiper-pagination',
			type: 'bullets', // вид пагинации, значения: 'bullets' (по-умолчанию) - точки; 'fraction' - 1/N; 'progressbar' - полоска прогресса
			clickable: true, // кликабельные буллеты
			/* dynamicBullets: true, */ // динамический размер буллетов
			/* renderBullet: function (index, className) { // кастомный вывод буллетов (с номером слайда внутри)
				return '<span class="' + className + '">' + (index + 1) + '</span>';
			},
			renderFraction: function (currentClass, totalClass) { // кастомный вывод фракции (со словами "фото 1 из N")
				return 'Фото <span class="' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>';
			},			 */
		},

		centeredSlides: true, // Активный слайд по центру

		speed: 800, // скорость смены слайда

		slidesPerGroup: 1, // Количество пролистываемых слайдов

		/* width: 1080, */ // ширина одного слайда

		slidesPerView: 1, // Количество слайдов для показа

		spaceBetween: 1080, // Отступ между слайдами

		grabCursor: true, // курсор "хватка"

		/* navigation { // стрелки навигации
			nextEl: '.swiper-button-next', // можно использовать к любым объектам, при килике на которые будут переключаться слайды
			prevE1: '.swiper-button-prev'
		},

		scrollbar: { // навигация по слайдеру с помощью скролла
			el: '.swiper-scrollbar',
			draggable: true, // возможность перетаскивать скролл
		},

		simulateTouch: true, // вкл. свайп на ПК

		touchRatio: 1, // чувствительность свайпа (0 - отключит свайп на всех устройствах)

		touchAngle: 45, // угол срабатывания свайпа

		slideToClickedSlide: true, // переключени при клике на слайд

		hashNavigation: {	// навигация по хэшу (свои адреса слайдов)
			watchState: true, // отслеживать состояние
		},

		keyboard: { // управление клавиатурой
			enabled: true, // включить, выключить
			onlyInViewport: true, // только когда слайдер в пределах вьюпорта (видимо частий страницы)
			pageUpDown: true, // возможность переключения слайдов с помощью клавиш PageUp PageDown
		},

		mousewheel: { // Управление колесом мыши			
			sensitivity: 1, // Чувствительность колеса мыши			
			eventsTarget: ".image-slider", // Класс объекта на котором будет срабатывать прокрутка мышью
		},

		autoHeight: true, // Автовысота (высота всего слайдера будет подстраиваться под высоту конкретного слайда)

		watchOverflow: true, // Отключение функционала если слайдов меньше чем нужно

		initialSlide: 0, // Стартовый слайд (по-умолчанию первым слайдом является - нулевой)

		slidesPerColumn: 2, // Мультирядность (необходимо отключить автовысоту, для всего слайдера и слайдов задать высоту)

		freeMode: true, // Свободный режим

		direction: 'horizontal', // Вертикальный слайдер (для корректного отображения можно задать высоту слайдера)

		// Эффекты переключения слайдов
		effect: 'slide', // Листание (по-умолчанию)

		effect: 'fade', // Cмена прозрачности
		fadeEffect: { // Параллельная смена прозрачности (хорошо подходит для вывода одного слайда на страницу)
			crossFade: true,
		},

		effect: 'flip', // Переворот
		flipEffect: {
			slideShadows: true, // Тень		
			limitRotation: true // Показ только активного слайда
		},
		
		effect: 'cube', // Куб
		cubeEffect: {
			slideShadows: true,  // Настройки тени
			shadow: true,
			shadowOffset: 20,
			shadowScale: 0.94
		},
		
		effect: 'coverflow', // Эффект потока
		coverflowEffect: {
			rotate: 20, // Угол
			stretch: 50, // Наложение
			slideShadows: true, // Тень
		},
		// -----------------------------

		breakpoints: { // Брейк поинты (адаптив)
			320: { // сработает для ширины - больше, чем указанное значение
				slidesPerView: 1,
			},
			480: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			}
		}, */

		/* loop: true, */ // бесконечность

		/* loopedSlides: 2.8, */ // количество дублирующих слайдов

		/* autoplay: { // автопрокрутка
			delay: 1500, // задержка автопрокрутки
			stopOnLastSlide: false, // остановка на последнем слайде
			disableOnInteraction: false, // остановка после ручного воздействия на слайдер
		}, */

	});

//Slider construction
	{/* <div class="swiper">
			<div class="swiper-wrapper">
				<div class="swiper-slide"></div>
				<div class="swiper-slide"></div>
				<div class="swiper-slide"></div>
			</div>
			
			<div class="swiper-pagination"></div>

			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>

			<div class="swiper-scrollbar"></div>
		</div> */}