"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const pushToast = useCallback((toast) => {
    const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    const duration = toast.duration ?? 3000;
    setToasts((prev) => [...prev, { ...toast, id }]);
    if (duration > 0) {
      setTimeout(() => removeToast(id), duration);
    }
  }, [removeToast]);

  const value = useMemo(() => ({ pushToast }), [pushToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div
        className="fixed top-20 right-6 z-50 flex flex-col gap-2"
        role="status"
        aria-live="polite"
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="card-base card-shadow px-4 py-3 min-w-[240px] flex items-start gap-3"
          >
            <div className="flex-1">
              <p className="text-[14px] font-semibold text-gray-900">
                {toast.title}
              </p>
              {toast.description && (
                <p className="text-[12px] text-gray-500 mt-1">
                  {toast.description}
                </p>
              )}
            </div>
            <button
              className="text-gray-400 hover:text-gray-600 focus-ring rounded"
              onClick={() => removeToast(toast.id)}
              aria-label="Dismiss notification"
              type="button"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return ctx;
}
