function onViewport(el, elClass, offset, callback) {
  /*** Based on http://ejohn.org/blog/learning-from-twitter/ ***/
  var didScroll = false;
  var this_top;
  var height;
  var top;

  if(!offset) { var offset = 0; }

  $(window).scroll(function() {
      didScroll = true;
  });

  setInterval(function() {
    if (didScroll) {
      didScroll = false;
      top = $(this).scrollTop();

      $(el).each(function(i){
        this_top = $(this).offset().top - offset;
        height   = $(this).height();

        // Scrolled within current section
        if (top >= this_top  / 2 && !$(this).hasClass(elClass)) {
          $(this).addClass(elClass);

          if (typeof callback == "function") callback(el);
        }
      });
    }
  }, 100);
}

$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('#check');
   var offset = startchange.offset();
    if (startchange.length){
       $(document).scroll(function() {
          scroll_start = $(this).scrollTop();
          if(scroll_start > offset.top) {
              $(".navbar").css('background-color', '#7378df');
           } else {
              $('.navbar').css('background-color', 'transparent');
           }
       });
    }
});

onViewport(".animated-zoomIn", "zoomIn", 500);
onViewport(".animated-bounceInLeft", "bounceInLeft");
onViewport(".animated-bounceInDown", "bounceInDown");
onViewport(".animated-rollIn", "rollIn");
onViewport(".animated-rubberBand", "rubberBand");
