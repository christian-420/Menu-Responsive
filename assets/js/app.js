const contenu = document.querySelector(".menu-container");
const menu = [...document.querySelectorAll(".navLinks-container li")];
const home = document.getElementById("home");
const about = document.getElementById("about");
const services = document.getElementById("services");
const ourstory = document.getElementById("ourstory");
const toggler = document.querySelector(".hamburger");
const navLinksContainer = document.querySelector(".navLinks-container");

const toggleNav = e => {
	toggler.classList.toggle("open");
	navLinksContainer.classList.toggle("open");
}

toggler.addEventListener("click", toggleNav)

$(document).ready(function () {
	$(home).hide();
	$(about).hide();
	$(ourstory).hide();
	$(services).hide();

	const showId = function (e) {
		let menuId = menu.indexOf(e.target)
		if (menuId === 0) {
			$(home).fadeIn(500);
			$(about).hide();
			$(ourstory).hide();
			$(services).hide();
		} else if (menuId === 1) {
			$(services).fadeIn(500);
			$(home).hide();
			$(about).hide();
			$(ourstory).hide();
		} else if (menuId === 2) {
			$(about).fadeIn(500);
			$(home).hide();
			$(services).hide();
			$(ourstory).hide();
		} else {
			$(ourstory).fadeIn(500);
			$(home).hide();
			$(services).hide();
			$(about).hide();
		}
	}

	menu.forEach((li) => {
		li.addEventListener("click", showId);
	});
});