var swiper = new Swiper('.mySwiper', {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})

// show and hide browser-category
var nav = document.getElementById('nav')
var browser = document.getElementById('browser-category')

function showMenu() {
	// nav.style.left = '0'
	nav.style.display = 'block'
	nav.style.backgroundColor = 'rgba(0, 0, 0, 0.9)'
}

function hideMenu() {
	// nav.style.left = '-400px'
	nav.style.display = 'none'
}
