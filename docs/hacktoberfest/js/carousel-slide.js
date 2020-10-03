const imgs = ["img1.jpg", "img2.jpeg", "img3.jpg", "img4.jpg", "img5.jpg"];

const carouselSlide = document.querySelector(".carousel-slide");

getImg = (path, idName) => {
  const img = document.createElement("div");

  img.setAttribute(
    "style",
    "background-image: " + path
  );
  img.setAttribute("class", "divImg");

  if(idName) img.setAttribute("id", idName);
  return img;
}

initImgs = () => {
  imgs.forEach( img => {
    const divImg = getImg("url('./assets/img/carousel-images/" + img + "')", "")
    carouselSlide.appendChild(divImg);
  });
  
  const backgroundLast = carouselSlide.lastElementChild.style.backgroundImage;
  const backgroundFirst = carouselSlide.firstElementChild.style.backgroundImage;

  if (carouselSlide.childElementCount > 1) {
    carouselSlide.insertBefore(
      getImg(backgroundLast, "first"),
      carouselSlide.childNodes[0]
    );
    carouselSlide.appendChild(getImg(backgroundFirst, "last"));
  }  
}

initImgs();

const carouselImages = document.querySelectorAll(".carousel-slide div");

//buttons
const arrowLeft = document.querySelector("#arrow-left");
const arrowRight = document.querySelector("#arrow-right");

//counter
let counter = 0;
let size = carouselImages[0].clientWidth;

if (carouselImages.length > 1) {
  counter = 1;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
}

//Button listeners

arrowRight.addEventListener("click", () => {
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = "transform 1s ease-in-out";
  counter++;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

arrowLeft.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 1s ease-in-out";
  counter--;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

carouselSlide.addEventListener("transitionend", () => {
  if (carouselImages[counter].id === "last") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }

  if (carouselImages[counter].id === "first") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});

window.addEventListener(
  "resize",
  () => {
    size = carouselImages[0].clientWidth;
    carouselSlide.style.transition = "none";
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  },
  false
);
