function index2() {
    l = document.getElementById("register-logo").value;
    location.href = "index.html";
}
function login() {
    l = document.getElementById("button2").value;
    location.href = "login.html";
}
function login() {
    n = document.getElementById("name-text").value;
    p = document.getElementById("phone-number-text").value;
    e = document.getElementById("email-text").value;
    q = document.getElementById("password-text").value;
    k = document.getElementById("password-confirm-text").value;


    x = /^[A-Za-z]+$/
    // x= /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;
    y = /^[0][1][0|1|2|5][0-9]{8}$/
    i = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
    z = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    w = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/




    if (x.test(n) == true) {
        document.getElementById('name-text').style.border = "5px solid green";
    }
    if (y.test(p) == true) {
        document.getElementById('phone-number-text').style.border = "5px solid green";
    }
    if (i.test(e) == true) {
        document.getElementById('email-text').style.border = "5px solid green";
    }
    if (z.test(q) == true) {
        document.getElementById('password-text').style.border = "5px solid green";
    }
    if (w.test(k) == z.test(q)) {
        document.getElementById('password-confirm-text').style.border = "5px solid green";
    }
    if (x.test(n) == true && y.test(p) == true && i.test(e) == true && z.test(q) == true && w.test(k) == z.test(q)) {
        location.href = "login.html";
    }
    else (
        alert("something is wrong!")
    )
}