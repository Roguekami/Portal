
import Layout from '../../components/Layout';

const TermResults = () => {
  return (
    <Layout role="student">
      <div className="max-w-[1440px] mx-auto px-margin_mobile md:px-margin_desktop py-8">
        <h2 className="font-display-lg text-display-lg text-primary mb-6">Term Results</h2>
        <div className="bg-surface-container-lowest border border-[#E5E5E1] rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-headline-md text-primary">First Term (2023/2024)</h3>
            <button className="text-secondary font-label-md flex items-center gap-1 hover:underline">
              <span className="material-symbols-outlined">download</span> Download PDF
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low text-on-surface-variant">
                  <th className="py-3 px-6 font-label-md uppercase">Subject</th>
                  <th className="py-3 px-6 font-label-md uppercase text-center">CA (40%)</th>
                  <th className="py-3 px-6 font-label-md uppercase text-center">Exam (60%)</th>
                  <th className="py-3 px-6 font-label-md uppercase text-center">Total (100%)</th>
                  <th className="py-3 px-6 font-label-md uppercase text-center">Grade</th>
                </tr>
              </thead>
              <tbody className="font-data-table">
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">Mathematics</td>
                  <td className="py-4 px-6 text-center">32</td>
                  <td className="py-4 px-6 text-center">54</td>
                  <td className="py-4 px-6 text-center font-bold">86</td>
                  <td className="py-4 px-6 text-center text-primary font-bold">A</td>
                </tr>
                <tr className="border-b bg-[#F7F6F2]">
                  <td className="py-4 px-6 font-medium">English Language</td>
                  <td className="py-4 px-6 text-center">28</td>
                  <td className="py-4 px-6 text-center">45</td>
                  <td className="py-4 px-6 text-center font-bold">73</td>
                  <td className="py-4 px-6 text-center text-primary font-bold">B</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">Basic Science</td>
                  <td className="py-4 px-6 text-center">35</td>
                  <td className="py-4 px-6 text-center">50</td>
                  <td className="py-4 px-6 text-center font-bold">85</td>
                  <td className="py-4 px-6 text-center text-primary font-bold">A</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 flex justify-end gap-8 bg-surface-container-low p-4 rounded-lg">
            <div className="text-center">
              <p className="font-label-md text-on-surface-variant uppercase text-xs">Total Score</p>
              <p className="font-data-numeric text-xl font-bold text-primary">244 / 300</p>
            </div>
            <div className="text-center">
              <p className="font-label-md text-on-surface-variant uppercase text-xs">Average</p>
              <p className="font-data-numeric text-xl font-bold text-primary">81.33%</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermResults;
