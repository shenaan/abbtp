$(document).ready(function(){

  function isMobile() {
    if ($('.is-mobile').css('display') === 'block') {
      return true;
    } else {
      return false;
    }
  }

// Page Header
$('.page-header__hamburger').on('click', () => {
  let header = $('.page-header');
  header.toggleClass('is-opened');

  if ($(window).width() < 768) {
    if (header.hasClass('is-opened')) {
      disableScrolling();
    } else {
      enableScrolling();
    }
  }
});

$('.page-header .menu-item-has-children').find('a').on('click', function(e) {
	$('.menu-item-has-children a').removeClass('open-sub-menu');
	$('.menu-item-has-children .sub-menu').removeClass('opened');
	$(this).toggleClass('open-sub-menu');
	$(this).siblings('.sub-menu').toggleClass('opened');
	e.preventDefault();
	return false;
});
// /Page Header

// Owl Carousel
$('.owl-carousel').owlCarousel({
    loop:false,
    margin:0,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1,
            autoHeight: true
        },
        1024:{
            items:1,
            autoHeight: true
        }
    }
})
// /Owl Carousel

  //video controls
  $('video.video__item').click(function (e) {
    e.preventDefault();
    var $this = $(this).get(0);
    var icon = $(this).parent().find('.inner-page__media-icon');
    if ($this.paused) {
      $this.play();
      icon.hide();
    }
    else {
      $this.pause();
      icon.show();
    }
  });

  $('video.video__item').on('play', function (e) {
    var $this = $(this).get(0);
    var icon = $(this).parent().find('.inner-page__media-icon');
    $this.paused ? icon.show() : icon.hide();
  });

  $('.inner-page__media-icon').click(function (e) {
    e.stopPropagation();
    var video = $(this).parent().find('video').get(0);
    if (video.paused) {
      video.play();
      $(this).hide();
    } else {
      video.pause();
      $(this).show();
    }
  });
});
