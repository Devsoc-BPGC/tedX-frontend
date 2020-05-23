/**
 * Template Name: Company - v2.0.0
 * Template URL: https://bootstrapmade.com/company-free-html-bootstrap-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
!(function ($) {
  "use strict";

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on("click", ".nav-menu a, .mobile-nav a, .scrollto", function (
    e
  ) {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top;

        if ($("#header").length) {
          scrollto -= $("#header").outerHeight();
        }

        if ($(this).attr("href") == "#header") {
          scrollto = 0;
        }

        $("html, body").animate(
          {
            scrollTop: scrollto,
          },
          1500,
          "easeInOutExpo"
        );

        if ($(this).parents(".nav-menu, .mobile-nav").length) {
          $(".nav-menu .active, .mobile-nav .active").removeClass("active");
          $(this).closest("li").addClass("active");
        }

        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $(".mobile-nav-toggle i").toggleClass(
            "icofont-navigation-menu icofont-close"
          );
          $(".mobile-nav-overly").fadeOut();
        }
        return false;
      }
    }
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 400) {
      $("#header-home").css("background", "white");
      $("#header-home").css("box-shadow", "0px 2px 15px rgba(0, 0, 0, 0.1)");
      $("#header-home .nav-links").css("color", "#000");
      $("#header-home .logo").css("color", "#000");
    } else {
      $("#header-home").css("background", "transparent");
      $("#header-home .nav-links").css("color", "#fff");
      $("#header-home").css("box-shadow", "0px 0px 0px rgba(0, 0, 0, 0)");
      $("#header-home .logo").css("color", "#fff");
    }
  });
  // Mobile Navigation
  if ($(".nav-menu").length) {
    var $mobile_nav = $(".nav-menu").clone().prop({
      class: "mobile-nav d-lg-none",
    });
    $("body").append($mobile_nav);
    $("body").prepend(
      '<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>'
    );
    $("body").append('<div class="mobile-nav-overly"></div>');

    $(document).on("click", ".mobile-nav-toggle", function (e) {
      $("body").toggleClass("mobile-nav-active");
      $(".mobile-nav-toggle i").toggleClass(
        "icofont-navigation-menu icofont-close"
      );
      $(".mobile-nav-overly").toggle();
    });

    $(document).on("click", ".mobile-nav .drop-down > a", function (e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass("active");
    });

    $(document).click(function (e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $(".mobile-nav-toggle i").toggleClass(
            "icofont-navigation-menu icofont-close"
          );
          $(".mobile-nav-overly").fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Real view height for mobile devices
  if (window.matchMedia("(max-width: 767px)").matches) {
    $("#hero").css({
      height: $(window).height(),
    });
  }

  // Intro carousel
  var heroCarousel = $("#heroCarousel");
  var heroCarouselIndicators = $("#hero-carousel-indicators");
  heroCarousel
    .find(".carousel-inner")
    .children(".carousel-item")
    .each(function (index) {
      index === 0
        ? heroCarouselIndicators.append(
            "<li data-target='#heroCarousel' data-slide-to='" +
              index +
              "' class='active'></li>"
          )
        : heroCarouselIndicators.append(
            "<li data-target='#heroCarousel' data-slide-to='" +
              index +
              "'></li>"
          );
    });

  heroCarousel.on("slid.bs.carousel", function (e) {
    $(this).find(".carousel-content ").addClass("animated fadeInDown");
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });

  $(".back-to-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500,
      "easeInOutExpo"
    );
    return false;
  });

  //Explore TEDx
  $("#explore").click(function () {
    var offset = -150; //Offset of 20px

    $("html, body").animate(
      {
        scrollTop: $("#about-us").offset().top + offset,
      },
      1000
    );
  });

  // Porfolio isotope and filter
  $(window).on("load", function () {
    var portfolioIsotope = $(".port-cards").isotope({
      itemSelector: ".portfolio-item",
    });

    $("#portfolio-flters li").on("click", function () {
      $("#portfolio-flters li").removeClass("filter-active");
      $(this).addClass("filter-active");

      portfolioIsotope.isotope({
        filter: $(this).data("filter"),
      });
      aos_init();
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function () {
      $(".venobox").venobox();
    });
  });

  // Skills section
  $(".skills-content").waypoint(
    function () {
      $(".progress .progress-bar").each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + "%");
      });
    },
    {
      offset: "80%",
    }
  );

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1,
  });

  // Initi AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }
  aos_init();
})(jQuery);

// const blogPosts = [
//   {
//     title:
//       "TEDx Blog 1",
//     image: "./assets/img/blog-1.jpg",
//     author: "Arpit Bhardwaj",
//     date: "2020-01-01",
//     totalComments: 12,
//     content:
//       "Content will appear here.",
//   },
//   {
//     title: "TEDx Blog 2",
//     image: "./assets/img/blog-2.jpg",
//     author: "John Doe",
//     date: "2019-01-01",
//     totalComments: 12,
//     content:
//       "Lite",
//   }
// ];

// let newblogPosts = blogPosts.sort((a, b) => {
//   return new Date(b.date) - new Date(a.date);
// });

// for (let i = 0; i < newblogPosts.length; i++) {
//   let blogContent = `<article class="entry" data-aos="fade-up">
//                       <div class="entry-img">
//                         <div class="blog-image" style="background-image: url('${newblogPosts[i].image}');"> </div>
//                       </div>

//                       <h2 class="entry-title">
//                         <a href="blog-single.html" class="blog-content-title">${
//     newblogPosts[i].title
//     }
//     </a>
//       </h2>

//       <div class="entry-meta">
//         <ul>
//           <li class="d-flex align-items-center">
//             <i class="icofont-user"></i>
//             <a
//               href="blog-single.html"
//               class="blog-content-author"
//             >${newblogPosts[i].author}</a>
//           </li>

//           <li class="d-flex align-items-center">
//             <i class="icofont-wall-clock"></i>
//             <a href="blog-single.html"></a>
//       </li>

//       <li class="d-flex align-items-center">
//         <i class="icofont-comment"></i>
//         <a
//           href="blog-single.html"
//           class="blog-content-totalComments"
//         >${newblogPosts[i].totalComments + " Comments"}</a>
//       </li>

//     </ul>
//   </div>

//   <div class="entry-content">
//     <p class="blog-content">${newblogPosts[i].content}</p>
//     <div class="read-more">
//       <a href="blog-single.html">Read More</a>
//     </div>
//   </div>
//   </article>`;
//   $("#blog-content").append(blogContent);
// }
