'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'
import Link from 'next/link'

const links = [
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#why-magnolia', label: 'Why Magnolia' },
  { href: '/about', label: 'About' },
  { href: '#faq', label: 'FAQ' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: 72,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 clamp(20px, 5vw, 64px)',
          background: scrolled ? 'rgba(10,26,12,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201,168,76,0.1)' : '1px solid transparent',
          transition: 'background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease',
        }}
      >
        <Logo size={32} />

        {/* Desktop links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 36,
          }}
          className="nav-desktop"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 400,
                fontSize: '0.875rem',
                letterSpacing: '0.06em',
                color: 'var(--text-muted)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-warm)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="#contact"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: '0.8rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              border: '1px solid var(--gold-border-md)',
              padding: '10px 22px',
              borderRadius: 2,
              transition: 'background 0.25s, color 0.25s',
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
            Get Cash Offer
          </a>
        </div>

        {/* Hamburger */}
        <button
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-hamburger"
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: 5,
            padding: 8,
            background: 'transparent',
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: 24,
                height: 1.5,
                background: 'var(--text-warm)',
                transition: 'transform 0.3s, opacity 0.3s',
                transformOrigin: 'center',
                transform:
                  menuOpen && i === 0
                    ? 'rotate(45deg) translate(4.5px, 4.5px)'
                    : menuOpen && i === 1
                    ? 'scaleX(0)'
                    : menuOpen && i === 2
                    ? 'rotate(-45deg) translate(4.5px, -4.5px)'
                    : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              top: 72,
              left: 0,
              right: 0,
              zIndex: 99,
              background: 'rgba(10,26,12,0.97)',
              backdropFilter: 'blur(16px)',
              borderBottom: '1px solid var(--gold-border)',
              padding: '32px clamp(20px, 5vw, 64px) 40px',
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
            }}
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  fontSize: '1.75rem',
                  color: 'var(--text-warm)',
                }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              style={{
                marginTop: 8,
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '0.8rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--bg-dark)',
                background: 'var(--gold)',
                padding: '14px 28px',
                borderRadius: 2,
                display: 'inline-block',
                alignSelf: 'flex-start',
              }}
            >
              Get Cash Offer
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
