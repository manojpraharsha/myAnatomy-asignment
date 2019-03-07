$(document).ready(function(){
    $('#addEvent').click(function(){
            
        $('#modal').addClass('modalActive');
    });
   
    $('.close').click(function(){
            
        $('#modal').removeClass('modalActive');
    });
   
 
});