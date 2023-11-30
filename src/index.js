$(function(){
    setHeaderColor();
    $(window).scroll(setHeaderColor);      
  });


function setHeaderColor() {
  if ($(document).scrollTop() > 100) {
    $('nav').removeClass('navbar-transparent');
    $('nav').addClass('navbar-white');

    $('.mobile-menu').removeClass('mobile-menu-transparent');
    $('.mobile-menu').addClass('mobile-menu-white');

    $('.dropdown-menu').removeClass('dropdown-dark');
    $('.dropdown-menu').addClass('dropdown-light');

    $('.ham').css('background-color', '#1b5997');
    $('.navbar-brand img').attr('src','images/logodark.png');

  } else {
    $('nav').removeClass('navbar-white');
    $('nav').addClass('navbar-transparent');

    $('.mobile-menu').removeClass('mobile-menu-white');
    $('.mobile-menu').addClass('mobile-menu-transparent');

    $('.dropdown-menu').removeClass('dropdown-light');
    $('.dropdown-menu').addClass('dropdown-dark');

    $('.ham').css('background-color', 'white');
    $('.navbar-brand img').attr('src','images/logo.png');
}};

const btn = document.getElementById("menu-btn");
const nav = document.getElementById("mobile");

function navToggle() {
  btn.classList.toggle("open");
  nav.classList.toggle("hidden");
  document.body.classList.toggle("no-scroll");
}

btn.addEventListener("click", navToggle);
  
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

