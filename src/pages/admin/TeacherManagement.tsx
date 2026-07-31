
import Layout from '../../components/Layout';
import { mockTeachers } from '../../data/mockData';

const TeacherManagement = () => {
  return (
    <Layout role="admin">
      <div className="max-w-[1440px] mx-auto px-margin_mobile md:px-margin_desktop py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-display-lg text-display-lg text-primary">Teacher Management</h2>
          <button className="bg-primary text-on-primary font-label-md text-label-md px-4 py-2 rounded-lg flex items-center gap-2">
            <span className="material-symbols-outlined">add</span>
            Add Teacher
          </button>
        </div>
        
        <div className="bg-surface-container-lowest border border-[#E5E5E1] rounded-lg overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-primary text-on-primary">
                <th className="py-3 px-6 font-data-table text-data-table uppercase tracking-wider">Staff ID</th>
                <th className="py-3 px-6 font-data-table text-data-table uppercase tracking-wider">Name</th>
                <th className="py-3 px-6 font-data-table text-data-table uppercase tracking-wider">Subjects</th>
                <th className="py-3 px-6 font-data-table text-data-table uppercase tracking-wider">Classes</th>
                <th className="py-3 px-6 font-data-table text-data-table uppercase tracking-wider">Status</th>
                <th className="py-3 px-6 font-data-table text-data-table uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="font-data-table text-data-table text-on-surface">
              {mockTeachers.map((teacher, idx) => (
                <tr key={teacher.id} className={idx % 2 === 0 ? "bg-surface-container-lowest border-b border-[#E5E5E1]/50" : "bg-[#F7F6F2] border-b border-[#E5E5E1]/50"}>
                  <td className="py-4 px-6">{teacher.staffId}</td>
                  <td className="py-4 px-6 font-medium">{teacher.name}</td>
                  <td className="py-4 px-6">{teacher.subjects.join(', ')}</td>
                  <td className="py-4 px-6">{teacher.classes.join(', ')}</td>
                  <td className="py-4 px-6">
                    <span className={`inline-block px-3 py-1 rounded-full text-[12px] font-bold ${teacher.status === 'Active' ? 'bg-[#1A73E8]/10 text-[#1A73E8]' : 'bg-[#E53935]/10 text-[#E53935]'}`}>
                      {teacher.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 flex gap-2">
                    <button className="text-secondary hover:text-primary"><span className="material-symbols-outlined">edit</span></button>
                    <button className="text-error hover:opacity-80"><span className="material-symbols-outlined">delete</span></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default TeacherManagement;
