$(document).on('click', '.expand-action', function(e){
    $(this).next('.card-header').find('.btn').trigger('click');

    $('.expand-action').addClass('closed fa-plus').removeClass('opened fa-minus');

    if($(this).hasClass('fa-minus')){
        $(this).addClass('closed fa-plus').removeClass('opened fa-minus');
    }
    else if($(this).hasClass('fa-plus')){
        $(this).addClass('opened fa-minus').removeClass('closed fa-plus');
    }
})

$(document).on('click', '.expand-action.fa.fa-minus', function(e){
    $(this).removeClass('fa-minus').addClass('fa-plus');
})

$(document).on("click", '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });