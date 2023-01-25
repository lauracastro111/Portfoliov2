// ----Logic for Index.html page to manage the dynamic name-----
const hiThere = document.querySelector(".right-side .text-hi");
const im = document.querySelector(".right-side .text-im");
const laura = document.querySelector(".right-side .text-laura");

function mouseEnterOrLeave(element, text, enter = false) {
  if (enter) {
    element.classList.remove("dynamicTitleOff");
    element.classList.add("dynamicTitleOn");
  } else {
    element.classList.remove("dynamicTitleOn");
    element.classList.add("dynamicTitleOff");
  }
  element.innerText.firstElementChild = text;
}

hiThere.addEventListener("mouseenter", () =>
  mouseEnterOrLeave(hiThere, "About", true)
);
hiThere.addEventListener("mouseleave", () =>
  mouseEnterOrLeave(hiThere, "Hi There!")
);
im.addEventListener("mouseenter", () => mouseEnterOrLeave(im, "Work", true));
im.addEventListener("mouseleave", () => mouseEnterOrLeave(im, "I'm"));
laura.addEventListener("mouseenter", () =>
  mouseEnterOrLeave(laura, "Skills", true)
);
laura.addEventListener("mouseleave", () => mouseEnterOrLeave(laura, "Laura"));



//----- Function to manage the lenguage ----
const texts = [
  {
    id: "it7",
    eng: `I am a social media & web designer, passionate about what I do. <br /> I believe that even the impossible is possible. <br /> You put the limits!`,
    fra: `Je suis une marketing des médias sociaux et une conceptrice de sites Web, passionné par ce que je fais. <br /> Je crois que même l'impossible est possible. <br /> C'est vous qui fixez les limites !`
  }
];
const checkBox = document.querySelector(".form-check input");
const alltexts = document.querySelectorAll(".translate");

const switchLenguage = () => {
  [...alltexts].forEach((ele) => {
    let text = texts.find((txt) => ele.id === txt.id);
    if (checkBox.checked) {
      console.log("French");
      // ele.innerHtml = text.fra;
      ele.innerText = text.fra;
    } else {
      console.log("English");
      ele.innerText = text.eng;
    }
  });
};

checkBox.addEventListener("change", switchLenguage);
