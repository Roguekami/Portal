
import Layout from '../../components/Layout';
import { mockClasses } from '../../data/mockData';

export default function ClassesSubjects() {
  return (
    <Layout role="admin">
      <div className="page-enter max-w-[1440px] mx-auto px-4 md:px-10 py-8 flex flex-col h-[calc(100vh-64px)] overflow-y-auto">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary">Classes &amp; Subjects</h2>
            <p className="font-body-md text-on-surface-variant mt-1">Manage institutional class structures and subject assignments.</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-surface-container-lowest border border-primary text-primary px-4 py-2 rounded-lg font-label-md flex items-center gap-2 hover:bg-surface-container-low transition-colors shadow-sm">
              <span className="material-symbols-outlined text-[18px]">download</span>
              Export List
            </button>
          </div>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
          {mockClasses.map(cls => (
            <div key={cls.id} className="card-elevated rounded-xl p-6 flex flex-col gap-4 hover:paper-shadow transition-all group">
              <div className="flex justify-between items-start border-b border-outline-variant/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-headline-md">
                    {cls.name.split(' ')[0]}
                  </div>
                  <div>
                    <h3 className="font-headline-md text-primary">{cls.name}</h3>
                    <p className="font-label-md text-on-surface-variant flex items-center gap-1 mt-1">
                      <span className="material-symbols-outlined text-[16px]">person</span> {cls.formTeacher}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center py-2">
                <span className="font-label-md text-outline uppercase tracking-wider text-[12px]">Students Enrolled</span>
                <span className="font-data-numeric text-[18px] text-primary font-medium">{cls.studentsCount}</span>
              </div>

              <div>
                <span className="font-label-md text-outline uppercase tracking-wider text-[12px] block mb-2">Subjects Assigned ({cls.subjects.length})</span>
                <div className="flex flex-wrap gap-2">
                  {cls.subjects.map(sub => (
                    <span key={sub} className="px-2 py-1 bg-surface-container rounded-lg text-[12px] font-medium text-on-surface-variant border border-outline-variant/10">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-outline-variant/10 flex justify-end">
                <button className="text-secondary hover:text-primary font-label-md flex items-center gap-1 transition-colors">
                  View Details <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </Layout>
  );
}
