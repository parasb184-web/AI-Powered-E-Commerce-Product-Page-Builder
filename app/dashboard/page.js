import Card from "@/components/Card";

export default function Dashboard() {
  const stats = [
    { name: "Active Listing Drafts", value: "8", change: "+2 this week" },
    { name: "AI Words Generated", value: "14,820", change: "Gemini Pro Enabled" },
    { name: "Avg Optimization Score", value: "94/100", change: "Top 5% readability" },
  ];

  const drafts = [
    {
      title: "Artisanal Habanero Hot Sauce",
      description: "Drafting bullet points for Amazon listing. Focus on locally-sourced peppers and tangy garlic aroma.",
      badge: "Amazon Draft",
      image: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        </svg>
      `,
    },
    {
      title: "Cold-Pressed Rosemary Honey",
      description: "D2C website product page completed. Contains health claims disclaimer and ingredients lists.",
      badge: "Shopify Ready",
      image: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.905 0-5.64-.5-8.157-1.418M19.843 7.582a9 9 0 00-15.686 0M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      `,
    },
    {
      title: "Chai Spice Vegan Cookies",
      description: "Instagram caption variations for holiday promotion. Features warm tone and interactive emojis.",
      badge: "Socials Draft",
      image: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
        </svg>
      `,
    },
  ];

  return (
    <div className="bg-slate-50 py-10 dark:bg-slate-950 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-slate-200 pb-5 dark:border-slate-800">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">Seller Dashboard</h1>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Manage and refine your generated listings across multiple storefronts.
            </p>
          </div>
          <button className="mt-4 md:mt-0 inline-flex items-center justify-center rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-500 transition-colors shadow-md shadow-emerald-600/10">
            ✨ Generate New Listing
          </button>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <p className="text-xs font-semibold text-slate-450 uppercase tracking-wider text-slate-400">
                {item.name}
              </p>
              <div className="mt-2 flex items-baseline justify-between">
                <span className="text-3xl font-extrabold text-slate-900 dark:text-white">{item.value}</span>
                <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded-full">
                  {item.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Listings Section */}
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Recent Listings</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {drafts.map((draft, idx) => (
              <Card
                key={idx}
                title={draft.title}
                description={draft.description}
                badge={draft.badge}
                image={draft.image}
                actionText="Edit Draft"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
