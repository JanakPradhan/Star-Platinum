$(document).ready(function() {
  $(document).on("click", "h2", function() {
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

  $.each($(".faq__items h2"), function(curr, elem) {
    elem.addEventListener("click", function() {
      elem.classList.toggle("is-opened");
    });
  });

  $(".header__sm").click(function() {
    $(".header__sm").toggleClass("active");
    $("#js-nav").toggleClass("is-opened");
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $(".scroll__to__top").fadeIn();
    } else {
      $(".scroll__to__top").fadeOut();
    }
  });

  $(".scroll__to__top").click(function() {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      1200
    );
    return false;
  });
});
