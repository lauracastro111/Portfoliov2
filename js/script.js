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
