$('.burger').bind('click', function() {
 $(this).toggleClass('active');
 $(this).find('div').removeClass('no-animation');
 $('.menu').toggleClass('active');
});