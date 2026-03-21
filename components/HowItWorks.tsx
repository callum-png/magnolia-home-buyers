'use client'

import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const steps = [
  {
    number: '01',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="8" y="4" width="24" height="32" rx="2" stroke="#C9A84C" strokeWidth="1.5"/>
        <line x1="13" y1="13" x2="27" y2="13" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="13" y1="19" x2="27" y2="19" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="13" y1="25" x2="21" y2="25" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Tell Us About Your Home',
    body: 'Call, text, or fill out our quick form. Share your property address and situation — takes less than 5 minutes. No obligation whatsoever.',
  },
  {
    number: '02',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="14" stroke="#C9A84C" strokeWidth="1.5"/>
        <path d="M14 20 L18 24 L27 15" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Get Your Cash Offer',
    body: "We assess your property and present a fair, no-obligation cash offer within 24 hours. No lowballing, no surprise deductions — just a straightforward number.",
  },
  {
    number: '03',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="6" y="10" width="28" height="24" rx="2" stroke="#C9A84C" strokeWidth="1.5"/>
        <line x1="6" y1="16" x2="34" y2="16" stroke="#C9A84C" strokeWidth="1.5"/>
        <line x1="14" y1="6" x2="14" y2="14" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="26" y1="6" x2="26" y2="14" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="12" y="22" width="5" height="5" rx="1" fill="#C9A84C" opacity="0.6"/>
      </svg>
    ),
    title: 'Close On Your Timeline',
    body: 'You pick the closing date. We handle all the paperwork. You get paid. Done in as few as 7 days — or whenever works for you.',
  },
]

function Step({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.18, ease: "easeOut" as const }}
      style={{
        position: 'relative',
        padding: 'clamp(24px, 4vw, 48px) clamp(20px, 3vw, 40px)',
        textAlign: 'left',
      }}
    >
      {/* Watermark number */}
      <span
        style={{
          position: 'absolute',
          top: 12,
          right: 20,
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontWeight: 700,
          fontSize: 'clamp(5rem, 8vw, 9rem)',
          color: 'var(--gold)',
          opacity: 0.07,
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        {step.number}
      </span>

      {/* Icon */}
      <div style={{ marginBottom: 24 }}>{step.icon}</div>

      {/* Title */}
      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontWeight: 600,
          fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)',
          color: 'var(--text-warm)',
          marginBottom: 16,
          lineHeight: 1.15,
        }}
      >
        {step.title}
      </h3>

      {/* Body */}
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 300,
          fontSize: '1rem',
          lineHeight: 1.75,
          color: 'var(--text-muted)',
        }}
      >
        {step.body}
      </p>
    </motion.div>
  )
}

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      style={{
        background: 'var(--bg-dark)',
        padding: 'var(--section-gap) clamp(24px, 6vw, 80px)',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ marginBottom: 'clamp(48px, 7vw, 80px)', textAlign: 'center' }}>
          <span className="eyebrow">Simple Process</span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: 'clamp(2.5rem, 5vw, 5rem)',
              lineHeight: 0.95,
              letterSpacing: '-0.01em',
            }}
          >
            Three Steps to
            <br />
            <span style={{ color: 'var(--gold)' }}>Your Cash Offer</span>
          </h2>
        </div>

        {/* Steps grid */}
        <div
          className="steps-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 0,
          }}
        >
          {steps.map((step, i) => (
            <div
              key={step.number}
              style={{
                borderLeft: i > 0 ? '1px solid rgba(201,168,76,0.12)' : 'none',
              }}
            >
              <Step step={step} index={i} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: 'clamp(48px, 6vw, 72px)' }}>
          <a
            href="#contact"
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: '0.8rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--bg-dark)',
              background: 'var(--gold)',
              padding: '16px 40px',
              borderRadius: 2,
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--gold-light)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--gold)')}
          >
            Start the Process Today
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .steps-grid { grid-template-columns: 1fr !important; }
          .steps-grid > div { border-left: none !important; border-top: 1px solid rgba(201,168,76,0.12); }
          .steps-grid > div:first-child { border-top: none; }
        }
      `}</style>
    </section>
  )
}
