import SemiGauge from './SemiGauge';

export default function ComplianceScore({ percentage }) {
  return (
    <div className="bg-white rounded-xl p-6 card-shadow">
      <h2 className="typo-section-20 mb-4">Overall Compliance Score</h2>
      <div className="mt-9 flex justify-center">
        <SemiGauge
          percentage={percentage}
          color="#DC2626"
          label="Basic Standards 2025"
          size="lg"
          trackColor="#F1F4F8"
        />
      </div>
    </div>
  );
}
