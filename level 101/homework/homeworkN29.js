class StudentGrades {
  constructor(grades) {
    this.grades = new Map(grades);
  }

  getTopStudent() {
    let topStudent = '';
    let topScore = 0;

    this.grades.forEach((score, student) => {
      if (score > topScore) {
        topScore = score;
        topStudent = student;
      }
    });

    return topStudent;
  }
}
