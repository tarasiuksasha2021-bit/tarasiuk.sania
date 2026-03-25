const students = {
  Саша: { math: 85, physics: 90, english: 88 },
  Настя: { math: 92, physics: 87, english: 91 },
  Рома: { math: 78, physics: 82, english: 80 }
};

for (let student in students) {
  const grades = Object.values(students[student]);
  const average = grades.reduce((sum, g) => sum + g, 0) / grades.length;
  console.log(student, average);
}