let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

const GRADES = {
  A: [93, 100],
  B: [85, 92],
  C: [77, 84],
  D: [69, 76],
  E: [60, 68],
  F: [0, 59]
}

function generateClassRecordSummary(scores) {
  let arrayExamScores = [];
  Object.keys(scores).forEach(student => {
    arrayExamScores.push(scores[student].scores.exams);
  });

  let arrayExerciseScores = [];
  Object.keys(scores).forEach(student => {
    arrayExerciseScores.push(scores[student].scores.exercises);
  });

  return result = {
    studentsGrades: getStudentGrades(arrayExamScores, arrayExerciseScores),
    exams: getExamScores(arrayExamScores)
  }
}

function getStudentGrades(examScores, exerciseScores) {
  let grades = []

  examScores.forEach((score, idx) => {
    let avgScore = calculateScore(findAverage(score), findSum(exerciseScores[idx]));
    grades.push(`${avgScore} (${convertGrade(avgScore)})`);
  });

  return grades;
}

function combineStudentScores(scores) {
  let eachStudentExamScore = [];

  scores[0].forEach((_, examIdx) => {
    let arr = [];

    scores.forEach((_, stdIdx) => {
      arr.push(scores[stdIdx][examIdx]);
    });

    eachStudentExamScore.push(arr);
  });

  return eachStudentExamScore;
}

function getExamScores(examScores) {
  let exams = [];

  combineStudentScores(examScores).forEach(scores => {
    exams.push({
      average: findAverage(scores),
      minimum: findMinimum(scores),
      maximum: findMaximum(scores)
    });
  });

  return exams;
}

function calculateScore(avgExamScore, exerciseSum) {
  return Math.round((avgExamScore * .65) + (exerciseSum * .35));
}

function convertGrade(score) {
  for (let prop in GRADES) {
    if (score >= GRADES[prop][0] && score <= GRADES[prop][1]) {
      return prop;
    }
  }
}

function findAverage(arrayScores) {
  return arrayScores.reduce((prev, curr) => (prev + curr)) / arrayScores.length.toFixed(1);
}

function findMinimum(arrayScores) {
  return Math.min(...arrayScores);
}

function findMaximum(arrayScores) {
  return Math.max(...arrayScores);
}

function findSum(exercisesScores) {
  return exercisesScores.reduce((prev, curr) => prev + curr);
}

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: ['87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)'],
//     exams: [
//       { average: 75.6, minimum: 50, maximum: 100 },
//       { average: 86.4, minimum: 70, maximum: 100 },
//       { average: 87.6, minimum: 60, maximum: 100 },
//       { average: 91.8, minimum: 80, maximum: 100 },
//     ],
// }