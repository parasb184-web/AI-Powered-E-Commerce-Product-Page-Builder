import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/50 via-white to-slate-50 py-20 lg:py-28 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-1/4 -z-10 h-72 w-72 rounded-full bg-emerald-100/40 blur-3xl dark:bg-emerald-950/20" />
      <div className="absolute top-1/3 right-1/4 -z-10 h-96 w-96 rounded-full bg-teal-100/30 blur-3xl dark:bg-teal-950/10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          {/* Hero Left Column (Content) */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <span className="inline-flex items-center space-x-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-600/10 dark:bg-emerald-900/30 dark:text-emerald-300 dark:ring-emerald-500/20">
              <span>🚀 Powered by Gemini AI</span>
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-white leading-tight">
              Create Professional{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                Food Listings
              </span>{" "}
              in Seconds
            </h1>
            <p className="mx-auto lg:mx-0 max-w-md text-base text-slate-500 sm:text-lg dark:text-slate-400">
              Transform ingredients, weights, and features into high-converting descriptions, bullet points, and titles optimized for Amazon, D2C, and Instagram.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/login"
                className="flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-500 hover:shadow-emerald-600/30 transition-all duration-200"
              >
                Create Listing Free
              </Link>
              <Link
                href="/about"
                className="flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-base font-semibold text-slate-700 hover:bg-slate-50 transition-all duration-200 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-850"
              >
                Learn More
              </Link>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-6 grid grid-cols-3 gap-4 max-w-sm mx-auto lg:mx-0">
              <div>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">10x</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider">Faster Listing</p>
              </div>
              <div className="border-l border-slate-200 dark:border-slate-800 pl-4">
                <p className="text-2xl font-bold text-slate-900 dark:text-white">35%</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider">Sales Boost</p>
              </div>
              <div className="border-l border-slate-200 dark:border-slate-800 pl-4">
                <p className="text-2xl font-bold text-slate-900 dark:text-white">5k+</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider">Food Brands</p>
              </div>
            </div>
          </div>

          {/* Hero Right Column (Mockup UI) */}
          <div className="lg:col-span-6 w-full max-w-lg mx-auto lg:max-w-none">
            <div className="relative rounded-2xl border border-slate-100 bg-white p-4 shadow-2xl shadow-slate-200/50 dark:border-slate-850 dark:bg-slate-900 dark:shadow-none">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4 dark:border-slate-800">
                <div className="flex space-x-1.5">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <div className="rounded bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                  Preview Mode: D2C Store
                </div>
              </div>

              {/* Listing Form Mock */}
              <div className="space-y-3">
                <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-850">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Input Details</span>
                    <span className="text-[10px] text-emerald-600 font-semibold dark:text-emerald-400">✨ Gemini Refined</span>
                  </div>
                  <div className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                    Organic Wildflower Jam, Blueberries, Honey-Sweetened, 250g jar
                  </div>
                </div>

                {/* AI Output Generation Mock */}
                <div className="border border-emerald-100 rounded-lg p-3 bg-emerald-50/20 dark:border-emerald-900/30 dark:bg-emerald-950/10">
                  <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider block mb-1">
                    Generated Listing
                  </span>
                  {/* Title */}
                  <div className="text-sm font-bold text-slate-950 dark:text-white mb-2 leading-tight">
                    Pure Honey-Sweetened Wild Blueberry Jam (250g) | All-Natural Wildflower Recipe
                  </div>
                  {/* Bullet points */}
                  <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400 list-disc list-inside mb-3">
                    <li>100% Wild blueberries, handpicked for peak freshness</li>
                    <li>Naturally sweetened with local organic wildflower honey</li>
                    <li>No refined sugars, preservatives, or artificial additives</li>
                  </ul>
                  {/* Description */}
                  <div className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed italic border-t border-emerald-100/30 pt-2 dark:border-emerald-900/20">
                    &ldquo;Spread the pure goodness of our Honey-Sweetened Wild Blueberry Jam. Slowly simmered in small batches, this jam captures the bold tang of wild fruit sweetened strictly with raw honey...&rdquo;
                  </div>
                </div>

                {/* Preview Toggles Mock */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <div className="rounded border border-emerald-500 bg-emerald-50 text-[10px] font-semibold text-emerald-700 text-center py-1.5 dark:bg-emerald-950 dark:text-emerald-400">
                    D2C Web
                  </div>
                  <div className="rounded border border-slate-100 text-[10px] text-slate-400 text-center py-1.5 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-850">
                    Amazon
                  </div>
                  <div className="rounded border border-slate-100 text-[10px] text-slate-400 text-center py-1.5 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-850">
                    Instagram
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
