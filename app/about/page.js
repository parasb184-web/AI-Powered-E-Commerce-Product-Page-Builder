import Link from "next/link";

export default function About() {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-24 dark:from-slate-900 dark:to-slate-950">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            Empowering Small Food Creators
          </h1>
          <p className="mx-auto max-w-xl text-lg text-slate-500 dark:text-slate-400">
            ListBuilder AI was founded to bridge the gap between delicious local kitchen recipes and professional, high-performing online listings.
          </p>
        </div>

        {/* Mission Details */}
        <div className="prose prose-emerald mx-auto max-w-none space-y-8 dark:prose-invert">
          <div className="rounded-2xl bg-emerald-50/50 p-6 sm:p-8 dark:bg-emerald-950/20 border border-emerald-100/50 dark:border-emerald-900/30">
            <h2 className="text-xl font-bold text-emerald-800 dark:text-emerald-400 mb-3">Our Mission</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Writing product descriptions that appeal to buyers while complying with food standards can be a daunting, expensive task. 
              We believe small-scale food creators shouldn't have to hire expensive marketing agencies. 
              By leveraging advanced Gemini AI models, we help you generate SEO-optimized titles, compelling bullet points, 
              and narrative descriptions in a matter of seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Why Food Specific AI?</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Generic AI copywriters miss the nuances of organic messaging, nutritional specifications, weights, ingredients, 
                and allergen alerts. Our tool is optimized to place highlight tags on certifications (e.g. Non-GMO, Gluten-Free) 
                and translate your custom ingredients into selling points.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Built for Multichannel Listings</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Whether you list on Amazon, your own Shopify store, or market via Instagram captions, we provide a unified live editor 
                so you can see exactly what your content looks like before you publish.
              </p>
            </div>
          </div>

          {/* Call to action */}
          <div className="pt-12 text-center">
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-md hover:bg-emerald-500 transition-colors"
            >
              Start Generating Free
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
