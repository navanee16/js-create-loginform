const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", e => {
    e.preventDefault();
    checkinput();
})

email.addEventListener("keyup", () => {

    if (email.value.includes("@") && email.value.includes(".")) {
        // alert("ok")
        email.style.backgroundColor = "green"
    } else {
        // alert("ok")
        email.style.backgroundColor = "red"
    }

})

function checkinput() {
    const usernamevalue = username.value.trim();
    const emailvalue = email.value.trim();
    const passwordvalue = password.value.trim();
    const password2value = password2.value.trim();



    if (passwordvalue == password2value) {
        if (passwordvalue.length > 7) {
            if (passwordin(passwordvalue)) {
                alert("validation sucess")
            } else {
                alert("not valid")
            }
        } else {
            alert("password requires atleast 8 character")
        }
    } else {
        alert("passwords does't match")
    }

}

function passwordin(password) {

    let letter = "abcdefghijklmnopqrstuvwxyz"
    // console.log(letter);
    let alpepet = letter + letter.toUpperCase();
    // console.log(alpepet);
    let num = "0123456789";
    // console.log(num);
    let spl = "!@#$%^&*?/.,-_";
    // console.log(spl);

    let letur = false;
    let number = false;
    let splchar = false;

    for (let char of password) {
        if (letur == false) {
            if (alpepet.includes(char)) {
                console.log(letur = true);
            }
        }

        if (number == false) {
            if (num.includes(char)) {
                number = true;
            }
        }

        if (splchar == false) {
            if (spl.includes(char)) {
                splchar = true;
            }
        }

    }

    if (letur && number && splchar) {
        return true
    } else {
        return false
    }

}


passwordin();

