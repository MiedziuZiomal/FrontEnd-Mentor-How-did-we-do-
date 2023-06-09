const ratePoints = document.querySelectorAll('.rate-box__ratings-item');
const thankYou = document.querySelector('.thank-you');
const front = document.querySelector('.front-card');
const submitBtn = document.querySelector('.submit');
const showRating = document.querySelector('.selected-option');

const chosenOptionHighlight = (e) => {
	const targetElement = e.target;
	const alreadyActive = document.querySelector(
		'.rate-box__ratings-item.active'
	);
	if (alreadyActive) {
		alreadyActive.classList.remove('active');
	}
	targetElement.classList.add('active');
};

const showThankYou = () => {
	front.style.display = 'none';
	thankYou.style.display = 'block';
};

const assignValue = (e) => {
	let x;
	x = e.target.textContent;
	showRating.textContent = x;
};


ratePoints.forEach((element) => {
	element.addEventListener('click', chosenOptionHighlight);
	element.addEventListener('click', assignValue);
});
submitBtn.addEventListener('click', showThankYou);
