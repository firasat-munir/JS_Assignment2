var signal_color=prompt("Enter the signal color : (Options are: Red,Yellow & Green)");

if(signal_color=="Red"){
    document.write("Must Stop");
}

else if(signal_color=="Yellow"){
    document.write("Ready to move");
}

else if (signal_color=="Green"){
    document.write("Move now");
}

else{
    document.write("Not Defined")
}