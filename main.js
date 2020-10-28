$(document).ready(function(){
    $('.slider__inner').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        prevArrow:'<button class="slick-arrow slick-prev"><img src="images/bread/left.png" alt=""></button>',
        nextArrow:'<button class="slick-arrow slick-next"><img src="images/bread/right.png" alt=""></button>',
      });
  });
    