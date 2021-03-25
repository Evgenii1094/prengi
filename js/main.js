$(document).ready(function(){
    $('ul.tabs-link').on('click', 'li:not(.catalog-tab-active)', function() {
        $(this)
          .addClass('catalog-tab-active').siblings().removeClass('catalog-tab-active')
          .closest('div.tabs').find('div.tabs-container-item').removeClass('tabs-active').eq($(this).index()).addClass('tabs-active');
      });
  });

  $('[data-modal=order]').on('click', function() {
    $('.overlay, #order').fadeIn('slow');
});
$('.modal-close').on('click', function() {
    $('.overlay, #order, #callback').fadeOut('slow');
});

$('.btn-mini').each(function(i) {
    $(this).on('click', function() {
        $('#order .modal-descr').text($('').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
    })
});

$('.scrollto a').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 350,   // по умолчанию «400» 
        easing: "linear" // по умолчанию «swing» 
    });

    return false;
});

function valideForms(form){
    $(form).validate({
        rules: {
            name: "required",
            phone: "required",
          },
          messages: {
            name: "Пожалуйста, введите своё имя",
            phone: "Пожалуйста, введите свой номер телефона"
          }
    });
};
valideForms('#order form');

$(".form-phone").mask("+38 (999) 999-99-99");

// $('#mobile-menu-btn').click(function(){
//     $(this).toggleClass('active');
//     $('.mobile-menu-container').toggleClass('active');
// });

$('[data-modal=burger]').on('click', function() {
    $('.overlay-hamburger, #hamburger-mobile').fadeIn('slow');
});
$('.button-mobile, .hamburger-close').on('click', function() {
    $('.overlay-hamburger, #hamburger-mobile').fadeOut('slow');
});