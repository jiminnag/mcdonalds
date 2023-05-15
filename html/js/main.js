$(document).ready(function() {
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

  $('#main .b1').click(function() {
    slidePrev();
  });

  $('#main .b2').click(function() {
    slideNext();
  });

  setInterval(function() {
    slideNext();
  }, 5000);
});

