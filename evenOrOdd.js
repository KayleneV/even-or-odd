let myInputBox = document.getElementById("myInput");
let myInputBoxValue;
console.log

function inputFunction(){
    myInputBoxValue = myInputBox.value;
    console.log(myInputBoxValue % 2);
}

if ((myInputBoxValue % 2) === 0) {
    document.getElementById("myOutput").innerHTML = "EVEN";
}

else {
    document.getElementById("myOutput").innerHTML = "ODD";
}