$(function() {

  //  Slick Slider
  jQuery('.slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3
  });

  //  Input, Textarea
  jQuery("input,textarea").each(function() {
    jQuery(this).data('holder', jQuery(this).attr('placeholder'));

    jQuery(this).focusin(function() {
      jQuery(this).attr('placeholder', '');
    });

    jQuery(this).focusout(function() {
      jQuery(this).attr('placeholder', jQuery(this).data('holder'));
    });
  });

});