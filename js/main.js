// header - search_bar 클릭시 동작
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});
searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

// main_section 시간차로 나타나는 기능, lib-GSAP사용
const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.5,
    opacity: 1,
  });
});

// Swiper(version checked) => new Swiper(선택자, 옵션)
new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

new Swiper(".promotion .swiper-container", {
  autoplay: {
    delay: 5000,
  },
  loop: true,
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  navigation: {
    // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: ".swiper-prev",
    nextEl: ".swiper-next",
  },
});

// Toggle
const promotionEl = document.querySelector(".promotion");
const promotionToggleDiv = document.querySelector(".inner__right");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
const promotionToggleIcon = promotionToggleBtn.querySelector(".material-icons");

let isHidePromotion = false;
promotionToggleDiv.addEventListener("click", () => {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    promotionEl.classList.add("hide");
    
    promotionToggleIcon.innerText = "download";
    promotionToggleBtn.appendChild(promotionToggleIcon);
  } else {
    promotionEl.classList.remove("hide");
    promotionToggleIcon.innerText = "upload";
    promotionToggleBtn.appendChild(promotionToggleIcon);
  }
});
