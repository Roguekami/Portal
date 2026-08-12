import Layout from '../../components/Layout';
import { mockTermResults } from '../../data/mockData';

export default function TermResults() {
  const totalScore = mockTermResults.reduce((sum, r) => sum + r.total, 0);
  const avg = (totalScore / mockTermResults.length).toFixed(1);

  return (
    <Layout role="student">
      <div className="page-enter">
        <div className="max-w-[1440px] mx-auto mb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">Term Results</h2>
            <p className="text-on-surface-variant mt-1 font-body-md">Terminal Assessment Report</p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-lg border border-primary text-primary font-label-md text-label-md hover:bg-primary/5 transition-colors flex items-center gap-2 shadow-sm">
              <span className="material-symbols-outlined text-[18px]">download</span> Download PDF
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto border border-outline-variant/10 rounded-xl card shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-primary text-on-primary">
                <th className="th-cell py-4 px-6">Subject</th>
                <th className="th-cell py-4 px-6 text-center">Cont. Assessment (40)</th>
                <th className="th-cell py-4 px-6 text-center">Examination (60)</th>
                <th className="th-cell py-4 px-6 text-center">Total (100)</th>
                <th className="th-cell py-4 px-6 text-center">Grade</th>
                <th className="th-cell py-4 px-6">Remark</th>
              </tr>
            </thead>
            <tbody>
              {mockTermResults.map((result, i) => (
                <tr key={i} className={`${i % 2 === 0 ? 'zebra-even' : 'zebra-odd'} hover:bg-surface-container-low/50 transition-colors border-b border-outline-variant/10`}>
                  <td className="py-4 px-6 font-label-md text-label-md text-primary">{result.subject}</td>
                  <td className="py-4 px-6 font-data-numeric text-data-numeric text-center text-on-surface-variant">{result.ca}</td>
                  <td className="py-4 px-6 font-data-numeric text-data-numeric text-center text-on-surface-variant">{result.exam}</td>
                  <td className="py-4 px-6 font-data-numeric text-data-numeric text-center text-primary font-bold">{result.total}</td>
                  <td className="py-4 px-6 text-center">
                    <span className={`inline-flex items-center justify-center px-3 py-1 rounded-full font-data-numeric text-sm font-bold border ${result.grade === 'A' ? 'bg-[#e5f5e0] text-[#2e7d32] border-[#a5d6a7]' : result.grade === 'B' ? 'bg-[#e3f2fd] text-[#1565c0] border-[#90caf9]' : 'bg-[#fff3e0] text-[#e65100] border-[#ffcc80]'}`}>
                      {result.grade}
                    </span>
                  </td>
                  <td className="py-4 px-6 font-body-md text-on-surface-variant">{result.remark}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-primary text-on-primary rounded-xl p-6 shadow-sm card-elevated">
             <p className="font-data-table text-[12px] uppercase tracking-wider text-primary-fixed mb-2">Total Score</p>
             <span className="font-data-numeric text-[48px] leading-none font-bold">{totalScore}</span>
          </div>
          <div className="bg-primary text-on-primary rounded-xl p-6 shadow-sm card-elevated">
             <p className="font-data-table text-[12px] uppercase tracking-wider text-primary-fixed mb-2">Cumulative Average</p>
             <div className="flex items-end gap-2">
               <span className="font-data-numeric text-[48px] leading-none font-bold">{avg}</span>
               <span className="font-data-numeric text-[20px] text-primary-fixed pb-1">%</span>
             </div>
          </div>
          <div className="bg-surface-bright border border-outline-variant/20 rounded-xl p-6 shadow-sm flex flex-col justify-center card">
             <span className="font-label-md text-label-md text-on-surface-variant uppercase text-xs tracking-wide">Class Rank</span>
             <span className="font-data-numeric text-data-numeric font-bold text-primary text-[32px] mt-2">12 / 145</span>
          </div>
        </div>
      </div>
    </Layout>
  );
}
