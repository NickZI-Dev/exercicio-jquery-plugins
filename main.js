$(document).ready(function(){
  $('.carousel-image').slick({
    autoplay:true,
  });

  $('.menu-hamburguer').click(function(){
    $('nav').slideToggle();
  })
$('.carousel-viagens').slick()

$('.contact-form').validate({
  rules: {
    nomeCompleto: {
      required:true,
    },
    telefone: {
      required:true
    },
    email: {
      required:true,
      email:true
    }
  },
  messages: {
    nomeCompleto: 'Este campo é obrigatório. Preencha-o corretamente',
    email: "Este campo é obrigatório. Preencha-o corretamente",
    telefone: "Este campo é obrigatório. Preencha-o corretamente"
  }

})

$('#telefone').mask('(00)00000-0000', {
  placeholder: '(83)05780-1234'
})
})