import Image from "next/image";

export default function Card({
  title,
  description,
  image,
  badge,
  actionText,
  actionHref = "#",
  onActionClick,
}) {
  const isSvg = typeof image === "string" && image.startsWith("<svg");

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-md hover:shadow-xl transition-all duration-300 dark:border-slate-800 dark:bg-slate-900">
      {/* Badge Overlay */}
      {badge && (
        <span className="absolute top-4 left-4 z-10 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 shadow-sm dark:bg-emerald-950 dark:text-emerald-300">
          {badge}
        </span>
      )}

      {/* Image Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 flex items-center justify-center">
        {image ? (
          typeof image === "string" ? (
            isSvg ? (
              <div
                className="h-16 w-16 text-emerald-600 transition-transform duration-300 group-hover:scale-110 dark:text-emerald-400"
                dangerouslySetInnerHTML={{ __html: image }}
              />
            ) : (
              /* If it's a URL path, render standard img since next/image needs config for external domains */
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            )
          ) : (
            /* If image is a react element / icon */
            <div className="text-emerald-600 transition-transform duration-300 group-hover:scale-110 dark:text-emerald-400">
              {image}
            </div>
          )
        ) : (
          /* Default organic placeholder graphic */
          <div className="flex flex-col items-center text-slate-300 transition-colors duration-300 group-hover:text-emerald-400/80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-12 w-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <span className="text-[10px] uppercase font-bold tracking-wider mt-2">No Image Preview</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6 space-y-3">
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors duration-200 dark:text-white dark:group-hover:text-emerald-400">
          {title}
        </h3>
        <p className="flex-1 text-sm text-slate-500 leading-relaxed dark:text-slate-400">
          {description}
        </p>

        {/* Action Button */}
        {actionText && (
          <div className="pt-2">
            {onActionClick ? (
              <button
                onClick={onActionClick}
                className="inline-flex items-center space-x-1 text-sm font-semibold text-emerald-600 hover:text-emerald-500 transition-colors duration-200 dark:text-emerald-400"
              >
                <span>{actionText}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            ) : (
              <a
                href={actionHref}
                className="inline-flex items-center space-x-1 text-sm font-semibold text-emerald-600 hover:text-emerald-500 transition-colors duration-200 dark:text-emerald-400"
              >
                <span>{actionText}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
