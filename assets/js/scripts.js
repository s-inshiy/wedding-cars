$(function() {

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
    },
    {
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
  
  var mainMenu = {
        isTop: false,
        el: $('.navbar')
    },
    $header = $('.header');
     $headerNavbar = $('.header__navbar'),
    // $menuHandle = $('.main-menu-handle');

    $(window).resize(function () {
        runMenuBehaviour();
    });

    function runMenuBehaviour() {
        if ($(window).width() < 754) {
            if (mainMenu.isTop) return;
            mainMenu.isTop = true;
            toggleMenu({isTop: true});
        } else {
            if (!mainMenu.isTop) return;
            mainMenu.isTop = false;
            toggleMenu({isTop: false});
        }
    }

    function toggleMenu(direction) {
        if (direction.isTop) {
            $header.prepend(mainMenu.el);
            mainMenu.el.addClass('sticky');
            // $menuHandle.css('display', 'block');
        } else {
             $headerNavbar.prepend(mainMenu.el);
            // $searchBlockOuter.after(mainMenu.el);
            // mainMenu.el.removeClass('sticky');
            // $menuHandle.css('display', 'none');
        }
    }

    runMenuBehaviour();
    
});


//preloader
$(window).load(function() {

  var body = $('body');
  $('#preloader').delay(350).fadeOut('slow');
  body.delay(350).css({
    'overflow': 'visible'
  });

});