var number=9
var guess=parseInt(prompt("Enter the number ranging from 1-10"))

if (guess==number){
    document.write("Bingo! Correct answer.")
}

else if(guess==number+1){
    document.write("Close enough to correct answer")
}

else{
    document.write("Wrong Answer")
}