$(function () {
	console.log($("[data-id='name']"));
	console.log($("[data-id='summary']"));
	let lang = "mk";
	const container = $(".elements-container");
	const lanthanides = $(".lanthanides");
	const actinides = $(".actinides");

	const languageSource = {
		en: Elements,
		mk: ElementsMK,
	};

	//TRANSLATE DYNAMIC CONTENT
	function translateDynamicModalContent() {
		$("[data-id='name']").text(languageSource[lang][globalElementIdx].name);
		$("[data-id='summary']").text(languageSource[lang][globalElementIdx].summary);
	}

	//CHANGE LANGUAGE==================================================
	$(".language-btn").on("click", function () {
		$(".language-change").fadeToggle();
	});
	$(".language-change").on("click", function (e) {
		e.preventDefault();
		switch (lang) {
			case "en":
				lang = "mk";
				$(".flag").attr("src", "./images/enFlag.png");
				$(".language-btn").text("MK");
				$(this).fadeOut();
				translate();
				translateDynamicModalContent();
				break;

			case "mk":
				lang = "en";
				$(".flag").attr("src", "./images/mkFlag.png");
				$(".language-btn").text("EN");
				$(this).fadeOut();
				translate();
				translateDynamicModalContent();
				break;
		}
	});
	//TRANSLATION FUNCTION============================================
	function translate() {
		renderTable();
		renderLabels();
		$(".tr").each(function () {
			const key = $(this).attr("key");
			const hasPlaceholder = $(this).attr("placeholder");
			if (hasPlaceholder) {
				$(this).attr("placeholder", languages[lang][key]);
			} else {
				$(this).text(languages[lang][key]);
			}
		});
	}
	//TABLE CREATING FUNCTION==========================================
	function renderTable() {
		$(".element").remove();

		//

		languageSource[lang].forEach(el => {
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
			//ELEMENT SHELLS ADDING========================================
			function arrangeShells() {
				for (let i = 0; i < el.shells.length; i++) {
					$(`.${el.name} .shellsGroup`).append(`<li>${el.shells[i]}</li>`);
				}
			}
			//CHECKING IF LANTHANIDES/ACTINIDES============================
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
		//ELEMENTS CLICK EVENT
		$(".element")
			.not(".Lanthanides, .Actinides, .Лантаниди, .Актиниди")
			.on("click", function () {
				const elementIdx = $(this).find(".atomicNumber").text() - 1;
				window.globalElementIdx = elementIdx;
				const elementObj = languageSource[lang][elementIdx];
				$(".addData").each(function () {
					const propName = $(this).attr("data-id");
					if ($(this).hasClass("round")) {
						$(this).text(Math.round(elementObj[propName] * 100) / 100);
					} else if (propName === "ionization_energies") {
						$(this).text(elementObj[propName].slice(0, 2) || "n/a");
					} else if (propName === "staticImage") {
						$(this).attr("src", elementObj[propName].src);
					} else {
						$(this).text(elementObj[propName] || "n/a");
					}
				});
				$(".addDataLoop").empty();
				elementObj.shells.forEach(shell => {
					$(".addDataLoop").append(`
					<li>${shell}</li>
					`);
				});
				$(".modal-element-details").removeClass("invisible");
			})
			.on("click", ".groupLabel", function (e) {
				e.stopPropagation();
				const labelIdx = $(this).text() - 1;
				$(".iframe-page").css("display", "block").hide().fadeIn();
				$(".iframe").attr("src", iframeUrls[lang][labelIdx]);
			});
	}
	renderTable();
	renderLabels();
	//GROUP LABELS RENDERING==========================================
	function renderLabels() {
		for (let i = 1; i <= 18; i++) {
			const elementsGroup = $(`.elementGroup-${i}`);
			const firstInGroup = $(elementsGroup[0]);
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
	}

	//SOUND ON HOVER==================================================
	const audio = $("#audio");
	let soundOn = false;
	$(".sound-btn").on("click", function () {
		if (soundOn) {
			soundOn = false;
			$(this).removeClass("fa-volume-up");
			$(".element").off("mouseenter");
		} else {
			soundOn = true;
		}
		if (soundOn) {
			$(this).addClass("fa-volume-up");
			$(".element").on("mouseenter", function () {
				audio[0].play();
			});
		}
	});

	//OPENING/CLOSING BUTTONS FUNCTIONALITY
	$("#closeModal").on("click", function () {
		$(".modal-element-details").addClass("invisible");
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
	$("#closeiFrame").on("click", function () {
		$(".iframe-page").fadeOut(500);
		$(".iframe-page").attr("src", "");
	});

	//IMAGE SLIDER
	// $(".modal-element-image-slider > img:gt(0)").hide();
	// const imgsNum = $(".modal-element-image-slider > img").length;
	// let counter = 0;
	// setInterval(function () {
	// 	const currentImg = $($(".modal-element-image-slider > img")[counter]);
	// 	const nextImg = $($(".modal-element-image-slider > img")[counter + 1]);
	// 	currentImg.hide();
	// 	nextImg.show();
	// 	counter++;
	// 	if (counter === imgsNum + 1) {
	// 		counter = 0;
	// 	}
	// 	console.log(counter);
	// }, 2000);
});
