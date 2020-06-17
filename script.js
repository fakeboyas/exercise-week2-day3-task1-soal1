function display() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;
    let newLine = "\r\n";
    return alert(
        `Selamat Anda telah terdaftar ${newLine} Username: ${name} ${newLine} Nomor Telpon : ${phone} ${newLine} Email : ${email} ${newLine} Password :${password}`
    );
}

const btn = document.getElementById("register");

btn.addEventListener("click", display);
