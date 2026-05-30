'use client';

import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const TechnicalHealthVisual = () => (
  <div className="w-full bg-secondary dark:bg-background-9 rounded-[20px] p-6 lg:p-8 text-accent space-y-6 select-none shadow-xl">
    <div>
      <span className="text-[11px] font-bold tracking-wider text-ns-green uppercase block mb-1">Engine Reliability Monitor</span>
      <h3 className="text-heading-6 font-bold text-white">Asynchronous Pipeline Status</h3>
    </div>

    <div className="space-y-3">
      {[
        { label: 'Anthropic Claude Core Engine', status: 'Operational', latency: '1.2s' },
        { label: 'Automated Anti-Slop Content Filter', status: 'Operational', latency: '0.4s' },
        { label: 'Paystack/Stripe Invoicing Gateway', status: 'Operational', latency: '99.9%' },
        { label: 'Cross-Network Stream Scheduler', status: 'Operational', latency: '0ms drag' },
      ].map((metric) => (
        <div key={metric.label} className="bg-white/5 dark:bg-background-8/50 rounded-xl p-3.5 flex items-center justify-between border border-white/10">
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-ns-green animate-pulse" />
            <span className="text-[13px] font-medium text-white/90">{metric.label}</span>
          </div>
          <div className="text-right">
            <span className="text-[11px] block font-bold text-ns-green">{metric.status}</span>
            <span className="text-[10px] text-white/40 block font-mono">{metric.latency}</span>
          </div>
        </div>
      ))}
    </div>

    <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div>
        <p className="text-[12px] text-white/60">Need immediate pipeline intervention?</p>
        <p className="text-[11px] text-white/40">Active tracking monitors instances natively 24/7.</p>
      </div>
      <a
        href="https://app.nativpost.com/dashboard/support"
        target="_blank"
        rel="noreferrer"
        className="text-[12px] font-semibold text-white bg-white/10 hover:bg-white/20 px-3.5 py-2 rounded-lg transition-colors border border-white/20 whitespace-nowrap"
      >
        Open App Queue →
      </a>
    </div>
  </div>
);

const Contact = () => {
  return (
    <section id="ticket-form" className="pt-[80px] pb-[100px] md:pb-[160px]">
      <div className="main-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Left Column: Visual Analytics Indicator */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green">External Intake Gateway</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="text-heading-3 font-bold text-secondary dark:text-accent">
                  Create an external pipeline ticket
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="text-secondary/70 dark:text-accent/70 text-[14px] leading-relaxed">
                  Can&apos;t access your centralized account center right now? Use this external interface fallback to drop your ticket directly into our priority monitoring queue.
                </p>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.4}>
              <TechnicalHealthVisual />
            </RevealAnimation>
          </div>

          {/* Right Column: Ticket Intake Form Structure */}
          <div className="lg:col-span-7 w-full">
            <RevealAnimation delay={0.5}>
              <form onSubmit={(e) => e.preventDefault()} className="dark:bg-background-8 rounded-[20px] bg-white border border-stroke-2 dark:border-stroke-8 p-6 lg:p-[40px] shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <fieldset className="space-y-2">
                    <label htmlFor="name" className="text-[13px] text-secondary dark:text-accent block font-semibold">
                      Your name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter identity context"
                      className="border-stroke-3 bg-background-1 dark:border-stroke-7 dark:bg-background-6 placeholder:text-secondary/40 dark:placeholder:text-accent/40 dark:text-accent text-[13px] shadow-1 block h-11 w-full rounded-xl border px-[16px] py-2 focus:outline-none"
                    />
                  </fieldset>

                  <fieldset className="space-y-2">
                    <label htmlFor="email" className="text-[13px] text-secondary dark:text-accent block font-semibold">
                      Account email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="name@company.com"
                      className="border-stroke-3 bg-background-1 dark:border-stroke-7 dark:bg-background-6 placeholder:text-secondary/40 dark:placeholder:text-accent/40 dark:text-accent text-[13px] shadow-1 block h-11 w-full rounded-xl border px-[16px] py-2 focus:outline-none"
                    />
                  </fieldset>
                </div>

                <fieldset className="space-y-2 mb-4">
                  <label htmlFor="topic" className="text-[13px] text-secondary dark:text-accent block font-semibold">
                    Incident Classification
                  </label>
                  <select
                    id="topic"
                    className="border-stroke-3 bg-background-1 dark:border-stroke-7 dark:bg-background-6 dark:text-accent text-[13px] shadow-1 block h-11 w-full rounded-xl border px-[16px] py-2 focus:outline-none"
                  >
                    <option>Platform Connection Pipeline Disconnect</option>
                    <option>Brand Profile Tuning & Voice Anomaly</option>
                    <option>Billing System Interruption (Paystack/Stripe)</option>
                    <option>General Feature Optimization Query</option>
                  </select>
                </fieldset>

                <fieldset className="space-y-2">
                  <label htmlFor="comment" className="text-[13px] text-secondary dark:text-accent block font-semibold">
                    Detailed Incident Explanation
                  </label>
                  <textarea
                    name="comment"
                    id="comment"
                    placeholder="Provide a precise breakdown of the issue, runtime circumstances, or platform errors observed."
                    className="border-stroke-3 bg-background-1 dark:border-stroke-7 dark:bg-background-6 placeholder:text-secondary/40 dark:placeholder:text-accent/40 dark:text-accent text-[13px] shadow-1 block min-h-[120px] w-full rounded-xl border px-[16px] py-3 focus:outline-none resize-none"
                    defaultValue={''}
                  />
                </fieldset>

                <fieldset className="mt-5 mb-5 flex items-center gap-2">
                  <label htmlFor="agree-terms" className="flex items-center gap-x-3">
                    <input id="agree-terms" type="checkbox" className="peer sr-only" required />
                    <span className="border-stroke-3 dark:border-stroke-7 after:bg-primary-500 peer-checked:border-primary-500 relative size-4 cursor-pointer rounded-full border after:absolute after:top-1/2 after:left-1/2 after:size-2.5 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:opacity-0 peer-checked:after:opacity-100" />
                  </label>
                  <label
                    htmlFor="agree-terms"
                    className="text-[12px] text-secondary/60 dark:text-accent/60 cursor-pointer"
                  >
                    I authorize NativPost to analyze my automated brand profile execution traces inside the limits of the{' '}
                    <Link href="/terms-conditions" className="text-primary-500 underline font-medium">
                      Terms of Service
                    </Link>
                  </label>
                </fieldset>

                <button
                  type="submit"
                  className="btn btn-md btn-secondary hover:btn-primary dark:btn-accent w-full text-center font-semibold text-[14px] py-3 rounded-xl transition-all"
                >
                  Dispatch Priority Support Ticket
                </button>
              </form>
            </RevealAnimation>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;