import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  fullWidth = false,
  type = "button",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all focus-ring disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.98]";
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark",
    secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
  };
  const sizes = {
    sm: "px-3 py-1.5 text-[12px] leading-4",
    md: "px-4 py-2 text-[14px] leading-4",
    lg: "px-6 py-2.5 text-[14px] leading-4",
  };

  return (
    <button
      className={`${base} ${variants[variant] || variants.primary} ${
        sizes[size] || sizes.md
      } ${fullWidth ? "w-full" : ""} ${className}`.trim()}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
