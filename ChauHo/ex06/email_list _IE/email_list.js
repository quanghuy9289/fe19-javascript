const query = function (id) {
  return document.getElementById(id);
};

const joinList = function () {
  const emailAddress1 = query("email_address1").value;
  const emailAddress2 = query("email_address2").value;
  const firstName = query("first_name").value;
  let isValid = true;

  // validate the first email address
  if (emailAddress1 === "") {
    query("email_address1_error").firstChild.nodeValue =
      "This field is required.";
    isValid = false;
  } else {
    query("email_address1_error").firstChild.nodeValue = "";
  }

  // validate the second email address
  if (emailAddress2 === "") {
    query("email_address2_error").firstChild.nodeValue =
      "This field is required.";
    isValid = false;
  } else if (emailAddress1 !== emailAddress2) {
    query("email_address2_error").firstChild.nodeValue =
      "This entry must equal first entry.";
    isValid = false;
  } else {
    query("email_address2_error").firstChild.nodeValue = "";
  }

  // validate the first name entry
  if (firstName === "") {
    query("first_name_error").firstChild.nodeValue = "This field is required.";
    isValid = false;
  } else {
    query("first_name_error").firstChild.nodeValue = "";
  }

  // submit the form if all entries are valid
  if (isValid) {
    query("email_form").submit();
  }
};

window.onload = function () {
  query("join_list").onclick = joinList;
  query("email_address1").focus();
};
