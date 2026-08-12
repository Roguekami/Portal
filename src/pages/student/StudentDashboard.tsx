import Layout from '../../components/Layout';

export default function StudentDashboard() {
  return (
    <Layout role="student">
      <div className="page-enter space-y-6">
        <section className="grid grid-cols-2 gap-4">
          <div className="col-span-2 bg-surface-container-lowest rounded-xl p-5 border border-[#E5E5E1] flex items-center gap-4 relative overflow-hidden card">
            <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-surface-container-highest flex items-center justify-center bg-surface-container-low">
              <span className="material-symbols-outlined text-[32px] text-primary">school</span>
            </div>
            <div>
              <h1 className="font-headline-md text-headline-md text-primary tracking-tight">Tobi Adebayo</h1>
              <p className="font-label-md text-label-md text-on-surface-variant mt-1 flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">bookmark</span> JS3 Gold
              </p>
            </div>
            <div className="absolute right-0 top-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10"></div>
          </div>
          
          <div className="bg-surface-container-lowest rounded-xl p-4 border border-[#E5E5E1] flex flex-col justify-between card">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-secondary-container/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary text-[18px]">calendar_month</span>
              </div>
              <span className="font-label-md text-label-md text-on-surface-variant">Attendance</span>
            </div>
            <div>
              <div className="font-data-numeric text-data-numeric text-primary font-bold">18/20</div>
              <div className="text-[12px] text-on-surface-variant">Days Present</div>
            </div>
            <div className="w-full bg-surface-variant h-1.5 rounded-full mt-3 overflow-hidden">
              <div className="bg-[#107C41] h-full rounded-full" style={{ width: '90%' }}></div>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-4 border border-[#E5E5E1] flex flex-col justify-between card">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-[18px]">trending_up</span>
              </div>
              <span className="font-label-md text-label-md text-on-surface-variant">Avg Grade</span>
            </div>
            <div>
              <div className="font-data-numeric text-data-numeric text-primary font-bold">B+</div>
              <div className="text-[12px] text-on-surface-variant">Term 2</div>
            </div>
          </div>
        </section>

        <section className="glass-card rounded-xl p-6 relative overflow-hidden paper-shadow">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl"></div>
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-1 section-label">Outstanding Fees</h2>
                <div className="font-display-lg text-[32px] leading-tight font-bold text-primary font-data-numeric">₦45,000</div>
              </div>
              <div className="pill-error border border-[#ba1a1a]/20">
                <span className="text-[12px] font-bold">Due</span>
              </div>
            </div>
            <p className="text-[13px] text-on-surface-variant mb-5 font-data-table">Next payment deadline: Oct 15th, 2023</p>
            <button className="w-full bg-secondary text-on-secondary font-label-md text-label-md py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-on-secondary-container transition-colors duration-200 shadow-sm">
              <span className="material-symbols-outlined text-[20px]">credit_card</span>
              Pay Now
            </button>
          </div>
        </section>

        <section>
          <div className="flex justify-between items-end mb-4">
            <h3 className="font-headline-md text-[18px] text-primary">Latest Announcements</h3>
            <a className="text-secondary text-[13px] font-medium hover:underline" href="#">View All</a>
          </div>
          <div className="bg-surface-container-lowest rounded-xl border border-[#E5E5E1] divide-y divide-outline-variant/30 card">
            <div className="p-4 flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-primary text-[20px]">campaign</span>
              </div>
              <div>
                <h4 className="font-medium text-primary text-[15px] mb-1">End of Term Examination Schedule</h4>
                <p className="text-on-surface-variant text-[13px] line-clamp-2 font-body-md">The schedule for the upcoming Term 2 examinations has been published. Please review the timetable in the resources section.</p>
                <span className="text-[11px] text-outline mt-2 block font-data-table">2 hours ago</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
