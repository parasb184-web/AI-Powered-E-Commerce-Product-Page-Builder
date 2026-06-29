"use client";

import { useEffect } from "react";

export default function Toast({ message, type = "error", onClose, duration = 5000 }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const isSuccess = type === "success";

  return (
    <div className="fixed bottom-5 right-5 z-50 transition-all duration-300">
      <div className={`flex items-center space-x-3 rounded-2xl px-5 py-4 shadow-xl border backdrop-blur-md ${
        isSuccess
          ? "bg-emerald-500/95 border-emerald-400 text-white dark:bg-emerald-600/95 dark:border-emerald-500"
          : "bg-rose-500/95 border-rose-400 text-white dark:bg-rose-600/95 dark:border-rose-500"
      }`}>
        {/* Icon */}
        <span className="flex-shrink-0">
          {isSuccess ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376C1.83 15.002 2.206 8.38 6 6c.07-.044.14-.087.21-.13L12 3m0 0l5.79 2.87c.07.043.14.086.21.13 3.794 2.38 4.17 9.002 1.493 10.126M12 3v18M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747" />
            </svg>
          )}
        </span>

        {/* Message */}
        <span className="text-sm font-semibold tracking-wide">{message}</span>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="rounded-lg p-1 hover:bg-white/10 transition-colors duration-150 focus:outline-none"
          aria-label="Close notification"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
