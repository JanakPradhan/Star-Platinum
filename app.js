$(document).ready(function () {
  $(document).on("click", ".faq h2", function () {
    $(this)
      .siblings("p")
      .stop()
      .slideToggle();
    $(this)
      .closest("div")
      .siblings("div")
      .find("p")
      .stop()
      .slideUp();
  });

  $.each($(".faq__items h2"), function (curr, elem) {
    elem.addEventListener("click", function () {
      elem.classList.toggle("is-opened");
    });
  });

  $(".header__sm").click(function () {
    $(".header__sm").toggleClass("active");
    $("#js-nav").toggleClass("is-opened");
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".scroll__to__top").fadeIn();
    } else {
      $(".scroll__to__top").fadeOut();
    }
  });

  $(".scroll__to__top").click(function () {
    $("html, body").animate({
        scrollTop: 0
      },
      1200
    );
    return false;
  });
});

$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});