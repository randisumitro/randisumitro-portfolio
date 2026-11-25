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

export function toast(toastItem: Omit<Toast, "id">) {
  addToastFn?.(toastItem);
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
    success: <CheckCircle className="h-4 w-4 text-emerald-400" />,
    error: <AlertCircle className="h-4 w-4 text-destructive" />,
    info: <Info className="h-4 w-4 text-primary" />,
  };

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2" aria-live="polite">
      <AnimatePresence>
        {toasts.map((t) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            className="glass-card flex items-center gap-3 px-4 py-3 min-w-[280px] max-w-sm"
          >
            {icons[t.type]}
            <p className="flex-1 text-sm text-foreground">{t.message}</p>
            <button
              type="button"
              aria-label="Dismiss notification"
              onClick={() =>
                setToasts((prev) => prev.filter((item) => item.id !== t.id))
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
