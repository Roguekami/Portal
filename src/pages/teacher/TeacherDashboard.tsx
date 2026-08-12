import { mockTeacherSchedule, mockPendingResults } from '../../data/mockData';
import Layout from '../../components/Layout';

export default function TeacherDashboard() {
  return (
    <Layout role="teacher">
      <div className="page-enter">
        <div className="mb-8">
          <h2 className="font-display-lg text-display-lg text-primary mb-2">Good morning, Mr. Harrison</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Here is your schedule and pending tasks for today, October 24th.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-headline-md text-headline-md text-primary">Today's Classes</h3>
              <span className="font-label-md text-label-md bg-surface-container-high px-3 py-1 rounded-full text-on-surface-variant">4 Periods</span>
            </div>
            
            {mockTeacherSchedule.map((schedule, index) => {
              return (
                <div key={schedule.id} className={`card-elevated rounded-xl p-6 relative overflow-hidden ${!schedule.isCurrent && index === mockTeacherSchedule.length - 1 ? 'opacity-75' : ''}`}>
                  {schedule.isCurrent && <div className="absolute top-0 left-0 w-1 h-full bg-secondary"></div>}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-surface-container w-16 h-16 rounded-xl flex flex-col items-center justify-center border border-outline-variant/50">
                        <span className="font-data-numeric text-data-numeric text-primary">{schedule.time}</span>
                        <span className="font-data-numeric text-[12px] text-on-surface-variant">{schedule.period}</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-headline-md text-[18px] leading-snug text-primary">{schedule.subject}</h4>
                          {schedule.isCurrent && (
                            <span className="pill-active section-label text-[10px]">Current</span>
                          )}
                        </div>
                        <p className="font-label-md text-label-md text-on-surface-variant mb-2">{schedule.class} • {schedule.room}</p>
                        <div className="flex gap-2">
                          <span className="inline-flex items-center gap-1 font-label-md text-[12px] text-on-surface-variant bg-surface px-2 py-1 rounded border border-outline-variant/30">
                            <span className="material-symbols-outlined text-[14px]">group</span> {schedule.students} Students
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      {schedule.isCurrent ? (
                        <button className="bg-primary text-on-primary font-label-md text-label-md px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors shadow-sm flex items-center gap-2 w-full sm:w-auto justify-center">
                          <span className="material-symbols-outlined text-[18px]">fact_check</span>
                          Mark Attendance
                        </button>
                      ) : (
                        <button className="bg-transparent text-primary font-label-md text-label-md px-6 py-3 rounded-xl border border-primary hover:bg-primary/5 transition-colors w-full sm:w-auto flex items-center gap-2 justify-center">
                          <span className="material-symbols-outlined text-[18px]">schedule</span>
                          View Lesson Plan
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="card rounded-xl overflow-hidden">
              <div className="p-5 border-b border-[#E5E5E1] bg-surface/50 flex justify-between items-center">
                <h3 className="font-headline-md text-[18px] text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">warning</span>
                  Results Pending Entry
                </h3>
              </div>
              <div className="p-0">
                {mockPendingResults.map((result) => (
                  <div key={result.id} className="p-5 border-b border-[#E5E5E1] hover:bg-surface transition-colors group cursor-pointer last:border-b-0">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-label-md text-[16px] text-primary font-bold">{result.title}</h4>
                      <span className={`font-data-numeric text-[12px] font-medium ${result.status === 'Overdue' ? 'pill-error' : 'pill-neutral'}`}>
                        {result.dueText}
                      </span>
                    </div>
                    <p className="font-label-md text-[14px] text-on-surface-variant mb-3">{result.class} • {result.subject} • {result.students} Students</p>
                    <button className="text-secondary font-label-md text-[14px] font-bold group-hover:underline flex items-center gap-1">
                      Enter Grades <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="card rounded-xl p-5 text-center">
                <span className="material-symbols-outlined text-outline text-[32px] mb-2">check_circle</span>
                <div className="font-data-numeric text-[24px] text-primary font-bold">98%</div>
                <div className="font-label-md text-[12px] text-on-surface-variant mt-1">Avg Attendance</div>
              </div>
              <div className="card rounded-xl p-5 text-center">
                <span className="material-symbols-outlined text-outline text-[32px] mb-2">event_note</span>
                <div className="font-data-numeric text-[24px] text-primary font-bold">12</div>
                <div className="font-label-md text-[12px] text-on-surface-variant mt-1">Days to Exams</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
