$(function () {
  $(".rate-star").rateYo({
    rating: 5,
    starWidth: "15px",
    readOnly: true,
  });

  var mixer = mixitup(".products__inner-box");
});

$(function () {
  $('.product-slider__inner').slick({
    dots: true,
    arrows: false,
    slidesToShow:2,
    slidesToScroll:4
  });
});
