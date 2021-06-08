$(function () {
	let lang = "mk";

	const container = $(".elements-container"),
		lanthanides = $(".lanthanides"),
		actinides = $(".actinides"),
		languageBtn = $(".language-btn"),
		languageChange = $(".language-change"),
		soundBtn = $(".sound-btn"),
		flagImg = $(".flag"),
		elementDetModal = $(".modal-element-details"),
		slickSlider = $(".slickk"),
		iframePage = $(".iframe-page"),
		iframe = $(".iframe"),
		searchInput = $(".search-input"),
		searchResults = $(".search-results"),
		searchContainer = $(".search-container"),
		closeModal = $("#closeModal"),
		aboutPage = $(".about-page"),
		closeAbout = $("#closeAbout"),
		openAbout = $("#openAbout"),
		openSearch = $("#openSearch"),
		closeSearch = $("#closeSearch"),
		closeIframe = $("#closeiFrame");

	const languageSource = {
		en: Elements,
		mk: ElementsMK,
	};

	//TRANSLATE DYNAMIC CONTENT
	function translateDynamicModalContent() {
		$("[data-id='name']").text(languageSource[lang][globalElementIdx].name);
		$("[data-id='summary']").text(languageSource[lang][globalElementIdx].summary);
	}
	//EMPTY SEARCH
	function emptySearchContainer() {
		searchInput.val("");
		searchResults.empty();
	}

	//CHANGE LANGUAGE==================================================
	languageBtn.on("click", function () {
		languageChange.fadeToggle();
	});
	languageChange.on("click", function (e) {
		e.preventDefault();
		switch (lang) {
			case "en":
				lang = "mk";
				flagImg.attr("src", "./images/enFlag.png");
				languageBtn.text("MK");
				$(this).fadeOut();
				translate();
				if (!elementDetModal.is(".invisible")) {
					translateDynamicModalContent();
				}
				break;

			case "mk":
				lang = "en";
				flagImg.attr("src", "./images/mkFlag.png");
				languageBtn.text("EN");
				$(this).fadeOut();
				translate();
				if (!elementDetModal.is(".invisible")) {
					translateDynamicModalContent();
				}
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

		languageSource[lang].forEach(el => {
			const { xpos, ypos, category, name, symbol, number, shells } = el;
			const xPosition = xpos == "down" || xpos == "sdown" ? "auto" : xpos;
			function createElementCard() {
				return `
				<div class="element ${category} ${name} ${symbol} elementGroup-${xPosition}" style="grid-column-start: ${xPosition}; grid-row-start: ${ypos};">
					<h3 class="symbol">${symbol}</h3>
					<p class="fullElementName">${name}</p>
					<span class="atomicNumber">${number ? number : ""}</span>
					<ul class = "shellsGroup">
					</ul>
				</div>
				`;
			}

			//ELEMENT SHELLS ADDING========================================
			function arrangeShells() {
				for (let i = 0; i < shells.length; i++) {
					$(`.${name} .shellsGroup`).append(`<li>${shells[i]}</li>`);
				}
			}
			//CHECKING IF LANTHANIDES/ACTINIDES============================
			if (number >= 57 && number <= 71) {
				lanthanides.append(createElementCard());
				arrangeShells();
			} else if (number >= 89 && number <= 103) {
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
				const elementIdx = $(this).find(".atomicNumber").text() - 1; //identifying element
				window.globalElementIdx = elementIdx; //Declaring global var for certain props in details modal
				const elementObj = languageSource[lang][elementIdx];

				//Adding data
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
				const { shells, images } = elementObj;
				$(".addDataLoop").empty();
				shells.forEach(shell => {
					$(".addDataLoop").append(`
					<li>${shell}</li>
					`);
				});
				slickSlider.empty();

				//IMAGE SLIDER
				images.forEach(img => {
					slickSlider.append(`
					<div class="imgCont">
							<img src="${img.src}" alt="" />
						</div>
					`);
				});

				slickSlider.slick({
					autoplay: true,
					infinite: true,
					dots: true,
				});
				elementDetModal.removeClass("invisible");
			}) //LABEL CLICK IFRAME
			.on("click", ".groupLabel", function (e) {
				e.stopPropagation();
				const labelIdx = $(this).text() - 1;
				iframePage.css("display", "block").hide().fadeIn();
				iframe.attr("src", iframeUrls[lang][labelIdx]);
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
	soundBtn.on("click", function () {
		if (soundOn) {
			soundOn = false;
			$(this).removeClass("fa-volume-up");
			$(".element").off("mouseenter");
		} else {
			soundOn = true;
			$(this).addClass("fa-volume-up");
			$(".element").on("mouseenter", function () {
				audio[0].play();
			});
		}
	});

	//OPENING/CLOSING BUTTONS FUNCTIONALITY
	closeModal.on("click", function () {
		elementDetModal.addClass("invisible");
		slickSlider.slick("unslick");
	});
	closeAbout.on("click", function () {
		aboutPage.fadeOut();
	});

	openAbout.on("click", function (e) {
		e.preventDefault();
		aboutPage.css("display", "flex").hide().fadeIn();
	});
	openSearch.on("click", function (e) {
		e.preventDefault();
		emptySearchContainer();
		searchContainer.fadeIn(50);
	});
	closeSearch.on("click", function () {
		emptySearchContainer();
		searchContainer.fadeOut(200);
	});
	closeIframe.on("click", function () {
		iframePage.fadeOut(500).attr("src", "");
		iframe.attr("src", "");
	});

	//SEARCH FUNCTIONALITY
	searchInput.on("keyup", function (e) {
		const searchQuery = e.target.value;

		const filteredSearchResults = languageSource[lang].filter(el => {
			const { symbol, name } = el;
			return (
				symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
				name.toLowerCase().includes(searchQuery.toLowerCase())
			);
		});
		searchResults.empty();

		filteredSearchResults.forEach(res => {
			searchResults.append(
				`<li class="search-list-item"  data-trigger="${res.symbol}">${res.symbol}</li>`
			);
		});
		filteredSearchResults.forEach(res => {
			searchResults.append(
				`<li class="search-list-item" data-trigger="${res.symbol}">${res.name}</li>`
			);
		});

		//opening element details page on result click
		$(".search-list-item").on("click", function () {
			const identifier = $(this).attr("data-trigger");
			const searchedElement = $(`.element.${identifier}`);
			searchedElement.trigger("click");
			closeSearch.trigger("click");
		});
		if (!$(this).val()) {
			searchResults.empty();
		}
	});
});
