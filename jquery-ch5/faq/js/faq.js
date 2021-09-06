$(function() {
    $("#faq h2").click(function(){
        $(this).toggleClass("active");
        if($(this).attr("class") != "active"){
            $(this).next().hide();
        } else {
            $(this).next().show();
        }

        $("faq h2").focus();
    })
})

 