$(document).ready(function(){
    $('.menu-button').click(function(){
        $('.section-side-header').toggleClass('open-sidebar');
    })
})
$(document).ready(function(){
    $('.menu-button').click(function(){
        $('.main-wrapper').toggleClass('margin-sidebar');
    })
})



/*
jQuery(document).ready(function () {

	jQuery('.progress-bar').each(function () {
		jQuery(this).find('.progress-content').animate({
			width: jQuery(this).attr('data-percentage')
		}, 2000);

		jQuery(this).find('.progress-number-mark').animate({
			left: jQuery(this).attr('data-percentage')
		}, {
			duration: 2000,
			step: function (now, fx) {
				var data = Math.round(now);
				jQuery(this).find('.percent').html(data + '%');
			}
		});
	});
});

*/

var offsetTop = $(".section-skill").offset().top;
$(window).scroll(function() {
  var height = $(window).height();
  if ($(window).scrollTop() + height > offsetTop) {
    jQuery(".progress-bar-custom").each(function() {
      jQuery(this).find(".progress-content").animate(
        {
          width: jQuery(this).attr("data-percentage")
        },
        2000
      );

      jQuery(this).find(".progress-number-mark").animate(
        {
          left: jQuery(this).attr("data-percentage")
        },
        {
          duration: 2000,
          step: function(now, fx) {
            var data = Math.round(now);
            jQuery(this).find(".percent").html(data + "%");
          }
        }
      );
    });
  }
});
//end skills progress bar

//achivement counter
$('.counter').counterUp({
  delay: 10,
  time: 2000
});
//end achivement counter



//isotop

$(document).ready(function(){
	var $grid = $('.grid-group').isotope({
		itemSelector: '.grid',
		masonry: {
		  columnWidth:1,
		}
	  });
	
	  // filter items on button click
	  $('.filter-button').on( 'click', 'button', function() {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});
});
//isotop



// testiminial carousel
$(document).ready(function(){
  $('.carousel-testimonial').owlCarousel({
    loop:true,
    nav:true,
    dots:true,
    margin:25,
    responsiveClass:true,
    autoHeight:true,
    smartSpeed:800,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
  })
})
// testiminial carousel
$(document).ready(function(){
  $('.carousel-client').owlCarousel({
    loop:true,
    nav:true,
    dots:true,
    margin:25,
    responsiveClass:true,
    autoHeight:true,
    smartSpeed:800,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
  })
})
// testiminial carousel


// form menu jumper 
$(document).ready(function() {
  $('a[href*=#]').bind('click', function(e) {
          e.preventDefault(); // prevent hard jump, the default behavior

          var target = $(this).attr("href"); // Set the target as variable

          // perform animated scrolling by getting top-position of target-element and set it as scroll target
          $('html, body').stop().animate({
                  scrollTop: $(target).offset().top
          }, 1500, function() {
                  location.hash = target; //attach the hash (#jumptarget) to the pageurl
          });

          return false;
  });
});

$(window).scroll(function() {
  var scrollDistance = $(window).scrollTop();

  // Assign active class to nav links while scolling
  $('.jump').each(function(i) {
          if ($(this).position().top <= scrollDistance +60) {
                  $('li.active').removeClass('active');
                  $('li').eq(i).addClass('active');
          }
  });
}).scroll();
// form menu jumper 