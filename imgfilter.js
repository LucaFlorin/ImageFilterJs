$(document).ready(function(){
    $('.button').click(function(){
        $('.button').removeClass('active');
             $(this).addClass('active');
    });

/*
    $('.button').click(function(){
        var click_section = $(this).attr('id');
            if(click_section == 'all'){
                $('.picture_item').addClass('hide');
                        $('.picture_item').removeClass('hide');
                    
                    
            }else{
                $('.picture_item').addClass('hide');
                setTimeout(function(){
                    $('.' + click_section).removeClass('hide');
                },  500);
            }
           
           
    });

*/

    $('.button1').click(function(){
        var d = $(this).attr('data-id');
                $('.picture_item').hide();
              
                    $('.' + d).fadeIn(600);
               
                
    });



    $('.overlay_icon').click(function(){
        var imagine = $(this).parent().parent().prev().attr('src');
            $('.image_container').attr('src', imagine);
                $('.popup').fadeIn(500);
                   

            


    });

    $('.popup').click(function(){
            $('.popup').fadeOut();
    
    })
});