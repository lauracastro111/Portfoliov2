const hiThere = document.querySelector(".right-side .text-hi");
const im = document.querySelector(".right-side .text-im");
const laura = document.querySelector(".right-side .text-laura");


hiThere.addEventListener("mouseenter", () => {
    hiThere.classList.remove("dynamicTitleOff")
    hiThere.classList.add("dynamicTitleOn")
    document.querySelector(".right-side .text-hi a").innerText = "About"
}
)
hiThere.addEventListener("mouseleave", () => {
    hiThere.classList.add("dynamicTitleOff")
    hiThere.classList.remove("dynamicTitleOn")
    document.querySelector(".right-side .text-hi a").innerText = "Hi There!"

})



im.addEventListener("mouseenter", () => {
    im.classList.remove("dynamicTitleOff")
    im.classList.add("dynamicTitleOn")
    document.querySelector(".right-side .text-im a").innerText = "Work"

}
)
im.addEventListener("mouseleave", () => {
    im.classList.add("dynamicTitleOff")
    im.classList.remove("dynamicTitleOn")
    document.querySelector(".right-side .text-im a").innerText = "I'm"

})
laura.addEventListener("mouseenter", () => {
    laura.classList.remove("dynamicTitleOff")
    laura.classList.add("dynamicTitleOn")
    document.querySelector(".right-side .text-laura a").innerText = "Skills"

}
)
laura.addEventListener("mouseleave", () => {
    laura.classList.add("dynamicTitleOff")
    laura.classList.remove("dynamicTitleOn")
    document.querySelector(".right-side .text-laura a").innerText = "Laura"

})


// script for cricle
const circles = document.querySelectorAll('.element')

const n = 6;  // numero de circulos
const r = 120 // radio

let angulo = 0;
let originX = circles[0].offsetLeft
let originY = circles[0].offsetTop

setInterval(() => {
 angulo += 0.01
 circles.forEach((element,i) =>{
 element.style.left = `${originX + r*Math.cos(angulo + 2*Math.PI/n*i)}px`
 element.style.top = `${originY + r*Math.sin(angulo + 2*Math.PI/n*i)}px`})
},20)