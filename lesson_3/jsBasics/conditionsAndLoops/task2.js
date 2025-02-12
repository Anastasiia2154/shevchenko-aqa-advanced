const averageGrade = 111;

switch (true) {
  case averageGrade < 60:
    console.log("Unsatisfactorily");
    break;
  case averageGrade <= 70:
    console.log("Satisfactorily");
    break;
  case averageGrade <= 80:
    console.log("Good");
    break;
  case averageGrade <= 90:
    console.log("Very good");
    break;
  case averageGrade <= 100:
    console.log("Excellent");
    break;
  default:
    console.log("Invalid grade");
}
