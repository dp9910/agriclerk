"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import OnboardingMockup from "@/components/OnboardingMockup";
import DashboardMockup from "@/components/DashboardMockup";

function useScrollFade() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const targets = el.querySelectorAll(".fade-in");
    targets.forEach((t) => observer.observe(t));

    return () => observer.disconnect();
  }, []);

  return ref;
}

function CountUpStat({
  end,
  prefix = "",
  suffix = "",
  label,
  source,
}: {
  end: number;
  prefix?: string;
  suffix?: string;
  label: string;
  source?: string;
}) {
  const numRef = useRef<HTMLSpanElement>(null);
  const counted = useRef(false);

  const animate = useCallback(() => {
    if (counted.current || !numRef.current) return;
    counted.current = true;

    const duration = 1200;
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * end);

      if (numRef.current) {
        numRef.current.textContent = `${prefix}${current.toLocaleString()}${suffix}`;
      }

      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [end, prefix, suffix]);

  useEffect(() => {
    const el = numRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) animate();
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animate]);

  return (
    <div className="bg-white border-l-4 border-l-[#1B4332] rounded-md p-7 shadow-sm">
      <span
        ref={numRef}
        className="block font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-extrabold text-[#1B4332] mb-2"
      >
        {prefix}0{suffix}
      </span>
      <span className="text-sm text-[#374151] leading-relaxed block">
        {label}
      </span>
      {source && (
        <span className="text-[10px] text-[#9CA3AF] mt-2 block">{source}</span>
      )}
    </div>
  );
}

