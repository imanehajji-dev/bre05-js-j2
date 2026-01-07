let grades = [[20, 10], [15, 20], [13, 18]];

let total = 0;

for (let i = 0; i<grades.length; i++)
{
    total += grades[i][0] + grades[i][1];
}

let average = total/6;
console.log(average)
