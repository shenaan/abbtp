/* Init object fit polyfill */
/* To make it work, add 'font-family: 'object-fit: cover;';' to image */
if (window.objectFitImages) {
  window.objectFitImages();
}

$(document).ready(function () {
  function isMobile() {
    if ($('.is-mobile').css('display') === 'block') {
      return true;
    } else {
      return false;
    }
  }

// Page Header
  $('.page-header__hamburger').on('click', (e) => {
    e.stopPropagation();
    let header = $('.page-header');
    header.toggleClass('is-opened');
    $('body, html').toggleClass('no-scroll');
  });

  $('.page-header .menu-item-has-children a').on('click', function (e) {
    let $this = $(this);
    if (isMobile()) {
      e.preventDefault();
      $this.siblings('.sub-menu').slideToggle();
      $this.toggleClass('open-sub-menu');
      $this.parent().siblings('.menu-item-has-children').find('a').removeClass('open-sub-menu');
      $this.parent().siblings('.menu-item-has-children').find('.sub-menu').slideUp();
    }
  });

  $(document).on('click', function (e) {
    if (!e) e = window.event;  //for mozilla
    if ($('.page-header').hasClass('is-opened')) {
      if (!$(e.target).closest('.page-header__nav-block').length) {
        $('.page-header.is-opened').removeClass('is-opened');
        $('body, html').removeClass('no-scroll');
      }
    }
  });

  $('.page-header__btn-logout').on('click', function (e) {
    e.preventDefault();
    $('.page-header').find('.page-header__logged-in').removeClass('is-active');
    $('.page-header').find('.page-header__btn-log').toggleClass('is-hidden');
  });
// /Page Header

  //close cookies
  $('.cookies-close__btn').on('click', function (e) {
    $(this).parents('.cookies-modal').hide();
  });

  //modal
  //login
  $('.page-header__btn-login').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('.page-header').removeClass('is-opened');
    $('#modal-overlay').addClass('is-visible');
    $('.modal-login').addClass('is-active');
  });

  $('.modal-login__close').on('click', function (e) {
    $(this).parents('.modal').removeClass('is-active');
    $('#modal-overlay').removeClass('is-visible');
  });

  //renew membership
  $('.modal-login__submit button').on('click', function (e) {
    e.stopPropagation();
    e.preventDefault();
    $(this).parents('.modal').removeClass('is-active');
    $('.modal-renew').addClass('is-active');
  });

  $(document).on('click', function (e) {
    if (!e) e = window.event;
    if ($('.modal').hasClass('is-active')) {
      if (!$(e.target).closest('.modal.is-active').length) {
        $('.modal').removeClass('is-active');
        $('#modal-overlay').removeClass('is-visible');
      }
    }
  });

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

  //'you may be interested in' carousel
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
      768: {
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

  //media carousel
  $('.media-carousel').owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    items: 1,
    autoHeight: false,
    nav: true
  });

  //shop detail carousel
  $('.shop-detail__slider').owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    items: 1,
    autoHeight: false,
    nav: true
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

  //handle select
  function selectChange() {
    $(".form__select-wrap").each(function () {
      $(this).find("p.form__select-placeholder").text($(this).find("select option:selected").text());
    })
  }

  $(".form__select-wrap select").on('change', function () {
    console.log($(this).find('select option:selected').text())
    selectChange();
  });

  //handle file upoad
  function uploadInputChange() {
    $(".form__upload-wrap").each(function () {
      $(this).find(".form__upload-overlay").text($(this).find("input").val());
    })
  }

  $('.form__upload-wrap input').on('change', function () {
    uploadInputChange();
  });

  //load more items
  function loadItems(quantity, link, parent, item) {
    let target = link;
    let parents = target.parents(parent);
    let itemHidden = parents.find(item + '.is-hidden');
    if (itemHidden.length === 0) {
      target.addClass('is-inactive');
    } else {
      itemHidden.slice(0, quantity).fadeIn().removeClass('is-hidden');
    }
  }

  //page load items
  $('.content-cards__load-link').on('click', function (e) {
    e.preventDefault();
    loadItems(3, $(this), '.content-cards__list', '.content-cards__list-item');
  });

  //load shop items
  $('.shop-cards__load-link').on('click', function (e) {
    e.preventDefault();
    loadItems(4, $(this), '.shop__section', '.shop__list-item');
  });

  //load members - members page
  $('.member-list__load-link').on('click', function (e) {
    e.preventDefault();
    loadItems(4, $(this), '.members-list', '.members-list__item');
  });

  $('.members-block__title-btn').on('click', function () {
    let $this = $(this);
    $this.parents('.members-block').find('.members-list__wrap').slideToggle().toggleClass('is-hidden');
    $this.find('span').toggleClass('is-hidden');
  });

  //General accordion page
  $('.accordion-item__head-btn').on('click', function () {
    let $this = $(this);
    let parent = $this.parents('.accordion-item');
    let siblings = parent.siblings('.accordion-item');
    let icon = $this.find('span');

    icon.toggleClass('is-hidden');
    parent.toggleClass('is-closed');
    parent.find('.accordion-item__content--hidden').toggleClass('is-visible');
    siblings.addClass('is-closed');
    siblings.find('.accordion-item__content--hidden').removeClass('is-visible');
    siblings.find('.accordion-item__head-btn span.plus').removeClass('is-hidden');
    siblings.find('.accordion-item__head-btn span.minus').addClass('is-hidden');
  });

  //shop details tabs
  $('.shop-detail__tab-link').on('click', function (e) {
    e.preventDefault();
    let $this = $(this);
    let href = $this.attr('href');
    $this.removeClass('is-active');
    $this.siblings('.shop-detail__tab-link').addClass('is-active');

    $('.shop-detail__tab-item').removeClass('is-active');
    $this.parents('.shop-detail__tabs').find('.shop-detail__tab-item' + href).addClass('is-active');
  });

  //registration page accordion
  $('.registration__block-title').on('click', function f() {
    $(this).parent().find('.registration__block-body').slideToggle();
    $(this).toggleClass('is-open');
  });

  //tooltip
  $('.form-tooltip__icon').on('click', function (e) {
    e.stopPropagation();
    $(this).siblings('.form__tooltip-content').toggleClass('is-visible');
  });

  $(document).on('click', function (e) {
    if (!e) e = window.event;
    e.stopPropagation();
    if ($('.form__tooltip-content').hasClass('is-visible')) {
      if (!$(e.target).closest('.form__tooltip-content.is-visible').length) {
        $('.form__tooltip-content').removeClass('is-visible');
      }
    }
  });

});
