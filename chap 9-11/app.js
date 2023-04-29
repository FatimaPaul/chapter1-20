// 🎯CHAPTER 9-11
var city = prompt("enter you city name");
if(city === "karachi"){
    alert("welcome to city of lights");
} 

var gender = prompt("enter your gender");
if(gender === "male"){
    alert("Good morning sir");
}
if(gender === "female"){
    alert("Good morning ma'am");
}

var traffic = prompt("enter color of road traffic signal");
if(traffic === "red"){
    document.write(`<table>
        <tr>
            <th>Signal Color</th>
            <th>Message</th>
        </tr>
        <tr>
            <td>${traffic}</td>
            <td>Must stop</td>
        </tr>
     </table>`);
}
if(traffic === "yellow"){
    document.write(`<table>
        <tr>
            <th>Signal Color</th>
            <th>Message</th>
        </tr>
        <tr>
            <td>${traffic}</td>
            <td>ready to move</td>
        </tr>
     </table>`);
}
if(traffic === "green"){
    document.write(`<table>
        <tr>
            <th>Signal Color</th>
            <th>Message</th>
        </tr>
        <tr>
            <td>${traffic}</td>
            <td>Move now</td>
        </tr>
     </table>`);
}

var feul = Number(prompt("enter the feul"));
if(feul < 0.25){
    alert("please refill the feul in your car");
}

var a = 4;
if(++a === 5){
    alert("given condition for variable a is true");
}

var b = 82;
if(b++ === 83){
    alert("given condition for variable b is true");
}

var c = 12;
if(c++ === 13){
    alert("condition 1 is true");
}
if(c === 13){
    alert("condition 2 is true");
}
if(++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if(totalCost === laborCost + materialCost){
    alert("the costs equal");
}

if(true){
    alert("True");
}
if(false){
    alert("False");
}

if("car" < "cat"){
    alert("car is smaller than cat");
}

var marks1 = Number(prompt("enter marks 1"));
var marks2 = Number(prompt("enter marks 2"));
var marks3 = Number(prompt("enter marks 3"));
var marksObtained = marks1 + marks2 + marks3
var totalMarks = 300;
var percentage = ((marksObtained)/totalMarks)*100;
if(percentage >= 80){
    document.write(`<h1>MARKSHEET</h1>
    </br>
    <p>Total mark: ${totalMarks}</p>
    <p>Marks Obtained: ${marksObtained}</p>
    <p>Percentage: ${percentage}</p>
    <p>Grade: A-one</p>
    <p>Remarks: Excellent </p>`);
}else if(percentage >= 70 && percentage < 80){
    document.write(`<h1>MARKSHEET</h1>
    </br>
    <p>Total mark: ${totalMarks}</p>
    <p>Marks Obtained: ${marksObtained}</p>
    <p>Percentage: ${percentage}</p>
    <p>Grade: A</p>
    <p>Remarks: Good</p>`);
}else if(percentage >=60 && percentage < 70){
    document.write(`<h1>MARKSHEET</h1>
    </br>
    <p>Total mark: ${totalMarks}</p>
    <p>Marks Obtained: ${marksObtained}</p>
    <p>Percentage: ${percentage}</p>
    <p>Grade: B</p>
    <p>Remarks: You need to improve</p>`);
}else {
    document.write(`<h1>MARKSHEET</h1>
    </br>
    <p>Total mark: ${totalMarks}</p>
    <p>Marks Obtained: ${marksObtained}</p>
    <p>Percentage: ${percentage}%</p>
    <p>Grade: fail</p>
    <p>Remarks: Sorry</p>`);
}

var secretNum = 5;
var guessNum = Number(prompt("Guess a number", 1-10));
if(guessNum === secretNum){
    alert("Bingo! Correct Answer");
}else if(guessNum + 1 === secretNum){
    alert("Close enough to the correct answer");
}

var divisible = Number(prompt("Enter a number to cehck it is divisible by 3"))
if(divisible % 3 === 0){
    alert("yes it is divisible by 3");
}

var temp = Number(prompt("Enter the temperature"));
if(temp > 40){
    alert("it is too hot outside");
}else if(temp > 30 && temp < 40){
    alert("the weather today is normal");
}else if(temp > 20 && temp < 30){
    alert("todays weather is cool");
}else {
    alert("OMG! todays weather is so cool");
}

var firstNum = Number(prompt("enter First number"));
var secondNum = Number(prompt("enter Second number"));
var operator = prompt("enter the operator", "+,-,*,/,%");
if(operator === "*"){
    alert(firstNum*secondNum);
}else if(operator === '+'){
    alert(firstNum+secondNum);
}else if(operator === "-"){
    alert(firstNum-secondNum);
}else if(operator === "/"){
    alert(firstNum/secondNum);
}else if(operator === "%"){
    alert(firstNum%secondNum);
}
