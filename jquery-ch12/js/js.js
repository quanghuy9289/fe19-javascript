$(function() {
    $(":password + :text").after("<span></span>");

    var today = new Date();
    var month = today.getMonth();
    var day = today.getDate();
    var year = today.getFullYear();
    var dateText = (month < 10 ? "0" + month : month) +"/";
    dateText += (day < 10 ? "0" +day : day) + "/";

    $("#start_date").val(dateText);

    $("form").submit(
        function(event){
            var isValid = true;
            
            //validate email
            var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za=z0-9.-]+\.[A-Za-z]{2,4}\b/;
            var email =$("#email").val();
            if(email == ""){
                $("#email").next().text("This field is required");
                isValid = false;
            } else if(!emailPattern.test(email)){
                $("#email").next().text("Must be a valid email address");
                isValid = false;
            } else {
                $("#email").next().text();
            }

            //validate password
            var password = $("#password").val();
            if(password.length < 6){
                $("#password").next().text("Password must be 6 or more characters");
                isValid = false;
            } else {
                $("#password").next().text();
            }

            //validate password2
            if($("#verify_password").val()==""){
                $("#verify_password").next().text("This field is required");
                isValid = false;
            } else if($("verify_password").val() !== $("#password").val()) {
                $("#verify_password").next().text("Must be the same as password");
                isValid = false;
            } else {
                $("verify_password").next().text();
            }

            if(isValid==true){
                $(this).submit();
            } else {
                event.preventDefault();
            }

        }
    );
     
})

 