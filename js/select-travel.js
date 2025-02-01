$('.viagens button').click(function(){
  const destino = $('#contato')
  const choose = $(this).parent().find('h3').text()
  $('html').animate({
    scrollTop: destino.offset().top
  }, 1000)
  $('#viagem').val(choose);
})