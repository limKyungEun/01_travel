//JavavScript Document


    $(".list>li").mouseover(function(){
        var submenu = $(this).children(".submenu").slideDown;});
    
    $(".list>li").mouseleave(function(){
        $(this).children(".submenu").stop().slideUp();});

    
                
