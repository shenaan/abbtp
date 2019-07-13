$(document).ready(function () {

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

  $('.page-header .menu-item-has-children').find('a').on('click', function (e) {
    $('.menu-item-has-children a').removeClass('open-sub-menu');
    $('.menu-item-has-children .sub-menu').removeClass('opened');
    $(this).toggleClass('open-sub-menu');
    $(this).siblings('.sub-menu').toggleClass('opened');
    e.preventDefault();
    return false;
  });
// /Page Header

// Owl Carousel
  $('.tweets__carousel').owlCarousel({
    loop: false,
    margin: 0,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
        autoHeight: true
      },
      1024: {
        items: 1,
        autoHeight: true
      }
    }
  });

  $('.suggestions-carousel').owlCarousel({
    loop: false,
    margin: 0,

    dots: false,
    responsive: {
      0: {
        items: 1,
        autoHeight: false,
        nav: true,
      },
      768:{
        items: 2,
        autoHeight: false,
        nav: true
      },
      1024: {
        items: 3,
        autoHeight: false,
        nav: false
      }
    }
  });
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

  //load members - members page
  $('.member-list__load-link').on('click', function (e) {
    e.preventDefault();
    let $this = $(this);
    let itemHidden = $this.parents('.members-list').find('.members-list__item.is-hidden');
    if(itemHidden.length === 0) {
      $this.addClass('is-inactive');
    } else {
        itemHidden.slice(0,4).fadeIn().removeClass('is-hidden');
    }
  });

 $('.members-block__title-btn').on('click', function () {
   let $this = $(this);
   $this.parents('.members-block').find('.members-list__wrap').fadeToggle().toggleClass('is-hidden');
   $this.find('span').toggleClass('is-hidden');
 });

 //FAQs page load items
  $('.faqs__list-load-link').on('click', function (e) {
    e.preventDefault();
    let $this = $(this);
    let itemHidden = $this.parents('.faqs__list').find('.faqs__list-item.is-hidden');
    if(itemHidden.length === 0) {
      $this.addClass('is-inactive');
    } else {
      itemHidden.slice(0,4).fadeIn().removeClass('is-hidden');
    }
  });

});
