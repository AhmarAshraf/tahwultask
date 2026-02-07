import type { ReactNode } from "react";

type TableProps = {
  children: ReactNode;
  className?: string;
  withCard?: boolean;
};

export default function Table({ children, className = "", withCard = true }: TableProps) {
  const table = (
    <div className="overflow-x-auto">
      <table className="w-full border-separate border-spacing-0">{children}</table>
    </div>
  );

  if (!withCard) {
    return <div className={className}>{table}</div>;
  }

  return (
    <div className={`card-base card-shadow overflow-hidden ${className}`.trim()}>
      {table}
    </div>
  );
}
