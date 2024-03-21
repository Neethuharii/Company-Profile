/** ================================================
 * Function for validating the  contact form
 ==================================================*/
function validate() {
    let name = document.forms['my-form'].name.value;
    let email = document.forms['my-form'].email.value;
    let phone = document.forms['my-form'].phone.value;
    let gender = document.forms['my-form'].gender.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;

    //------------ Name Validation ---------------------
    if (name.trim() == "") {
        document.getElementById("name-alert").style.display = "block";
    } else document.getElementById("name-alert").style.display = "none";
   
    //-------------------Email Validation -------------------
    if (email.trim() == "") {
        document.getElementById("email-alert").style.display = "block";

    } else if (!emailPattern.test(email.trim())) {
        //---------------------- Check if email doesn't match the pattern -----------------
        document.getElementById("email-alert").innerHTML = "Invalid email address";
        document.getElementById("email-alert").style.display = "block";
    } else {
        document.getElementById("email-alert").style.display = "none";
    }

      //----------------------Phone Validation ---------------
    if (phone.trim() == "") {
        document.getElementById("phone-alert").style.display = "block";
    } else if (!phonePattern.test(phone.trim())) {
        //----------------check if the phn no. is validate--------
        document.getElementById("phone-alert").innerHTML = "Invalid phone number";
        document.getElementById("phone-alert").style.display = "block";
    } else {
        document.getElementById("phone-alert").style.display = "none";
    }
  
}