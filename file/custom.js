/* Sticky nav */
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("nav");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}



/* reveal */
var num = 0;
var t = setInterval(function(){
  num = Math.max(0, num-1);
}, 100);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    num = num+1;

    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 25;

    if (elementTop < windowHeight - elementVisible) {
      //setTimeout(function(reveals, i){
        reveals[i].classList.add("active");
      //}, num*100);
      
    } 
    else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);
M.AutoInit();




/* Slick slider */
$(document).ready(function(){
  $('#slider-showcase').slick({
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    centerMode: true, 
    centerPadding: '120px',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          centerPadding: '60px'
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('#slider-popular-nfts').slick({
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 1250, 

  });

  function pressingDown(){
    console.log('down');
    $('#slider-showcase img').addClass('scale-down');
  }

  function notPressingDown(){
    console.log('up');
    $('#slider-showcase img').removeClass('scale-down');
  }

  // Listening for the mouse and touch events    
  $('#slider-showcase').on("mousedown", function(){ pressingDown(); });
  $('.slick-slide').on("mouseup", function(){ notPressingDown(); });
  $('.slick-slide').on("mouseleave", function(){ notPressingDown(); });

  // mobile touch events
  $('.slick-slide').on("touchstart", function(){ pressingDown(); });
  $('.slick-slide').on("touchend", function(){ notPressingDown(); });

});


/* Slick slider */

// Get titles from the DOM
var titleMain  = $("#animatedHeading");
var titleSubs  = titleMain.find("slick-active");

if (titleMain.length) {

  titleMain.slick({
    autoplay: false,
    arrows: false,
    dots: false,
    slidesToShow: 3,
    centerPadding: "10px",
    draggable: false,
    infinite: true,
    pauseOnHover: false,
    swipe: false,
    touchMove: false,
    vertical: true,
    speed: 1000,
    autoplaySpeed: 1000,
    useTransform: true,
    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
    adaptiveHeight: true,
    pauseOnHover: true
  });

  // On init
  $(".slick-dupe").each(function(index, el) {
    $("#animatedHeading").slick('slickAdd', "<div>" + el.innerHTML + "</div>");
  });

  // Manually refresh positioning of slick
  titleMain.slick('slickPlay');
};




/* image upload preview */
function readURL(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
          $('#imagePreview').css('background-image', 'url('+e.target.result +')');
          $('#imagePreview').hide();
          $('#imagePreview').fadeIn(650);
      }
      reader.readAsDataURL(input.files[0]);
  }
}
$("#imageUpload").change(function() {
  readURL(this);
});




/* tooltips */
$(document).ready(function(){
  $('.tooltipped').tooltip({
    exitDelay: 1000,
    html: 'hello',
  });
});




/* modal */
$(document).ready(function(){
  $('.modal').modal();
});



function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 6000);
}

/* materialize carousel */
$(document).ready(function(){
  $('.carousel').carousel({
  fullWidth: true,
  indicators: true, 
});
setTimeout(autoplay, 6000);

});




