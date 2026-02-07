import { Inbox } from "lucide-react";
import type { ComponentType } from "react";
import Button from "./Button";

type EmptyStateProps = {
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  Icon?: ComponentType<{ className?: string }>;
  className?: string;
};

export default function EmptyState({
  title,
  description,
  actionLabel,
  onAction,
  Icon = Inbox,
  className = "",
}: EmptyStateProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center p-6 ${className}`.trim()}
    >
      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
        <Icon className="w-6 h-6 text-gray-500" />
      </div>
      <p className="text-[14px] font-semibold text-gray-900">{title}</p>
      {description && (
        <p className="text-[12px] text-gray-500 mt-1">{description}</p>
      )}
      {actionLabel && onAction && (
        <Button
          variant="secondary"
          size="sm"
          className="mt-4"
          onClick={onAction}
        >
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
