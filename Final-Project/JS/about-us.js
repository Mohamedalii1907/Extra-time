function message1() {
    document.getElementById('send').value;
    document.getElementById('realmessage'). innerHTML +=
        " <div id='message'>"
        +
        "<b id='text7'>تم الارسال. اكمل تصفحك في موقعنا</b>"
        +
        "</div>";
        setTimeout(function(){
            realmessage.style.display="none";
        },2000);
}