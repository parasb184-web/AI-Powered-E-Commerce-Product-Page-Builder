export default function Loader({ className = "" }) {
  return (
    <div className={`flex items-center justify-center p-6 ${className}`}>
      <div className="relative">
        {/* Outer Ring */}
        <div className="h-12 w-12 rounded-full border-4 border-emerald-100 dark:border-emerald-950"></div>
        {/* Inner Spinning Ring */}
        <div className="absolute top-0 left-0 h-12 w-12 animate-spin rounded-full border-4 border-transparent border-t-emerald-600 dark:border-t-emerald-450"></div>
      </div>
    </div>
  );
}
