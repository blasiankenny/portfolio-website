import { closet, mannequins } from "./items_list.js";
const newCloset = closet;
const newMannequins = mannequins;

window.addEventListener("DOMContentLoaded", () => {
  //displayMannequin();
});

document.querySelector(".jacket").addEventListener("click", () => {
  displayClosetItems("jacket", "up");
  document.querySelector(".btn-container").style.display = "flex";
  //removeFilterButtons("up");
  makeSlides();
});
document.querySelector(".tops").addEventListener("click", () => {
  displayClosetItems("tops", "up");
  document.querySelector(".btn-container").style.display = "flex";
  displayLengthFilterButtons("tops", "up");
  makeSlides();
});
document.querySelector(".bottoms").addEventListener("click", () => {
  displayClosetItems("bottoms", "low");
  document.querySelector(".btn-container-lower").style.display = "flex";
  displayLengthFilterButtons("bottoms", "low");
  makeSlidesLower();
});

document.querySelector(".hats").addEventListener("click", () => {
  displayClosetItems("hats", "up");
  document.querySelector(".btn-container-head").style.display = "flex";
  //removeFilterButtons("up");
  makeSlidesHead();
});

document.querySelector(".shoes").addEventListener("click", () => {
  displayClosetItems("shoes", "low");
  document.querySelector(".btn-container-lower-feet").style.display = "flex";
  //removeFilterButtons("low");
  makeSlidesFeet();
});

// const mannequinId = 1;
// const mannequinIdLower = 2;

function removeFilterButtons(upOrLow) {
  if (upOrLow === "up") {
    document.querySelector(".filter-buttons-container").innerHTML = "";
  } else {
    document.querySelectorAll(".filter-buttons-container-lower").innerHTML = "";
  }
}

// function displayMannequin() {

//   let mannequin;
//   let mannequinLower;

//   for (let i = 0; i < newMannequins.length; i++) {
//     const id = newMannequins[i].id;
//     if (id === mannequinId)
//       mannequin = newMannequins[i];

//     if (id === mannequinIdLower)
//       mannequinLower = newMannequins[i];
//   }

//   document.querySelector('.mannequin-upper').innerHTML = `
//   <img src=${mannequin.img} alt="" class="photo">
//   `;
//   document.querySelector('.mannequin-lower').innerHTML = `
//   <img src=${mannequinLower.img} alt=${mannequinLower.title} class="photo">
//   `;

// }

function displayClosetItems(category, upOrLow = "up") {
  let display;
  if (upOrLow === "up") {
    display = newCloset.map((item) => {
      if (item.category === category) {
        if (item.category === "hats") {
          return `<div class="slide-head"><img class="slide-img ${item.title} ${item.category}" src="${item.img}" alt="" /></div>
          `;
        }

        return `<div class="slide"><img class="slide-img ${item.title} ${item.category}" src="${item.img}" alt="" /></div>
      `;
      }
    });
  } else {
    display = newCloset.map((item) => {
      if (item.category === category) {
        if (item.category === "shoes") {
          return `<div class="slide-lower-feet"><img class="slide-img-lower ${item.title} ${item.category}" src="${item.img}" alt="" /></div>
          `;
        }
        return `<div class="slide-lower"><img class="slide-img-lower ${item.title} ${item.category}" src="${item.img}" alt="" /></div>
      `;
      }
    });
  }
  display = display.join("");
  if (upOrLow === "up") {
    if (category === "hats") {
      document.querySelector(
        "#fitting-room .slider-container .items-head"
      ).innerHTML = display;
    } else {
      document.querySelector(
        "#fitting-room .slider-container .items"
      ).innerHTML = display;
    }
  } else {
    if (category === "shoes") {
      document.querySelector(
        "#fitting-room-lower .slider-container-lower .items-feet"
      ).innerHTML = display;
    } else {
      document.querySelector(
        "#fitting-room-lower .slider-container-lower .items"
      ).innerHTML = display;
    }
  }
}

function displayLengthFilterButtons(category, upOrLow) {
  let lengths = ["all", "long", "short"];

  let lengthBtns;
  let filterBtns;

  if (upOrLow === "up") {
    lengthBtns = lengths
      .map((length) => {
        return `<button class="filter-btn" type="button" data-id="${length}">${length}</button>`;
      })
      .join("");
    document.querySelector(".filter-buttons-container").innerHTML = lengthBtns;
    filterBtns = document.querySelectorAll(".filter-btn");
  } else {
    lengthBtns = lengths
      .map((length) => {
        return `<button class="filter-btn-lower" type="button" data-id="${length}">${length}</button>`;
      })
      .join("");
    document.querySelector(".filter-buttons-container-lower").innerHTML =
      lengthBtns;
    filterBtns = document.querySelectorAll(".filter-btn-lower");
  }

  //filter items

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const length = e.currentTarget.dataset.id;
      // const itemsFiltered = newCloset.filter((closetItem)=>{
      //   return closetItem.length === length;
      // })
      console.log(e.currentTarget.dataset.id);
      if (length === "all") {
        displayClosetItems(category, upOrLow);
      } else {
        displayClosetItemsLength(category, upOrLow, length);
      }

      if (upOrLow === "up") {
        makeSlides();
      } else {
        makeSlidesLower();
      }
    });
  });
}

