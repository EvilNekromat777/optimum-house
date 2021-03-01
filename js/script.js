//Прокрутка в верх страницы при перезагрузке
$(document).ready(function(){
	$(this).scrollTop(0);
});


$('.slider').slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	adaptiveHeight: true
 });
// =============================================>
//https://jqueryui.com/tabs/

$( function() {
	$( "#selectable" ).selectable();
 } );

// =============================================>
 //Скрыть placeholder при клике
$(document).ready(function () {
	$('.form__input_name').focus(function () {
		$(this).data('placeholder', $(this).attr('placeholder'))
		$(this).attr('placeholder', '');
	});
	$('input').blur(function () {
		$(this).attr('placeholder', $(this).data('placeholder'));
	});
});

// =============================================>

//Переключение класса у кнопок
$('.mortgage__time-item').click(function(){
		$('.mortgage__time-item').removeClass('active');
		$(this).addClass('active');
});

$('.mortgage__item').click(function(){
	$('.mortgage__item').removeClass('active');
	$(this).addClass('active');
});

//=============================================>
$('.header__link').click(function(event){
	event.preventDefault();
	$('.header-plashka').removeClass('active');
	$('.header__link').removeClass('active');
	$('.banner1').removeClass('active');
	$(this).addClass('active');
});

$('.header__link_projects').click(function(){
	$('.header-plashka').addClass('active');
	$('.banner1').addClass('active');
});

//======================================================>

//Валидация формы
class FormValidator {
	constructor(config, formElement) {
		 this._formElement = formElement;
		 this._inputElement = config.inputElement;
		 this._config = config;
		 this._inputErrorClass = config.inputErrorClass;
		 this._errorClass = config.errorClass;
	}


	// функция "Показать ошибку"
	_showInputError(inputElement, errorMessage) {
		 const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
		 errorElement.textContent = errorMessage;
		 errorElement.classList.add(this._config.errorClass);
		 inputElement.classList.add(this._config.inputErrorClass);
	}

	// функция "Скрыть ошибку"
	_hideInputError(inputElement) {
		 const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
		 errorElement.textContent = '';
		 errorElement.classList.remove(this._config.errorClass);
		 inputElement.classList.remove(this._config.inputErrorClass);
	}

	// функция будет показывать и убирать ошибку
	_checkInputValidity(inputElement) {
		 const isInputValid = inputElement.validity.valid

		 if (!isInputValid) {
			  const errorMessage = inputElement.validationMessage;
			  this._showInputError(inputElement, errorMessage);
		 } else {
			  this._hideInputError(inputElement);
		 }
	}

	// Функция принимает массив полей
	_hasInvalidInput(inputList) {
		 // проходим по этому массиву методом some
		 return inputList.some((inputElement) => {
			  // Если поле не валидно, колбэк вернёт true
			  // Обход массива прекратится и вся фунцкция
			  // hasInvalidInput вернёт true
			  return !inputElement.validity.valid;
		 })
	};

	//функция, которая устанавливает обработчики событий
	_setEventListeners() {
		 const inputList = Array.from(this._formElement.querySelectorAll(this._config.inputElement)); // находим все инпуты

		 inputList.forEach((inputElement) => {
			  inputElement.addEventListener('input', () => {
					this._checkInputValidity(inputElement);
			  });
		 });
	};

	//создаем функцию валидации
	enableValidation = () => {
		 this._formElement.addEventListener('submit', (event) => {
			  event.preventDefault(); //останавливаем стандартное поведение браузера при нажатии на Submit
		 });

		 this._setEventListeners(this._formElement);
	};

}

const config = {
	formElement: '.form',
	inputElement: '.form__input',
	inputErrorClass: 'form__input-container_error',
	errorClass: 'form__error_active'
};
const form = document.querySelector('.form');
const formValidator = new FormValidator(config, form);
formValidator.enableValidation()

//=========================================================================>
//Маска телефона

function setCursorPosition(pos, e) {
	e.focus();
	if (e.setSelectionRange) e.setSelectionRange(pos, pos);
	else if (e.createTextRange) {
	  var range = e.createTextRange();
	  range.collapse(true);
	  range.moveEnd("character", pos);
	  range.moveStart("character", pos);
	  range.select()
	}
 }

 function mask(e) {
	//console.log('mask',e);
	var matrix = this.placeholder,// .defaultValue
		 i = 0,
		 def = matrix.replace(/\D/g, ""),
		 val = this.value.replace(/\D/g, "");
	def.length >= val.length && (val = def);
	matrix = matrix.replace(/[_\d]/g, function(a) {
	  return val.charAt(i++) || "_"
	});
	this.value = matrix;
	i = matrix.lastIndexOf(val.substr(-1));
	i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
	setCursorPosition(i, this)
 }
 window.addEventListener("DOMContentLoaded", function() {
	var input = document.querySelector("#online_phone");
	input.addEventListener("input", mask, false);
	input.focus();
	setCursorPosition(3, input);
 });

//Очищение формы при клике по сабмиту
 $('.button__mainform').click(function(){
	$('.form')[0].reset();
});
 
//=========================================================================>

