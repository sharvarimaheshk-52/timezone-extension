let button = document.getElementById("getTimeZone");
if(button!==null){
    button.addEventListener("click", TimeZone);
}

function TimeZone(){
    document.getElementById("showTimeZone").innerHTML = Date();
}