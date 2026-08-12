// ============================================================
// VACGLON SCHOOL PORTAL — MOCK DATA
// Realistic Nigerian school data for client demo
// ============================================================

export interface Student {
  id: string;
  admissionNumber: string;
  name: string;
  class: string;
  gender: string;
  status: 'Active' | 'Inactive' | 'Pending Docs';
  dateEnrolled: string;
  avatar?: string;
}

export interface Teacher {
  id: string;
  staffId: string;
  name: string;
  subjects: string[];
  classes: string[];
  status: 'Active' | 'On Leave';
  avatar?: string;
}

export interface ClassInfo {
  id: string;
  name: string;
  studentsCount: number;
  formTeacher: string;
  subjects: string[];
}

export interface AttendanceRecord {
  id: string;
  studentName: string;
  admissionNumber: string;
  date: string;
  status: 'Present' | 'Absent' | 'Late';
}

export interface FeeBalance {
  total: number;
  paid: number;
  balance: number;
  dueDate: string;
  breakdown: { item: string; amount: number }[];
}

export interface ExamQuestion {
  id: string;
  text: string;
  options: string[];
  correctAnswer: string;
}

export interface TermResult {
  subject: string;
  ca: number;
  exam: number;
  total: number;
  grade: string;
  remark: string;
}

// ============================================================
// STUDENTS
// ============================================================
export const mockStudents: Student[] = [
  { id: '1', admissionNumber: 'VS-2023-001', name: 'Adebayo, Tobi', class: 'JS3 Gold', gender: 'Male', status: 'Active', dateEnrolled: 'Sep 04, 2023' },
  { id: '2', admissionNumber: 'VS-2023-002', name: 'Okafor, Chidinma', class: 'SS1 Blue', gender: 'Female', status: 'Active', dateEnrolled: 'Sep 04, 2023' },
  { id: '3', admissionNumber: 'VS-2023-003', name: 'Nwachukwu, Emeka', class: 'JS3 Silver', gender: 'Male', status: 'Pending Docs', dateEnrolled: 'Oct 08, 2023' },
  { id: '4', admissionNumber: 'VS-2023-004', name: 'Bello, Fatima', class: 'JS1 Gold', gender: 'Female', status: 'Active', dateEnrolled: 'Sep 04, 2023' },
  { id: '5', admissionNumber: 'VS-2023-005', name: 'Adeyemi, Oluwaseun', class: 'SS2 Gold', gender: 'Male', status: 'Active', dateEnrolled: 'Sep 04, 2023' },
  { id: '6', admissionNumber: 'VS-2022-006', name: 'Ibrahim, Aisha', class: 'SS3 Blue', gender: 'Female', status: 'Active', dateEnrolled: 'Sep 05, 2022' },
  { id: '7', admissionNumber: 'VS-2023-007', name: 'Eze, Chukwuemeka', class: 'JS2 Silver', gender: 'Male', status: 'Active', dateEnrolled: 'Sep 04, 2023' },
  { id: '8', admissionNumber: 'VS-2023-008', name: 'Ogundimu, Temitope', class: 'JS1 Blue', gender: 'Female', status: 'Active', dateEnrolled: 'Oct 10, 2023' },
  { id: '9', admissionNumber: 'VS-2022-009', name: 'Mohammed, Abdullahi', class: 'SS2 Silver', gender: 'Male', status: 'Active', dateEnrolled: 'Sep 05, 2022' },
  { id: '10', admissionNumber: 'VS-2023-010', name: 'Adekunle, Bukola', class: 'JS3 Gold', gender: 'Female', status: 'Inactive', dateEnrolled: 'Sep 04, 2023' },
  { id: '11', admissionNumber: 'VS-2021-011', name: 'Okeke, Nnamdi', class: 'SS3 Gold', gender: 'Male', status: 'Active', dateEnrolled: 'Sep 06, 2021' },
  { id: '12', admissionNumber: 'VS-2023-012', name: 'Yusuf, Halima', class: 'JS2 Gold', gender: 'Female', status: 'Active', dateEnrolled: 'Sep 04, 2023' },
  { id: '13', admissionNumber: 'VS-2023-013', name: 'Akintola, Damilola', class: 'SS1 Gold', gender: 'Male', status: 'Pending Docs', dateEnrolled: 'Oct 12, 2023' },
  { id: '14', admissionNumber: 'VS-2022-014', name: 'Chukwu, Obiageli', class: 'SS2 Blue', gender: 'Female', status: 'Active', dateEnrolled: 'Sep 05, 2022' },
  { id: '15', admissionNumber: 'VS-2023-015', name: 'Lawal, Olumide', class: 'JS1 Silver', gender: 'Male', status: 'Active', dateEnrolled: 'Sep 04, 2023' },
];