export default function Home() {
  const storyRef = useScrollFade();
  const introRef = useScrollFade();
  const numbersRef = useScrollFade();
  const platformRef = useScrollFade();
  const whyNowRef = useScrollFade();
  const whereRef = useScrollFade();
  const ctaRef = useScrollFade();

  return (
    <main>
      {/* ===== Section 1 — Hero ===== */}
      <section className="min-h-screen flex items-center py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Left — Text */}
          <div className="flex-1 max-w-xl">
            <div className="hero-line">
              <Image
                src="/logo.png"
                alt="AgriClerk logo"
                width={56}
                height={56}
                className="rounded-lg mb-8"
              />
            </div>
            <p className="hero-line text-xs font-semibold uppercase tracking-[3px] text-[#1B4332] mb-4">
              Agricultural Compliance
            </p>
            <h1 className="hero-line font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold text-[#111111] leading-tight mb-6">
              Turn animal waste into certified organic fertilizer.
              <br />
              We handle the compliance.
            </h1>
            <p className="hero-line text-lg text-[#374151] mb-8 max-w-md">
              AgriClerk navigates the registrations, lab reviews, and filings
              so your farm can convert animal waste into organic fertilizer and
              pesticide — at a fraction of the cost.
            </p>
            <div className="hero-line">
              <a
                href="mailto:contact@agriclerk.com?subject=Early%20Access%20Request"
                className="inline-block bg-[#1B4332] text-white font-semibold text-sm px-8 py-4 rounded-full hover:bg-[#143728] transition-colors"
              >
                Request Early Access
              </a>
              <p className="text-xs text-[#9CA3AF] mt-3">contact@agriclerk.com</p>
            </div>
          </div>

          {/* Right — Mockup */}
          <div className="flex-1 flex justify-center md:justify-end">
            <OnboardingMockup />
          </div>
        </div>
      </section>

      {/* ===== Section 2 — The Story ===== */}
      <section ref={storyRef} className="py-24 md:py-36 px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto flex flex-col gap-16 md:gap-24">
          <p className="fade-in text-2xl md:text-4xl text-[#9CA3AF] font-light leading-snug">
            The world needs 50% more food by 2050.
          </p>

          <p className="fade-in text-xl md:text-2xl text-[#111111] leading-relaxed">
            More people means more demand for fertilizer and pesticide to support
            all that food production.
          </p>

          <div className="fade-in">
            <p className="text-xl md:text-2xl text-[#111111] leading-relaxed mb-2">
              But there is a natural alternative sitting behind every farm.
            </p>
            <p className="text-xl md:text-2xl text-[#111111] leading-relaxed mb-2">
              Animal waste from beef and dairy production.
            </p>
            <p className="text-xl md:text-2xl text-[#111111] leading-relaxed">
              1.4 billion tons of it produced in the US every year.
            </p>
          </div>

          <p className="fade-in text-2xl md:text-3xl font-bold text-[#1B4332] leading-snug">
            Why can&apos;t we just use it?
          </p>

          <div className="fade-in">
            <p className="text-xl md:text-2xl text-[#111111] leading-relaxed mb-6">
              To get from waste to certified organic fertilizer, a farm must
              navigate:
            </p>
            <ul className="flex flex-col gap-3 text-lg md:text-xl text-[#374151]">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#1B4332] mt-2.5 shrink-0" />
                Six federal agencies
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#1B4332] mt-2.5 shrink-0" />
                48 state registrations
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#1B4332] mt-2.5 shrink-0" />
                A 9-month FDA wait
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#1B4332] mt-2.5 shrink-0" />
                $21,136 in compliance costs — for one rule alone
              </li>
            </ul>
          </div>

          <div className="fade-in">
            <p className="text-lg md:text-xl text-[#9CA3AF] italic leading-relaxed mb-2">
              A compliance specialist costs $78,420 per year.
            </p>
            <p className="text-lg md:text-xl text-[#9CA3AF] italic leading-relaxed mb-2">
              Most farms have neither the time nor the money.
            </p>
            <p className="text-lg md:text-xl text-[#9CA3AF] italic leading-relaxed">
              They dump the waste. They buy synthetic fertilizer instead.
            </p>
          </div>

          <p className="fade-in font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[#1B4332] leading-snug">
            There is a better way.
          </p>
        </div>
      </section>

      {/* ===== Section 3 — Introducing AgriClerk ===== */}
      <section
        ref={introRef}
        className="py-24 md:py-36 px-6 md:px-12 lg:px-20 bg-white"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Left — Text */}
          <div className="flex-1 max-w-xl">
            <p className="fade-in text-xs font-semibold uppercase tracking-[3px] text-[#1B4332] mb-4">
              Introducing AgriClerk
            </p>
            <h2 className="fade-in font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-extrabold text-[#111111] leading-tight mb-6">
              The compliance expert that never sleeps.
            </h2>
            <p className="fade-in text-base text-[#374151] leading-relaxed mb-3">
              AgriClerk reads the lab result, cross-references the regulation,
              builds the audit trail, and files the correct document
              automatically.
            </p>
            <p className="fade-in text-base text-[#374151] leading-relaxed mb-8">
              The farmer receives a plain-language alert only when a decision
              needs them.
            </p>

            <div className="flex flex-col gap-4">
              {[
                {
                  title: "Read the result",
                  desc: "any lab PDF from any US-certified laboratory",
                },
                {
                  title: "Find who you need",
                  desc: "routes to the right agency or specialist",
                },
                {
                  title: "Record everything",
                  desc: "unbroken audit trail across every batch",
                },
                {
                  title: "File it automatically",
                  desc: "correct form, correct agency, on time",
                },
              ].map((item) => (
                <div key={item.title} className="fade-in flex items-start gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1B4332] mt-1.5 shrink-0" />
                  <p className="text-sm text-[#374151]">
                    <span className="font-semibold text-[#111111]">
                      {item.title}
                    </span>{" "}
                    — {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Mockup */}
          <div className="fade-in flex-1 flex justify-center md:justify-end">
            <DashboardMockup />
          </div>
        </div>
      </section>

      {/* ===== Section 4 — The Numbers ===== */}
      <section ref={numbersRef} className="py-24 md:py-36 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="fade-in grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <CountUpStat
              end={6}
              suffix="+"
              label="Federal agencies a farm must satisfy"
            />
            <CountUpStat
              end={21}
              prefix="$"
              suffix="K"
              label="Annual compliance cost for one rule alone"
              source="USDA ERS EIB-195"
            />
            <CountUpStat
              end={2400}
              prefix="$"
              label="What AgriClerk costs per year"
            />
          </div>
          <p className="fade-in text-center text-base md:text-lg text-[#374151] max-w-2xl mx-auto">
            Agricultural compliance costs have risen{" "}
            <span className="font-bold text-[#111111]">1,366%</span> since 2006.
            Farm revenue rose{" "}
            <span className="font-bold text-[#111111]">0.37%</span>.
          </p>
          <p className="fade-in text-center text-[11px] text-[#9CA3AF] mt-4">
            Hamilton &amp; McCullough, Cal Poly SLO 2025
          </p>
        </div>
      </section>

      {/* ===== Section 5 — The Platform ===== */}
      <section
        ref={platformRef}
        className="py-24 md:py-36 px-6 md:px-12 lg:px-20 bg-[#1B4332]"
      >
        <div className="max-w-5xl mx-auto text-center">
          <p className="fade-in text-xs font-semibold uppercase tracking-[3px] text-[#E8F5EE]/60 mb-4">
            The Platform
          </p>
          <h2 className="fade-in font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-extrabold text-white leading-tight mb-14">
            Everything in one place.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Personalised Dashboard",
                desc: "Calibrated to your herd, your state, your batch status. Every farm sees what matters to them today.",
              },
              {
                title: "Lab Integration",
                desc: "Accepts results from any US-certified laboratory automatically. No manual uploads.",
              },
              {
                title: "University Network",
                desc: "Connects directly to extension systems. When a regulation updates, every connected farm knows immediately.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="fade-in bg-white rounded-lg p-7 text-left"
              >
                <h3 className="font-bold text-[#111111] text-base mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-[#374151] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Section 6 — Why Now ===== */}
      <section
        ref={whyNowRef}
        className="py-24 md:py-36 px-6 md:px-12 lg:px-20"
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="fade-in text-xs font-semibold uppercase tracking-[3px] text-[#1B4332] mb-4">
            Why Now
          </p>
          <h2 className="fade-in font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-extrabold text-[#111111] leading-tight mb-8">
            AI can now do what wasn&apos;t possible in 2022.
          </h2>
          <p className="fade-in text-base md:text-lg text-[#9CA3AF] leading-relaxed mb-3">
            AI agents can now read unstructured regulatory documents, reason
            across them, and act on them automatically.
          </p>
          <p className="fade-in text-base md:text-lg text-[#9CA3AF] leading-relaxed">
            No existing compliance tool uses AI. We are building what is now
            possible.
          </p>
        </div>
      </section>

      {/* ===== Section 7 — Where We Start ===== */}
      <section
        ref={whereRef}
        className="py-24 md:py-36 px-6 md:px-12 lg:px-20 bg-white"
      >
        <div className="max-w-3xl">
          <p className="fade-in text-xs font-semibold uppercase tracking-[3px] text-[#1B4332] mb-4">
            Where We Start
          </p>
          <h2 className="fade-in font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-extrabold text-[#111111] leading-tight mb-8">
            Texas. The farms are here. The network is here.
          </h2>
          <p className="fade-in text-base text-[#374151] leading-relaxed mb-4">
            We are starting with Texas livestock operations through TAMMI at
            Texas A&amp;M AgriLife Extension — the leading manure management
            resource for Texas CAFOs.
          </p>
          <p className="fade-in text-base text-[#374151] leading-relaxed">
            Texas has more cattle than any other US state. Our co-founder is
            completing her PhD in Soil and Crop Sciences at Texas A&amp;M. We are
            not knocking on doors. We are already inside the network.
          </p>
        </div>
      </section>

      {/* ===== Section 8 — CTA ===== */}
      <section
        ref={ctaRef}
        className="py-24 md:py-36 px-6 md:px-12 lg:px-20 bg-[#111111]"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="fade-in font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-extrabold text-white leading-tight mb-10">
            Ready to stop doing paperwork?
          </h2>
          <div className="fade-in">
            <a
              href="mailto:contact@agriclerk.com?subject=Early%20Access%20Request"
              className="inline-block bg-[#1B4332] text-white font-semibold text-sm px-10 py-4 rounded-full hover:bg-[#143728] transition-colors"
            >
              Request Early Access
            </a>
            <p className="text-sm text-[#9CA3AF] mt-5">
              Or email us directly:{" "}
              <a
                href="mailto:contact@agriclerk.com"
                className="text-[#E8F5EE] hover:underline"
              >
                contact@agriclerk.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="py-12 px-6 md:px-12 lg:px-20 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-[#9CA3AF] mb-1">
            &copy; 2026 AgriClerk &middot;{" "}
            <a
              href="mailto:contact@agriclerk.com"
              className="hover:text-[#1B4332]"
            >
              contact@agriclerk.com
            </a>{" "}
            &middot; agriclerk.com
          </p>
          <p className="text-xs text-[#9CA3AF] mb-3">Built in Texas.</p>
          <p className="text-[10px] text-[#9CA3AF]/60">
            TAMMI: Texas Animal Manure Management Issues &middot; USDA ERS:
            Economic Research Service &middot; BLS: Bureau of Labor Statistics
          </p>
        </div>
      </footer>
    </main>
  );
}
