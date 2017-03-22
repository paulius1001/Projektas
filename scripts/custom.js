$(document).ready(function(){
    $(".burger-container").on('click', function(){
        $(this).toggleClass("open"),
        $(".main-nav").toggleClass("open");
    });  
    
     $(".reality").on('click', function(){
        $(".post-inner").removeClass("hide");
        $(".living-inner").addClass("hide");
        $(".education-inner").addClass("hide");
        $(".entertainment-inner").addClass("hide");
        
    }); 
    
     $(".living").on('click', function(){
        $(".living-inner").removeClass("hide");
        $(".post-inner").addClass("hide");
        $(".education-inner").addClass("hide");
        $(".entertainment-inner").addClass("hide");
        
        
    }); 
    
     $(".education").on('click', function(){
        $(".education-inner").removeClass("hide");
        $(".post-inner").addClass("hide");
        $(".living-inner").addClass("hide");
        $(".entertainment-inner").addClass("hide");
        
    }); 

     $(".entertainment").on('click', function(){
        $(".entertainment-inner").removeClass("hide");
        $(".post-inner").addClass("hide");
        $(".education-inner").addClass("hide");
        $(".living-inner").addClass("hide");
        
    }); 
    
//        $("ul.fico li a").on('click', function(){
//        $("ul.fico li a").removeClass('active');
//        $(this).addClass('active'); 
//        var selector = $(this).attr('data-filter');
//            if(selector != $(".post-body > div").attr('id')){
//                
//             $(".post-body > div").addClass('klasessssssss');
//             
//            }
//            else{a=0;}
//        
//    }); 
     $('ul.fico li a').click(function() {
        $(this).css('outline','none');
        $('ul.fico .current').removeClass('current');
        $(this).parent().addClass('current');

        var filterVal = $(this).text().toLowerCase().replace(' ','-');

        if(filterVal == 'all') {
          $('div.post-body > div.hidden').fadeIn('slow').removeClass('hidden');
        } else {
          $('div.post-body > div').each(function() {
            if(!$(this).hasClass(filterVal)) {
              $(this).fadeOut('normal').addClass('hidden');
            } else {
              $(this).fadeIn('slow').removeClass('hidden');
            }
          });
        }

        return false;
      });
    
});
           