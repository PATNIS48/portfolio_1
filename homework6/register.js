window.onload = pageLoad;

function pageLoad() {
    let form = document.getElementById('myForm')
    form.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    let password = document.getElementById('password').value;
    let repassword = document.getElementById('repassword').value;
    console.log(password, repassword);
    if (password != repassword) {
        alert("ไม่ตรงกัน")
        return false;
        console.log(password, repassword);
    } else { alert("สำเร็จ") }
}
const url = window.location.search;
const urlParams = new URLSearchParams(url)
const username = urlParams.get('username')
console.log(username);
const password = urlParams.get('password')