$(window).scroll(function() {
  const pos = $('main').offset();

  if($(this).scrollTop() > pos.top) {
    $('#header-sab').fadeIn();
  } else {
    $('#header-sab').fadeOut();
  }
});
