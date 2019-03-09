$('.lightbulb i').click(function(){
    
    $('.lightbulb-modal').addClass('bounceInDown')
    $('.inquiries').addClass('slideInLeft')
    $('.notifications').addClass('slideInLeft')
    $('.lightbulb-modal').removeClass('bounceOutUp')
    $('.lightbulb-modal').removeClass('hide')
    
})

$('.close-modal i').click(function(){
    $('.lightbulb-modal').addClass('bounceOutUp')
    $('.inquiries').removeClass('slideInLeft')
    $('.notifications').removeClass('slideInLeft')
    setTimeout(function(){ 
        $('.lightbulb-modal').addClass('hide')
     }, 1000);
})

