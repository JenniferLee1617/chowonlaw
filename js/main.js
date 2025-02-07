$(function () {
  // 스크롤시 헤더 스타일 변경
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  //메인폼작동-절대건들지말 것
  const formswiper = new Swiper(".formswiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    allowTouchMove: false,
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
        checkValidation(swiper); // 처음 로드될 때 유효성 검사
      },
      slideChange: function (swiper) {
        updatePagination(swiper);
        checkValidation(swiper); // 슬라이드가 변경될 때마다 유효성 검사

        const swiperControl = document.querySelector(".swiper-control");

        if (swiper.activeIndex === 6) {
          swiperControl.classList.add("hide");
        } else {
          swiperControl.classList.remove("hide");
        }
      },
    },
  });
  // 유효성 검사 함수
  function checkValidation(swiper) {
    const activeSlide = swiper.slides[swiper.activeIndex]; // 현재 슬라이드
    const radioInputs = activeSlide.querySelectorAll(
      'input[type="radio"]:checked'
    ); // 체크된 radio 버튼
    const checkboxInputs = activeSlide.querySelectorAll(
      'input[type="checkbox"]:checked'
    ); // 체크된 checkbox 버튼
    const nextButton = document.querySelector(".swiper-button-next"); // next 버튼

    // radio 또는 checkbox가 하나라도 선택되었으면 활성화
    const isValid = radioInputs.length > 0 || checkboxInputs.length > 0;
    nextButton.classList.toggle("swiper-button-disabled", !isValid); // 선택되지 않으면 비활성화
  }

  // change 이벤트 추가
  document
    .querySelectorAll('input[type="radio"], input[type="checkbox"]')
    .forEach((input) => {
      input.addEventListener("change", function () {
        checkValidation(formswiper); // 값이 변경될 때마다 유효성 검사
      });
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

  //퀵메뉴-열고닫기기
  $(".btn-quickClose").click(function () {
    $(this).toggleClass("rotate");
    $(".quick-menu").toggleClass("hide");
  });
  function handleResize() {
    const element1 = document.querySelector(".btn-quickClose"); // 첫 번째 요소
    const element2 = document.querySelector(".quick-menu"); // 두 번째 요소

    const breakpoint1 = 1024; // 첫 번째 기준
    const breakpoint2 = 1024; // 두 번째 기준

    // 첫 번째 선택자: 768px 이하에서 'class1' 추가
    if (window.innerWidth <= breakpoint1) {
      element1.classList.add("rotate");
    } else {
      element1.classList.remove("rotate");
    }

    // 두 번째 선택자: 480px 이하에서 'class2' 추가
    if (window.innerWidth <= breakpoint2) {
      element2.classList.add("hide");
    } else {
      element2.classList.remove("hide");
    }
  }
  // 페이지 로드 & 윈도우 리사이즈 이벤트 감지
  window.addEventListener("load", handleResize);
  window.addEventListener("resize", handleResize);
});
