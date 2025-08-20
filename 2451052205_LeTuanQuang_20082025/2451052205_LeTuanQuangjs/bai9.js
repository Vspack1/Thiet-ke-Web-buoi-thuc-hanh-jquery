$('.slider').each(function () {
  let $this = $(this);
  let $group = $this.find('.slide-group');
  let $slides = $this.find('.slide');
  let buttonArray = [];
  let currentIndex = 0;
  let timeout;

  function move(newIndex) {
    let animateLeft, slideLeft;

    advance();

    if ($group.is(':animated') || currentIndex === newIndex) {
      return;
    }

    buttonArray[currentIndex].removeClass('active');
    buttonArray[newIndex].addClass('active');

    if (newIndex > currentIndex) {
      slideLeft = '100%';
      animateLeft = '-100%';
    } else {
      slideLeft = '-100%';
      animateLeft = '100%';
    }

    $slides.eq(newIndex).css({
      left: slideLeft,
      display: 'block'
    });

    $group.animate({ left: animateLeft }, function () {
      $slides.eq(currentIndex).css({ display: 'none' });
      $slides.eq(newIndex).css({ left: 0 });
      $group.css({ left: 0 });
      currentIndex = newIndex;
    });
  }

  function advance() {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    }, 4000);
  }

  $.each($slides, function (index) {
    let $button = $('<button type="button" class="slide-btn">&bull;</button>');
    if (index === currentIndex) {
      $button.addClass('active');
    }

    $button.on('click', function () {
      move(index);
    }).appendTo('.slide-buttons');

    buttonArray.push($button);
  });

  advance();
});
