// jQuery Initialization
jQuery(document).ready(function($){
"use strict"; 


        /* =================================
        ===  MAILCHIMP                 ====
        =================================== */

        $('.mailchimp').ajaxChimp({
            callback: mailchimpCallback,
            url: "http://takethemes.us12.list-manage.com/subscribe/post?u=4c2fcfd51db084689ebdba552&amp;id=9c03b83c32" //Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".  
        });

        function mailchimpCallback(resp) {
     if (resp.result === 'success') {
        $('.subscription-success').html('<i class="icon_check_alt2"></i><br/>' + resp.msg).fadeIn(1000);
        $('.subscription-error').fadeOut(500);
        
    } else if(resp.result === 'error') {
        $('.subscription-error').html('<i class="icon_close_alt2"></i><br/>' + resp.msg).fadeIn(1000);
    }  
}



        //======================================================================================================
        //  END OF DOCUMENT
        //=================
});
