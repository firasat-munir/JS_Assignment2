// Correct Password is JavaScript
var pass=prompt("Enter your Password : ")

if (pass===""){
    alert("Please enter your password")
}

else if (pass==="JavaScript"){
    document.write("Correct! The password you entered matches the original password")
}

else{
    document.write("Incorrect Password")
}