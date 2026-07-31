
import Layout from '../../components/Layout';

const ExamCreation = () => {
  return (
    <Layout role="teacher">
      <div className="max-w-[1440px] mx-auto px-margin_mobile md:px-margin_desktop py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-display-lg text-display-lg text-primary">Create New Exam</h2>
          <button className="bg-primary text-on-primary font-label-md text-label-md px-4 py-2 rounded-lg flex items-center gap-2">
            <span className="material-symbols-outlined">save</span>
            Save Draft
          </button>
        </div>
        
        <div className="bg-surface-container-lowest border border-[#E5E5E1] rounded-lg p-6 mb-6">
          <h3 className="font-headline-md text-headline-md text-primary mb-4">Exam Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-label-md mb-2">Exam Title</label>
              <input type="text" className="w-full border border-outline-variant/50 rounded-lg p-2" placeholder="e.g. Mid-Term Mathematics" />
            </div>
            <div>
              <label className="block font-label-md mb-2">Target Class</label>
              <select className="w-full border border-outline-variant/50 rounded-lg p-2">
                <option>JSS 1</option>
                <option>JSS 2</option>
                <option>SSS 1</option>
              </select>
            </div>
            <div>
              <label className="block font-label-md mb-2">Duration (minutes)</label>
              <input type="number" className="w-full border border-outline-variant/50 rounded-lg p-2" placeholder="45" />
            </div>
            <div>
              <label className="block font-label-md mb-2">Total Questions</label>
              <input type="number" className="w-full border border-outline-variant/50 rounded-lg p-2" placeholder="20" />
            </div>
          </div>
        </div>

        <div className="bg-surface-container-lowest border border-[#E5E5E1] rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-headline-md text-headline-md text-primary">Questions</h3>
            <button className="text-secondary font-label-md flex items-center gap-1"><span className="material-symbols-outlined">add_circle</span> Add Question</button>
          </div>
          
          <div className="border border-outline-variant/30 rounded-lg p-4 mb-4">
            <div className="flex justify-between mb-2">
              <span className="font-label-md">Question 1</span>
              <button className="text-error"><span className="material-symbols-outlined">delete</span></button>
            </div>
            <textarea className="w-full border border-outline-variant/50 rounded-lg p-2 mb-4" rows={3} placeholder="Enter question text..."></textarea>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <input type="radio" name="q1_correct" />
                <input type="text" className="flex-1 border border-outline-variant/50 rounded p-1" placeholder="Option A" />
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" name="q1_correct" />
                <input type="text" className="flex-1 border border-outline-variant/50 rounded p-1" placeholder="Option B" />
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" name="q1_correct" />
                <input type="text" className="flex-1 border border-outline-variant/50 rounded p-1" placeholder="Option C" />
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" name="q1_correct" />
                <input type="text" className="flex-1 border border-outline-variant/50 rounded p-1" placeholder="Option D" />
              </div>
            </div>
          </div>
          <button className="w-full bg-surface-container border border-outline-variant/50 py-3 rounded-lg font-label-md hover:bg-surface-container-high transition-colors">
            Publish Exam
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ExamCreation;
