// import nice-se 'nice-select';
import $ from 'jquery';

// eslint-disable-next-line no-unused-vars
import ScrollReveal from 'scrollreveal';

import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock/lib/bodyScrollLock.es6';

window.$ = $;
window.jquery = $;
window.jQuery = $;

require('jquery-nice-select/js/jquery.nice-select.min');


let slideUp = {
	delay: 50,
	easing: 'ease-in',
	interval: 116
};

ScrollReveal().reveal('.accordion', slideUp);

ScrollReveal().reveal('.experience__item', slideUp);

$(document).ready(function () {
	$('select').niceSelect();
});


$(document).ready(function () {
	$('.accordion__inner').click(function () {
		$(this).toggleClass('open').next().slideToggle(500);
		$('.accordion__inner').not(this).removeClass('open').next().slideUp(500);
	});
});


function mobileMenu() {
	let header = document.getElementById('header');
	let hamburger = document.getElementById('hamburger-btn');

	let headerNav = document.getElementById('header-nav');

	let state = false;

	hamburger.addEventListener('click', function () {
		if (state === false) {
			openMenu();
		} else {
			closeMenu();
		}
	});


	function openMenu() {
		header.classList.add('menu-open');
		hamburger.classList.add('active');
		disableBodyScroll(headerNav);
		state = true;
	}

	function closeMenu() {
		header.classList.remove('menu-open');
		hamburger.classList.remove('active');
		enableBodyScroll(headerNav);
		state = false;
	}
}

mobileMenu();


(function () {


	function trackScroll() {
		let scrolled = window.pageYOffset;
		if (scrolled > 200) {
			goTopBtn.classList.add('show');
		}
		if (scrolled < 200) {
			goTopBtn.classList.remove('show');
		}

	}

	function backToTop() {
		if (window.pageYOffset > 0) {
			window.scrollBy(0, -80);
			setTimeout(backToTop, 20);
		}
	}

	let goTopBtn = document.querySelector('.arrow-top__wrap');

	window.addEventListener('scroll', trackScroll);
	goTopBtn.addEventListener('click', backToTop);
})();
