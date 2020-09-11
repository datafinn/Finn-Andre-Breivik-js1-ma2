// Question 1
const bodyElement = document.querySelector("body");
const bgButton = document.querySelector("#bg");

function greenBody() {
	bodyElement.style.backgroundColor = "green";
}

bgButton.addEventListener("click", greenBody);

// Question 2

const toggleButton = document.querySelector(".toggler");
const toggleDiv = document.querySelector(".togglee");

function addExtra() {
	toggleDiv.classList.toggle("extra");
}

toggleButton.addEventListener("click", addExtra);

// Question 3

const numberSelector = document.querySelector("select");
const pContainer = document.querySelector(".paragraphs-container");

numberSelector.onchange = function () {
	const chosenNumber = this.value;
	pHTML = "";
	for (i = 0; i < chosenNumber; i++) {
		pHTML += `<p class="content">${i + 1}</p>`;
	}
	pContainer.innerHTML = pHTML;
};

// Question 4

const inputField = document.querySelector("input");
const countContainer = document.querySelector(".char-count > b");

inputField.onkeyup = function () {
	const textLength = inputField.value.length;
	countContainer.innerHTML = textLength;
};

// Question 5

function handleScrolled() {
	const scrolledY = window.scrollY;
	if (scrolledY >= 35) {
		bodyElement.classList.add("highlight");
	} else {
		bodyElement.classList.remove("highlight");
	}
}

window.onscroll = handleScrolled;
