let student = {
    name: "",
    type: "student"
};

document.addEventListener('DOMContentLoaded', contentLoaded);

function contentLoaded(event) {
    document.getElementById('name').addEventListener('keyup', keyup);
}

function keyup(event) {
    calculateNumericOutput();
}

function calculateNumericOutput() {
    student.name = document.getElementById('name').value;

    let totalNameValue = 0;
    for (let i = 0; i < student.name.length; i++) {
        totalNameValue += student.name.charCodeAt(i);
    }

    let output = "Total Numeric value of person's name is " + totalNameValue;
    document.getElementById('output').innerText = output;
}