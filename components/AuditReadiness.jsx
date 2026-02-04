import SemiGauge from './SemiGauge';

export default function AuditReadiness({ data }) {
  const { percentage, overdueSids, missingEvidence } = data;

  return (
    <div className="bg-white rounded-xl p-6 card-shadow">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Audit Readiness</h2>

      <div className="flex flex-col items-center">
        <div className="mt-2">
          <SemiGauge
            percentage={percentage}
            color="#16A34A"
            label="Readiness Level"
          />
        </div>

        <div className="w-full border-t border-gray-200 mt-5"></div>

        <div className="grid grid-cols-2 gap-6 w-full mt-5">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">{overdueSids}</p>
            <p className="typo-gauge-label mt-1">
              Overdue Stds
            </p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">{missingEvidence}</p>
            <p className="typo-gauge-label mt-1">
              Missing Evidence
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
