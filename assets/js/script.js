$(document).ready(function () {
  // Initialize Typed.js
  var typed = new Typed('.typed', {
    strings: ["mahir<b>hashimov</b>", "<b>mahir</b>.<b>hashimov</b>"],
    typeSpeed: 40,
    backSpeed: 40,
    backDelay: 4000,
    loop: true
  });

  // Fixed navbar on scroll
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".navbar").addClass("fixed-top");
    } else {
      $(".navbar").removeClass("fixed-top");
    }
  });

  // Smooth scrolling
  const speed = 500;
  $('a[href*="#"]')
    .filter((i, a) => a.getAttribute('href').startsWith('#') || a.href.startsWith(`${location.href}#`))
    .unbind('click.smoothScroll')
    .bind('click.smoothScroll', event => {
      const targetId = event.currentTarget.getAttribute('href').split('#')[1];
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: $(targetElement).offset().top - 56 }, speed);
      }
    });

  // Portfolio Carousel
  if ($("#portfolio-carousel").length) {
    $("#portfolio-carousel").owlCarousel({
      loop: false, // Disable looping to avoid duplication
      margin: 10, // Add margin if needed
      nav: true, // Enable navigation if needed
      dots: true, // Enable dots if needed
      smartSpeed: 700,
      autoplayHoverPause: true,
      autoplay: false, // Disable autoplay to avoid automatic cycling
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        800: {
          items: 2
        },
        1024: {
          items: 3
        },
        1200: {
          items: 3
        },
        1600: {
          items: 4
        }
      }
    });
  }

  // Services Carousel
  if ($("#services-carousel").length) {
    $("#services-carousel").owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      dots: false,
      smartSpeed: 700,
      autoplayHoverPause: true,
      autoplay: 3000,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        800: {
          items: 2
        },
        1024: {
          items: 3
        },
        1200: {
          items: 3
        },
        1600: {
          items: 4
        }
      }
    });
  }
});
