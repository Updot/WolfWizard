function load() {
    var element = document.getElementById('loader');
    element.style.display = "none";
}
$(document).ready(function(){       
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 210) {
            $('.icons-hanging').css('color', '#000 !important');
        } else {
            $('.icons-hanging').css('color', '#fff !important');
        }
    });
    
});