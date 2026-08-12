import Layout from '../../components/Layout';
import { mockStudentAttendance } from '../../data/mockData';

export default function MyAttendance() {
  const totalDays = 20;
  const presentDays = mockStudentAttendance.filter(a => a.status === 'Present').length;
  const absentDays = mockStudentAttendance.filter(a => a.status === 'Absent').length;
  const lateDays = mockStudentAttendance.filter(a => a.status === 'Late').length;
  const percentage = ((presentDays + lateDays) / totalDays * 100).toFixed(1);

  return (
    <Layout role="student">
      <div className="page-enter">
        <div className="mb-8 flex flex-col justify-between gap-4">
          <h1 className="font-headline-lg text-headline-lg text-primary mb-2">My Attendance</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-6 relative overflow-hidden md:col-span-2 flex flex-col justify-between card">
            <div>
              <h2 className="font-label-md text-label-md text-on-surface-variant mb-1">Overall Attendance Rate</h2>
              <div className="flex items-baseline gap-2">
                <span className="font-data-numeric text-[48px] leading-[56px] font-bold text-primary">{percentage}%</span>
                <span className="text-on-surface-variant font-data-numeric text-data-numeric">/ 100%</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-4 flex-1 flex flex-col justify-center card border-l-4 border-l-[#107C41]">
              <h3 className="font-label-md text-label-md text-on-surface-variant mb-2">Days Present</h3>
              <div className="font-data-numeric text-[32px] leading-[40px] font-semibold text-[#107C41]">{presentDays}</div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-4 flex-1 flex flex-col justify-center card border-l-4 border-l-error">
              <h3 className="font-label-md text-label-md text-on-surface-variant mb-2">Days Absent</h3>
              <div className="font-data-numeric text-[32px] leading-[40px] font-semibold text-error">{absentDays}</div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-4 flex-1 flex flex-col justify-center card border-l-4 border-l-[#fcca66]">
              <h3 className="font-label-md text-label-md text-on-surface-variant mb-2">Days Late</h3>
              <div className="font-data-numeric text-[32px] leading-[40px] font-semibold text-[#755400]">{lateDays}</div>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden card">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-primary text-on-primary">
                  <th className="th-cell p-4 font-body-md text-[12px] uppercase tracking-wider font-bold">Date</th>
                  <th className="th-cell p-4 font-body-md text-[12px] uppercase tracking-wider font-bold">Status</th>
                </tr>
              </thead>
              <tbody className="font-data-table text-data-table text-on-surface">
                {mockStudentAttendance.map((record, i) => (
                  <tr key={record.id} className={`${i % 2 === 0 ? 'zebra-even' : 'zebra-odd'} border-b border-outline-variant/30 hover:bg-surface-container-low transition-colors`}>
                    <td className="p-4">{record.date}</td>
                    <td className="p-4">
                      <span className={`inline-block px-3 py-1 rounded-full font-label-md text-xs font-bold ${record.status === 'Present' ? 'pill-success' : record.status === 'Absent' ? 'pill-error' : 'pill-warning'}`}>
                        {record.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}