// ============================================================
// TEACHERS
// ============================================================
export const mockTeachers: Teacher[] = [
  { id: '1', staffId: 'TR-001', name: 'Mr. Harrison Obi', subjects: ['Physics', 'Further Mathematics'], classes: ['SS1 Gold', 'SS2 Gold', 'SS2 Silver'], status: 'Active' },
  { id: '2', staffId: 'TR-002', name: 'Mrs. Adaeze Nwosu', subjects: ['English Language', 'Literature-in-English'], classes: ['JS1 Gold', 'JS2 Gold', 'JS3 Gold'], status: 'Active' },
  { id: '3', staffId: 'TR-003', name: 'Mr. Emeka Igwe', subjects: ['Mathematics'], classes: ['JS3 Gold', 'JS3 Silver', 'SS1 Blue'], status: 'Active' },
  { id: '4', staffId: 'TR-004', name: 'Mrs. Folake Adeyemi', subjects: ['Chemistry', 'Basic Science'], classes: ['SS1 Gold', 'SS2 Blue', 'JS2 Silver'], status: 'Active' },
  { id: '5', staffId: 'TR-005', name: 'Mr. Suleiman Bello', subjects: ['History', 'Civic Education'], classes: ['JS1 Blue', 'JS2 Gold', 'SS3 Gold'], status: 'Active' },
  { id: '6', staffId: 'TR-006', name: 'Miss Ngozi Eze', subjects: ['Biology', 'Agricultural Science'], classes: ['SS2 Gold', 'SS3 Blue', 'JS3 Silver'], status: 'On Leave' },
];

