import SemiGauge from './SemiGauge';
import Card from '../ui/Card';

export default function AuditReadiness({ data }) {
  const { percentage, overdueSids, missingEvidence } = data;

  return (
    <Card className="p-6 h-full flex flex-col">
      <h2 className="typo-section-18 mb-4">Audit Readiness</h2>

      <div className="flex flex-col items-center flex-1">
        <div className="mt-2">
          <SemiGauge
            percentage={percentage}
            color="var(--color-accent-green)"
            label="Readiness Level"
          />
        </div>

        <div className="w-full border-t border-[var(--color-border)] mt-5"></div>

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
    </Card>
  );
}
