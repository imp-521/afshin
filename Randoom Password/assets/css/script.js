const passwordBox = document.getElementById("password")
const lenght = 12

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbel = "!@#$%^&*()_+?><:|}{"

const allchars = upperCase + number + lowerCase + symbel
function createPassword() {
    let password = ""
    password += upperCase[Math.floor(Math.random() * upperCase.length)]
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password += number[Math.floor(Math.random() * number.length)]
    password += symbel[Math.floor(Math.random() * symbel.length)]


    while (lenght > password.length) {
        password += allchars[Math.floor(Math.random() * allchars.length)]
    }
    passwordBox.value = password
   
    
}

function copyPassword(){
    passwordBox.select()
    document.execCommand("copy")
}


