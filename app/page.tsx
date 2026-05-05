export default function Home() {
  const faqs = [
    {
      q: "Which sleep trackers are supported?",
      a: "We integrate with Fitbit, Oura Ring, and Apple Health exports. More integrations are on the roadmap."
    },
    {
      q: "How does Git integration work?",
      a: "Connect any public or private GitHub/GitLab repo. We analyze commit frequency, PR merge rates, and code complexity trends alongside your sleep data."
    },
    {
      q: "Is my health data kept private?",
      a: "Yes. Sleep data is encrypted at rest, never sold, and you can delete your account and all data at any time."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-widest uppercase">
          For Developers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Sleep better.{" "}
          <span className="text-[#58a6ff]">Ship better code.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          SleepDev connects your sleep tracker to your Git repos and reveals exactly how your rest quality impacts commit frequency, bug rates, and code complexity — with daily personalized insights.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Tracking — $8/mo
        </a>
        <p className="mt-4 text-xs text-[#6e7681]">Cancel anytime. No credit card required for free trial.</p>

        {/* Stats row */}
        <div className="mt-14 grid grid-cols-3 gap-6 border border-[#30363d] rounded-xl bg-[#161b22] p-6">
          {[
            { value: "2,400+", label: "Developers tracking" },
            { value: "18%", label: "Avg. fewer bugs on 8h sleep" },
            { value: "3×", label: "More commits after quality rest" }
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold text-[#58a6ff]">{s.value}</div>
              <div className="text-xs text-[#8b949e] mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="border border-[#30363d] rounded-2xl bg-[#161b22] p-8 text-center">
          <div className="text-sm font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$8</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Fitbit, Oura & Apple Health sync",
              "Unlimited Git repo connections",
              "Daily correlation insights",
              "Bug rate & complexity trends",
              "Weekly email digest",
              "CSV data export"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((item) => (
            <div key={item.q} className="border border-[#30363d] rounded-xl bg-[#161b22] p-6">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e]">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#6e7681] pb-8">
        © {new Date().getFullYear()} SleepDev. All rights reserved.
      </footer>
    </main>
  );
}
