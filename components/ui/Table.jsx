export default function Table({ children, className = "" }) {
  return (
    <div className={`card-base card-shadow overflow-hidden ${className}`.trim()}>
      <div className="overflow-x-auto">
        <table className="w-full">{children}</table>
      </div>
    </div>
  );
}
