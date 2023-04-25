const content = {
  english: {
    page1: {
      text1: "Hi There",
      text2: "I'm",
      text3: "Laura",
      text4: "About",
      text5: "Work",
      text6: "Skills",
      text7: "A social media & web designer, passionate about what I do",
      text8: "I believe that even the impossible is possible.",
      text9: "You put the limits!",
      text10: "Resume",
    },
    page2: {
      text1: "Multimedia Content",
      text2: "Websites",
      text3: "Paid Media",
      text4: "Campaign",
      text5:
        "The main objective of this advertising campaign on facebook was to reach potential customers with a low investment.",
      text6:
        "In this campaign, with an investment of $20 per week, we managed to reach 10,446 and 175 conversions",
      text7:
        "For five days, a conversion campaign was carried out on Facebook ads with the aim of finding potential customers and closing sales, the goal stipulated by the company was achieved.",
    },
    page3: {
      text1: "Design skills:",
      text2: "Seo Skills:",
      text3: "Certificates:",
      text4: "Download",
    },
  },
  french: {
    page1: {
      text1: "Bonjour",
      text2: "Je suis",
      text3: "Laura",
      text4: "À propos de moi",
      text5: "Mon Travail",
      text6: "Compétences",
      text7:
        "Je suis une marketing des médias sociaux et une conceptrice de sites Web, passionné par ce que je fais.",
      text8: "Je crois que même l'impossible est possible.",
      text9: "C'est vous qui fixez les limites !",
      text10: "Curriculum Vitae",
    },
    page2: {
      text1: "Contenu Multimédia",
      text2: "Sites Internet",
      text3: "Publicités",
      text4: "campagne publicitaire",
      text5:
        "L'objectif principal de cette campagne publicitaire sur Facebook était d'atteindre des clients potentiels avec un faible investissement.",
      text6:
        "Dans cette campagne, avec un investissement de $20  par semaine, nous avons réussi à atteindre 10,446 personnes et 175 conversions.",
      text7:
        "Pendant cinq jours, une campagne de conversion a été menée sur les annonces Facebook dans le but de trouver des clients potentiels et de conclure des ventes, l'objectif fixé par l'entreprise a été atteint.",
    },
    page3: {
      text1: "Compétences en design",
      text2: "Compétences en SEO",
      text3: "Certificates",
      text4: "Télécharger",
    },
  },
};

// ****

// console.log(content[lenguage]);
// ****

// *****************Logic for save in localstorage checkbox status*********************
const checkBox = document.querySelector(".form-check input");
const alltexts = document.querySelectorAll(".translate");

// variable who will take the value of the lenguage
let lenguage = "";

// first page load
let oldValue = localStorage.getItem("isFrench");
if (oldValue === "true") {
  checkBox.checked = true;
  lenguage = "french";
} else {
  lenguage = "english";
}

checkBox.addEventListener("change", () => {
  if (oldValue === "false") {
    localStorage.setItem("isFrench", true);
    lenguage = "french";
  } else {
    localStorage.setItem("isFrench", false);
    lenguage = "english";
  }
  location.reload();
});

// destructuring the pages
const { page1, page2, page3 } = content[lenguage];
const page = location.pathname.split(".")[0];
switch (page) {
  // Index******************
  case "/index":
    const hiThere = document.querySelector("#about .right-side .text-hi");
    const im = document.querySelector("#about .right-side .text-im");
    const laura = document.querySelector("#about .right-side .text-laura");
    const paragraph = document.querySelector("#about .right-side #paragraph");
    const button = document.querySelector("#about .right-side .hero-button");

    // in the first render
    hiThere.firstElementChild.innerText = page1.text1;
    im.firstElementChild.innerText = page1.text2;
    laura.firstElementChild.innerText = page1.text3;
    paragraph.innerHTML = `${page1.text7} <br/> ${page1.text8} <br/> <br/>${page1.text9}`;
    button.innerText = page1.text10;

    // function to apply effect to the text
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

    hiThere.addEventListener("mouseenter", () =>
      mouseEnterOrLeave(hiThere, page1.text4, true)
    );
    hiThere.addEventListener("mouseleave", () =>
      mouseEnterOrLeave(hiThere, page1.text1)
    );

    im.addEventListener("mouseenter", () =>
      mouseEnterOrLeave(im, page1.text5, true)
    );
    im.addEventListener("mouseleave", () => mouseEnterOrLeave(im, page1.text2));

    laura.addEventListener("mouseenter", () =>
      mouseEnterOrLeave(laura, page1.text6, true)
    );
    laura.addEventListener("mouseleave", () =>
      mouseEnterOrLeave(laura, page1.text3)
    );
    break;
  case "/work":
    document.querySelector("#work #nav-about").innerText = page1.text4;
    document.querySelector("#work #nav-work").innerText = page1.text5;
    document.querySelector("#work #nav-skills").innerText = page1.text6;
    document.querySelector("#work #p1").innerText = page2.text1;
    document.querySelector("#work #p2").innerText = page2.text2;
    document.querySelector("#work #p3").innerText = page2.text3;
    let campaigns = document.querySelectorAll("#work #p4");
    [...campaigns].forEach((e, i) => (e.innerText = `${page2.text4} ${i + 1}`));
    document.querySelector("#work #p5").innerText = page2.text5;
    document.querySelector("#work #p6").innerText = page2.text6;
    document.querySelector("#work #p7").innerText = page2.text7;

    break;
  case "/skills":
    document.querySelector("#skills #nav-about").innerText = page1.text4;
    document.querySelector("#skills #nav-work").innerText = page1.text5;
    document.querySelector("#skills #nav-skills").innerText = page1.text6;
    document.querySelector("#skills #p1").innerText = page3.text1;
    document.querySelector("#skills #p2").innerText = page3.text2;
    document.querySelector("#skills #p3").innerText = page3.text3;
    let dowload = document.querySelectorAll("#skills #p4");
    [...dowload].forEach((e) => (e.innerText = page3.text4));
    break;
  default:
    break;
}
