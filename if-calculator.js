function submitFunction() {


let inputBox1 = document.getElementById('input1');
let inputBox1value = inputBox1.value;
let solution;

let inputBox2 = document.getElementById('input2');
let inputBox2value = inputBox2.value;

let inputBox3 = document.getElementById('input3');
let inputBox3value = inputBox3.value;

let output = document.getElementById('myOutput');

if (inputBox3value ==="+"){
    solution = inputBox1value + inputBox2value;
}

else if (inputBox3value === "-"){
    solution = inputBox1value - inputBox2value;
}

else if (inputBox3value === "*"){
    solution = inputBox1value - inputBox2value;
}

else if (inputBox3value === "**"){
    solution = inputBox1value - inputBox2value;
}

else if (inputBox3value === "/"){
    solution = inputBox1value - inputBox2value;
}

else if (inputBox3value === "%"){
    solution = inputBox1value - inputBox2value;
}

else{
    alert("Please put in a valid operator")
}

alert(solution);
output.innerHTML = solution;


}