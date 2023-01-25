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
  element.firstElementChild.innerText = text;
}

hiThere.addEventListener("mouseenter", () =>  mouseEnterOrLeave(hiThere, "About", true));
hiThere.addEventListener("mouseleave", () =>  mouseEnterOrLeave(hiThere, "Hi There!"));
im.addEventListener("mouseenter", () => mouseEnterOrLeave(im, "Work", true));
im.addEventListener("mouseleave", () => mouseEnterOrLeave(im, "I'm"));
laura.addEventListener("mouseenter", () =>  mouseEnterOrLeave(laura, "Skills", true));
laura.addEventListener("mouseleave", () => mouseEnterOrLeave(laura, "Laura"));

//----- Function to manage the lenguage ----
const texts = [
  {
    id: "it7",
    eng: `I am a social media & web designer, passionate about what I do. \n I believe that even the impossible is possible. \n You put the limits!`,
    fra: `Je suis une marketing des médias sociaux et une conceptrice de sites Web, passionné par ce que je fais.\n Je crois que même l'impossible est possible.\n C'est vous qui fixez les limites !`
  },
  {
    id: "it8",
    eng: `Resume`,
    fra: `Curriculum Vitae`
  }
];
const checkBox = document.querySelector(".form-check input");
const alltexts = document.querySelectorAll(".translate");

const switchLenguage = () => {
  
   if (checkBox.checked) {
     
      mouseEnterOrLeave(hiThere, "À propos de moi", true);
      mouseEnterOrLeave(hiThere, "Bonjour");
      mouseEnterOrLeave(im, "Mon Travail", true);
      mouseEnterOrLeave(im, "Je suis");
      mouseEnterOrLeave(laura, "Compétences", true);
     
      hiThere.addEventListener("mouseenter", () =>  mouseEnterOrLeave(hiThere, "À propos de moi", true));
      hiThere.addEventListener("mouseleave", () =>  mouseEnterOrLeave(hiThere, "Bonjour"));
      im.addEventListener("mouseenter", () => mouseEnterOrLeave(im, "Mon Travail", true));
      im.addEventListener("mouseleave", () => mouseEnterOrLeave(im, "Je suis"));
      laura.addEventListener("mouseenter", () =>  mouseEnterOrLeave(laura, "Compétences", true));
          
   }else{
      mouseEnterOrLeave(hiThere, "About", true);
      mouseEnterOrLeave(hiThere, "Hi There!");
      mouseEnterOrLeave(im, "Work", true);
      mouseEnterOrLeave(im, "I'm");
      mouseEnterOrLeave(laura, "Skills", true);
         
     
      hiThere.addEventListener("mouseenter", () =>  mouseEnterOrLeave(hiThere, "About", true));
      hiThere.addEventListener("mouseleave", () =>  mouseEnterOrLeave(hiThere, "Hi There!"));
      im.addEventListener("mouseenter", () => mouseEnterOrLeave(im, "Work", true));
      im.addEventListener("mouseleave", () => mouseEnterOrLeave(im, "I'm"));
      laura.addEventListener("mouseenter", () =>  mouseEnterOrLeave(laura, "Skills", true));
   }
    
  [...alltexts].forEach((ele) => {
    let text = texts.find((txt) => ele.id === txt.id);
    if (checkBox.checked) {
      ele.innerText = text.fra;
    } else {
      ele.textContent = text.eng;
    }
  });
};

checkBox.addEventListener("change", switchLenguage);
