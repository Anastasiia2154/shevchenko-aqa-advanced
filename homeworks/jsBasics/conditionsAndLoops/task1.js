const averageGrade = 77;

if (averageGrade < 0 || averageGrade > 100) {
  console.log("Invalid grade");
} else if (averageGrade < 60) {
  console.log("Unsatisfactorily");
} else if (averageGrade <= 70) {
  console.log("Satisfactorily");
} else if (averageGrade <= 80) {
  console.log("Good");
} else if (averageGrade <= 90) {
  console.log("Very good");
} else {
  console.log("Excellent");
}