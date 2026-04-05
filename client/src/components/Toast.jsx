import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, X } from "lucide-react";

export default function Toast({ toast, onClose }) {
  const isSuccess = toast?.type === "success";

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 flex items-start gap-3 bg-surface border border-border rounded-2xl px-5 py-4 shadow-2xl max-w-sm"
        >
          {isSuccess ? (
            <CheckCircle size={20} className="text-accent shrink-0 mt-0.5" />
          ) : (
            <XCircle size={20} className="text-red-400 shrink-0 mt-0.5" />
          )}
          <div className="flex-1">
            <p className="text-light text-sm font-semibold">
              {isSuccess ? "Message Sent!" : "Something went wrong"}
            </p>
            <p className="text-muted text-xs mt-0.5">{toast.message}</p>
          </div>
          <button
            onClick={onClose}
            className="text-muted hover:text-light transition-colors shrink-0"
            aria-label="Close notification"
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
