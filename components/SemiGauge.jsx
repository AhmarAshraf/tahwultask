
export default function SemiGauge({
  percentage,
  color,
  label,
  size = 'md',
  valueClassName = '',
  labelClassName = '',
  trackColor = '#F3F6FA',
  strokeWidth
}) {
  const safePercent = Math.max(0, Math.min(100, percentage));

  const sizeMap = {
    md: { width: 240, height: 140, radius: 90, centerY: 110, stroke: 14 },
    lg: { width: 280, height: 170, radius: 105, centerY: 130, stroke: 16 }
  };

  const cfg = sizeMap[size] || sizeMap.md;
  const width = cfg.width;
  const height = cfg.height;
  const radius = cfg.radius;
  const centerX = width / 2;
  const centerY = cfg.centerY;
  const lineWidth = strokeWidth ?? cfg.stroke;
  const startX = centerX - radius;
  const endX = centerX + radius;
  const arcPath = `M ${startX} ${centerY} A ${radius} ${radius} 0 0 1 ${endX} ${centerY}`;

  const valueClass = `typo-gauge-value ${valueClassName}`.trim();
  const labelClass = `typo-gauge-label ${labelClassName}`.trim();

  return (
    <div className="relative mx-auto" style={{ width, height }}>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
        <path
          d={arcPath}
          stroke={trackColor}
          strokeWidth={lineWidth}
          fill="none"
          strokeLinecap="round"
        />
        <path
          d={arcPath}
          stroke={color}
          strokeWidth={lineWidth}
          fill="none"
          strokeLinecap="round"
          pathLength="100"
          strokeDasharray="100"
          strokeDashoffset={100 - safePercent}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={valueClass}>{safePercent}%</span>
        <span className={`${labelClass} absolute bottom-4 left-0 right-0 text-center`}>
          {label}
        </span>
      </div>
    </div>
  );
}
