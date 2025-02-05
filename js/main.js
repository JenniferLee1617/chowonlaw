$(function () {
  //test
  const formswiper = new Swiper(".formswiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // effect: "fade",
    // speed: 0,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction", // "1 / 5" 같은 형식
      renderFraction: function (currentClass, totalClass) {
        return `<span class="${currentClass}"></span> / <span class="${totalClass}"></span>`;
      },
    },
    on: {
      init: function (swiper) {
        updatePagination(swiper);
      },
      slideChange: function (swiper) {
        updatePagination(swiper);

        const swiperControl = document.querySelector(".swiper-control"); // swiper-control 선택

        if (swiper.activeIndex === 6) {
          // 7번째 슬라이드(인덱스 6)
          swiperControl.classList.add("hide"); // swiper-control에서 페이지네이션 & 네비게이션 숨기기
        } else {
          swiperControl.classList.remove("hide"); // 다른 슬라이드일 때 보이게
        }
      },
    },
  });

  function updatePagination(swiper) {
    const currentPage = String(swiper.realIndex + 1).padStart(2, "0"); // 현재 페이지 (두 자리)
    const totalPages = String(swiper.slides.length - 1).padStart(2, "0"); // 전체 페이지 -1 (두 자리)

    document.querySelector(
      ".swiper-pagination .swiper-pagination-current"
    ).textContent = currentPage;
    document.querySelector(
      ".swiper-pagination .swiper-pagination-total"
    ).textContent = totalPages;
  }

  // 스크롤시 헤더 스타일 변경
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
  // 유사사례스와이퍼
  const caseSwiper = new Swiper(".caseSwiper", {
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 20,
    // freeMode: true,
    // loopAdditionalSlides: 3,
    // observer: true,
    // observerParents: true,
    centeredSlides: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 3000,
  });
});
