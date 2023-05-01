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


