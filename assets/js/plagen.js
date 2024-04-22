// $(function () {
// "use strict";
//    AOS.init();
// });

const smallIcon = document.querySelector(".small i")
console.log(smallIcon)
smallIcon.addEventListener("click" , () => {
  document.querySelector(".navbarSec .smallest aside").classList.toggle("active")

  if(!smallIcon.classList.contains("fa-align-justify")) {
    smallIcon.className = "fa fa-align-justify d-block d-xl-none" 
  } else {
    smallIcon.className = "fa fa-times d-block d-xl-none"
  }
}) 

$(function () {
    
      "use strict";
    
        $('html').niceScroll({
            cursorcolor:"#f82249",
            
        });
});
$(function () {
    

});  


// $(function () {
    
//       "use strict";
    
//   var containerEl = document.querySelector('#containermix');
//   var mixer = mixitup(containerEl);
  
// });
  


// $(function () {
      
//   wow = new WOW(
//       {
//         animateClass: 'animated',
//         offset:       100,
//         callback:     function(box) {
//           console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
//         }
//       }
//     );
//     wow.init();
//     document.getElementById('moar').onclick = function() {
//       var section = document.createElement('section');
//       section.className = 'section--purple wow fadeInDown';
//       this.parentNode.insertBefore(section, this);
//     };
  
// });

// $(function () {
//   jQuery(document).ready(function( $ ) {
//         $('.counter').counterUp({
//             time:2500,
            
//         });
//     });
// });
//  $(function () {
    
//     var typed = new Typed(".type", {
//    strings: ["THE ANNUAL", ],
//    backSpeed:90,
//    typeSpeed:100,
//    loop:false,
//    backDelay:3000,
//    showCursor:false,
//    loopCount:false,
//    }); 
//     var typed = new Typed(".type-me", {
//    strings: ["<span>MARKETING</span> CONFERENCE" ],
//    backSpeed:110,
//    typeSpeed:100,
//    loop:false,
//    startDelay:1600,
//    showCursor:false
//    });

  
// }); 

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
    
  });

  /**
   * Init swiper slider with 3 slides at once in desktop view
   */
  new Swiper('.slides-3', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });

  /**
   * Gallery Slider
   */
  new Swiper('.gallery-slider', {
    speed: 400,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 20
      }
    }
  });

  /**
   * Clients Slider
   */
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  });

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }













  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
      document.querySelector(".navbarSec .smallest aside").classList.remove("active")
      smallIcon.className = "fa fa-align-justify d-block d-xl-none" 
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);

    scrollTop.addEventListener('click', () => {
      const stope = setInterval(function() {
        if(window.scrollY <= 0) {
         clearInterval(stope);
        } else {
            window.scrollBy(0,-20) 
        }              
      },15)
    });

 
  }

    /**
   * Navbar links active state on scroll
   */
    let navbarlinks = document.querySelectorAll('#navbar li a');
    navbarlinks.forEach(ele => {
      ele.addEventListener("click" , () => {
        document.querySelector(".navbarSec .smallest aside").classList.remove("active")
        smallIcon.className = "fa fa-align-justify d-block d-xl-none" 

      })
    })

    function navbarlinksActive() {

      navbarlinks.forEach(navbarlink => {
  
        if (!navbarlink.hash) return;
  
        let section = document.querySelector(navbarlink.hash);
        if (!section) return;
  
        let position = window.scrollY + 200;
  
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active');
        } else {
          navbarlink.classList.remove('active');
        }
      })
    }
    window.addEventListener('load', navbarlinksActive);
    document.addEventListener('scroll', navbarlinksActive);


    function aos_init() {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
    window.addEventListener('load', () => {
      aos_init();
    });

    document.addEventListener('DOMContentLoaded', function() {
      var scroll = new SmoothScroll('.smoothscroll', {
        speed: 800, // Scroll speed in milliseconds
        offset: 100 // Offset in pixels
      });
    });

