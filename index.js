const animateButton = function(e) {
  e.preventDefault;
  e.target.classList.remove('animate');
  e.target.classList.add('animate');
  setTimeout(function(){e.target.classList.remove('animate')},700);
};

const bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}

const root = document.documentElement;

$(function () {
  $('.sun').click(function (e) {
    $(".container").removeClass('preload')
    e.stopPropagation();
    $("html").toggleClass('container-night');
    $(".sky-night").toggleClass('sky-night-fade');
    $("p, h1").toggleClass('text-color');
    $(".ocean-night").toggleClass('ocean-night-fade');
    $(".moon").toggleClass('moon-fade');
    $(".ocean").toggleClass('animation-stop');
    $(".bird").toggleClass('birds-fly');
    $(".boat").toggleClass('boat-sail');
    $(".mountain-top, .mountain-top >*").toggleClass('mountain-top-night');
    $(".mountain-middle, .mountain-middle >*").toggleClass('mountain-middle-night');
    $(".mountain-back, .mountain-back >*").toggleClass('mountain-back-night');
    $(".cloud").delay(2500).fadeToggle(2500);
    $(".stars").toggleClass('stars-fade');
    $(".shooting-star").toggleClass('shooting');

    var angle = ($('.sun-container').data('angle') + 360) || 360;
    $('.sun-container').css({
      'transform': 'rotate(' + angle + 'deg)'
    });
    $('.sun-container').data('angle', angle);

    changeFootnote();
  });
});

function changeFootnote() {
  if ($("#footnote").hasClass("sun-text")) {
    $('#footnote').fadeOut(2500, function() {
      $(this)
        .removeClass("sun-text")
        .text('*click the moon for morning').fadeIn(2500);
    });
  } else {
    root.style.setProperty('--bubble-color', "#fbd373");
    $('#footnote').fadeOut(2500, function() {
      $(this)
        .addClass("sun-text")
        .text('*click the sun to snooze').fadeIn(2500);
    });
  }
}
