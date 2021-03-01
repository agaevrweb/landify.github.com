
window.onscroll = function showHeader() {
	var header = document.querySelector('.header');

	if(window.pageYOffset > 100) {
		header.classList.add('header_fixed');
	} else{
		header.classList.remove('header_fixed');
	}
}

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
	anchor.addEventListener("click", function(event){
		event.preventDefault();
		const blockID = anchor.getAttribute('href')
		document.querySelector('' + blockID).scrollIntoView({
		behavior: "smooth",
		block: "start"
		})
	})
}