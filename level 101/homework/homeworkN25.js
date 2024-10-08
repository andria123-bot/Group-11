class Classroom {
  constructor() {
    this.students = new Map();
  }

  addStudent(id, score) {
    this.students.set(id, score);
  }

  getAverageScore() {
    const scores = Array.from(this.students.values());
    const total = scores.reduce((a, b) => a + b, 0);
    return total / scores.length;
  }
}
