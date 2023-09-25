// click event 
function formValid() {
    let fn = document.getElementById("fname");
    if (fn.value == "" || fn.value == null) {
        document.getElementById("msg1").innerHTML = "Enter Firstname";
        fn.classList.add("highlight");
        fn.focus()
        return false;
    }
    let ln = document.getElementById("lname");
    if (ln.value == "" || ln.value == null) {
        document.getElementById("msg2").innerHTML = "Enter Lastname"
        ln.classList.add("highlight")
        ln.focus()
        return false;
    }
    let m = document.getElementById("male").checked;
    let f = document.getElementById("female").checked;
    if (m == false && f == false) {
        document.getElementById("msg3").innerHTML = "Select Gender"
        return false
    }
    let addr = document.getElementById("addr").value;
    if (addr == "" || addr == null) {
        document.getElementById("msg4").innerHTML = "Enter Address"
        return false
    }
    let cy = document.getElementById("citylist").value;
    if (cy == "-1") {
        document.getElementById("msg5").innerHTML = "Select city"
        return false
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