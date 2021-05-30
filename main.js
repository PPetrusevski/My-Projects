$(function () {
	const container = $(".elements-container");
	const lanthanides = $(".lanthanides");
	const actinides = $(".actinides");
	$(Elements).each((_, el) => {
		const xPosition = el.xpos == "down" || el.xpos == "sdown" ? "auto" : el.xpos;
		const yPosition = el.ypos;
		function createElementCard() {
			return `
      <div class="element ${el.category} ${el.name} elementGroup-${
				el.xpos
			}" style="grid-column-start: ${xPosition}; grid-row-start: ${yPosition};">
        <h3 class="symbol">${el.symbol}</h3>
        <p class="fullElementName">${el.name}</p>
        <span class="atomicNumber">${el.number ? el.number : ""}</span>
        <ul class = "shellsGroup">

        </ul>
      </div>
      `;
		}
		function arrangeShells() {
			for (let i = 0; i < el.shells.length; i++) {
				$(`.${el.name} .shellsGroup`).append(`<li>${el.shells[i]}</li>`);
			}
		}
		if (el.number >= 57 && el.number <= 71) {
			lanthanides.append(createElementCard());
			arrangeShells();
		} else if (el.number >= 89 && el.number <= 103) {
			actinides.append(createElementCard());
			arrangeShells();
		} else {
			container.append(createElementCard());
			arrangeShells();
		}
	});
	for (let i = 1; i <= 18; i++) {
		const elementsGroup = $(`.elementGroup-${i}`);
		const firstInGroup = $(elementsGroup[0]);
		// console.log(elementsGroup);
		firstInGroup.prepend(`<div class="groupLabel"><p>${i}</p></div>`);
	}

	$(".groupLabel")
		.on("mouseenter", function () {
			let groupHovered = $(this).text();
			$(`.elementGroup-${groupHovered}`).attr("id", "labelHovered");
		})
		.on("mouseleave", function () {
			let groupHovered = $(this).text();
			$(`.elementGroup-${groupHovered}`).removeAttr("id");
		});

	// const audio = $("#audio");
	// $(".element").on("mouseenter", function () {
	// 	audio[0].play();
	// });
	$("#closeModal").on("click", function () {
		$(".modal-element-details").fadeOut();
	});
	$("#closeAbout").on("click", function () {
		$(".about-page").fadeOut();
	});

	$("#openAbout").on("click", function (e) {
		e.preventDefault();
		$(".about-page").css("display", "flex").hide().fadeIn();
	});
	$("#openSearch").on("click", function (e) {
		e.preventDefault();
		$(".search-container").fadeIn(50);
	});
	$("#closeSearch").on("click", function () {
		$(".search-container").fadeOut(500);
	});
});
