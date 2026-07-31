
import Layout from '../../components/Layout';
import { mockClasses } from '../../data/mockData';

const TeacherDashboard = () => {
  return (
    <Layout role="teacher">
      <div className="max-w-[1440px] mx-auto px-margin_mobile md:px-margin_desktop py-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="font-display-lg text-display-lg text-primary mb-1">Teacher Dashboard</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Welcome back, Mr. David Lee</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockClasses.slice(0, 3).map((cls) => (
            <div key={cls.id} className="bg-surface-container-lowest border border-[#E5E5E1] rounded-lg p-6 flex flex-col justify-between">
              <div>
                <h3 className="font-headline-md text-headline-md text-primary">{cls.name}</h3>
                <p className="font-body-md text-on-surface-variant mb-4">Mathematics</p>
                <div className="flex justify-between font-label-md text-label-md mb-2">
                  <span className="text-on-surface-variant">Total Students:</span>
                  <span className="text-primary font-medium">{cls.studentsCount}</span>
                </div>
              </div>
              <button className="mt-4 w-full bg-surface-container-low text-primary font-label-md py-2 rounded-lg hover:bg-surface-container-high transition-colors">
                View Class Info
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default TeacherDashboard;
