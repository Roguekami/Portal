
import Layout from '../../components/Layout';
import { mockFeeBalances } from '../../data/mockData';

const FeesPayment = () => {
  const myFees = mockFeeBalances['1']; // Using student 1 for demo

  return (
    <Layout role="student">
      <div className="max-w-[1440px] mx-auto px-margin_mobile md:px-margin_desktop py-8">
        <h2 className="font-display-lg text-display-lg text-primary mb-6">Fees & Payment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-surface-container-lowest border border-[#E5E5E1] rounded-lg p-6">
            <h3 className="font-headline-md text-primary mb-4">Fee Breakdown (Term 1)</h3>
            <div className="space-y-4 font-body-md">
              <div className="flex justify-between border-b pb-2">
                <span>Tuition</span>
                <span>₦100,000</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Library</span>
                <span>₦20,000</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Sports</span>
                <span>₦30,000</span>
              </div>
              <div className="flex justify-between font-bold pt-2 text-primary">
                <span>Total Assessment</span>
                <span>₦{myFees.total.toLocaleString()}</span>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-lowest border border-[#E5E5E1] rounded-lg p-6 flex flex-col">
            <h3 className="font-headline-md text-primary mb-4">Payment Status</h3>
            <div className="flex-1 flex flex-col justify-center gap-4">
              <div className="flex justify-between font-body-md">
                <span>Total Paid:</span>
                <span className="text-secondary font-bold">₦{myFees.paid.toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-body-md">
                <span>Outstanding Balance:</span>
                <span className="text-error font-bold text-xl">₦{myFees.balance.toLocaleString()}</span>
              </div>
              <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden mt-2">
                <div className="bg-secondary h-full rounded-full" style={{ width: `${(myFees.paid / myFees.total) * 100}%` }}></div>
              </div>
            </div>
            <button className="mt-6 w-full bg-primary text-on-primary font-label-md py-3 rounded-lg hover:opacity-90 transition-opacity">
              Make Payment Online
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FeesPayment;
