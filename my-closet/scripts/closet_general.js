const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

document.querySelector(".num-items-button").innerHTML=
  `1/${slides.length}`;

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;
nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
});

prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
});

function carousel() {
  // working with slides
  if (counter === slides.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = slides.length - 1;
  }

  document.querySelector(".num-items-button").innerHTML=
  `${counter+1}/${slides.length}`;
  // working with buttons

  if (counter < slides.length - 1) {
    nextBtn.style.display = "block";
  } 

  if (counter > 0) {
    prevBtn.style.display = "block";
  } 
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}



document.querySelector(".colourBtn").addEventListener("click", () => {
    const container = document.querySelector(".slider-container");

    const R=Math.floor(Math.random()*256);
    const G=Math.floor(Math.random()*256);
    const B=Math.floor(Math.random()*256);

    container.style.background=`rgb(${R},${G},${B})`;
})

document.querySelector(".resetBtn").addEventListener
("click", ()=>{
    document.querySelector(".slider-container").style.background=`rgb(255,255,255)`;
})
document.querySelector(".resetBtn-black").addEventListener
("click", ()=>{
    document.querySelector(".slider-container").style.background=`rgb(0,0,0)`;
})








const slides_lower = document.querySelectorAll(".slide-lower");
const nextBtn_lower = document.querySelector(".nextBtn-lower");
const prevBtn_lower = document.querySelector(".prevBtn-lower");

document.querySelector(".num-items-button-lower").innerHTML=
  `1/${slides.length}`;

slides_lower.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});
let counter_lower = 0;
nextBtn_lower.addEventListener("click", function () {
  counter_lower++;
  carousel_lower();
});

prevBtn_lower.addEventListener("click", function () {
  counter_lower--;
  carousel_lower();
});

function carousel_lower() {
  // working with slides
  if (counter_lower === slides_lower.length) {
    counter_lower = 0;
  }
  if (counter_lower < 0) {
    counter_lower = slides_lower.length - 1;
  }

  document.querySelector(".num-items-button-lower").innerHTML=
  `${counter_lower+1}/${slides_lower.length}`;
  // working with buttons

  if (counter_lower < slides_lower.length - 1) {
    nextBtn.style.display = "block";
  } 

  if (counter_lower > 0) {
    prevBtn_lower.style.display = "block";
  } 
  slides_lower.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter_lower * 100}%)`;
  });
}



document.querySelector(".colourBtn-lower").addEventListener("click", () => {
    const container = document.querySelector(".slider-container-lower");

    const R=Math.floor(Math.random()*256);
    const G=Math.floor(Math.random()*256);
    const B=Math.floor(Math.random()*256);

    container.style.background=`rgb(${R},${G},${B})`;
})

document.querySelector(".resetBtn-lower").addEventListener
("click", ()=>{
    document.querySelector(".slider-container-lower").style.background=`rgb(255,255,255)`;
})
document.querySelector(".resetBtn-black-lower").addEventListener
("click", ()=>{
    document.querySelector(".slider-container-lower").style.background=`rgb(0,0,0)`;
})

