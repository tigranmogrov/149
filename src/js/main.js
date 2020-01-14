import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();
import AOS from 'aos';
import $ from 'jquery';



import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock/lib/bodyScrollLock.es6';

window.$ = $;
window.jquery = $;
window.jQuery = $;

require('jquery-nice-select/js/jquery.nice-select.min');




$(document).ready(function () {
	$('select').niceSelect();
});

function accordion() {
	$('#accordion .accordion__wrap.answer').hide();
	$('#accordion .accordion__item:first-child .accordion__wrap.answer').show();


	$('#accordion .accordion__wrap.question').click(function () {
		$(this).next().slideToggle();
		$('#accordion .accordion__wrap.question').not(this).next().slideUp();
	});
}


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
		disableBodyScroll(headerNav);
		headerNav.style.transition = '0.4s ease 0s';
		header.classList.add('menu-open');
		hamburger.classList.add('active');
		state = true;
		setTimeout(function () {
			headerNav.removeAttribute("style");
		}, 400)
	}

	function closeMenu() {
		headerNav.style.transition = '0.4s ease 0s';
		header.classList.remove('menu-open');
		hamburger.classList.remove('active');
		state = false;
		enableBodyScroll(headerNav);
		setTimeout(function () {
			headerNav.removeAttribute("style");
		}, 400)
	}
}

function scrollToTop() {
	let scrollToTopBtn = document.getElementById('scrollToTop');
	let footer = document.getElementById('footer');
	scrollToTopBtn.addEventListener('click', function (e) {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	});


	window.addEventListener('scroll', function () {
		if (window.pageYOffset > 200) {
			scrollToTopBtn.classList.add('visible');
		} else  {
			scrollToTopBtn.classList.remove('visible')
		}
		if ((footer.getBoundingClientRect().top - window.innerHeight)  >= 0) {
			scrollToTopBtn.classList.remove('absolute');
		} else {
			scrollToTopBtn.classList.add('absolute');
		}
	})

}


mobileMenu();
scrollToTop();
accordion();
AOS.init();

AOS.init({
	// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	offset: 120, // offset (in px) from the original trigger point
	delay: 0, // values from 0 to 3000, with step 50ms
	duration: 600, // values from 0 to 3000, with step 50ms
	easing: 'ease', // default easing for AOS animations
	once: false, // whether animation should happen only once - while scrolling down
	mirror: false, // whether elements should animate out while scrolling past them
	anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
