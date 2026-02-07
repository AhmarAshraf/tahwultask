import type { ReactNode } from "react";

type ChipTone = "neutral" | "teal" | "blue";

type ChipProps = {
  children: ReactNode;
  tone?: ChipTone;
  className?: string;
};

export default function Chip({ children, tone = "neutral", className = "" }: ChipProps) {
  const tones = {
    neutral: "bg-gray-100 text-gray-700 border-gray-200",
    teal: "bg-teal-50 text-teal-700 border-teal-100",
    blue: "bg-blue-50 text-blue-700 border-blue-100",
  };
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full border text-[12px] font-medium leading-4 ${
        tones[tone] || tones.neutral
      } ${className}`.trim()}
    >
      {children}
    </span>
  );
}
