(function ($) {
	"use strict";

	//========== PRELOADER ==========>
		$(window).on('load', function (event) {
			$('.preloader').delay(500).fadeOut(500);
		});
	//========== PRELOADER// ==========>

	//========== TESTIMONY SLIDER ==========>
		$('.tesimony-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
			arrows: false,
			fade: true,
			autoplay: true,
		});
	//========== TESTIMONY SLIDER// ==========>

	//========== FEATURE ANIMATION ==========>
	const progress = document.querySelectorAll(".circle-wrap");
	progress.forEach((item) => {
		window.addEventListener("scroll", () => {
		let innerHeight = window.innerHeight;
		if (item.getBoundingClientRect().top - innerHeight < 0) {
			item.classList.add('animated')
		}
		});
	});
	
	//========== FEATURE ANIMATION// ==========>
  
	// ========== COUNTER UP// ==========>
	const countings = document.querySelectorAll(".counting");
	const speed = 1500;
	countings.forEach((counting) => {
		let h = 0;
		const updateCount = () => {
			const target = +counting.getAttribute("data-target");
			const count = +counting.innerText;
			const inc = target / speed;
			if (count < target) {
			counting.innerText = Math.ceil(count + inc);
			setTimeout(updateCount, 1);
			} else {
			counting.innerText = target;
			}
		};

		window.addEventListener("scroll", () => {
			let countingTop = counting.getBoundingClientRect().top;
			if (countingTop <= window.innerHeight && h == 0) {
				updateCount();
				h = 1;
			}
		});

	});


	// DROPDOWN 
	const dropdown = document.querySelectorAll('.dropdown')
	dropdown.forEach(el => {
		let trigger = el.querySelector('.dropdown-trigger')
		trigger.addEventListener('click', ()=>{
			el.classList.toggle('active')
		})
		window.addEventListener('click', (e)=>{
			if (e.target != e.target.closest('.dropdown') && e.target != trigger) {
				el.classList.remove('active')
			}
		})
	});


})(jQuery);