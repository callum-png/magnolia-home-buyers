'use client'

import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'

const reasons = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M18 4L4 14V32H14V22H22V32H32V14L18 4Z" stroke="#C9A84C" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'No Repairs Needed',
    body: 'Sell completely as-is. No cleaning, no staging, no fixing anything. We buy homes in every condition — even fire-damaged, flood-affected, or condemned.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="13" stroke="#C9A84C" strokeWidth="1.5"/>
        <path d="M18 10V12M18 24V26M13 15H11M25 15H23" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="18" cy="17" r="3" stroke="#C9A84C" strokeWidth="1.5"/>
        <line x1="20" y1="20" x2="23" y2="23" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Zero Agent Fees',
    body: 'No commissions, no closing costs taken from your payout, no hidden fees. The offer we make is the amount you walk away with.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="4" y="8" width="28" height="24" rx="2" stroke="#C9A84C" strokeWidth="1.5"/>
        <line x1="4" y1="14" x2="32" y2="14" stroke="#C9A84C" strokeWidth="1.5"/>
        <line x1="12" y1="4" x2="12" y2="12" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="24" y1="4" x2="24" y2="12" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="10" y="20" width="6" height="5" rx="1" fill="#C9A84C" opacity="0.5"/>
      </svg>
    ),
    title: 'Close in 7–14 Days',
    body: 'You choose your closing date. We have closed in as few as 7 days. If you need more time to make arrangements, we work around your schedule.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M18 4L6 10V22C6 28 12 32 18 34C24 32 30 28 30 22V10L18 4Z" stroke="#C9A84C" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M13 18L16.5 22L23 15" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Guaranteed Cash',
    body: 'Our offers are backed by real capital — not loans that can fall through. Once we make an offer, you can count on it.',
  },
]

function Card({ reason, index }: { reason: typeof reasons[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 2) * 0.15, ease: "easeOut" as const }}
      style={{
        background: 'var(--bg-parchment)',
        borderRadius: 2,
        padding: 'clamp(28px, 4vw, 44px)',
        borderTop: '3px solid var(--gold)',
        boxShadow: '0 2px 32px rgba(0,0,0,0.06)',
      }}
    >
      <div style={{ marginBottom: 20 }}>{reason.icon}</div>
      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 600,
          fontSize: 'clamp(1.25rem, 2vw, 1.6rem)',
          color: 'var(--text-dark)',
          marginBottom: 12,
          lineHeight: 1.2,
        }}
      >
        {reason.title}
      </h3>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 300,
          fontSize: '0.95rem',
          lineHeight: 1.75,
          color: 'var(--text-dark-muted)',
        }}
      >
        {reason.body}
      </p>
    </motion.div>
  )
}

export default function WhyMagnolia() {
  return (
    <section
      id="why-magnolia"
      style={{
        background: 'var(--bg-cream)',
        padding: 'var(--section-gap) clamp(24px, 6vw, 80px)',
        position: 'relative',
        overflow: 'hidden',
      }}
      className="clip-diagonal-top"
    >
      {/* Decorative magnolia watermark */}
      <div
        style={{
          position: 'absolute',
          top: -40,
          right: -40,
          width: 340,
          height: 340,
          opacity: 0.08,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        <Image
          src="/images/magnolia.svg"
          alt=""
          fill
          style={{ objectFit: 'contain', filter: 'invert(1)' }}
        />
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
        {/* Header */}
        <div style={{ marginBottom: 'clamp(40px, 6vw, 72px)' }}>
          <span
            className="eyebrow"
            style={{ color: 'var(--gold)' }}
          >
            Our Difference
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: 'clamp(2.5rem, 5vw, 5rem)',
              color: 'var(--text-dark)',
              lineHeight: 0.95,
              letterSpacing: '-0.01em',
              maxWidth: 600,
            }}
          >
            Why Sellers
            <br />
            Choose <span style={{ color: 'var(--gold)' }}>Magnolia</span>
          </h2>
        </div>

        {/* Cards grid */}
        <div
          className="why-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 20,
          }}
        >
          {reasons.map((reason, i) => (
            <Card key={reason.title} reason={reason} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .why-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
