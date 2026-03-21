'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    quote:
      "We inherited my grandmother's house and had no idea what to do. Magnolia gave us a fair offer within 24 hours and we closed in 10 days. They handled everything — we didn't have to lift a finger.",
    name: 'Sarah M.',
    location: 'Memphis, TN',
    situation: 'Inherited Property · Closed in 10 Days',
  },
  {
    quote:
      "Our home had significant water damage from a burst pipe. No traditional buyer would touch it. Magnolia made us a cash offer as-is, no repairs required. We walked away with more than we expected.",
    name: 'James & Cora T.',
    location: 'Houston, TX',
    situation: 'Damaged Home · Closed in 8 Days',
  },
  {
    quote:
      "Going through a divorce is hard enough. The last thing I wanted was to deal with showings, agents, and negotiations. Magnolia made the whole process painless. One offer, one close, done.",
    name: 'Patricia W.',
    location: 'Atlanta, GA',
    situation: 'Divorce Sale · Closed in 12 Days',
  },
]

export default function Testimonials() {
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
      id="testimonials"
      style={{
        background: 'var(--bg-alt)',
        padding: 'var(--section-gap) clamp(24px, 6vw, 80px)',
      }}
    >
      <div ref={ref} style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 'clamp(40px, 6vw, 72px)', textAlign: 'right' }}>
          <span className="eyebrow" style={{ textAlign: 'right' }}>Real Stories</span>
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
            What Our Sellers Say
          </h2>
        </div>

        {/* Cards */}
        <div
          className="testimonials-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
          }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" as const }}
              style={{
                background: 'var(--bg-card)',
                borderRadius: 2,
                padding: 'clamp(32px, 4vw, 48px)',
                borderTop: '2px solid var(--gold-border)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Large quote mark */}
              <span
                style={{
                  position: 'absolute',
                  top: 16,
                  left: 24,
                  fontFamily: 'var(--font-display)',
                  fontSize: '8rem',
                  color: 'var(--gold)',
                  opacity: 0.18,
                  lineHeight: 1,
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}
              >
                ❝
              </span>

              {/* Quote */}
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
                  lineHeight: 1.8,
                  color: 'var(--text-warm)',
                  position: 'relative',
                  zIndex: 1,
                  marginBottom: 28,
                  marginTop: 20,
                }}
              >
                {`"${t.quote}"`}
              </p>

              {/* Attribution */}
              <div style={{ borderTop: '1px solid rgba(201,168,76,0.15)', paddingTop: 20 }}>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 400,
                    fontSize: '0.95rem',
                    color: 'var(--gold)',
                    marginBottom: 4,
                  }}
                >
                  — {t.name}, {t.location}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 300,
                    fontSize: '0.7rem',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                  }}
                >
                  {t.situation}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
