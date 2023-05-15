$(document).ready(function () {
  $('.sub').hide();

  $('#nav ul.menu_m li').mouseenter(
    function () {
      $('.sub_area > .sub').hide();

      var i = $(this).index()

      $('.sub_area > .sub')
        .eq(i)
        .show()
        .css({ opacity: '0', height: '0px' })
        .animate({ opacity: '1', height: '50px' })
    }
  );

  $('.sub_area').mouseleave(
    function () {
      $('.sub_area > .sub').hide();
    }
  )

  $('#nav .sub li').hover(
    function () {
      $(this).addClass('act');
    },
    function () {
      $(this).removeClass('act');
    }
  )

});




$(document).ready(function () {
  var slideCount = $('#main .main_img ul li').length;
  var currentIndex = 0;

  function slideAnimation() {
    $('#main .main_img ul li').eq(currentIndex).css('opacity', 1).siblings().css('opacity', 0);
  }

  function slideNext() {
    currentIndex++;
    if (currentIndex >= slideCount) {
      currentIndex = 0;
    }
    slideAnimation();
  }

  function slidePrev() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = slideCount - 1;
    }
    slideAnimation();
  }

  $('#main .b1').click(function () {
    slidePrev();
  });

  $('#main .b2').click(function () {
    slideNext();
  });

  setInterval(function () {
    slideNext();
  }, 5000);
});

$(document).ready(function () {
  var currentPosition = 0;
  var slideWidth = 430;
  var slides = $('.best_b li');
  var numberOfSlides = slides.length;
  var speed = 500;

  function moveSlide() {
    $('.best_b').animate({ 'marginLeft': slideWidth * (-currentPosition) }, speed);
  }

  $('.bt .b1').click(function () {
    if (currentPosition == 0) {
      currentPosition = numberOfSlides - 1;
    } else {
      currentPosition--;
    }
    moveSlide();
  });

  $('.bt .b2').click(function () {
    if (currentPosition == numberOfSlides - 1) {
      currentPosition = 0;
    } else {
      currentPosition++;
    }
    moveSlide();
  });
});

$(document).ready(function () {
  var currentPosition = 0;
  var slideWidth = 430;
  var slides = $('.new_b li');
  var numberOfSlides = slides.length;
  var speed = 500;

  function moveSlide() {
    $('.new_b').animate({ 'marginLeft': slideWidth * (-currentPosition) }, speed);
  }

  $('.bt .b3').click(function () {
    if (currentPosition == 0) {
      currentPosition = numberOfSlides - 1;
    } else {
      currentPosition--;
    }
    moveSlide();
  });

  $('.bt .b4').click(function () {
    if (currentPosition == numberOfSlides - 1) {
      currentPosition = 0;
    } else {
      currentPosition++;
    }
    moveSlide();
  });
});
