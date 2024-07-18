const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// affichage des bullet points
function createDots() {
	const dots = document.querySelector(".dots")

	for (let i = 0; i < slides.length; i++) {
		let dotSpan = document.createElement("span")
		dotSpan.classList.add("dot")
		dots.appendChild(dotSpan)
	}
}

// slider
function sliderImages() {
	createDots()

	const sliderArrows = document.querySelectorAll(".arrow")
	let dotItem = document.querySelectorAll(".dot")
	dotItem[0].classList.add("dot_selected")

	let currentImg = document.querySelector(".banner-img")
	let currentTxt = document.querySelector(".banner-txt")
	let currentId = 0

	for (let i = 0; i < sliderArrows.length; i++) {
		let arrowClicked = sliderArrows[i]
		
		arrowClicked.addEventListener("click", (event) => {
			dotItem[currentId].classList.remove("dot_selected")
			if (event.currentTarget.id === "sliderPrev") {
				if (currentId === 0) {
					currentId = 3
				} else {
					currentId--
				}
			} else {
				if (currentId === 3) {
					currentId = 0
				} else {
					currentId++
				}
			}
			currentImg.src = `./assets/images/slideshow/${slides[currentId].image}`
			currentTxt.innerHTML = slides[currentId].tagLine
			dotItem[currentId].classList.add("dot_selected")

			console.log(currentId)
		})
	}
}

