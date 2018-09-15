$('.general-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

$('.about-slider').slick();

$('.staff').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.staff-nav'
});
$('.staff-nav').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.staff',
  dots: true,
  centerMode: true,
  centerPadding: false,
  focusOnSelect: true
});