function displayClosetItemsLength(category, upOrLow = "up", length) {
  let display;
  if (upOrLow === "up") {
    display = newCloset.map((item) => {
      if (item.category === category && item.length === length) {
        return `<div class="slide"><img class="slide-img ${item.title} ${item.category} ${item.length}" src="${item.img}" alt="" /></div>
      `;
      }
    });
  } else {
    display = newCloset.map((item) => {
      if (item.category === category && item.length === length) {
        return `<div class="slide-lower"><img class="slide-img-lower ${item.title} ${item.category} ${item.length}" src="${item.img}" alt="" /></div>
      `;
      }
    });
  }
  display = display.join("");
  if (upOrLow === "up") {
    document.querySelector("#fitting-room .slider-container .items").innerHTML =
      display;
  } else {
    document.querySelector(
      "#fitting-room-lower .slider-container-lower .items"
    ).innerHTML = display;
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

let counter = 0;

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
  document.querySelector(".num-items-button").innerHTML = `1/${slides.length}`;
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

  document.querySelector(".num-items-button").innerHTML = `${counter + 1}/${
    slides.length
  }`;
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

let slidesHead = document.querySelectorAll(".slide-head");
let nextBtnHead = document.querySelector(".nextBtn-head");
let prevBtnHead = document.querySelector(".prevBtn-head");

let counterHead = 0;

nextBtnHead.addEventListener("click", function () {
  counterHead++;
  carouselHead();
});

prevBtnHead.addEventListener("click", function () {
  counterHead--;
  carouselHead();
});

function makeSlidesHead() {
  counterHead = 0;
  slidesHead = document.querySelectorAll(".slide-head");

  nextBtnHead = document.querySelector(".nextBtn-head");
  prevBtnHead = document.querySelector(".prevBtn-head");
  document.querySelector(
    ".num-items-button-head"
  ).innerHTML = `1/${slidesHead.length}`;

  slidesHead.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
  });
}

function carouselHead() {
  // working with slides
  if (counterHead === slidesHead.length) {
    counterHead = 0;
  }
  if (counterHead < 0) {
    counterHead = slidesHead.length - 1;
  }

  document.querySelector(".num-items-button-head").innerHTML = `${
    counterHead + 1
  }/${slidesHead.length}`;
  // working with buttons

  if (counterHead < slidesHead.length - 1) {
    nextBtnHead.style.display = "block";
  }

  if (counterHead > 0) {
    prevBtnHead.style.display = "block";
  }
  slidesHead.forEach(function (slide) {
    slide.style.transform = `translateX(-${counterHead * 100}%)`;
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

let counter_lower = 0;

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
  document.querySelector(
    ".num-items-button-lower"
  ).innerHTML = `1/${slides_lower.length}`;

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

  document.querySelector(".num-items-button-lower").innerHTML = `${
    counter_lower + 1
  }/${slides_lower.length}`;
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

let slidesFeet = document.querySelectorAll(".slide-lower-feet");
let nextBtnFeet = document.querySelector(".nextBtn-feet");
let prevBtnFeet = document.querySelector(".prevBtn-feet");

let counterFeet = 0;

nextBtnFeet.addEventListener("click", function () {
  counterFeet++;
  carouselFeet();
});

prevBtnFeet.addEventListener("click", function () {
  counterFeet--;
  carouselFeet();
});

function makeSlidesFeet() {
  counterFeet = 0;
  slidesFeet = document.querySelectorAll(".slide-lower-feet");

  nextBtnFeet = document.querySelector(".nextBtn-feet");
  prevBtnFeet = document.querySelector(".prevBtn-feet");
  document.querySelector(
    ".num-items-button-lower-feet"
  ).innerHTML = `1/${slidesFeet.length}`;

  slidesFeet.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
  });
}

function carouselFeet() {
  // working with slides
  if (counterFeet === slidesFeet.length) {
    counterFeet = 0;
  }
  if (counterFeet < 0) {
    counterFeet = slidesFeet.length - 1;
  }

  document.querySelector(".num-items-button-lower-feet").innerHTML = `${
    counterFeet + 1
  }/${slidesFeet.length}`;
  // working with buttons

  if (counterFeet < slidesFeet.length - 1) {
    nextBtnFeet.style.display = "block";
  }

  if (counterFeet > 0) {
    prevBtnFeet.style.display = "block";
  }
  slidesFeet.forEach(function (slide) {
    slide.style.transform = `translateX(-${counterFeet * 100}%)`;
  });
}
