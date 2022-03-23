// > 1300
const desktop = 1300;

let header = document.querySelector(".header");
let headerTop = document.querySelector(".header__top");
let headerBottom = document.querySelector(".header__bottom");
let logo = headerBottom.querySelector(".header__logo");
let links = document.querySelector(".header__links");
let menu = document.querySelector(".header__menu");
let lists = links.querySelectorAll(".header__links > li");
let anchors = links.querySelectorAll(".header__links a[href]");
let contactUs = document.querySelector(".header__links .contact-us");

for (let i = 0; i < lists.length; i++) {
	lists[i].onclick = () => {
		for (let j = 0; j < lists.length; j++) {
			if (lists[i] != lists[j]) {
				lists[j].classList.remove("active");
			}
		}
		
		lists[i].classList.toggle("active");
	}
}

for (var i = 0; i < anchors.length; i++) {
	anchors[i].onclick = () => {
		header.classList.remove("active");
		document.body.classList.remove("lock");

		for (let j = 0; j < lists.length; j++) {
			lists[j].classList.remove("active");
		}
	}
}

menu.onclick = () => {
	header.classList.toggle("active");
	document.body.classList.toggle("lock");

	for (let i = 0; i < lists.length; i++) {
		lists[i].classList.remove("active");
	}
}

let headerHeight;

window.onscroll = () => {
	if (this.innerWidth > (desktop - 1)) {
		headerHeight = header.offsetHeight;

		if (this.innerWidth < desktop) {
			headerHeight = 90;			
		}

		if (document.body.scrollTop > headerHeight || document.documentElement.scrollTop > headerHeight) {
			header.style.position = "fixed";
			headerTop.style.display = "none";
			headerBottom.style.justifyContent = "space-between";
			logo.style.display = "flex";
			contactUs.style.display = "flex";
		} else {
			header.style.position = "absolute";
			headerTop.style.display = "flex";
			headerBottom.style.justifyContent = "center";
			logo.style.display = "none";
			contactUs.style.display = "none";
		}
	}
}

let hero = document.querySelector(".hero");

window.onresize = () => {
	if (this.innerWidth > (desktop - 1)) {
		hero.style.marginTop = "196px";

		headerHeight = header.offsetHeight;

		if (this.innerWidth < desktop) {
			headerHeight = 90;			
		}
		
		if (document.body.scrollTop > headerHeight || document.documentElement.scrollTop > headerHeight) {
			header.style.position = "fixed";
			headerTop.style.display = "none";
			headerBottom.style.justifyContent = "space-between";
			logo.style.display = "flex";
			contactUs.style.display = "flex";
		} else {
			header.style.position = "absolute";
			headerTop.style.display = "flex";
			headerBottom.style.justifyContent = "center";
			logo.style.display = "none";
			contactUs.style.display = "none";
		}
	} else {
		hero.style.marginTop = "90px";

		header.style.position = "fixed";
		headerTop.style.display = "none";
		headerBottom.style.justifyContent = "space-between";
		logo.style.display = "flex";
		contactUs.style.display = "flex";
	}

	for (let i = 0; i < lists.length; i++) {
		lists[i].classList.remove("active");
	}

	header.classList.remove("active");
	document.body.classList.remove("lock");
}