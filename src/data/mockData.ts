export const mockStudents = [
  { id: '1', admissionNumber: 'VGL/2023/001', name: 'Alice Smith', class: 'JSS 1', gender: 'Female', status: 'Active' },
  { id: '2', admissionNumber: 'VGL/2023/002', name: 'Bob Johnson', class: 'SSS 2', gender: 'Male', status: 'Active' },
  { id: '3', admissionNumber: 'VGL/2023/003', name: 'Charlie Brown', class: 'JSS 3', gender: 'Male', status: 'Inactive' },
];

export const mockTeachers = [
  { id: '1', staffId: 'TR/001', name: 'Mr. David Lee', subjects: ['Mathematics', 'Physics'], classes: ['SSS 1', 'SSS 2', 'SSS 3'], status: 'Active' },
  { id: '2', staffId: 'TR/002', name: 'Mrs. Sarah Jane', subjects: ['English', 'Literature'], classes: ['JSS 1', 'JSS 2', 'JSS 3'], status: 'Active' },
];

export const mockClasses = [
  { id: '1', name: 'JSS 1', studentsCount: 45, formTeacher: 'Mrs. Sarah Jane' },
  { id: '2', name: 'JSS 2', studentsCount: 42, formTeacher: 'Mr. John Doe' },
  { id: '3', name: 'JSS 3', studentsCount: 40, formTeacher: 'Miss Anna Bell' },
  { id: '4', name: 'SSS 1', studentsCount: 38, formTeacher: 'Mr. Peter Pan' },
  { id: '5', name: 'SSS 2', studentsCount: 35, formTeacher: 'Mr. David Lee' },
  { id: '6', name: 'SSS 3', studentsCount: 30, formTeacher: 'Mrs. Clark' },
];

export const mockAttendance = [
  { id: '1', studentId: '1', date: '2023-10-01', status: 'Present' },
  { id: '2', studentId: '2', date: '2023-10-01', status: 'Absent' },
];

export const mockFeeBalances = {
  '1': { total: 150000, paid: 100000, balance: 50000 },
  '2': { total: 150000, paid: 150000, balance: 0 },
};

export const mockExams = [
  { id: '1', title: 'Mid-Term Mathematics Test', class: 'SSS 2', duration: 45, questionsCount: 20 },
];

export const mockExamQuestions = [
  {
    id: '1',
    examId: '1',
    text: 'What is the derivative of x^2?',
    options: ['x', '2x', 'x^2', '2'],
    correctAnswer: '2x',
  },
  {
    id: '2',
    examId: '1',
    text: 'Solve for x: 2x + 5 = 15',
    options: ['5', '10', '2', '15'],
    correctAnswer: '5',
  },
];
