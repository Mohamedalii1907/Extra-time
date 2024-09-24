function index1() {
    l = document.getElementById("login-logo").value;
    location.href = "index.html";
}
// function homepage() {
//     e = document.getElementById("email-text").value;
//     p = document.getElementById("password-text").value;
//     x = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
//     y = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
//     if (x.test(e) && y.test(p) == true) {
//         location.href = "home.html";
//     }
//     if (x.test(e) != true) {
//         alert("E-mail or Password is incorrect")
//         document.getElementById('email-text').style.border = "5px solid red";
//         document.getElementById('password-text').style.border = "5px solid green";
//     }
//     if (y.test(p) != true) {
//         alert("E-mail or Password is incorrect")
//         document.getElementById('email-text').style.border = "5px solid green";
//         document.getElementById('password-text').style.border = "5px solid red";
//     }
//     if (x.test(e) != true && y.test(p) != true) {
//         alert("E-mail or Password is incorrect")
//         document.getElementById('email-text').style.border = "5px solid red";
//         document.getElementById('password-text').style.border = "5px solid red";
//     }
// }

function check_email() {
    e = document.getElementById("email-text").value;
    x = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
    if (x.test(e) == true) {
        return true;
    }
    else {
        return false;
        document.getElementById('email-text').style.border = "5px solid red";
    }
}
function check_pasword() {
    p = document.getElementById("password-text").value;
    y = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if (y.test(p) == true) {
        return true;
    }
    else {
        return false;
        document.getElementById('password-text').style.border = "5px solid red";
    }
}
function validate_login() {
    x = check_email();
    y = check_pasword();

    if (x == true && y == true) {
        location.href = "home.html";
    }
    if (x == false && y == true) {
        alert("E-mail or Password is incorrect")
        document.getElementById('email-text').style.border = "5px solid red";
        document.getElementById('password-text').style.border = "5px solid green";

    }
    if (x == true && y == false) {
        alert("E-mail or Password is incorrect")
        document.getElementById('email-text').style.border = "5px solid green";
        document.getElementById('password-text').style.border = "5px solid red";
    }
    if (x == false && y == false) {
        alert("E-mail or Password is incorrect")
        document.getElementById('email-text').style.border = "5px solid red";
        document.getElementById('password-text').style.border = "5px solid red";

    }
}
