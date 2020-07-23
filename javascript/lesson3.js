// Q1. make a string out of an array
let fruits1 = ['apple', 'banana', 'orange'];
fruits1 = fruits1.join(", ");
console.log(fruits1);

// Q2. make an array out of a string
const fruits2 = '🍎, 🥝, 🍌, 🍒'
fruits2.split(",");
console.log(fruits2 +' is '+ typeof(fruits2));

// Q3. make this array look like this: [5, 4, 3, 2, 1]
const arr1 = [1, 2, 3, 4, 5];
arr1.reverse();
//arr1.sort((a,b) => b-a);
console.log(arr1)

// Q4. make new array without the first two elements
const arr2 = [1, 2, 3, 4, 5];
arr2.splice(0, 2);
console.log(arr2)

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
let student_score = "";
student_score = students.filter(a => a.score >= 90);
for(let i = 0; i < student_score.length; i++){
  student_score = student_score[i].name;
}
console.log(student_score);
//엘리쌤 답안
let student_score2 = students.find(a => a.score >= 90);
console.log(student_score2);

// Q6. make an array of enrolled students
const enrollment = students.filter(a => a.enrolled == true);
let student_enroll = [];
for(let i = 0; i < enrollment.length; i++){
  student_enroll.push(enrollment[i].name);
}
console.log(student_enroll);

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
let student_scores = students.map(a => a.score);
console.log(student_scores);

// Q8. check if there is a student with the score lower than 50
let lower;
lower = students.some(a => a.score <= 50);
console.log(lower);

// Q9. compute students' average score
let average = student_scores.reduce((a,b) => a+b);
average = average / students.length;
console.log(average);

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
const high_score = student_scores.join(', ');
console.log(high_score);

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
const ascending_score = student_scores.sort().join(', ');
console.log(ascending_score)
