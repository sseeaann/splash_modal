$( document ).ready(function() {

  $('.cta').on('click', function(){
    $('.overlay').addClass('is-open');
    return false;
  });

  $('.close-btn').on('click', function(){
    $('.overlay').removeClass('is-open');
  });

  var cnt = 0,
      texts = [];

  // save the texts in an array for re-use
  $(".trips").each(function() {
    texts[cnt++] = $(this).text();
  });
  function slide() {
    if (cnt >= texts.length) cnt = 0;
    $('#tripText').html(texts[cnt++]);
    $('#tripText')
      .fadeIn('slow').animate({opacity: 1.0}, 5000).fadeOut('slow',
       function() {
         return slide()
       }
    );
  }
  slide()


});
