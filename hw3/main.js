const create_click = document.getElementById("create");
const cancel_click = document.getElementById("cancel");

create_click.addEventListener("click", redirect);
cancel_click.addEventListener("click", joke);
function redirect(){
    window.location.replace("https://www.ubus.com.tw/Member/Join");
}
function joke(){
    alert("cant get out from this");
}