import { closet, mannequins } from './items_list.js';
const newCloset = closet;
const newMannequins = mannequins;


window.addEventListener('DOMContentLoaded', () => {
  displayMannequin();
});

document.querySelector(".jacket").addEventListener('click', () => {
  displayClosetItems("jacket", "up");
  makeSlides();
})
document.querySelector(".tops").addEventListener('click', () => {
  displayClosetItems("tops", "up");
  makeSlides();
})
document.querySelector(".bottoms").addEventListener('click', () => {
  displayClosetItems("bottoms", "low");
  makeSlidesLower();
})

const mannequinId = 1;
const mannequinIdLower = 2;

function displayMannequin() {

  let mannequin;
  let mannequinLower;

  for (let i = 0; i < newMannequins.length; i++) {
    const id = newMannequins[i].id;
    if (id === mannequinId)
      mannequin = newMannequins[i];

    if (id === mannequinIdLower)
      mannequinLower = newMannequins[i];
  }

  document.querySelector('.mannequin-upper').innerHTML = `
  <img src=${mannequin.img} alt=${mannequin.title} class="photo">
  `;
  // document.querySelector('.mannequin-lower').innerHTML = `
  // <img src=${mannequinLower.img} alt=${mannequinLower.title} class="photo">
  // `;

}

function displayClosetItems(category, upOrLow = "up") {


  let display;
  if (upOrLow === "up") {
    display = newCloset.map((item) => {
      if (item.category === category) {
        return `<div class="slide"><img class="slide-img ${item.title} ${item.category}" src="${item.img}" alt="" /></div>
      `;
      }
    });
  } else {
    display = newCloset.map((item) => {
      if (item.category === category) {
        return `<div class="slide-lower"><img class="slide-img-lower ${item.title} ${item.category}" src="${item.img}" alt="" /></div>
      `;
      }
    });
  }
  display = display.join("");
  if (upOrLow === "up") {
    document.querySelector('#fitting-room .slider-container .items').
      innerHTML = display;
  } else {
    document.querySelector('#fitting-room-lower .slider-container-lower .items').
      innerHTML = display;
  }

}

// function displayMenuButtons() {
//   let categories = newCloset.reduce((values, item) => {
//     if (!values.includes(item.category)) {
//       values.push(item.category);
//     }
//     return values;
//   }, ['whole']);
//   categories = ['jacket'];
//   const categoryBtns = categories.map((category) => {
//     return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`;
//   }).join("");

//   document.querySelector(".filter-buttons-container").innerHTML = categoryBtns;

//   const filterBtns = document.querySelectorAll('.filter-btn');

//   //filter items

//   filterBtns.forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//       const category = e.currentTarget.dataset.id;
//       const itemCategory = newCloset.filter((closetItem) => {
//         return closetItem.category === category;

//       });
//       if (category === 'whole') {
//         displayClosetItems(newCloset);
//       } else {
//         displayClosetItems(itemCategory);
//       }
//   displayMenuButtons();
//   makeSlides();
//     })
//   })


// };


let slides = document.querySelectorAll(".slide");
let nextBtn = document.querySelector(".nextBtn");
let prevBtn = document.querySelector(".prevBtn");


let counter;

nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
});

prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
});

function makeSlides() {
  counter = 0;
  slides = document.querySelectorAll(".slide");

  nextBtn = document.querySelector(".nextBtn");
  prevBtn = document.querySelector(".prevBtn");
  document.querySelector(".num-items-button").innerHTML =
    `1/${slides.length}`;

  slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
  });

  
}


function carousel() {
  // working with slides
  if (counter === slides.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = slides.length - 1;
  }

  document.querySelector(".num-items-button").innerHTML =
    `${counter + 1}/${slides.length}`;
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



// document.querySelector(".colourBtn").addEventListener("click", () => {
//     const container = document.querySelector(".slider-container");

//     const R=Math.floor(Math.random()*256);
//     const G=Math.floor(Math.random()*256);
//     const B=Math.floor(Math.random()*256);

//     container.style.background=`rgb(${R},${G},${B})`;
// })

// document.querySelector(".resetBtn").addEventListener
// ("click", ()=>{
//     document.querySelector(".slider-container").style.background=`rgb(255,255,255)`;
// })
// document.querySelector(".resetBtn-black").addEventListener
// ("click", ()=>{
//     document.querySelector(".slider-container").style.background=`rgb(0,0,0)`;
// })

let slides_lower = document.querySelectorAll(".slide-lower");
let nextBtn_lower = document.querySelector("#fitting-room-lower .nextBtn");
let prevBtn_lower = document.querySelector("#fitting-room-lower .prevBtn");

let counter_lower;

nextBtn_lower.addEventListener("click", function () {
  counter_lower++;
  carousel_lower();
});

prevBtn_lower.addEventListener("click", function () {
  counter_lower--;
  carousel_lower();
});

function makeSlidesLower() {
  counter_lower = 0;
  
  slides_lower = document.querySelectorAll(".slide-lower");

  nextBtn = document.querySelector("#fitting-room-lower .nextBtn");
  prevBtn = document.querySelector("#fitting-room-lower .prevBtn");
  document.querySelector(".num-items-button-lower").innerHTML =
    `1/${slides_lower.length}`;


  slides_lower.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
  });
  
}

function carousel_lower() {
  // working with slides
  if (counter_lower === slides_lower.length) {
    counter_lower = 0;
  }
  if (counter_lower < 0) {
    counter_lower = slides_lower.length - 1;
  }

  document.querySelector(".num-items-button-lower").innerHTML =
    `${counter_lower + 1}/${slides_lower.length}`;
  // working with buttons

  if (counter_lower < slides_lower.length - 1) {
    nextBtn_lower.style.display = "block";
  }

  if (counter_lower > 0) {
    prevBtn_lower.style.display = "block";
  }
  slides_lower.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter_lower * 100}%)`;
  });
}



// document.querySelector(".colourBtn-lower").addEventListener("click", () => {
//     const container = document.querySelector(".slider-container-lower");

//     const R=Math.floor(Math.random()*256);
//     const G=Math.floor(Math.random()*256);
//     const B=Math.floor(Math.random()*256);

//     container.style.background=`rgb(${R},${G},${B})`;
// })

// document.querySelector(".resetBtn-lower").addEventListener
// ("click", ()=>{
//     document.querySelector(".slider-container-lower").style.background=`rgb(255,255,255)`;
// })
// document.querySelector(".resetBtn-black-lower").addEventListener
// ("click", ()=>{
//     document.querySelector(".slider-container-lower").style.background=`rgb(0,0,0)`;
// })

