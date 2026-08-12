import Layout from '../../components/Layout';
import { mockFeeBalance } from '../../data/mockData';

export default function FeesPayment() {
  return (
    <Layout role="student">
      <div className="page-enter">
        <div className="mb-8">
          <h2 className="font-display-lg text-display-lg text-primary mb-2 hidden md:block">Fees & Payments</h2>
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-2 md:hidden">Fees & Payments</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="col-span-1 md:col-span-12 lg:col-span-8">
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden card-elevated">
               <table className="w-full text-left border-collapse">
                 <thead>
                   <tr className="bg-primary text-on-primary">
                     <th className="th-cell p-4">Item</th>
                     <th className="th-cell p-4 text-right">Amount</th>
                   </tr>
                 </thead>
                 <tbody>
                   {mockFeeBalance.breakdown.map((item, i) => (
                     <tr key={i} className={`${i % 2 === 0 ? 'zebra-even' : 'zebra-odd'} border-b border-outline-variant/30`}>
                       <td className="p-4 font-body-md text-body-md">{item.item}</td>
                       <td className="p-4 text-right font-data-numeric text-data-numeric">₦ {item.amount.toLocaleString()}</td>
                     </tr>
                   ))}
                   <tr className="bg-surface-container-low font-bold">
                     <td className="p-4 font-body-md text-body-md">Total Termly Fee</td>
                     <td className="p-4 text-right font-data-numeric text-data-numeric">₦ {mockFeeBalance.total.toLocaleString()}</td>
                   </tr>
                 </tbody>
               </table>
            </div>
          </div>

          <div className="col-span-1 md:col-span-12 lg:col-span-4 flex flex-col gap-6">
            <div className="glass-card rounded-xl p-8 relative overflow-hidden paper-shadow border border-[#E5E5E1]/50">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl"></div>
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-2">Current Term Balance</p>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="font-data-numeric text-on-surface-variant text-xl">₦</span>
                    <span className="font-data-numeric text-display-lg text-error">{mockFeeBalance.balance.toLocaleString()}</span>
                  </div>
                  <p className="font-data-numeric text-data-numeric text-secondary mb-4">Paid: ₦ {mockFeeBalance.paid.toLocaleString()}</p>
                </div>
                
                <div className="w-full bg-surface-variant h-2 rounded-full mb-6 overflow-hidden">
                   <div className="bg-secondary h-full rounded-full" style={{ width: `${(mockFeeBalance.paid / mockFeeBalance.total) * 100}%` }}></div>
                </div>

                <button className="bg-secondary text-on-secondary font-label-md text-label-md px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-secondary/90 transition-colors shadow-[0_0_15px_rgba(252,202,102,0.4)] w-full">
                  <span className="material-symbols-outlined material-symbols-filled text-[20px]">lock</span>
                  Make Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
