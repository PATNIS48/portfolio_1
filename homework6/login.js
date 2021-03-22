window.onload = loginLoad;
const url = window.location.search;
const urlParams = new URLSearchParams(url)
const username = urlParams.get('username')
console.log(username);
const password = urlParams.get('password')

function loginLoad() {
    let form = document.getElementById('myLogin');
    form.onsubmit = checkLogin;

}

function checkLogin() {
    //ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
    let id = document.getElementById('username').value;
    let pass = document.getElementById('password').value;

    if (username != id || (pass != password)) {
        alert("username หรือ password ไม่ถูกต้อง!")
        return false;
    } else {
        alert('ถูกต้องนะคร้าบบบ')
    }

}