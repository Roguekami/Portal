import { useState } from 'react';
import Layout from '../../components/Layout';
import { mockStudents } from '../../data/mockData';

const MarkAttendance = () => {
  const [attendance, setAttendance] = useState<Record<string, boolean>>(
    mockStudents.reduce((acc, student) => ({ ...acc, [student.id]: true }), {})
  );

  const toggleAttendance = (id: string) => {
    setAttendance(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Layout role="teacher">
      <div className="max-w-[1440px] mx-auto px-margin_mobile md:px-margin_desktop py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
          <div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-primary tracking-tight mb-2">Mark Attendance</h2>
            <div className="flex flex-wrap items-center gap-2 md:gap-4 text-on-surface-variant font-label-md text-label-md">
              <div className="flex items-center gap-1 bg-surface-container-low px-3 py-1.5 rounded-full border border-outline-variant/50">
                <span className="material-symbols-outlined text-[18px]">group</span>
                <span>JSS 1</span>
              </div>
              <div className="flex items-center gap-1 bg-surface-container-low px-3 py-1.5 rounded-full border border-outline-variant/50">
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                <span>Today</span>
              </div>
            </div>
          </div>
          <button className="w-full md:w-auto bg-primary text-on-primary font-label-md text-label-md font-semibold py-3 px-6 rounded-lg shadow-[0px_2px_4px_rgba(18,37,58,0.05),_0px_10px_20px_rgba(18,37,58,0.08)] hover:bg-primary-container transition-colors flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[20px]">save</span>
            Save Attendance
          </button>
        </div>

        <div className="bg-surface-container-lowest border border-[#E5E5E1] rounded-lg overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-primary text-on-primary">
                <th className="py-3 px-6 font-data-table text-data-table uppercase tracking-wider">Admission No.</th>
                <th className="py-3 px-6 font-data-table text-data-table uppercase tracking-wider">Name</th>
                <th className="py-3 px-6 font-data-table text-data-table uppercase tracking-wider text-right">Status</th>
              </tr>
            </thead>
            <tbody className="font-data-table text-data-table text-on-surface">
              {mockStudents.map((student, idx) => {
                const isPresent = attendance[student.id];
                return (
                  <tr key={student.id} className={idx % 2 === 0 ? "bg-surface-container-lowest border-b border-[#E5E5E1]/50" : "bg-[#F7F6F2] border-b border-[#E5E5E1]/50"}>
                    <td className="py-4 px-6">{student.admissionNumber}</td>
                    <td className="py-4 px-6 font-medium">{student.name}</td>
                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={() => toggleAttendance(student.id)}
                        className={`px-4 py-2 rounded-full font-label-md transition-colors ${isPresent ? 'bg-[#1A73E8]/10 text-[#1A73E8]' : 'bg-[#E53935]/10 text-[#E53935]'}`}
                      >
                        {isPresent ? 'Present' : 'Absent'}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default MarkAttendance;