// ============================================================
// CLASSES & SUBJECTS
// ============================================================
export const mockClasses: ClassInfo[] = [
  { id: '1', name: 'JS1 Gold', studentsCount: 42, formTeacher: 'Mrs. Adaeze Nwosu', subjects: ['English', 'Mathematics', 'Basic Science', 'Social Studies', 'CCA', 'PHE'] },
  { id: '2', name: 'JS1 Blue', studentsCount: 40, formTeacher: 'Mr. Suleiman Bello', subjects: ['English', 'Mathematics', 'Basic Science', 'Social Studies', 'CCA', 'PHE'] },
  { id: '3', name: 'JS2 Gold', studentsCount: 38, formTeacher: 'Mrs. Folake Adeyemi', subjects: ['English', 'Mathematics', 'Basic Science', 'Social Studies', 'Agric'] },
  { id: '4', name: 'JS2 Silver', studentsCount: 36, formTeacher: 'Mr. Emeka Igwe', subjects: ['English', 'Mathematics', 'Basic Science', 'Social Studies', 'Agric'] },
  { id: '5', name: 'JS3 Gold', studentsCount: 45, formTeacher: 'Mr. Emeka Igwe', subjects: ['English', 'Mathematics', 'Basic Science', 'Social Studies', 'Business Studies'] },
  { id: '6', name: 'JS3 Silver', studentsCount: 41, formTeacher: 'Miss Ngozi Eze', subjects: ['English', 'Mathematics', 'Basic Science', 'Social Studies', 'Business Studies'] },
  { id: '7', name: 'SS1 Gold', studentsCount: 35, formTeacher: 'Mr. Harrison Obi', subjects: ['English', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Economics'] },
  { id: '8', name: 'SS1 Blue', studentsCount: 33, formTeacher: 'Mrs. Adaeze Nwosu', subjects: ['English', 'Mathematics', 'Government', 'Literature', 'Commerce', 'CRS'] },
  { id: '9', name: 'SS2 Gold', studentsCount: 30, formTeacher: 'Mr. Harrison Obi', subjects: ['English', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Further Maths'] },
  { id: '10', name: 'SS2 Silver', studentsCount: 28, formTeacher: 'Mrs. Folake Adeyemi', subjects: ['English', 'Mathematics', 'Government', 'Literature', 'Economics', 'CRS'] },
  { id: '11', name: 'SS3 Gold', studentsCount: 25, formTeacher: 'Mr. Suleiman Bello', subjects: ['English', 'Mathematics', 'Physics', 'Chemistry', 'Biology'] },
  { id: '12', name: 'SS3 Blue', studentsCount: 22, formTeacher: 'Miss Ngozi Eze', subjects: ['English', 'Mathematics', 'Government', 'Literature', 'Commerce'] },
];

// ============================================================
// ATTENDANCE (for student view — Tobi Adebayo)
// ============================================================
export const mockStudentAttendance: AttendanceRecord[] = [
  { id: '1', studentName: 'Adebayo, Tobi', admissionNumber: 'VS-2023-001', date: 'Mon, Oct 23', status: 'Present' },
  { id: '2', studentName: 'Adebayo, Tobi', admissionNumber: 'VS-2023-001', date: 'Tue, Oct 24', status: 'Present' },
  { id: '3', studentName: 'Adebayo, Tobi', admissionNumber: 'VS-2023-001', date: 'Wed, Oct 25', status: 'Absent' },
  { id: '4', studentName: 'Adebayo, Tobi', admissionNumber: 'VS-2023-001', date: 'Thu, Oct 26', status: 'Present' },
  { id: '5', studentName: 'Adebayo, Tobi', admissionNumber: 'VS-2023-001', date: 'Fri, Oct 27', status: 'Present' },
  { id: '6', studentName: 'Adebayo, Tobi', admissionNumber: 'VS-2023-001', date: 'Mon, Oct 30', status: 'Present' },
  { id: '7', studentName: 'Adebayo, Tobi', admissionNumber: 'VS-2023-001', date: 'Tue, Oct 31', status: 'Late' },
  { id: '8', studentName: 'Adebayo, Tobi', admissionNumber: 'VS-2023-001', date: 'Wed, Nov 01', status: 'Present' },
  { id: '9', studentName: 'Adebayo, Tobi', admissionNumber: 'VS-2023-001', date: 'Thu, Nov 02', status: 'Present' },
  { id: '10', studentName: 'Adebayo, Tobi', admissionNumber: 'VS-2023-001', date: 'Fri, Nov 03', status: 'Present' },
];

// ============================================================
// TEACHER ATTENDANCE ROSTER (for marking attendance)
// ============================================================
export const mockAttendanceRoster = [
  { id: '1', name: 'Adebayo, Tobi', admissionNumber: 'VS-2023-001' },
  { id: '2', name: 'Adekunle, Bukola', admissionNumber: 'VS-2023-010' },
  { id: '3', name: 'Akintola, Damilola', admissionNumber: 'VS-2023-013' },
  { id: '4', name: 'Bello, Fatima', admissionNumber: 'VS-2023-004' },
  { id: '5', name: 'Chukwu, Obiageli', admissionNumber: 'VS-2022-014' },
  { id: '6', name: 'Eze, Chukwuemeka', admissionNumber: 'VS-2023-007' },
  { id: '7', name: 'Ibrahim, Aisha', admissionNumber: 'VS-2022-006' },
  { id: '8', name: 'Lawal, Olumide', admissionNumber: 'VS-2023-015' },
  { id: '9', name: 'Mohammed, Abdullahi', admissionNumber: 'VS-2022-009' },
  { id: '10', name: 'Nwachukwu, Emeka', admissionNumber: 'VS-2023-003' },
  { id: '11', name: 'Ogundimu, Temitope', admissionNumber: 'VS-2023-008' },
  { id: '12', name: 'Okafor, Chidinma', admissionNumber: 'VS-2023-002' },
  { id: '13', name: 'Okeke, Nnamdi', admissionNumber: 'VS-2021-011' },
  { id: '14', name: 'Yusuf, Halima', admissionNumber: 'VS-2023-012' },
];

// ============================================================
// FEE BALANCE (for student view)
// ============================================================
export const mockFeeBalance: FeeBalance = {
  total: 185000,
  paid: 140000,
  balance: 45000,
  dueDate: 'Oct 15, 2023',
  breakdown: [
    { item: 'Tuition Fee', amount: 120000 },
    { item: 'Development Levy', amount: 25000 },
    { item: 'ICT / Lab Fee', amount: 15000 },
    { item: 'Exam Fee', amount: 10000 },
    { item: 'Sports & Uniform', amount: 15000 },
  ],
};

// ============================================================
// CBT EXAM QUESTIONS
// ============================================================
export const mockExamQuestions: ExamQuestion[] = [
  {
    id: '1',
    text: 'What is the SI unit of force?',
    options: ['Joule', 'Newton', 'Watt', 'Pascal'],
    correctAnswer: 'Newton',
  },
  {
    id: '2',
    text: 'Which of the following is a vector quantity?',
    options: ['Speed', 'Temperature', 'Displacement', 'Mass'],
    correctAnswer: 'Displacement',
  },
  {
    id: '3',
    text: 'The acceleration due to gravity on the surface of the Earth is approximately:',
    options: ['9.8 m/s²', '6.7 m/s²', '3.2 m/s²', '12.0 m/s²'],
    correctAnswer: '9.8 m/s²',
  },
  {
    id: '4',
    text: 'A body moving with uniform velocity has:',
    options: ['Zero acceleration', 'Constant acceleration', 'Variable acceleration', 'Negative acceleration'],
    correctAnswer: 'Zero acceleration',
  },
  {
    id: '5',
    text: 'The product of mass and velocity is called:',
    options: ['Force', 'Impulse', 'Momentum', 'Energy'],
    correctAnswer: 'Momentum',
  },
  {
    id: '6',
    text: 'Which gas is most abundant in the Earth\'s atmosphere?',
    options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Argon'],
    correctAnswer: 'Nitrogen',
  },
  {
    id: '7',
    text: 'The chemical symbol for Gold is:',
    options: ['Ag', 'Au', 'Go', 'Gd'],
    correctAnswer: 'Au',
  },
  {
    id: '8',
    text: 'What is the value of π (pi) to two decimal places?',
    options: ['3.12', '3.14', '3.16', '3.18'],
    correctAnswer: '3.14',
  },
  {
    id: '9',
    text: 'Solve for x: 3x + 7 = 22',
    options: ['3', '5', '7', '15'],
    correctAnswer: '5',
  },
  {
    id: '10',
    text: 'An electric current is measured in:',
    options: ['Volts', 'Ohms', 'Amperes', 'Watts'],
    correctAnswer: 'Amperes',
  },
];

// ============================================================
// TERM RESULTS (for student view — Tobi Adebayo)
// ============================================================
export const mockTermResults: TermResult[] = [
  { subject: 'Mathematics', ca: 32, exam: 54, total: 86, grade: 'A', remark: 'Excellent' },
  { subject: 'English Language', ca: 28, exam: 45, total: 73, grade: 'B', remark: 'Very Good' },
  { subject: 'Basic Science', ca: 35, exam: 50, total: 85, grade: 'A', remark: 'Excellent' },
  { subject: 'Social Studies', ca: 30, exam: 48, total: 78, grade: 'B', remark: 'Very Good' },
  { subject: 'Civic Education', ca: 25, exam: 40, total: 65, grade: 'C', remark: 'Good' },
  { subject: 'Business Studies', ca: 33, exam: 52, total: 85, grade: 'A', remark: 'Excellent' },
  { subject: 'CCA', ca: 36, exam: 55, total: 91, grade: 'A', remark: 'Excellent' },
  { subject: 'PHE', ca: 30, exam: 42, total: 72, grade: 'B', remark: 'Very Good' },
];

// ============================================================
// TEACHER SCHEDULE (for teacher dashboard)
// ============================================================
export const mockTeacherSchedule = [
  { id: '1', time: '09:00', period: 'AM', subject: 'Advanced Physics', class: 'SS2 Gold', room: 'Room 402 • Science Block', students: 28, isCurrent: true },
  { id: '2', time: '11:30', period: 'AM', subject: 'General Science', class: 'JS3 Gold', room: 'Room 105 • Main Building', students: 32, isCurrent: false },
  { id: '3', time: '02:00', period: 'PM', subject: 'Physics Lab', class: 'SS2 Gold', room: 'Lab 3 • Science Block', students: 14, isCurrent: false },
  { id: '4', time: '03:30', period: 'PM', subject: 'Further Mathematics', class: 'SS1 Gold', room: 'Room 201 • Main Building', students: 35, isCurrent: false },
];

// ============================================================
// PENDING RESULTS (for teacher dashboard)
// ============================================================
export const mockPendingResults = [
  { id: '1', title: 'Mid-Term Assessment', class: 'SS2 Gold', subject: 'Physics', students: 30, status: 'Overdue' as const, dueText: 'Overdue' },
  { id: '2', title: 'Lab Report 3', class: 'SS2 Gold', subject: 'Advanced Physics', students: 14, status: 'Upcoming' as const, dueText: 'Due in 2 days' },
];

// ============================================================
// UPCOMING EVENTS (for admin dashboard)
// ============================================================
export const mockEvents = [
  { id: '1', month: 'Oct', day: '18', title: 'Mid-Term Exams Begin', description: 'All classes. Ensure seating arrangements are finalized.' },
  { id: '2', month: 'Oct', day: '25', title: 'PTA General Meeting', description: 'Main Hall. 10:00 AM prompt.' },
  { id: '3', month: 'Nov', day: '02', title: 'Staff Training Day', description: 'No classes for students.' },
];

// ============================================================
// RECENT REGISTRATIONS (for admin dashboard)
// ============================================================
export const mockRecentRegistrations = [
  { id: 'V-204', name: 'Adebayo, Samuel', class: 'JSS 2', date: 'Oct 12, 2023', status: 'Active' as const },
  { id: 'V-203', name: 'Okafor, Chidinma', class: 'SS1 Blue', date: 'Oct 10, 2023', status: 'Active' as const },
  { id: 'V-202', name: 'Nwachukwu, Emeka', class: 'JS3 Silver', date: 'Oct 08, 2023', status: 'Pending Docs' as const },
  { id: 'V-201', name: 'Bello, Fatima', class: 'JS1 Gold', date: 'Oct 05, 2023', status: 'Active' as const },
  { id: 'V-200', name: 'Yusuf, Halima', class: 'JS2 Gold', date: 'Oct 03, 2023', status: 'Active' as const },
  { id: 'V-199', name: 'Lawal, Olumide', class: 'JS1 Silver', date: 'Oct 01, 2023', status: 'Active' as const },
  { id: 'V-198', name: 'Ibrahim, Aisha', class: 'SS3 Blue', date: 'Sep 28, 2023', status: 'Active' as const },
  { id: 'V-197', name: 'Eze, Chukwuemeka', class: 'JS2 Silver', date: 'Sep 25, 2023', status: 'Active' as const },
];
