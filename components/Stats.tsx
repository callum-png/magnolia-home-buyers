'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, animate, useTransform } from 'framer-motion'

interface Stat {
  value: number
  suffix: string
  label: string
  prefix?: string
}

const stats: Stat[] = [
  { value: 500, suffix: '+', label: 'Homes Purchased' },
  { value: 9, suffix: '', label: 'Days Average Close' },
  { value: 50, suffix: '', label: 'States We Serve' },
  { value: 100, suffix: '%', label: 'No-Fee Guarantee' },
]

function AnimatedCounter({ value, suffix, prefix }: { value: number; suffix: string; prefix?: string }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, Math.round)
  const ref = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
          animate(count, value, { duration: 2.2, ease: 'easeOut' })
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [count, value, started])

  return (
    <div ref={ref} style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
      {prefix && (
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontWeight: 600,
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            color: 'var(--gold)',
            lineHeight: 1,
            paddingTop: '0.4em',
            marginRight: 4,
          }}
        >
          {prefix}
        </span>
      )}
      <motion.span
        style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontWeight: 600,
          fontSize: 'clamp(3.5rem, 7vw, 6rem)',
          color: 'var(--text-warm)',
          lineHeight: 1,
        }}
      >
        {rounded}
      </motion.span>
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontWeight: 600,
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          color: 'var(--gold)',
          lineHeight: 1,
          paddingTop: '0.2em',
        }}
      >
        {suffix}
      </span>
    </div>
  )
}

export default function Stats() {
  return (
    <section
      style={{
        background: 'var(--bg-alt)',
        padding: 'clamp(56px, 8vw, 96px) clamp(24px, 6vw, 80px)',
        position: 'relative',
      }}
    >
      {/* Top rule */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.25), transparent)' }} />

      <div
        className="stats-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 0,
          maxWidth: 1100,
          margin: '0 auto',
        }}
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            style={{
              textAlign: 'center',
              padding: 'clamp(24px, 4vw, 48px) 24px',
              borderRight: i < 3 ? '1px solid rgba(201,168,76,0.12)' : 'none',
            }}
          >
            <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 300,
                fontSize: '0.78rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginTop: 12,
              }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom rule */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.25), transparent)' }} />

      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 420px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
