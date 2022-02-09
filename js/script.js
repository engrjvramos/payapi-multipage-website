// HAMBURGER MENU
const menuBtn = document.querySelector('.menu-btn');
const sideBar = document.querySelector('.sidebar');
const navigation = document.querySelector('.navigation');
const navItems = document.querySelectorAll('.nav-items a');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
	if (!menuOpen) {
		menuBtn.classList.add('open');
		menuOpen = true;
		sideBar.classList.add('active');
	} else {
		menuBtn.classList.remove('open');
		menuOpen = false;
		sideBar.classList.remove('active');
	}
});

navItems.forEach((navItem) => {
	navItem.addEventListener('click', () => {
		menuBtn.classList.remove('open');
		menuOpen = false;
		sideBar.classList.remove('active');
	});
});
