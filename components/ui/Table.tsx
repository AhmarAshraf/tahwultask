import type { ReactNode } from "react";

type TableProps = {
  children: ReactNode;
  className?: string;
};

export default function Table({ children, className = "" }: TableProps) {
  return (
    <div className={`card-base card-shadow overflow-hidden ${className}`.trim()}>
      <div className="overflow-x-auto">
        <table className="w-full">{children}</table>
      </div>
    </div>
  );
}
