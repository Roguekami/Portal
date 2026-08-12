import Layout from '../../components/Layout';

export default function ExamCreation() {
  return (
    <Layout role="teacher">
      <div className="page-enter pb-32">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-1">Create Computer Based Test</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Configure exam parameters and build your question bank.</p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-xl border border-primary text-primary font-label-md text-label-md hover:bg-surface-container-low transition-colors">
              Save Draft
            </button>
          </div>
        </div>

        <section className="card rounded-xl p-6 shadow-paper mb-8">
          <h3 className="font-headline-md text-headline-md text-primary mb-6 pb-4 border-b border-surface-variant">Exam Configuration</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-label-md text-label-md text-on-surface-variant">Subject</label>
              <select className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl px-4 py-2.5 font-body-md text-body-md focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20">
                <option>Advanced Physics</option>
                <option>Chemistry 101</option>
                <option>Calculus II</option>
              </select>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="font-label-md text-label-md text-on-surface-variant">Class Group</label>
              <select className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl px-4 py-2.5 font-body-md text-body-md focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20">
                <option>Year 12 - Science Alpha</option>
                <option>Year 12 - Science Beta</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-label-md text-label-md text-on-surface-variant">Available Window</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm pointer-events-none">calendar_month</span>
                <input className="w-full pl-10 pr-4 py-2.5 bg-surface-container-lowest border border-outline-variant/30 rounded-xl font-body-md text-body-md focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 placeholder:text-on-surface-variant/50" placeholder="Oct 24, 09:00 - Oct 25, 17:00" type="text" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-label-md text-label-md text-on-surface-variant">Duration (Minutes)</label>
              <input className="w-full px-4 py-2.5 bg-surface-container-lowest border border-outline-variant/30 rounded-xl font-data-numeric text-data-numeric focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20" type="number" defaultValue="90" />
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-headline-md text-headline-md text-primary flex items-center gap-2">
              <span className="material-symbols-outlined">list_alt</span>
              Question Bank
              <span className="ml-2 px-2 py-0.5 bg-surface-variant rounded-full font-data-numeric text-sm text-on-surface-variant">2</span>
            </h3>
          </div>

          <div className="space-y-4">
            <div className="card rounded-xl p-6 shadow-paper transition-all hover:border-outline-variant/40 group">
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-4">
                  <span className="font-data-numeric text-data-numeric text-on-surface-variant bg-surface-container py-1 px-2.5 rounded-xl self-start">Q.01</span>
                  <p className="font-body-lg text-body-lg text-on-surface max-w-3xl">What is the primary function of a mitochondria in a eukaryotic cell, and how does it relate to cellular respiration?</p>
                </div>
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-1.5 text-on-surface-variant hover:text-secondary rounded-xl hover:bg-surface-container-low transition-colors" title="Edit">
                    <span className="material-symbols-outlined text-sm">edit</span>
                  </button>
                  <button className="p-1.5 text-on-surface-variant hover:text-error rounded-xl hover:bg-error-container/50 transition-colors" title="Delete">
                    <span className="material-symbols-outlined text-sm">delete</span>
                  </button>
                </div>
              </div>
              <div className="ml-14 grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center p-3 rounded-xl border border-outline-variant/20 hover:bg-surface-container-low cursor-pointer transition-colors">
                  <div className="w-5 h-5 rounded-full border-2 border-outline-variant flex items-center justify-center mr-3 shrink-0"></div>
                  <span className="font-body-md text-body-md text-on-surface">Protein synthesis from mRNA</span>
                </div>
                <div className="flex items-center p-3 rounded-xl border-2 border-secondary bg-secondary-container/10 cursor-pointer relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary"></div>
                  <div className="w-5 h-5 rounded-full border-2 border-secondary flex items-center justify-center mr-3 shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-secondary"></div>
                  </div>
                  <span className="font-body-md text-body-md text-on-surface font-medium">Generation of ATP through oxidative phosphorylation</span>
                </div>
                <div className="flex items-center p-3 rounded-xl border border-outline-variant/20 hover:bg-surface-container-low cursor-pointer transition-colors">
                  <div className="w-5 h-5 rounded-full border-2 border-outline-variant flex items-center justify-center mr-3 shrink-0"></div>
                  <span className="font-body-md text-body-md text-on-surface">Storage of genetic information</span>
                </div>
                <div className="flex items-center p-3 rounded-xl border border-outline-variant/20 hover:bg-surface-container-low cursor-pointer transition-colors">
                  <div className="w-5 h-5 rounded-full border-2 border-outline-variant flex items-center justify-center mr-3 shrink-0"></div>
                  <span className="font-body-md text-body-md text-on-surface">Breakdown of cellular waste</span>
                </div>
              </div>
            </div>

            <div className="card rounded-xl p-6 shadow-paper relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-secondary rounded-t-xl"></div>
              <h4 className="font-headline-md text-headline-md text-primary mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined">add_circle</span>
                Add New Question
              </h4>
              <div className="flex gap-4 mb-6">
                <span className="font-data-numeric text-data-numeric text-on-surface-variant bg-surface-container py-1 px-2.5 rounded-xl self-start mt-2">Q.03</span>
                <textarea className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-4 font-body-lg text-body-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 resize-none" placeholder="Enter question prompt here..." rows={3}></textarea>
              </div>
              <div className="ml-14 space-y-3">
                <p className="font-label-md text-label-md text-on-surface-variant mb-2">Options (Select the correct answer via radio button)</p>
                <div className="flex items-center gap-3">
                  <input type="radio" name="new_q_correct" className="w-5 h-5 text-secondary focus:ring-secondary border-outline-variant shrink-0 cursor-pointer" />
                  <input type="text" placeholder="Option A" className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl px-4 py-2 font-body-md text-body-md focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/20" />
                </div>
                <div className="flex items-center gap-3">
                  <input type="radio" name="new_q_correct" className="w-5 h-5 text-secondary focus:ring-secondary border-outline-variant shrink-0 cursor-pointer" />
                  <input type="text" placeholder="Option B" className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl px-4 py-2 font-body-md text-body-md focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/20" />
                </div>
                <div className="flex items-center gap-3">
                  <input type="radio" name="new_q_correct" className="w-5 h-5 text-secondary focus:ring-secondary border-outline-variant shrink-0 cursor-pointer" />
                  <input type="text" placeholder="Option C" className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl px-4 py-2 font-body-md text-body-md focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/20" />
                </div>
                <div className="flex items-center gap-3">
                  <input type="radio" name="new_q_correct" className="w-5 h-5 text-secondary focus:ring-secondary border-outline-variant shrink-0 cursor-pointer" />
                  <input type="text" placeholder="Option D" className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl px-4 py-2 font-body-md text-body-md focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/20" />
                </div>
              </div>
              <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-outline-variant/10">
                <button className="px-4 py-2 rounded-xl text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-low transition-colors">Cancel</button>
                <button className="px-6 py-2 rounded-xl bg-primary text-on-primary font-label-md text-label-md hover:bg-primary/90 transition-colors shadow-sm">Save Question</button>
              </div>
            </div>

            <div className="flex justify-center pt-4">
              <button className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-dashed border-outline-variant/40 text-on-surface-variant font-label-md text-label-md hover:border-secondary hover:text-secondary transition-colors w-full justify-center bg-surface-container-lowest/50 hover:bg-surface-container-lowest">
                <span className="material-symbols-outlined">add</span>
                Add Another Question
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 md:left-[280px] p-6 bg-surface/90 backdrop-blur-md border-t border-outline-variant/10 flex justify-end items-center z-20">
        <button className="px-8 py-3 rounded-xl bg-[#C89B3C] text-on-secondary font-headline-md text-headline-md font-semibold hover:bg-[#b08834] transition-colors shadow-lg flex items-center gap-2">
          <span className="material-symbols-outlined">publish</span>
          Publish Exam
        </button>
      </div>
    </Layout>
  );
}
