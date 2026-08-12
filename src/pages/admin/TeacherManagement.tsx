
import Layout from '../../components/Layout';
import { mockTeachers } from '../../data/mockData';

export default function TeacherManagement() {
  return (
    <Layout role="admin">
      <div className="page-enter max-w-[1440px] mx-auto px-4 md:px-10 py-8">
        
        {/* Page Header Section */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-2">Staff Management</h2>
            <p className="font-body-md text-on-surface-variant">View and manage faculty records, assignments, and contact information.</p>
          </div>
          <button className="bg-primary text-on-primary font-label-md px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors shadow-sm flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">add</span>
            Add Staff
          </button>
        </div>

        {/* Filters & Tools Bar */}
        <div className="card bg-surface-container-lowest p-4 rounded-t-xl rounded-b-none border-b-0 flex justify-between items-center gap-4">
          <div className="flex gap-4">
            <div className="relative">
              <select className="appearance-none bg-transparent border border-outline-variant/20 rounded-lg px-4 py-2 pr-10 font-label-md text-on-surface focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20">
                <option>All Subjects</option>
                <option>Mathematics</option>
                <option>Physics</option>
                <option>Literature</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[20px]">arrow_drop_down</span>
            </div>
            <div className="relative">
              <select className="appearance-none bg-transparent border border-outline-variant/20 rounded-lg px-4 py-2 pr-10 font-label-md text-on-surface focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20">
                <option>All Statuses</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[20px]">arrow_drop_down</span>
            </div>
          </div>
          <button className="text-on-surface-variant font-label-md flex items-center gap-2 hover:text-primary transition-colors px-4 py-2 border border-outline-variant/20 rounded-lg">
            <span className="material-symbols-outlined text-[18px]">download</span>
            Export
          </button>
        </div>

        {/* Data Table Card */}
        <div className="card bg-surface-container-lowest rounded-b-xl rounded-t-none overflow-hidden hover:paper-shadow transition-shadow">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="th-cell py-4 px-6 font-semibold">Teacher Details</th>
                  <th className="th-cell py-4 px-6 font-semibold">Subjects Taught</th>
                  <th className="th-cell py-4 px-6 font-semibold">Classes Assigned</th>
                  <th className="th-cell py-4 px-6 font-semibold text-center">Status</th>
                  <th className="th-cell py-4 px-6 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10 font-body-md text-on-surface">
                {mockTeachers.map((teacher, idx) => (
                  <tr key={teacher.id} className={`${idx % 2 === 0 ? 'zebra-even' : 'zebra-odd'} hover:bg-surface-container-low transition-colors`}>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-surface-container border border-outline-variant/20 flex items-center justify-center text-on-surface-variant font-bold text-[14px]">
                          {teacher.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                        </div>
                        <div>
                          <div className="font-headline-md text-[16px] leading-tight text-primary">{teacher.name}</div>
                          <div className="font-data-table text-[12px] text-on-surface-variant mt-1">ID: {teacher.staffId}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-on-surface-variant">
                      {teacher.subjects.join(', ')}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex gap-2 flex-wrap">
                        {teacher.classes.map(c => (
                          <span key={c} className="px-2 py-1 bg-surface-container rounded-lg text-[12px] font-medium border border-outline-variant/10">{c}</span>
                        ))}
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className={teacher.status === 'Active' ? 'pill-success' : 'pill-neutral'}>
                        {teacher.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button className="text-on-surface-variant hover:text-secondary transition-colors p-2 rounded-lg hover:bg-surface-container-low" title="Edit Record">
                        <span className="material-symbols-outlined text-[20px]">edit</span>
                      </button>
                      <button className="text-on-surface-variant hover:text-error transition-colors p-2 rounded-lg hover:bg-surface-container-low ml-2" title="Delete Record">
                        <span className="material-symbols-outlined text-[20px]">delete</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="border-t border-outline-variant/10 px-6 py-4 flex items-center justify-between bg-surface-container-lowest">
            <p className="font-label-md text-on-surface-variant">Showing 1 to {mockTeachers.length} of {mockTeachers.length} results</p>
            <div className="flex gap-2">
              <button className="px-3 py-1 border border-outline-variant/20 rounded-lg text-on-surface-variant hover:bg-surface-container-low disabled:opacity-50" disabled>Previous</button>
              <button className="px-3 py-1 border border-outline-variant/20 rounded-lg bg-primary text-on-primary font-medium">1</button>
              <button className="px-3 py-1 border border-outline-variant/20 rounded-lg text-on-surface-variant hover:bg-surface-container-low">Next</button>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
}
