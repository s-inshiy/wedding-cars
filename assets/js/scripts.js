$(function() {

  var body = $('body'),
    mainMenu = {
      isTop: false,
      el: $('.navbar')
    },
    mainScroll = {
      isTop: false,
    },
    header = $('.header'),
    headerNavbar = $('.header__navbar'),
    scroll = $('.scrollToTop');

  //  Slick Slider
  $('.slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [{
      breakpoint: 1268,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        arrows: false
      }
    }, {
      breakpoint: 1070,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false
      }
    }, {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }]
  });

  //  Input, Textarea
  $("input,textarea").each(function() {
    $(this).data('holder', $(this).attr('placeholder'));

    $(this).focusin(function() {
      $(this).attr('placeholder', '');
    });

    $(this).focusout(function() {
      $(this).attr('placeholder', $(this).data('holder'));
    });
  });

  $('#nav-icon1').click(function() {
    $(this).toggleClass('open');
  });

  // Prepend Menu Mobile Screen

  $(window).resize(function() {
    runMenuBehaviour();
    // runScroll();
  });

  function runMenuBehaviour() {
    if ($(window).width() < 768) {
      if (mainMenu.isTop) return;
      mainMenu.isTop = true;
      toggleMenu({
        isTop: true
      });
    } else {
      if (!mainMenu.isTop) return;
      mainMenu.isTop = false;
      toggleMenu({
        isTop: false
      });
    }
  }

  function toggleMenu(direction) {
    if (direction.isTop) {
      header.prepend(mainMenu.el);
    } else {
      headerNavbar.prepend(mainMenu.el);
    }
  }

  runMenuBehaviour();

  //Check to see if the window is top if not then display button
  
  // function runScroll() {
  //   if ($(window).width() > 768) {
  //     if (mainScroll.isTop) return;
  //     mainScroll.isTop = true;
  //     toggleScroll({
  //       isTop: true
  //     })
  //   } else {
  //     if (!mainScroll.isTop) return;
  //     mainScroll.isTop = false;
  //     toggleScroll({
  //       isTop: false
  //     })
  //   }
  // }

  // function toggleScroll(direction) {
  //   if (direction.isTop == true) {
  //     console.log('show!');
      $(window).scroll(function() {
        if ($(this).scrollTop() > 2200) {
          scroll.fadeIn();
        } else {
          scroll.fadeOut();
        }
      });
  //   } else {
  //     console.log('hide!');
  //     scroll.hide();
  //   }
  // }

  // runScroll();

  //Click event to scroll to top
  scroll.click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });

});

//Spiner
$(window).load(function() {

  var body = $('body');
  $('#preloader').delay(350).fadeOut('slow');
  body.delay(350).css({
    'overflow': 'visible'
  });

});