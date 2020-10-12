$(document).ready(function () {

  //number
  var defaultValue = parseInt($('.number input').val()),
    $plus = $('.number .plus'),
    $minus = $('.number .minus');

  $plus.click(function () {
    defaultValue += 1;
    $(this).next().val(defaultValue);
  });

  $minus.click(function () {
    defaultValue -= 1;
    if (defaultValue <= 0) {
      defaultValue = 0;
    }
    $(this).prev().val(defaultValue);
  });

  //upload images
  $(function () {
    var imagesPreview = function (input, placeToInsertImagePreview) {
      $('.gallery').empty();
      if (input.files) {
        var filesAmount = input.files.length;
        for (i = 0; i < filesAmount; i++) {
          var reader = new FileReader();
          reader.onload = function (event) {
            var image = document.createElement('img');
            image.setAttribute('src', event.target.result);
            var body = document.createElement('div');
            var button = document.createElement('button');
            var input = document.createElement('input');
            input.setAttribute('name', 'images[]');
            input.setAttribute('type', 'hidden');
            button.setAttribute('class', 'close-img');
            button.innerHTML = '<i class="fa fa-times-circle"></i>';
            body.appendChild(image);
            body.appendChild(input);
            body.appendChild(button);
            body.setAttribute('class', 'images');
            console.log(body);
            $('.gallery').append(body);
            ($($.parseHTML(body)).appendTo(placeToInsertImagePreview));
          }
          reader.readAsDataURL(input.files[i]);
        }
      }
    };
    $(document).on('click', '.close-img', function (event) {
      event.preventDefault();
      $(this).parent().remove();
    });
    $('#gallery-photo-add').on('change', function () {
      imagesPreview(this, 'div.gallery');
    });
  });

  // Convert Password Field To Text Field
  $('.showpass').click(function () {
    $(this).toggleClass('active');
    $(this).toggleClass('fa-eye-slash');
    if ($(this).hasClass('active')) {
      $(this).parent().find('input').attr('type', 'text');
    } else {
      $(this).parent().find('input').attr('type', 'password');
    }
  });

  // visa radio
  $('input:radio[name="radio1"]').change(
    function () {
      if ($(this).is(':checked') && $(this).val() == 'card') {
        // append goes here
        $('.show-visa').slideDown();
      } else {
        $('.show-visa').slideUp();
      }
    });

  //fav page delete
  $('.deletefav').click(function () {
    $(this).parents('.fav-col').remove();
  });

  //cats
  $(".radio-filter").on('change', function () {
    $(".i-change .far").removeClass("fa-check-circle").addClass('fa-circle');
    $(this).parent().find("i.far").removeClass('fa-circle').addClass('fa-check-circle');
  });

  $('.add-active-sub').on('change', function (e) {
    if ($(this).prop('checked')) {
      $(this).parents('.drop-list-menu').addClass('active');
      $(this).parent().find('i').addClass('fa-circle').removeClass('fa-circle-notch');
    } else {
      $(this).parents('.drop-list-menu').removeClass('active')
      $(this).parent().find('i').removeClass('fa-circle').addClass('fa-circle-notch');

    };
  });
  $('.in-sub input').on('change', function (e) {
    if ($(this).prop('checked')) {
      $(this).parent().find('i').addClass('fa-circle').removeClass('fa-circle-notch');
    } else {
      $(this).parent().find('i').removeClass('fa-circle').addClass('fa-circle-notch');
    };
  });

  //mobile nav
  $('.logo-search .fa-bars').click(function () {
    $('.mobile-nav').toggleClass('right-mobile')
  })
  $('.mobile-nav .fa-times').click(function () {
    $('.mobile-nav').removeClass('right-mobile')
  });

  // fav
  $('.fav-in').on('change', function () {
    $(this).parents('.fav-checkbox').find('i.fav').toggleClass('yellow');
  });

  // mobile search
  $('.fa-search').click(function () {
    $('.logo-search form').toggleClass('bottom-37');
    $('.search-over').toggleClass('search-over-show')
  });
  $('.search-over').click(function () {
    $('.logo-search form').removeClass('bottom-37');
    $(this).removeClass('search-over-show')
  });

  // backtotop
  if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
      backToTop = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
          $('#back-to-top').addClass('show');
        } else {
          $('#back-to-top').removeClass('show');
        }
      };
    backToTop();
    $(window).on('scroll', function () {
      backToTop();
    });
    $('#back-to-top').on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 700);
    });
  }

  //widget open
  $('.cats-widget a').click(function () {
    $('.widget').toggleClass('widget-mob');
  });

  //close widget
  $('.close-widget').click(function () {
    $('.widget').removeClass('widget-mob');
  });
  // end widget open

  //cart animation
  $('.add-cart').click(function () {
    event.preventDefault();
    $(this).closest('.product-item').find('.pro-img img').clone().addClass('zoom').appendTo('body');
    setTimeout(function () {
      $('.zoom').remove();
    }, 1000000);
  });
});

