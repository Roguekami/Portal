
import Layout from '../../components/Layout';
import { mockClasses } from '../../data/mockData';

const ClassesSubjects = () => {
  return (
    <Layout role="admin">
      <div className="max-w-[1440px] mx-auto px-margin_mobile md:px-margin_desktop py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-display-lg text-display-lg text-primary">Classes & Subjects</h2>
          <button className="bg-primary text-on-primary font-label-md text-label-md px-4 py-2 rounded-lg flex items-center gap-2">
            <span className="material-symbols-outlined">add</span>
            Add Class
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockClasses.map((cls) => (
            <div key={cls.id} className="bg-surface-container-lowest border border-[#E5E5E1] rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-headline-md text-headline-md text-primary">{cls.name}</h3>
                <span className="material-symbols-outlined text-outline">class</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between font-label-md text-label-md">
                  <span className="text-on-surface-variant">Form Teacher:</span>
                  <span className="text-primary font-medium">{cls.formTeacher}</span>
                </div>
                <div className="flex justify-between font-label-md text-label-md">
                  <span className="text-on-surface-variant">Students:</span>
                  <span className="text-primary font-medium">{cls.studentsCount}</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-outline-variant/30 flex justify-end gap-2">
                <button className="text-secondary hover:text-primary p-2"><span className="material-symbols-outlined">edit</span></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ClassesSubjects;
