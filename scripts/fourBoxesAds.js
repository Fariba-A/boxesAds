let widthScreen = window.innerWidth;
let swiperBoxes = document.querySelector(".boxesAds");
let gridScreenDevice=document.querySelector(".screen-grid");
console.log(widthScreen);
if (widthScreen < 480) {
  swiperBoxes.classList.add("swiper");
  gridScreenDevice.classList.add("swiper-wrapper");
  gridScreenDevice.style.gap="0";
  swiper();

}

function swiper() {
  var swiper = new Swiper(".boxesAds", {
    autoplay: true,
    loop: true
  });
}

