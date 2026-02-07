import SemiGauge from './SemiGauge';

export default function ComplianceScore({ percentage }) {
  return (
    <div className="card-base p-6 card-shadow transition-shadow hover:card-shadow-hover">
      <h2 className="typo-section-20 mb-4">Overall Compliance Score</h2>
      <div className="mt-20 mb-4 flex justify-center">
        <SemiGauge
          percentage={percentage}
          color="var(--color-accent-red)"
          label="Basic Standards 2025"
          size="lg"
          trackColor="var(--color-gauge-track)"
        />
      </div>
    </div>
  );
}
