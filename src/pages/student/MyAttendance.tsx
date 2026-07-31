
import Layout from '../../components/Layout';
import { mockAttendance } from '../../data/mockData';

const MyAttendance = () => {
  return (
    <Layout role="student">
      <div className="max-w-[1440px] mx-auto px-margin_mobile md:px-margin_desktop py-8">
        <h2 className="font-display-lg text-display-lg text-primary mb-6">My Attendance</h2>
        <div className="bg-surface-container-lowest border border-[#E5E5E1] rounded-lg p-6">
          <p className="font-body-md text-on-surface-variant mb-4">Here is your attendance record for the current term.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-primary text-on-primary">
                  <th className="py-3 px-6 font-data-table">Date</th>
                  <th className="py-3 px-6 font-data-table text-right">Status</th>
                </tr>
              </thead>
              <tbody className="font-data-table">
                {mockAttendance.map((record, idx) => (
                  <tr key={record.id} className={idx % 2 === 0 ? "bg-surface-container-lowest border-b" : "bg-[#F7F6F2] border-b"}>
                    <td className="py-4 px-6">{record.date}</td>
                    <td className="py-4 px-6 text-right">
                      <span className={`px-3 py-1 rounded-full font-bold text-[12px] ${record.status === 'Present' ? 'bg-[#1A73E8]/10 text-[#1A73E8]' : 'bg-[#E53935]/10 text-[#E53935]'}`}>
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
};

export default MyAttendance;
