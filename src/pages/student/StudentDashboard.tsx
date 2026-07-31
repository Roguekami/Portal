
import Layout from '../../components/Layout';
import { mockExams } from '../../data/mockData';

const StudentDashboard = () => {
  return (
    <Layout role="student">
      <div className="max-w-[1440px] mx-auto px-margin_mobile md:px-margin_desktop py-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="font-display-lg text-display-lg text-primary mb-1">Student Dashboard</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Welcome back, Alice Smith</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-surface-container-lowest border border-[#E5E5E1] rounded-lg p-6 flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Attendance Rating</h3>
              <span className="material-symbols-outlined text-outline">event_available</span>
            </div>
            <div>
              <div className="font-data-numeric text-[40px] leading-tight text-primary font-bold">95%</div>
              <div className="font-label-md text-label-md text-secondary mt-1">Excellent</div>
            </div>
          </div>

          <div className="bg-surface-container-lowest border border-[#E5E5E1] rounded-lg p-6 flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Upcoming Exams</h3>
              <span className="material-symbols-outlined text-outline">quiz</span>
            </div>
            <div>
              <div className="font-data-numeric text-[40px] leading-tight text-primary font-bold">{mockExams.length}</div>
              <div className="font-label-md text-label-md text-secondary mt-1">Ready to take</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StudentDashboard;
