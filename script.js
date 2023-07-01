const addressBtn = document.getElementById("address-form");
const addressClose = document.getElementById("address-close");

addressBtn.addEventListener("click", function () {
  document.querySelector(".address-form").style.display = "flex";
});
addressClose.addEventListener("click", function () {
  document.querySelector(".address-form").style.display = "none";
});
// ------------slider-------------
const rightBtn = document.querySelector(".fa-chevron-right");
const leftBtn = document.querySelector(".fa-chevron-left");
const imgNumber = document.querySelectorAll(".slider-content-left-top img");

let index = 0;
rightBtn.addEventListener("click", function () {
  index = index + 1;
  if (index > imgNumber.length - 1) {
    index = 0;
  }
  document.querySelector(".slider-content-left-top").style.right = index * 100 + "%";
});

leftBtn.addEventListener("click", function () {
  index = index - 1;
  if (index <= 0) {
    index = imgNumber.length - 1;
  }
  document.querySelector(".slider-content-left-top").style.right = index * 100 + "%"
});

const imgNumberLi = document.querySelectorAll(".slider-content-left-bottom li");

imgNumberLi.forEach(function (image, index) {
  image.addEventListener("click", function () {
    removeActive()
    document.querySelector(".slider-content-left-top").style.right = index * 100 + "%"
    image.classList.add('active')
  });
});

function removeActive() {
  let imgActive = document.querySelector('.active')
  imgActive.classList.remove('active')
}

function imgAuto(){
  index = index + 1
  if (index > imgNumber.length - 1) {
    index = 0;
  }
  removeActive()
  document.querySelector(".slider-content-left-top").style.right = index * 100 + "%"
  imgNumberLi[index].classList.add('active')
}
setInterval(imgAuto,5000)
//--------------------slider-product------------------
const rightBtnTwo = document.querySelector(".fa-chevron-right-two");
const leftBtnTwo = document.querySelector(".fa-chevron-left-two");
const imgNumberTwo = document.querySelectorAll(".slider-product-one-content-items");
rightBtnTwo.addEventListener("click", function () {
  index = index + 1;
  if (index > imgNumberTwo.length - 1) {
    index = 0;
  }
  document.querySelector(".slider-product-one-content-items-content").style.right = index * 100 + "%";
});

leftBtnTwo.addEventListener("click", function () {
  index = index - 1;
  if (index <= 0) {
    index = imgNumberTwo.length - 1;
  }
  document.querySelector(".slider-product-one-content-items-content").style.right = index * 100 + "%"
});