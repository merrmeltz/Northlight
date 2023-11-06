$(function(){
    setHeaderColor();
    $(window).scroll(setHeaderColor);      
  });


function setHeaderColor() {
  if ($(document).scrollTop() > 100) {
    $('nav').removeClass('navbar-dark');
    $('.navbar-brand img').removeClass('nav-image-dark');

    $('nav').addClass('navbar-light');
    $('.navbar-brand img').addClass('nav-image-light');

    $('.toggler-icon').css('background-color', '#1b5997');
    $('.navbar-brand img').attr('src','images/logodark.png');

  } else {
    $('nav').removeClass('navbar-light');
    $('.navbar-brand img').removeClass('nav-image-light');

    $('nav').addClass('navbar-dark');
    $('.navbar-brand img').addClass('nav-image-dark');
    $('.navbar-toggler span').addClass('.toggler-icon-dark');

    $('.toggler-icon').css('background-color', 'white');
    $('.navbar-brand img').attr('src','images/logo.png');
}};

