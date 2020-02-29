
 let localStorage = window.localStorage;
 var WishCounter = localStorage.getItem('WishCounter') === null ? 0 : localStorage.getItem('WishCounter');

 $(".cart-wish").text(WishCounter);

 $(document).ready(function(){
     $(".accordion-heading").click(function(){
         if($(".accordion-body").is(':visible')){  /* check the condition accordion-body is visible or not */
             $(".accordion-body").slideUp(200);  /*if content is visible then close accordion-body with specific time duration */
             $(".plusminus").text('+')    /* add plus sign */
         }
         else{
             $(this).next(".accordion-body").slideDown(200); /*if content not visible then
                                                                                                           show the accordion-body */
             $(this).children(".plusminus").text('-');  /* add minus sign */
         }
     });
     $(".add-to-cart2").click(function(){
         WishCounter++;
         localStorage.setItem('WishCounter', WishCounter);
         $(".cart-wish").text(WishCounter);

     });
 });
