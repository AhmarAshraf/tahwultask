import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`card-base card-shadow transition-shadow hover:card-shadow-hover ${className}`.trim()}>
      {children}
    </div>
  );
}
