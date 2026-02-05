export default function Card({ children, className = "" }) {
  return (
    <div className={`bg-white rounded-xl card-shadow ${className}`.trim()}>
      {children}
    </div>
  );
}
