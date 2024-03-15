document.getElementById('n').onclick = function(){
    let list = document.querySelectorAll('.item1');
    document.getElementById('slide1').appendChild(list[0]);
}
document.getElementById('p').onclick = function(){
    let list = document.querySelectorAll('.item1');
    document.getElementById('slide1').prepend(list[list.length-1]);
}
function doan(){
    window.location.href = "do_an.html";
}
function sanpham(){
    window.location.href = "sanpham.html";
}
function tintuc(){
    window.location.href = "tintuc.html";
}