const hiThere = document.querySelector(".right-side .text-hi");
const im = document.querySelector(".right-side .text-im");
const laura = document.querySelector(".right-side .text-laura");


function mouseEnterOrLeave(element, text, enter=false) {
	if(enter){
		element.classList.remove("dynamicTitleOff");
		element.classList.add("dynamicTitleOn");
	}
	else{
		element.classList.remove("dynamicTitleOn");
		element.classList.add("dynamicTitleOff");
	}
	element.innerText = text;
}

hiThere.addEventListener("mouseenter", () => mouseEnterOrLeave(hiThere,"About", true))
im.addEventListener("mouseenter", () => mouseEnterOrLeave(im,"Work", true))
laura.addEventListener("mouseenter", () => mouseEnterOrLeave(laura,"Skills", true))

hiThere.addEventListener("mouseleave", () => mouseEnterOrLeave(hiThere,"Hi There!"))
im.addEventListener("mouseleave", () => mouseEnterOrLeave(im,"I'm"))
laura.addEventListener("mouseleave", () => mouseEnterOrLeave(laura,"Laura"))
