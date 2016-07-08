$(function() {

  //  Slick Slider
  $('.slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          // dots: true
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
          slidesToScroll: 2
        }
      }
    ]
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

	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});

});