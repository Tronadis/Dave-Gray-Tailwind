const initApp = () => {
	const mobileNavBtn = document.getElementById("mobile-nav-button");
	const mobileMenu = document.getElementById("mobile-menu");

	const toggleMenu = () => {
		mobileMenu.classList.toggle("hidden");
		mobileMenu.classList.toggle("flex");
		mobileNavBtn.classList.toggle("toggle-btn");
	};

	mobileNavBtn.addEventListener("click", toggleMenu);
	mobileMenu.addEventListener("click", toggleMenu);
};

document.addEventListener("DOMContentLoaded", initApp);
