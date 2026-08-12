import { useState } from 'react';
import Layout from '../../components/Layout';
import { mockAttendanceRoster } from '../../data/mockData';

export default function MarkAttendance() {
  const [attendance, setAttendance] = useState<Record<string, 'Present' | 'Absent' | 'Late'>>(
    mockAttendanceRoster.reduce((acc, student) => ({ ...acc, [student.id]: 'Present' }), {})
  );

  const handleStatusChange = (id: string, status: 'Present' | 'Absent' | 'Late') => {
    setAttendance((prev) => ({ ...prev, [id]: status }));
  };

  const presentCount = Object.values(attendance).filter(s => s === 'Present').length;
  const absentCount = Object.values(attendance).filter(s => s === 'Absent').length;
  const lateCount = Object.values(attendance).filter(s => s === 'Late').length;

  return (
    <Layout role="teacher">
      <div className="page-enter">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
          <div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-primary tracking-tight mb-2">Mark Attendance</h2>
            <div className="flex flex-wrap items-center gap-2 md:gap-4 text-on-surface-variant font-label-md text-label-md">
              <div className="flex items-center gap-1 bg-surface-container-low px-3 py-1.5 rounded-full border border-outline-variant/50">
                <span className="material-symbols-outlined text-[18px]">group</span>
                <span>Form 4A - Advanced Mathematics</span>
              </div>
              <div className="flex items-center gap-1 bg-surface-container-low px-3 py-1.5 rounded-full border border-outline-variant/50">
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                <span>Thursday, 24 Oct 2023</span>
              </div>
            </div>
          </div>
          <button className="w-full md:w-auto bg-primary text-on-primary font-label-md text-label-md font-semibold py-3 px-6 rounded-xl shadow-sm hover:bg-primary-container transition-colors flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[20px]">save</span>
            Save Attendance
          </button>
        </div>

        <div className="card rounded-xl mb-6 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-outline-variant/50 overflow-hidden">
          <div className="flex-1 p-4 md:p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">check_circle</span>
            </div>
            <div>
              <p className="font-label-md text-label-md text-on-surface-variant">Present Status</p>
              <p className="font-body-md text-body-md font-bold text-primary mt-1">{presentCount} Students Present</p>
            </div>
          </div>
          <div className="flex-1 p-4 md:p-6 flex items-center gap-4 bg-error/5">
            <div className="w-12 h-12 rounded-full bg-error/10 flex items-center justify-center text-error">
              <span className="material-symbols-outlined">cancel</span>
            </div>
            <div>
              <p className="font-label-md text-label-md text-on-surface-variant">Marked Absent</p>
              <p className="font-body-md text-body-md font-bold text-error mt-1">{absentCount} Students</p>
            </div>
          </div>
          <div className="flex-1 p-4 md:p-6 flex items-center gap-4 bg-secondary-container/10">
            <div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined">schedule</span>
            </div>
            <div>
              <p className="font-label-md text-label-md text-on-surface-variant">Marked Late</p>
              <p className="font-body-md text-body-md font-bold text-secondary mt-1">{lateCount} Students</p>
            </div>
          </div>
        </div>

        <div className="card rounded-xl overflow-hidden shadow-sm">
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="th-cell font-data-table uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-6 font-semibold w-16">No.</th>
                  <th className="py-3 px-6 font-semibold">Student Name</th>
                  <th className="py-3 px-6 font-semibold">ID Number</th>
                  <th className="py-3 px-6 font-semibold text-center">Status</th>
                  <th className="py-3 px-6 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="font-body-md text-body-md divide-y divide-outline-variant/30">
                {mockAttendanceRoster.map((student, index) => {
                  const status = attendance[student.id];
                  const initials = student.name.split(',')[0].substring(0, 2).toUpperCase();
                  
                  return (
                    <tr key={student.id} className={`hover:bg-surface-container-low transition-colors group ${status === 'Absent' ? 'bg-error/5 border-l-4 border-l-error' : index % 2 === 0 ? 'zebra-even' : 'zebra-odd'}`}>
                      <td className="py-4 px-6 font-data-numeric text-data-numeric text-on-surface-variant">{(index + 1).toString().padStart(2, '0')}</td>
                      <td className="py-4 px-6 font-medium text-primary flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-surface-variant flex items-center justify-center text-on-surface-variant font-label-md text-xs">{initials}</div>
                        {student.name}
                      </td>
                      <td className="py-4 px-6 font-data-numeric text-data-numeric text-on-surface-variant">{student.admissionNumber}</td>
                      <td className="py-4 px-6 text-center">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${status === 'Present' ? 'pill-success' : status === 'Absent' ? 'pill-error' : 'pill-warning'}`}>
                          {status}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button 
                            onClick={() => handleStatusChange(student.id, status === 'Absent' ? 'Present' : 'Absent')}
                            className={`px-3 py-1.5 rounded-md font-label-md text-label-md transition-colors ${status === 'Absent' ? 'bg-error text-on-error shadow-sm' : 'border border-outline-variant text-on-surface-variant hover:bg-error/10 hover:text-error hover:border-error/30'}`}
                          >
                            Absent
                          </button>
                          <button 
                            onClick={() => handleStatusChange(student.id, status === 'Late' ? 'Present' : 'Late')}
                            className={`px-3 py-1.5 rounded-md font-label-md text-label-md transition-colors ${status === 'Late' ? 'bg-secondary text-on-secondary shadow-sm' : 'border border-outline-variant text-on-surface-variant hover:bg-secondary-container/30 hover:text-secondary hover:border-secondary/30'}`}
                          >
                            Late
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}
