$(document).ready(function(){
  $('.paper__sheet__item .clicker').click(function(e){
    e.preventDefault();
    $('.paper__sheet__item').each(function(){
      $(this).removeClass('active');
    });

    $(this).parent().addClass('active');



  });
});
