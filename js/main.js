$(function () {
  const incomeSwiper = new Swiper(".incomeSwiper", {
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 20,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1441: {
        spaceBetween: 30,
      },
      1201: {
        spaceBetween: 24,
      },
    },
    centeredSlides: true,
  });
  const judgementSwiper = new Swiper(".judgementSwiper", {
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 20,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1441: {
        spaceBetween: 30,
      },
      1201: {
        spaceBetween: 24,
      },
    },
  });
  const reviewSwiper = new Swiper(".reviewSwiper", {
    slidesPerView: 1,
    loop: true,
    // effect: "creative",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    speed: 1000,
  });
  const insight01 = new Swiper(".insight01", {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 1000,
    effect: "cube",
    allowTouchMove: false, // 손가락 스와이프 방지
  });
  const insightWeb = new Swiper(".insightWeb", {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 1000,
    effect: "cube",
    allowTouchMove: false, // 손가락 스와이프 방지
  });
  const insight03 = new Swiper(".insight03", {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 1000,
    effect: "cube",
    allowTouchMove: false, // 손가락 스와이프 방지
  });
  const insightMobile = new Swiper(".insightMobile", {
    //slidesPerView: 1,
    loopAdditionalSlides: 1,
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    speed: 1000,

    centeredSlides: true,
    effect: "coverflow",
    // allowTouchMove: false, // 손가락 스와이프 방지
    on: {
      slideChangeTransitionEnd: function () {
        if (this.realIndex === 0) {
          this.slideToLoop(0, 0); // 첫 번째 슬라이드로 자동 이동
        }
      },
    },
  });
  //counting-animation
  function countUp(target, end, duration) {
    let start = 0;
    let increment = end / (duration / 16);
    let counter = document.getElementById(target);

    function updateCount() {
      start += increment;
      if (start < end) {
        counter.innerText = Math.floor(start).toLocaleString() + "건";
        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = end.toLocaleString() + "건";
      }
    }

    updateCount();
  }
  // Intersection Observer 설정
  let observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          countUp("counter", 12435, 1000); // 화면에 보이면 실행
          observer.unobserve(entry.target); // 한 번 실행 후 멈춤
        }
      });
    },
    { threshold: 1 }
  ); // 50% 이상 보일 때 실행

  observer.observe(document.querySelector(".counter-section"));

  // AOS 초기화
  AOS.init({
    once: true,
  });
});
