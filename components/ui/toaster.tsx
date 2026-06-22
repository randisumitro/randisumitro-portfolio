"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, AlertCircle, Info } from "lucide-react";

export interface Toast {
  id: string;
  type: "success" | "error" | "info";
  message: string;
}

let addToastFn: ((toast: Omit<Toast, "id">) => void) | null = null;

export function toast(toast: Omit<Toast, "id">) {
  addToastFn?.(toast);
}

export function Toaster() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    addToastFn = (newToast) => {
      const id = Math.random().toString(36).slice(2);
      setToasts((prev) => [...prev, { ...newToast, id }]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 4000);
    };
    return () => {
      addToastFn = null;
    };
  }, []);

  const icons = {
    success: <CheckCircle className="h-4 w-4 text-green-400" />,
    error: <AlertCircle className="h-4 w-4 text-red-400" />,
    info: <Info className="h-4 w-4 text-blue-400" />,
  };

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2" aria-live="polite">
      <AnimatePresence>
        {toasts.map((t) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.8 }}
            className="flex items-center gap-3 rounded-xl border border-border/50 bg-card shadow-card-hover px-4 py-3 backdrop-blur-xl min-w-[280px] max-w-sm"
          >
            {icons[t.type]}
            <p className="flex-1 text-sm text-foreground">{t.message}</p>
            <button
              onClick={() =>
                setToasts((prev) => prev.filter((toast) => toast.id !== t.id))
              }
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
