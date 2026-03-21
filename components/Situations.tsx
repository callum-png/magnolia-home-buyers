'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const situations = [
  {
    title: 'Facing Foreclosure',
    body: "If you're behind on mortgage payments and facing foreclosure, time matters. We can close quickly — often in time to stop the foreclosure process and protect your credit. You keep the equity, walk away with cash.",
  },
  {
    title: 'Going Through Divorce',
    body: "Dividing a marital home is complicated. We make it simple — one fair offer, quick close, proceeds split how you agree. No showings, no long negotiations, no drawn-out process during an already difficult time.",
  },
  {
    title: 'Inherited a Property',
    body: "An inherited home can come with unexpected costs, taxes, and emotional weight. We buy inherited properties as-is, handle the complexity, and give you cash so you can close that chapter on your terms.",
  },
  {
    title: 'Need to Relocate Quickly',
    body: "Job transfer, family move, or fresh start — whatever the reason, we align to your timeline. Tell us your target close date and we'll make it happen, often within 7–14 days.",
  },
  {
    title: 'Home Needs Major Repairs',
    body: "Foundation issues, roof damage, fire or flood damage, mold — no problem. We buy homes in any condition with no repairs required. You don't need to spend a dollar to sell.",
  },
  {
    title: 'Problem Tenants / Landlord Exit',
    body: "Tired of being a landlord? Dealing with non-paying or destructive tenants? We buy rental properties occupied or vacant, handling all the complications that come with tenant situations.",
  },
  {
    title: 'Behind on Mortgage Payments',
    body: "Behind on payments but not yet in foreclosure? Now is the best time to act. We can buy your home quickly, help you avoid the foreclosure mark on your record, and put cash in your pocket.",
  },
]

function SituationRow({
  situation,
  isOpen,
  onToggle,
  isLast,
}: {
  situation: typeof situations[0]
  isOpen: boolean
  onToggle: () => void
  isLast: boolean
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      style={{
        borderTop: '1px solid rgba(201,168,76,0.2)',
        borderBottom: isLast ? '1px solid rgba(201,168,76,0.2)' : 'none',
      }}
    >
      <button
        onClick={onToggle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 20,
          padding: 'clamp(20px, 3vw, 28px) 0',
          background: 'transparent',
          cursor: 'pointer',
          textAlign: 'left',
        }}
        aria-expanded={isOpen}
      >
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 'clamp(1.25rem, 2.5vw, 1.9rem)',
            color: isOpen || hovered ? 'var(--gold)' : 'var(--text-warm)',
            transition: 'color 0.25s',
            lineHeight: 1.1,
          }}
        >
          {situation.title}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.4rem',
            color: 'var(--gold)',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
            lineHeight: 1,
            flexShrink: 0,
          }}
        >
          +
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" as const }}
            style={{ overflow: 'hidden' }}
          >
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 300,
                fontSize: '1rem',
                lineHeight: 1.8,
                color: 'var(--text-muted)',
                paddingBottom: 'clamp(20px, 3vw, 28px)',
                maxWidth: 680,
              }}
            >
              {situation.body}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Situations() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="situations"
      style={{
        background: 'var(--bg-dark)',
        padding: 'var(--section-gap) clamp(24px, 6vw, 80px)',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(40px, 6vw, 100px)',
            alignItems: 'start',
          }}
          className="situations-layout"
        >
          {/* Left: heading sticky */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
            style={{ position: 'sticky', top: 100 }}
            className="situations-heading"
          >
            <span className="eyebrow">We Help With</span>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: 'clamp(2.5rem, 4vw, 4.5rem)',
                lineHeight: 0.95,
                letterSpacing: '-0.01em',
                marginBottom: 28,
              }}
            >
              Every
              <br />
              <span style={{ color: 'var(--gold)' }}>Situation</span>
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 300,
                fontSize: '1rem',
                lineHeight: 1.75,
                color: 'var(--text-muted)',
                marginBottom: 36,
              }}
            >
              Life is unpredictable. We work with homeowners in all circumstances — no judgement, no pressure, just a fair offer and a smooth process.
            </p>
            <a
              href="#contact"
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '0.78rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                border: '1px solid rgba(201,168,76,0.4)',
                padding: '13px 28px',
                borderRadius: 2,
                transition: 'background 0.2s, color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--gold)'
                e.currentTarget.style.color = 'var(--bg-dark)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = 'var(--gold)'
              }}
            >
              Discuss My Situation
            </a>
          </motion.div>

          {/* Right: accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" as const }}
          >
            {situations.map((sit, i) => (
              <SituationRow
                key={sit.title}
                situation={sit}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                isLast={i === situations.length - 1}
              />
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .situations-layout { grid-template-columns: 1fr !important; }
          .situations-heading { position: static !important; }
        }
      `}</style>
    </section>
  )
}
