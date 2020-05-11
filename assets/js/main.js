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

  // Porfolio isotope and filter
  $(window).on("load", function () {
    var portfolioIsotope = $(".portfolio-container").isotope({
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

const blogPosts = [
  {
    title:
      "Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia reiciendis",
    image: "assets/img/blog-1.jpg",
    author: "John Doe",
    date: "2020-01-01",
    totalComments: 12,
    content:
      "Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.",
  },
  {
    title: "Nisi magni odit consequatur autem nulla dolorem",
    image: "assets/img/blog-2.jpg",
    author: "John Doe",
    date: "2019-01-01",
    totalComments: 12,
    content:
      "Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam. Ad impedit qui officiis est in non aliquid veniam laborum. Id ipsum qui aut. Sit aliquam et quia molestias laboriosam. Tempora nam odit omnis eum corrupti qui aliquid excepturi molestiae. Facilis et sint quos sed voluptas. Maxime sed tempore enim omnis non alias odio quos distinctio.",
  },
  {
    title:
      "Possimus soluta ut id suscipit ea ut. In quo quia et soluta libero sit sint.",
    image: "assets/img/blog-3.jpg",
    author: "John Doe",
    date: "2018-01-01",
    totalComments: 12,
    content:
      "Aut iste neque ut illum qui perspiciatis similique recusandae non. Fugit autem dolorem labore omnis et. Eum temporibus fugiat voluptate enim tenetur sunt omnis. Doloremque est saepe laborum aut. Ipsa cupiditate ex harum at recusandae nesciunt. Ut dolores velit.",
  },
  {
    title:
      "Non rem rerum nam cum quo minus. Dolor distinctio deleniti explicabo eius exercitationem. Veniam eius velit ab ipsa quidem rem.",
    image: "assets/img/blog-4.jpg",
    author: "John Doe",
    date: "2017-01-01",
    totalComments: 12,
    content:
      "Aspernatur rerum perferendis et sint. Voluptates cupiditate voluptas atque quae. Rem veritatis rerum enim et autem. Saepe atque cum eligendi eaque iste omnis a qui. Quia sed sunt. Ea asperiores expedita et et delectus voluptates rerum. Id saepe ut itaque quod qui voluptas nobis porro rerum. Quam quia nesciunt qui aut est non omnis. Inventore occaecati et quaerat magni itaque nam voluptas. Voluptatem ducimus sint id earum ut nesciunt sed corrupti nemo.",
  },
];

let newblogPosts = blogPosts.sort((a, b) => {
  return new Date(b.date) - new Date(a.date);
});

for (let i = 0; i < newblogPosts.length; i++) {
  let blogContent = `<article class="entry" data-aos="fade-up">
                      <div class="entry-img">
                        <img src="${
                          newblogPosts[i].image
                        }" alt="" class="img-fluid blog-image" />
                      </div>

                      <h2 class="entry-title">
                        <a href="blog-single.html" class="blog-content-title">${
                          newblogPosts[i].title
                        }</a>
                      </h2>

                      <div class="entry-meta">
                        <ul>
                          <li class="d-flex align-items-center">
                            <i class="icofont-user"></i>
                            <a
                              href="blog-single.html"
                              class="blog-content-author"
                            >${newblogPosts[i].author}</a>
                          </li>
                          <li class="d-flex align-items-center">
                            <i class="icofont-wall-clock"></i>
                            <a href="blog-single.html"
                              ><time
                                datetime="2020-01-01"
                                class="blog-content-date"
                              >${new Intl.DateTimeFormat("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "2-digit",
                              }).format(
                                new Date(Date.parse(newblogPosts[i].date))
                              )}</time
                            ></a>
                          </li>
                          <li class="d-flex align-items-center">
                            <i class="icofont-comment"></i>
                            <a
                              href="blog-single.html"
                              class="blog-content-totalComments"
                            >${newblogPosts[i].totalComments + " Comments"}</a>
                          </li>
                        </ul>
                      </div>


})(jQuery);

const blogPosts = [
  {
    title:
      "Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia reiciendis",
    image: "assets/img/blog-1.jpg",
    author: "John Doe",
    date: "2020-01-01",
    totalComments: 12,
    content:
      "Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.",
  },
  {
    title: "Nisi magni odit consequatur autem nulla dolorem",
    image: "assets/img/blog-2.jpg",
    author: "John Doe",
    date: "2019-01-01",
    totalComments: 12,
    content:
      "Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam. Ad impedit qui officiis est in non aliquid veniam laborum. Id ipsum qui aut. Sit aliquam et quia molestias laboriosam. Tempora nam odit omnis eum corrupti qui aliquid excepturi molestiae. Facilis et sint quos sed voluptas. Maxime sed tempore enim omnis non alias odio quos distinctio.",
  },
  {
    title:
      "Possimus soluta ut id suscipit ea ut. In quo quia et soluta libero sit sint.",
    image: "assets/img/blog-3.jpg",
    author: "John Doe",
    date: "2018-01-01",
    totalComments: 12,
    content:
      "Aut iste neque ut illum qui perspiciatis similique recusandae non. Fugit autem dolorem labore omnis et. Eum temporibus fugiat voluptate enim tenetur sunt omnis. Doloremque est saepe laborum aut. Ipsa cupiditate ex harum at recusandae nesciunt. Ut dolores velit.",
  },
  {
    title:
      "Non rem rerum nam cum quo minus. Dolor distinctio deleniti explicabo eius exercitationem. Veniam eius velit ab ipsa quidem rem.",
    image: "assets/img/blog-4.jpg",
    author: "John Doe",
    date: "2017-01-01",
    totalComments: 12,
    content:
      "Aspernatur rerum perferendis et sint. Voluptates cupiditate voluptas atque quae. Rem veritatis rerum enim et autem. Saepe atque cum eligendi eaque iste omnis a qui. Quia sed sunt. Ea asperiores expedita et et delectus voluptates rerum. Id saepe ut itaque quod qui voluptas nobis porro rerum. Quam quia nesciunt qui aut est non omnis. Inventore occaecati et quaerat magni itaque nam voluptas. Voluptatem ducimus sint id earum ut nesciunt sed corrupti nemo.",
  },
];

let newblogPosts = blogPosts.sort((a, b) => {
  return new Date(b.date) - new Date(a.date);
});

for (let i = 0; i < newblogPosts.length; i++) {
  let blogContent = `<article class="entry" data-aos="fade-up">
                      <div class="entry-img">
                        <img src="${
                          newblogPosts[i].image
                        }" alt="" class="img-fluid blog-image" />
                      </div>
                      <h2 class="entry-title">
                        <a href="blog-single.html" class="blog-content-title">${
                          newblogPosts[i].title
                        }</a>
                      </h2>
                      <div class="entry-meta">
                        <ul>
                          <li class="d-flex align-items-center">
                            <i class="icofont-user"></i>
                            <a
                              href="blog-single.html"
                              class="blog-content-author"
                            >${newblogPosts[i].author}</a>
                          </li>
                          <li class="d-flex align-items-center">
                            <i class="icofont-wall-clock"></i>
                            <a href="blog-single.html"
                              ><time
                                datetime="2020-01-01"
                                class="blog-content-date"
                              >${new Intl.DateTimeFormat("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "2-digit",
                              }).format(
                                new Date(Date.parse(newblogPosts[i].date))
                              )}</time
                            ></a>
                          </li>
                          <li class="d-flex align-items-center">
                            <i class="icofont-comment"></i>
                            <a
                              href="blog-single.html"
                              class="blog-content-totalComments"
                            >${newblogPosts[i].totalComments + " Comments"}</a>
                          </li>
                        </ul>
                      </div>


                      <div class="entry-content">
                        <p class="blog-content">${newblogPosts[i].content}</p>
                        <div class="read-more">
                          <a href="blog-single.html">Read More</a>
                        </div>
                      </div>
                    </article>`;
  $("#blog-content").append(blogContent);
}



// Editions Page Content

const editionContent = [
  {
    title:
      "Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia reiciendis",
    image: "assets/img/blog-1.jpg",    
    content:
      "Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.",
  },
  {
    title: "Nisi magni odit consequatur autem nulla dolorem",
    image: "assets/img/blog-2.jpg",    
    content:
      "Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam. Ad impedit qui officiis est in non aliquid veniam laborum. Id ipsum qui aut. Sit aliquam et quia molestias laboriosam. Tempora nam odit omnis eum corrupti qui aliquid excepturi molestiae. Facilis et sint quos sed voluptas. Maxime sed tempore enim omnis non alias odio quos distinctio.",
  },
  {
    title:
      "Possimus soluta ut id suscipit ea ut. In quo quia et soluta libero sit sint.",
    image: "assets/img/blog-3.jpg",   
    content:
      "Aut iste neque ut illum qui perspiciatis similique recusandae non. Fugit autem dolorem labore omnis et. Eum temporibus fugiat voluptate enim tenetur sunt omnis. Doloremque est saepe laborum aut. Ipsa cupiditate ex harum at recusandae nesciunt. Ut dolores velit.",
  },
  {
    title:
      "Non rem rerum nam cum quo minus. Dolor distinctio deleniti explicabo eius exercitationem. Veniam eius velit ab ipsa quidem rem.",
    image: "assets/img/blog-4.jpg",    
    content:
      "Aspernatur rerum perferendis et sint. Voluptates cupiditate voluptas atque quae. Rem veritatis rerum enim et autem. Saepe atque cum eligendi eaque iste omnis a qui. Quia sed sunt. Ea asperiores expedita et et delectus voluptates rerum. Id saepe ut itaque quod qui voluptas nobis porro rerum. Quam quia nesciunt qui aut est non omnis. Inventore occaecati et quaerat magni itaque nam voluptas. Voluptatem ducimus sint id earum ut nesciunt sed corrupti nemo.",
  },
];

var inner;
for(var i = 0;i < editionContent.length;i++)
{
   let editionHTML = `  <article class="entry" data-aos="fade-up">
                            <div class="entry-img">
                              <img src="${editionContent[i].image}" alt="" class="img-fluid">
                            </div>
                            <h2 class="entry-title">
                              <a href="blog-single.html">${editionContent[i].title}</a>
                            </h2>   
                            <div class="entry-content">
                              <p>
                              ${editionContent[i].content}
                              </p>
                              <div class="read-more">
                                <a href="editions-single.html">Read More</a>
                              </div>
                            </div>
                        </article>`;
  // $("#editonPage").append(editionHTML);   
  inner = document.getElementById("editionPage").innerHTML;
  document.getElementById("editionPage").innerHTML = inner + editionHTML;
}
var page_no = `<!-- <div class="blog-pagination">
                        <ul class="justify-content-center">
                            <li class="disabled"><i class="icofont-rounded-left"></i></li>
                            <li><a href="#">1</a></li>
                            <li class="active"><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#"><i class="icofont-rounded-right"></i></a></li>
                        </ul>
                    </div>`;
inner = document.getElementById("editionPage").innerHTML;
document.getElementById("editionPage").innerHTML = inner + page_no;

