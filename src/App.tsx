import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import AdminDashboard from './pages/admin/AdminDashboard';
import StudentRegistry from './pages/admin/StudentRegistry';
import TeacherManagement from './pages/admin/TeacherManagement';
import ClassesSubjects from './pages/admin/ClassesSubjects';
import TeacherDashboard from './pages/teacher/TeacherDashboard';
import MarkAttendance from './pages/teacher/MarkAttendance';
import ExamCreation from './pages/teacher/ExamCreation';
import StudentDashboard from './pages/student/StudentDashboard';
import MyAttendance from './pages/student/MyAttendance';
import FeesPayment from './pages/student/FeesPayment';
import CBTExam from './pages/student/CBTExam';
import TermResults from './pages/student/TermResults';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/students" element={<StudentRegistry />} />
        <Route path="/admin/teachers" element={<TeacherManagement />} />
        <Route path="/admin/classes" element={<ClassesSubjects />} />
        
        {/* Teacher Routes */}
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/teacher/attendance" element={<MarkAttendance />} />
        <Route path="/teacher/exams" element={<ExamCreation />} />
        
        {/* Student Routes */}
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/student/attendance" element={<MyAttendance />} />
        <Route path="/student/fees" element={<FeesPayment />} />
        <Route path="/student/cbt" element={<CBTExam />} />
        <Route path="/student/results" element={<TermResults />} />
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
