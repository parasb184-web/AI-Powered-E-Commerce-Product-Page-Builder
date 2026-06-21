import Hero from "@/components/Hero";
import Card from "@/components/Card";

export default function Home() {
  const features = [
    {
      title: "AI Title & Bullet Generator",
      description:
        "Craft SEO-friendly, high-converting titles and descriptive bullet highlights automatically customized for food ingredients, allergen tags, and packaging weights.",
      badge: "Gemini 1.5 Pro",
      image: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 21L14.907 14.917M18 10.5c0 3.75-2.25 6-6 6M12 4.5c4.5 0 6 3 6 6s-1.5 6-6 6m0-12C7.5 4.5 6 7.5 6 10.5s1.5 6 6 6" />
        </svg>
      `,
    },
    {
      title: "Multi-Platform Live Previews",
      description:
        "Instantly toggle and review how your generated listing looks on Amazon product pages, Shopify/D2C stores, or engagement-driven Instagram captions.",
      badge: "Responsive Mockups",
      image: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
      `,
      actionText: "Try Live Editor",
      actionHref: "/dashboard",
    },
    {
      title: "SEO & Readability Audits",
      description:
        "Optimize your organic listings with automated evaluations of key phrase density, ease-of-reading scores, and compliant allergen highlights.",
      badge: "SEO Insights",
      image: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
        </svg>
      `,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Header Section */}
      <Hero />

      {/* Feature Highlights Grid */}
      <section className="bg-white py-16 sm:py-24 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Powerful Features Made for Food Sellers
            </h2>
            <p className="mt-4 text-lg text-slate-500 dark:text-slate-400">
              Create compliant, engaging, and search-optimized e-commerce content using AI trained specifically for organic foods, spices, baking, and specialty food creators.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, idx) => (
              <Card
                key={idx}
                title={feature.title}
                description={feature.description}
                badge={feature.badge}
                image={feature.image}
                actionText={feature.actionText}
                actionHref={feature.actionHref}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner / Social Proof */}
      <section className="bg-emerald-600 py-16 text-white text-center">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold">Ready to transform your food product pages?</h2>
          <p className="max-w-md mx-auto text-emerald-100 text-sm sm:text-base">
            Join thousands of small-batch food creators who save hours writing descriptions and see higher search rankings.
          </p>
          <div className="pt-4">
            <a
              href="/login"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-emerald-700 hover:bg-emerald-50 transition-colors shadow-lg"
            >
              Get Started Free
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
