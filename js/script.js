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

// FORM VALIDATION

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const companyName = document.getElementById('company-name');
const title = document.getElementById('title');
const message = document.getElementById('message');
const submitBtn = document.getElementById('submit-btn');
const errorMsg1 = form.querySelector('.error-1');
const errorMsg2 = form.querySelector('.error-2');
const errorMsg3 = form.querySelector('.error-3');
const errorMsg4 = form.querySelector('.error-4');
const errorMsg5 = form.querySelector('.error-5');

const validateEmail = (email) => {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
};

function checkName() {
	const nameValue = username.value;

	if (nameValue === '') {
		errorMsg1.style.display = 'none';
		username.style.borderBottom = '1px solid var(--san-juan-blue)';
	} else {
		errorMsg1.style.display = 'none';
		username.style.borderBottom = '1px solid var(--success)';
	}
}

function checkEmail() {
	const emailValue = email.value;

	if (emailValue === '') {
		errorMsg2.style.display = 'none';
		email.style.borderBottom = '1px solid var(--san-juan-blue)';
	} else if (!validateEmail(emailValue)) {
		errorMsg2.style.display = 'block';
		errorMsg2.innerText = 'Email is not valid';
		email.style.borderBottom = '1px solid var(--error)';
	} else {
		errorMsg2.style.display = 'none';
		email.style.borderBottom = '1px solid var(--success)';
	}
}

function checkCompanyName() {
	const companyNameValue = companyName.value;

	if (companyNameValue === '') {
		errorMsg3.style.display = 'none';
		companyName.style.borderBottom = '1px solid var(--san-juan-blue)';
	} else {
		errorMsg3.style.display = 'none';
		companyName.style.borderBottom = '1px solid var(--success)';
	}
}

function checkTitle() {
	const titleValue = title.value;

	if (titleValue === '') {
		errorMsg4.style.display = 'none';
		title.style.borderBottom = '1px solid var(--san-juan-blue)';
	} else {
		errorMsg4.style.display = 'none';
		title.style.borderBottom = '1px solid var(--success)';
	}
}

function checkMessage() {
	const messageValue = message.value;

	if (messageValue === '') {
		errorMsg5.style.display = 'none';
		message.style.borderBottom = '1px solid var(--san-juan-blue)';
	} else {
		errorMsg5.style.display = 'none';
		message.style.borderBottom = '1px solid var(--success)';
	}
}

function checkInputs() {
	const nameValue = username.value;
	const emailValue = email.value;
	const companyValue = companyName.value;
	const titleValue = title.value;
	const messageValue = message.value;

	if (nameValue === '') {
		errorMsg1.style.display = 'block';
	}

	if (emailValue === '') {
		errorMsg2.style.display = 'block';
	}

	if (companyValue === '') {
		errorMsg3.style.display = 'block';
	}

	if (titleValue === '') {
		errorMsg4.style.display = 'block';
	}

	if (messageValue === '') {
		errorMsg5.style.display = 'block';
	}
}

username.addEventListener('input', checkName);
email.addEventListener('input', checkEmail);
companyName.addEventListener('input', checkCompanyName);
title.addEventListener('input', checkTitle);
message.addEventListener('input', checkMessage);

form.addEventListener('submit', function (e) {
	e.preventDefault();
	checkInputs();
});
