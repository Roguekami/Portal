
import Layout from '../../components/Layout';
import { mockRecentRegistrations, mockEvents } from '../../data/mockData';

export default function AdminDashboard() {
  return (
    <Layout role="admin">
      <div className="page-enter max-w-[1440px] mx-auto px-4 md:px-10 py-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="font-display-lg text-display-lg text-primary mb-1">Dashboard Overview</h2>
            <p className="font-body-lg text-on-surface-variant">Institutional summary for the current academic term.</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-surface-container-lowest border border-primary text-primary font-label-md text-label-md px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined">campaign</span>
              Post Announcement
            </button>
            <button className="bg-primary text-on-primary font-label-md text-label-md px-4 py-2 rounded-lg flex items-center gap-2 hover:opacity-90 transition-opacity">
              <span className="material-symbols-outlined">person_add</span>
              Enroll Student
            </button>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Summary Card: Students */}
          <div className="card bg-surface-container-lowest rounded-xl p-6 flex flex-col justify-between h-40 hover:paper-shadow transition-shadow">
            <div className="flex justify-between items-start">
              <h3 className="section-label text-on-surface-variant">Total Students</h3>
              <span className="material-symbols-outlined text-outline">group</span>
            </div>
            <div>
              <div className="font-data-numeric text-[40px] leading-tight text-primary font-bold">204</div>
              <div className="font-label-md text-secondary mt-1 flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">trending_up</span> +12 this term
              </div>
            </div>
          </div>

          {/* Summary Card: Teachers */}
          <div className="card bg-surface-container-lowest rounded-xl p-6 flex flex-col justify-between h-40 hover:paper-shadow transition-shadow">
            <div className="flex justify-between items-start">
              <h3 className="section-label text-on-surface-variant">Total Teachers</h3>
              <span className="material-symbols-outlined text-outline">local_library</span>
            </div>
            <div>
              <div className="font-data-numeric text-[40px] leading-tight text-primary font-bold">18</div>
              <div className="font-label-md text-on-surface-variant mt-1">Full-time faculty</div>
            </div>
          </div>

          {/* Financial Card: Spans 2 cols on lg */}
          <div className="card bg-surface-container-lowest rounded-xl p-6 lg:col-span-2 h-40 flex flex-col justify-between hover:paper-shadow transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <h3 className="section-label text-on-surface-variant">Financial Ledger Summary</h3>
              <span className="material-symbols-outlined text-outline">account_balance</span>
            </div>
            <div className="flex items-end gap-8">
              <div className="flex-1">
                <div className="font-label-md text-on-surface-variant mb-1">Fees Collected</div>
                <div className="font-data-numeric text-[32px] leading-tight text-primary font-bold">₦4.2M</div>
                <div className="w-full bg-surface-container h-2 rounded-full mt-3 overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div className="flex-1 border-l border-outline-variant/30 pl-8">
                <div className="font-label-md text-on-surface-variant mb-1">Outstanding</div>
                <div className="font-data-numeric text-[32px] leading-tight text-error font-bold">₦1.8M</div>
                <div className="w-full bg-surface-container h-2 rounded-full mt-3 overflow-hidden">
                  <div className="bg-error h-full rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area: Recent Activity & Events */}
          <div className="md:col-span-2 lg:col-span-3 card bg-surface-container-lowest rounded-xl flex flex-col hover:paper-shadow transition-shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-[#F7F6F2] flex justify-between items-center">
              <h3 className="font-headline-md text-primary">Recent Registrations</h3>
              <button className="font-label-md text-secondary hover:text-primary transition-colors">View All Ledgers</button>
            </div>
            <div className="overflow-x-auto flex-1">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr>
                    <th className="th-cell py-3 px-6">ID</th>
                    <th className="th-cell py-3 px-6">Student Name</th>
                    <th className="th-cell py-3 px-6">Class</th>
                    <th className="th-cell py-3 px-6">Date Enrolled</th>
                    <th className="th-cell py-3 px-6">Status</th>
                  </tr>
                </thead>
                <tbody className="font-data-table text-on-surface">
                  {mockRecentRegistrations.map((reg, idx) => (
                    <tr key={reg.id} className={idx % 2 === 0 ? 'zebra-even' : 'zebra-odd'}>
                      <td className="py-4 px-6 font-data-table">{reg.id}</td>
                      <td className="py-4 px-6 font-medium font-body-md">{reg.name}</td>
                      <td className="py-4 px-6 font-body-md">{reg.class}</td>
                      <td className="py-4 px-6 font-body-md">{reg.date}</td>
                      <td className="py-4 px-6">
                        <span className={reg.status === 'Active' ? 'pill-success' : 'pill-warning'}>
                          {reg.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Side Panel: Upcoming Events */}
          <div className="md:col-span-1 lg:col-span-1 card bg-surface-container-lowest rounded-xl flex flex-col h-full hover:paper-shadow transition-shadow">
            <div className="px-6 py-4 border-b border-[#F7F6F2]">
              <h3 className="font-headline-md text-primary">Upcoming Events</h3>
            </div>
            <div className="p-6 space-y-6">
              {mockEvents.map(event => (
                <div key={event.id} className="flex gap-4">
                  <div className="flex flex-col items-center justify-center bg-surface-container-low rounded-lg w-14 h-14 shrink-0 border border-outline-variant/20">
                    <span className="font-label-md text-[12px] text-secondary font-bold uppercase">{event.month}</span>
                    <span className="font-data-numeric text-[20px] text-primary font-bold">{event.day}</span>
                  </div>
                  <div>
                    <h4 className="font-label-md font-bold text-primary">{event.title}</h4>
                    <p className="font-body-md text-[13px] text-on-surface-variant mt-1">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-auto px-6 pb-6 pt-2">
              <button className="w-full bg-transparent border border-outline-variant text-on-surface-variant font-label-md py-2 rounded-lg hover:bg-surface-container-low transition-colors">
                Full Calendar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
