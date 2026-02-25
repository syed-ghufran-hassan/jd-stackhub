export function StakingStats() {
  return (
    <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Your Stake</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-green-50 rounded-lg p-4 flex flex-col">
          <span className="text-sm text-green-600">Staked Amount</span>
          <span className="text-2xl font-bold text-green-900 mt-1">0 STX</span>
        </div>
        <div className="bg-blue-50 rounded-lg p-4 flex flex-col">
          <span className="text-sm text-blue-600">Lock Status</span>
          <span className="text-2xl font-bold text-blue-900 mt-1">-</span>
        </div>
      </div>
    </div>
  );
}

export function FeeStructure() {
  return (
    <div className="mt-8 bg-green-50 rounded-2xl p-6">
      <h3 className="text-lg font-bold text-green-900 mb-4">Fee Structure</h3>
      <div className="grid md:grid-cols-2 gap-4 text-green-800">
        <div className="bg-white rounded-lg p-4 flex flex-col">
          <span className="font-medium">Normal Withdrawal</span>
          <span className="text-2xl font-bold mt-1">0.5%</span>
          <span className="text-sm mt-1">After ~1 day lock period</span>
        </div>
        <div className="bg-white rounded-lg p-4 flex flex-col">
          <span className="font-medium">Early Withdrawal</span>
          <span className="text-2xl font-bold mt-1">2.5%</span>
          <span className="text-sm mt-1">Before lock period ends</span>
        </div>
      </div>
    </div>
  );
}
