/*********************trang tin tức ******** */

document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length-1]);
}

function noel(){
    window.location.href = "giangsinh.html";
}
function zalopay(){
    window.location.href = "zalopay.html";
}
function valentine(){
    window.location.href = "valentine.html";
}
function voucher(){
    window.location.href = "1tang1.html";
}
function tet(){
    window.location.href = "tet.html";
}




/********************************* check sự kiện**************** */
function checkSearch(event) {
    if ((event.keyCode == 13 || event.which) == 13)
        alert(document.forms[0].search.value);
}

function search() {
    var x = document.forms[0];
    if (x.search.value.length > 0) {
        x.submit();
        return true;
    }
    else {
        alert("Vui lòng nhập từ khóa tìm kiếm ");
        return false;
    }
}
function showSearch() {
    var x = document.getElementById("mainid");
    var url = new URL(window.location);
    var ws = url.searchParams.get("search");
    var p = document.createElement('p');
    p.textContent = ws;
    x.appendChild(p);
}

// Dang ki
function frmValidate4() {
    var e = document.getElementById("eml")
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailReg.test(e.value) == false) {
        alert('Email không hợp lệ! Vui lòng nhập lại email!');
        return false;
    }

    var pwd1 = document.getElementById("pwd1")
    if (pwd1.value.length < 8) {
        /*mã xử lý dữ liệu không hợp lệ*/
        alert("Nhập lại password đủ 8 ký tự !!!!");
        return false;
    }
    var pwd2 = document.getElementById("pwd2")
    if (pwd2.value.length < 8) {
        /*mã xử lý dữ liệu không hợp lệ*/
        alert("Nhập lại password!");
        return false;
    }
    if (pwd2.value != pwd1.value) {
        alert("Nhap sai password! Nhap lai");
        return false;

    }
    alert("Đã gửi dữ liệu");
    return true
}




// Dang nhap
function frmValidate5() {
    var e = document.getElementById("eml")
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailReg.test(e.value) == false) {
        alert('Email không hợp lệ! Vui lòng nhập lại email!');
        return false;
    }

    var pwd = document.getElementById("pwd")
    if (pwd.value.length < 8) {
        /*mã xử lý dữ liệu không hợp lệ*/
        alert("Nhập lại password!");
        return false;
    }
    alert("Đã gửi dữ liệu");
    return true
}

/** Trang chủ */
document.getElementById('n').onclick = function(){
    let list = document.querySelectorAll('.item1');
    document.getElementById('slide1').appendChild(list[0]);
}
document.getElementById('p').onclick = function(){
    let list = document.querySelectorAll('.item1');
    document.getElementById('slide1').prepend(list[list.length-1]);
}