function menu(n){
    var n;
    if(n == '1'){
        document.getElementById("list").style.display="block";
    }else{
        document.getElementById("list").style.display="none";
    }
}
function btn(n){
    var n;
    if(n == '0'){
        location.href='tel:51999200350';
    }else if(n == '1'){
        location.href='https://api.whatsapp.com/send?phone=5551999200350';
    }else if(n == '2'){
        location.href='./index.html';
    }else if(n == '3'){
        location.href='./index.html';
    }
}