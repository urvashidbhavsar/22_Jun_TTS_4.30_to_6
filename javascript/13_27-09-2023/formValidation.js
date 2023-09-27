// click event 
function formValid() {
    let fn = document.getElementById("fname");
    let ln = document.getElementById("lname");
    let m = document.getElementById("male").checked;
    let f = document.getElementById("female").checked;
    let addr = document.getElementById("addr").value;
    let cy = document.getElementById("citylist").value;
    let mobileno = document.getElementById("mobile").value
    let mail = document.getElementById("mail").value;
    let ps = document.getElementById("pass").value;
    if (fn.value == "" || fn.value == null) {
        document.getElementById("msg1").innerHTML = "Enter Firstname";
        fn.classList.add("highlight");
        fn.focus()
        return false;
    } else if (ln.value == "" || ln.value == null) {
        document.getElementById("msg2").innerHTML = "Enter Lastname"
        ln.classList.add("highlight")
        ln.focus()
        return false;
    } else if (m == false && f == false) {
        document.getElementById("msg3").innerHTML = "Select Gender"
        return false
    } else if (addr == "" || addr == null) {
        document.getElementById("msg4").innerHTML = "Enter Address"
        return false
    } else if (cy == "-1") {
        document.getElementById("msg5").innerHTML = "Select city"
        return false
    } else if (mobileno == "" || mobileno == null) {
        document.getElementById("msg6").innerHTML = "Enter Mobile No"
        return false
    } else if (mail == "" || mail == null) {
        document.getElementById("msg7").innerHTML = "Enter Email id"
        return false
    } else if (ps == "" || ps == null) {
        document.getElementById("msg8").innerHTML = "Enter Password"
        return false
    } else {
        window.open("success.html", "_blank")
    }
}

// blur event (parameterized function)
function blankCheck(blank, msg) {
    if (blank.value == "" || blank.value == null) {
        document.getElementById(msg).innerHTML = "Please, Enter value!!!"
        blank.classList.add("highlight");
        return false
    }
}
function selectOption(chkval, msg) {
    if (chkval.checked == false) {
        document.getElementById(msg).innerHTML = "Please, Select value!!!"
        return false
    } else {
        document.getElementById(msg).innerHTML = ""
        return false
    }
}
function dropdwn(selectval, msg) {
    if (selectval.value == "-1") {
        document.getElementById(msg).innerHTML = "Please, Select value!!!"
        selectval.classList.add("highlight");
        return false
    } else {
        document.getElementById(msg).innerHTML = ""
        selectval.classList.remove("highlight");
        return false
    }
}

// keyboard event (parameterized function)
function nameEx(namecheck, msg) {
    let exp = /^[a-zA-Z]*$/
    if (!(exp.test(namecheck.value))) {
        document.getElementById(msg).innerHTML = "Invalid name!!"
        namecheck.classList.add("highlight");
        return false
    } else {
        document.getElementById(msg).innerHTML = ""
        namecheck.classList.remove("highlight");
        return false
    }
}
function addressLength(addr, msg) {
    if (addr.value.length < 35) {
        document.getElementById(msg).innerHTML = "Address must be in between 35 to 200 letters"
        addr.classList.add("highlight");
        return false;
    } else {
        document.getElementById(msg).innerHTML = ""
        addr.classList.remove("highlight");
        return false;
    }
}
// mobile expression
function mobileEx(mobile, msg) {
    let mobex = /^[0-9]*$/
    let startnum = /^[6-9]/
    if (!(mobex.test(mobile.value)) || !(startnum.test(mobile.value)) || mobile.value.length < 10) {
        document.getElementById(msg).innerHTML = "Invalid Number !!"
        return false
    }
    else {
        document.getElementById(msg).innerHTML = ""
        return false
    }
}
// email Expression 
function emailEx(email, msg) {
    // let mailex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    let mailex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/
    if (!(mailex.test(email.value))) {
        document.getElementById(msg).innerHTML = "Enter Proper Email"
        return false
    } else {
        document.getElementById(msg).innerHTML = ""
        return false
    }
}
// password expression
function checkpass(password, msg) {
    let passex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
    if (!(passex.test(password.value))) {
        document.getElementById(msg).innerHTML = "password has uppercase, lowercase, numbers and special characters, first letter must be uppercase"
        return false
    } else {
        document.getElementById(msg).innerHTML = ""
        return false
    }
}
// compare password 
function comparePass(pass, cpass, msg) {
    if (cpass.value != document.getElementById(pass).value) {
        document.getElementById(msg).innerHTML = "password and confirm password does not match"
        return false
    } else {
        document.getElementById(msg).innerHTML = ""
        return false
    }
}
// show Password 
function showPass(password, IconChange) {
    let ps = document.getElementById(password)
    let icon = document.getElementById(IconChange)
    if (ps.type == "password") {
        ps.type = "text"
        icon.classList.remove("bi-eye-fill")
        icon.classList.add("bi-eye-slash-fill")
    } else {
        ps.type = "password"
        icon.classList.remove("bi-eye-slash-fill")
        icon.classList.add("bi-eye-fill")
    }
}

// =========== print ===========
function PrintPage() {
    print()
}