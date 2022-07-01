var n1=parseInt(prompt("Enter 1st Number :"))
var n2=parseInt(prompt("Enter 2nd Number :"))
var operation=prompt("Which operation you have to perform (+,-,*,/,%) :")
var result

if(operation=="+"){
    result=n1+n2
    document.write("Answer is : "+result)
}

else if(operation=="-"){
    result=n1-n2
    document.write("Answer is : "+result)
}

else if(operation=="*"){
    result=n1*n2
    document.write("Answer is : "+result)
}

else if(operation=="/"){
    result=n1/n2
    document.write("Answer is : "+result)
}

else if(operation=="%"){
    result=n1%n2
    document.write("Answer is : "+result)
}

else{
    document.write("Wrong operation")
}