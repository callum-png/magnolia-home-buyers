'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: 'easeOut' as const },
})

export default function Hero() {
  const [address, setAddress] = useState('')
  const [imgLoaded, setImgLoaded] = useState(false)
  const [imgError, setImgError] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (address.trim()) {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'var(--bg-dark)',
      }}
      className="clip-diagonal-bottom"
    >
      {/* Rich CSS background — always visible, photo layers on top when loaded */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse 90% 70% at 72% 38%, #1C4020 0%, #0F2614 35%, #0A1A0C 70%),
            radial-gradient(ellipse 60% 50% at 15% 80%, #0D2410 0%, #0A1A0C 60%),
            linear-gradient(160deg, #0A1A0C 0%, #162B18 50%, #0A1A0C 100%)
          `,
        }}
      />

      {/* Decorative magnolia SVG — large watermark right side */}
      <div
        style={{
          position: 'absolute',
          right: '-5%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: 'clamp(320px, 45vw, 680px)',
          height: 'clamp(320px, 45vw, 680px)',
          opacity: 0.07,
          pointerEvents: 'none',
        }}
      >
        <Image
          src="/images/magnolia.svg"
          alt=""
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>

      {/* Photo background — only shown when image actually loads */}
      {!imgError && (
        <Image
          src="/images/hero.jpg"
          alt="Beautiful Southern home with magnolia trees"
          fill
          priority
          style={{
            objectFit: 'cover',
            objectPosition: 'center 30%',
            opacity: imgLoaded ? 1 : 0,
            transition: 'opacity 0.8s ease',
          }}
          sizes="100vw"
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgError(true)}
        />
      )}

      {/* Gradient overlay — sits on top of photo */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            linear-gradient(to right, rgba(10,26,12,0.97) 0%, rgba(10,26,12,0.82) 40%, rgba(10,26,12,0.45) 75%, rgba(10,26,12,0.25) 100%),
            linear-gradient(to bottom, rgba(10,26,12,0.4) 0%, rgba(10,26,12,0.0) 30%, rgba(10,26,12,0.9) 100%)
          `,
        }}
      />

      {/* Vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 80% 65% at 38% 48%, transparent 0%, rgba(10,26,12,0.5) 100%)',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          paddingLeft: 'clamp(24px, 8vw, 120px)',
          paddingRight: 'clamp(24px, 4vw, 60px)',
          paddingTop: 120,
          paddingBottom: 140,
          maxWidth: 780,
        }}
      >
        {/* Eyebrow */}
        <motion.span {...fadeUp(0)} className="eyebrow">
          Nationwide Cash Home Buyers
        </motion.span>

        {/* Headline */}
        <motion.h1 {...fadeUp(0.1)} style={{ lineHeight: 0.88, marginBottom: 28 }}>
          <span
            style={{
              display: 'block',
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontWeight: 600,
              fontSize: 'clamp(3.2rem, 8vw, 9rem)',
              color: 'var(--gold)',
              letterSpacing: '-0.01em',
            }}
          >
            We Buy Your
          </span>
          <span
            style={{
              display: 'block',
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: 'clamp(4.5rem, 11vw, 13rem)',
              color: 'transparent',
              WebkitTextStroke: '2px var(--gold)',
              letterSpacing: '-0.02em',
              lineHeight: 0.9,
            }}
          >
            Home
          </span>
          <span
            style={{
              display: 'block',
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontWeight: 600,
              fontSize: 'clamp(3.2rem, 8vw, 9rem)',
              color: 'var(--text-warm)',
              letterSpacing: '-0.01em',
            }}
          >
            Fast. Cash.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...fadeUp(0.25)}
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 300,
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            lineHeight: 1.7,
            color: 'var(--text-muted)',
            marginBottom: 40,
            maxWidth: 520,
          }}
        >
          Get a fair cash offer in 24 hours. No repairs, no agent fees, no hassle.
          <br />We buy homes in any condition, anywhere in the USA.
        </motion.p>

        {/* Hero form */}
        <motion.form
          {...fadeUp(0.4)}
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            gap: 0,
            maxWidth: 560,
          }}
          className="hero-form"
        >
          <input
            type="text"
            placeholder="Enter your property address..."
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={{
              flex: 1,
              padding: '16px 20px',
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(201,168,76,0.35)',
              borderRight: 'none',
              borderRadius: '2px 0 0 2px',
              color: 'var(--text-warm)',
              fontFamily: 'var(--font-body)',
              fontSize: '0.95rem',
              outline: 'none',
            }}
          />
          <button
            type="submit"
            style={{
              padding: '16px 24px',
              background: 'var(--gold)',
              color: 'var(--bg-dark)',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: '0.8rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              borderRadius: '0 2px 2px 0',
              whiteSpace: 'nowrap',
              transition: 'background 0.2s',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--gold-light)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--gold)')}
          >
            Get My Cash Offer
          </button>
        </motion.form>

        {/* Trust badges */}
        <motion.div
          {...fadeUp(0.5)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 24,
            marginTop: 28,
            flexWrap: 'wrap',
          }}
        >
          {['No Agent Fees', 'Close in 7 Days', 'Any Condition'].map((badge) => (
            <div
              key={badge}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 7,
                fontFamily: 'var(--font-body)',
                fontSize: '0.78rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.04em',
              }}
            >
              <span style={{ color: 'var(--gold)', fontSize: '0.55rem' }}>◆</span>
              {badge}
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            position: 'absolute',
            bottom: 56,
            left: 'clamp(24px, 8vw, 120px)',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <div
            style={{
              width: 1,
              height: 40,
              background: 'linear-gradient(to bottom, var(--gold), transparent)',
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
            }}
          >
            Scroll
          </span>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .hero-form { flex-direction: column; }
          .hero-form input { border-right: 1px solid rgba(201,168,76,0.35); border-bottom: none; border-radius: 2px 2px 0 0; }
          .hero-form button { border-radius: 0 0 2px 2px; }
        }
      `}</style>
    </section>
  )
}
