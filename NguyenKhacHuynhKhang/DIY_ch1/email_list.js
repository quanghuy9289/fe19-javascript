var $ = document.getElementById.bind(document);
function joinList () {
    var isValid = true;
    var emailAddress1 = $('email_address1')
    var emailAddress2 = $('email_address2')
    if (emailAddress1.value === '') {
        $('email_address1_error').firstChild.nodeValue = 'This field is required'
        isValid = false;
    } else {
        $('email_address1_error').firstChild.nodeValue = ''
    }
    if (emailAddress2.value !== emailAddress1.value) {
        $('email_address2_error').firstChild.nodeValue = 'This field must be equal email'
        isValid = false;
    } else {
        $('email_address2_error').firstChild.nodeValue = ''
    }
    var firstName = $('first_name')
    if (firstName.value === '') {
        $('first_name_error').firstChild.nodeValue = 'This field is required'
        isValid = false;
    } else {
        $('first_name_error').firstChild.nodeValue = ''
    }
    if (isValid) {
        $('email_form').submit();
    }
}
window.onload = function () {
    $('join_list').onclick = joinList;
    $('email_address1').focus();
}