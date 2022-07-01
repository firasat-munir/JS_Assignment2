var math=parseInt(prompt("Enter the marks obtained in Mathematics : "))
var english=parseInt(prompt("Enter the marks obtained in English : "))
var science=parseInt(prompt("Enter the marks obtained in Science : "))
var totalMarks=parseInt(prompt("Enter Total Marks : "))
var marksObtained=math+english+science
var percentage=Math.round((marksObtained*100)/totalMarks)
var grade, remarks

if(percentage>=80 && percentage<100){
    grade="A-one"
    remarks="Excellent"
}

else if(percentage>=70 && percentage<80){
    grade="A"
    remarks="Good"
}

else if(percentage>=60 && percentage<70){
    grade="B"
    remarks="You need to improve"
}

else if(percentage<60){
    grade="Fail"
    remarks="Sorry"
}


document.write("<h1>Marks Sheet</h1>")
document.write("<br>Total Marks : "+totalMarks)
document.write("<br>Marks Obtained : "+marksObtained)
document.write("<br>Percentage : "+percentage+"%")
document.write("<br>Grade : "+grade)
document.write("<br>Remarks : "+remarks)