//price range
function collision($div1, $div2) {
  var x1 = $div1.offset().left;
  var w1 = 40;
  var r1 = x1 + w1;
  var x2 = $div2.offset().left;
  var w2 = 40;
  var r2 = x2 + w2;

  if (r1 < x2 || x1 > r2)
    return false;
  return true;
}
// Fetch Url value 
var getQueryString = function (parameter) {
  var href = window.location.href;
  var reg = new RegExp('[?&]' + parameter + '=([^&#]*)', 'i');
  var string = reg.exec(href);
  return string ? string[1] : null;
};
// End url 


// slider call
// sliders
var mySwiper = new Swiper('.slider .swiper-container', {
  // Optional parameters
  loop: true,
  // autoplay: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

//product-slider
var mySwiper = new Swiper('.prod-slider .swiper-container', {
  // Optional parameters
  slidesPerView: 6,
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  loopedSlides: 50,
  // autoplay: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    1024: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    786: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    689: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    425: {
      slidesPerView: 2,
      spaceBetween: 10,
    }
  }
});

//product-slider
var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 4,
  loop: true,
  freeMode: true,
  loopedSlides: 5, //looped slides should be the same
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  loop: true,
  loopedSlides: 5, //looped slides should be the same
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs,
  },
});

$('#product-details').on('shown.bs.modal', function () {
  galleryTop.update();
  galleryThumbs.update();
});

//rating
var $star_rating = $('.star-rating .far');
var SetRatingStar = function () {
  return $star_rating.each(function () {
    if (parseInt($star_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
      return $(this).removeClass('far').addClass('fas');
    } else {
      return $(this).removeClass('fas').addClass('far');
    }
  });
};
$star_rating.on('click', function () {
  $star_rating.siblings('input.rating-value').val($(this).data('rating'));
  return SetRatingStar();
});
SetRatingStar();

///////////////////////////////////////////////
$(window).on('load', function () {
  $("#preloader").fadeOut(2000, function () {
    $("body").fadeIn(1000)
  })
});

//back to last page
function goBack() {
  window.history.back();
}
//back to last page

//number

var defaultValue = parseInt($('.number input').val()),
  $plus = $('.number .plus'),
  $minus = $('.number .minus');

$plus.click(function () {
  defaultValue += 1;
  $(this).next().val(defaultValue);
});

$minus.click(function () {
  defaultValue -= 1;
  if (defaultValue <= 0) {
    defaultValue = 0;
  }
  $(this).prev().val(defaultValue);
});

// // slider call
$('#slider').slider({
  range: true,
  min: 1000,
  max: 10000,
  step: 1,
  values: [getQueryString('minval') ? getQueryString('minval') : 3000, getQueryString('maxval') ? getQueryString('maxval') : 6000],

  slide: function (event, ui) {

    $('.ui-slider-handle:eq(0) .price-range-min').html('$' + ui.values[0]);
    $('.ui-slider-handle:eq(1) .price-range-max').html('$' + ui.values[1]);
    $('.price-range-both').html('<i>$' + ui.values[0] + ' - </i>$' + ui.values[1]);

    // get values of min and max
    $("#minval").val(ui.values[0]);
    $("#maxval").val(ui.values[1]);

    if (ui.values[0] == ui.values[1]) {
      $('.price-range-both i').css('display', 'none');
    } else {
      $('.price-range-both i').css('display', 'inline');
    }

    if (collision($('.price-range-min'), $('.price-range-max')) == true) {
      $('.price-range-min, .price-range-max').css('opacity', '0');
      $('.price-range-both').css('display', 'block');
    } else {
      $('.price-range-min, .price-range-max').css('opacity', '1');
      $('.price-range-both').css('display', 'none');
    }

  }
});

$('.ui-slider-range').append('<span class="price-range-both value"><i>$' + $('#slider').slider('values', 0) + ' - </i>' + $('#slider').slider('values', 1) + '</span>');

$('.ui-slider-handle:eq(0)').append('<span class="price-range-min value">$' + $('#slider').slider('values', 0) + '</span>');

$('.ui-slider-handle:eq(1)').append('<span class="price-range-max value">$' + $('#slider').slider('values', 1) + '</span>');
// End url 