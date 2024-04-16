import {data} from "./data.js";
import {involvedTemplate} from "./templates.js";

const screenWidth = window.innerWidth;
const backBtn = document.querySelector(".back-btn");
backBtn.addEventListener("click", (e) => {
	window.history.back();
});

if (screenWidth >= 1021) {
	let focusedButton = 0;
	const changeCredits = new Event("change-credits");
	const yearBtns = document.querySelectorAll(".year-btn");

	const creditsContainer = document.querySelector(".credits-container");
	creditsContainer.addEventListener("change-credits", (e) => {
		const creditsData = data[focusedButton];
		// Forming template
		const involvedHtml = involvedTemplate(creditsData["involved"]);
		e.target.innerHTML = `
			<span class="main-title">
          ${creditsData.year}
      </span>
			<span class="main-title">
	      ${creditsData.title}
	    </span>
	    <span class="main-subtitle">${creditsData.subtitle}</span>
	    <section class="involved">
	      ${involvedHtml}
	    </section>
		`;
	});

	yearBtns.forEach((button, indexButton) => {
		// hover animation
		button.addEventListener("mouseover", (e) => {
			button.style.backgroundColor = "#7a2a35";
		});

		button.addEventListener("mouseout", (e) => {
			if (focusedButton !== indexButton) {
				button.style.backgroundColor = "#5E2129";
			}
		});

		// Seleccionar primer botón del menú
		if (!Boolean(indexButton)) {
			button.style.backgroundColor = "#7a2a35";
		}

		button.addEventListener("click", (e) => {
			// Deseleccionar último botón seleccionado
			yearBtns[focusedButton].style.backgroundColor = "#5E2129";

			focusedButton = indexButton;
			e.target.style.backgroundColor = "#7a2a35";
			creditsContainer.dispatchEvent(changeCredits);
		});
	});	
}

if (screenWidth < 1021) {
	const creditsContainer = document.querySelector(".credits-container");
	const allInvolvedsString = data.map((creditsData, index, array) => {
		const involvedHtml = involvedTemplate(creditsData.involved);
		return `
			<span class="main-title">
          ${creditsData.year}
      </span>
			<span class="main-title">
	      ${creditsData.title}
	    </span>
	    <span class="main-subtitle">${creditsData.subtitle}</span>
	    <section class="involved">
	      ${involvedHtml}
	    </section>
		`;
	}).join("·");

	creditsContainer.innerHTML = allInvolvedsString;
}
