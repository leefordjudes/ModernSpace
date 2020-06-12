/* scroll to top*/
$(document).ready(function () {
  $("#scrollToTop").hide();
  $(function toTop() {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        $('.scrollUp').fadeIn();
      } else {
        $('.scrollUp').fadeOut();
      }
    });
    $(".scrollUp").click(function () {
      $("html, body").animate({
        scrollTop: 0
      }, "slow");
      return false;
    });
  });
});

/* sticky nav bar*/
$(window).scroll(function() {
	if ($(this).scrollTop() > 100){ 
		$('.menu').addClass("sticky1");
		$('.h2').addClass("color");
	  }
	  else{
		$('.menu').removeClass("sticky1");
		$('.h2').removeClass("color");
	  }
	});


//project && service page filter

$(document).ready(function () {
  jQuery(function () {
    jQuery('.show').click(function () {
      jQuery('.targetDiv').hide()
      jQuery('#div' + $(this).attr('target')).show();
    });
  });
})

$(document).ready(function () {
  $('.dd .ad-link').click(function () {
    $('.ad-link').removeClass("ad-active");
    $(this).addClass("ad-active");
  });
});
 
//service-page
$(document).ready(function () {
  $('.service-link .service-subtitle').click(function () {
    $('.service-subtitle').removeClass('service-active')
    $(this).addClass('service-active')
  });
});


