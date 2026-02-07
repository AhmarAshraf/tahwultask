export default function Skeleton({ className = "" }) {
  return (
    <div className={`animate-shimmer rounded-md bg-gray-100 ${className}`.trim()} />
  );
}
