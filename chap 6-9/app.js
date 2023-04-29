//🎯CHAPTER 6
var a = 10;
document.write(`<p>the value of a is: ${a}</p>`);
++a;
document.write(`<p>the value of ++a is: ${a}</p>`);
a++;
document.write(`<p>the value of a++ is: ${a}</p>`);
--a;
document.write(`<p>the value of --a is: ${a}</p>`);
a--;
document.write(`<p>the value of a-- is: ${a}</p>`);

var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
document.write(`<p>result is:  ${result}</p>`);

var nam = prompt("Enter you name");
// alert(`Hi, ${nam}`);

var num = prompt("enter a number", 5);
document.write(`<p>${num} x 1 = ${num*1}</p>`);
document.write(`<p>${num} x 2 = ${num*2}</p>`);
document.write(`<p>${num} x 3 = ${num*3}</p>`);
document.write(`<p>${num} x 4 = ${num*4}</p>`);
document.write(`<p>${num} x 5 = ${num*5}</p>`);
document.write(`<p>${num} x 6 = ${num*6}</p>`);
document.write(`<p>${num} x 7 = ${num*7}</p>`);
document.write(`<p>${num} x 8 = ${num*8}</p>`);
document.write(`<p>${num} x 9 = ${num*9}</p>`);
document.write(`<p>${num} x 10 = ${num*10}</p>`);

var subj1 = prompt("Enter subject 1");
var subj2 = prompt("Enter subject 2");
var subj3 = prompt("Enter subject 3");
var totalMarks = 100;
var obtainedMarks1 = Number(prompt("obtained marks for subject 1"));
var obtainedMarks2 = Number(prompt("obtained marks for subject 2"));
var obtainedMarks3 = Number(prompt("obtained marks for subject 3"));

var percentage1 = (obtainedMarks1/totalMarks)*100;
var percentage2 = (obtainedMarks2/totalMarks)*100;
var percentage3 = (obtainedMarks3/totalMarks)*100;
var totalpercentage = ((obtainedMarks1+obtainedMarks2+ obtainedMarks3)/300)*100

document.write(`<table>
    <tr> 
        <th>Subject</th>
        <th>Total Marks</th>
        <th>Obtained Marks</th>
        <th>Percentage</th>
    </tr>
    <tr> 
        <td> ${subj1}</td>
        <td>${totalMarks}</td>
        <td>${obtainedMarks1}</td>
        <td>${percentage1}%</td>
    </tr>
    <tr> 
        <td> ${subj2}</td>
        <td>${totalMarks}</td>
        <td>${obtainedMarks2}</td>
        <td>${percentage2}%</td>
    </tr>
    <tr> 
        <td> ${subj3}</td>
        <td>${totalMarks}</td>
        <td>${obtainedMarks3}</td>
        <td>${percentage3}%</td>
    </tr>
    <tr> 
        <td></td>
        <td>${totalMarks + totalMarks + totalMarks}</td>
        <td>${obtainedMarks1 + obtainedMarks2 + obtainedMarks3}</td>
        <td>${totalpercentage}%</td>
    </tr>
</table>`)