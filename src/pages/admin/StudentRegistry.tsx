
import Layout from '../../components/Layout';
import { mockStudents } from '../../data/mockData';

export default function StudentRegistry() {
  return (
    <Layout role="admin">
      <div className="page-enter max-w-[1440px] mx-auto px-4 md:px-10 py-8 space-y-8">
        
        {/* Page Header & Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-headline-lg text-headline-lg font-bold text-primary tracking-tight">Student Registry</h2>
            <p className="font-body-md text-on-surface-variant mt-1">Manage and view all enrolled students across academic levels.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="bg-primary hover:opacity-90 text-on-primary font-label-md px-5 py-2.5 rounded-lg shadow-sm transition-all duration-200 flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">person_add</span>
              Add Student
            </button>
          </div>
        </div>

        {/* Filters & Controls Bar */}
        <div className="card bg-surface-container-lowest rounded-xl p-4 flex flex-col sm:flex-row gap-4 items-center justify-between hover:paper-shadow transition-shadow">
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            {/* Class Filter */}
            <div className="relative min-w-[160px]">
              <select className="w-full appearance-none bg-surface-container-lowest border border-outline/20 rounded-lg pl-4 pr-10 py-2.5 font-label-md text-on-surface focus:border-secondary-container transition-colors cursor-pointer">
                <option value="all">All Classes</option>
                <option value="js1">JS 1</option>
                <option value="js2">JS 2</option>
                <option value="js3">JS 3</option>
                <option value="ss1">SS 1</option>
                <option value="ss2">SS 2</option>
                <option value="ss3">SS 3</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[20px]">expand_more</span>
            </div>
            {/* Status Filter */}
            <div className="relative min-w-[160px]">
              <select className="w-full appearance-none bg-surface-container-lowest border border-outline/20 rounded-lg pl-4 pr-10 py-2.5 font-label-md text-on-surface focus:border-secondary-container transition-colors cursor-pointer">
                <option value="all">All Statuses</option>
                <option value="active">Active</option>
                <option value="graduated">Graduated</option>
                <option value="suspended">Suspended</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[20px]">expand_more</span>
            </div>
          </div>
          {/* Secondary Actions */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button className="p-2 border border-outline/20 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors" title="Export List">
              <span className="material-symbols-outlined text-[20px]">download</span>
            </button>
            <button className="p-2 border border-outline/20 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors" title="Print View">
              <span className="material-symbols-outlined text-[20px]">print</span>
            </button>
          </div>
        </div>

        {/* Data Table Card */}
        <div className="card bg-surface-container-lowest rounded-xl overflow-hidden hover:paper-shadow transition-shadow">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr>
                  <th className="th-cell py-4 px-6 border-b border-primary-container/20">Name</th>
                  <th className="th-cell py-4 px-6 border-b border-primary-container/20">Admission No.</th>
                  <th className="th-cell py-4 px-6 border-b border-primary-container/20">Class</th>
                  <th className="th-cell py-4 px-6 border-b border-primary-container/20">Gender</th>
                  <th className="th-cell py-4 px-6 border-b border-primary-container/20 text-center">Status</th>
                  <th className="th-cell py-4 px-6 border-b border-primary-container/20 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="font-body-md text-[14px]">
                {mockStudents.map((student, idx) => (
                  <tr key={student.id} className={`${idx % 2 === 0 ? 'zebra-even' : 'zebra-odd'} border-b border-outline-variant/20 hover:bg-surface-container-low transition-colors`}>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs uppercase">
                          {student.name.substring(0, 2)}
                        </div>
                        <span className="font-medium text-on-surface">{student.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 font-data-table text-on-surface-variant">{student.admissionNumber}</td>
                    <td className="py-4 px-6 text-on-surface-variant">{student.class}</td>
                    <td className="py-4 px-6 text-on-surface-variant">{student.gender}</td>
                    <td className="py-4 px-6 text-center">
                      <span className={student.status === 'Active' ? 'pill-success' : student.status === 'Pending Docs' ? 'pill-warning' : 'pill-neutral'}>
                        {student.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button className="text-on-surface-variant hover:text-secondary p-1 rounded transition-colors group">
                        <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">edit</span>
                      </button>
                      <button className="text-on-surface-variant hover:text-error p-1 rounded transition-colors group ml-2">
                        <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">delete</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Pagination Footer */}
          <div className="bg-surface-container-lowest border-t border-outline-variant/20 p-4 flex items-center justify-between">
            <span className="font-data-numeric text-sm text-on-surface-variant">Showing 1 to {mockStudents.length} of {mockStudents.length} entries</span>
            <div className="flex gap-1">
              <button className="px-3 py-1 border border-outline/20 rounded text-on-surface-variant hover:bg-surface-container-low disabled:opacity-50" disabled>Prev</button>
              <button className="px-3 py-1 bg-primary text-on-primary rounded font-medium">1</button>
              <button className="px-3 py-1 border border-outline/20 rounded text-on-surface-variant hover:bg-surface-container-low">Next</button>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
}
