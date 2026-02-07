export default function Card({ children, className = "" }) {
  return (
    <div className={`card-base card-shadow transition-shadow hover:card-shadow-hover ${className}`.trim()}>
      {children}
    </div>
  );
}
