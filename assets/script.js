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

const dots = document.querySelector(".dots")

for (let i = 0; i < slides.length; i++) {
	let dotSpan = document.createElement("span")
	dotSpan.classList.add("dot")
	dots.appendChild(dotSpan)
}

const sliderArrows = document.querySelectorAll(".arrow")
let dotItem = document.querySelectorAll(".dot")
dotItem[0].classList.add("dot_selected")

let currentImg = document.querySelector(".banner-img")
let currentTxt = document.querySelector(".banner-txt")
let currentId = 0

for (let i = 0; i < sliderArrows.length; i++) {
	let arrowClicked = sliderArrows[i]
	
	arrowClicked.addEventListener("click", (event) => {

		if (event.currentTarget.id === "sliderPrev") {
			dotItem[currentId].classList.remove("dot_selected")
			currentId--
			console.log(currentId)
			currentImg.src = `./assets/images/slideshow/${slides[currentId].image}`
			currentTxt.innerHTML = slides[currentId].tagLine
			dotItem[currentId].classList.add("dot_selected")
		} else {
			dotItem[currentId].classList.remove("dot_selected")
			currentId++
			console.log(currentId)
			currentImg.src = `./assets/images/slideshow/${slides[currentId].image}`
			currentTxt.innerHTML = slides[currentId].tagLine
			dotItem[currentId].classList.add("dot_selected")
		}

	})
}
