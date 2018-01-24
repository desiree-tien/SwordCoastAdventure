$('img').each(function(){
    $(this).click(function(){
        $(this).width($(this).width()+$(this).width())
    });
});