$(document).ready(function() {

  link        = $('.menu-open'),
  openNav     = $('.open-nav'),
  nav_link    = $('.open-nav a')
  link.click(function() {
    link.toggleClass('menu-open--active');
    openNav.toggleClass('open-nav--active');
  });
  nav_link.click(function() {
    link.toggleClass('menu-open--active');
    openNav.toggleClass('open-nav--active');
  });
  
  $(".main-menu").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 500);
  });

  $('.general-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false
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

  $(function() {
    $('.general-select').selectize();
      placeholder: true
  });
  
});