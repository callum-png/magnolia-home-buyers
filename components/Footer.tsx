'use client'

import Logo from './Logo'
import Link from 'next/link'

const navLinks = [
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#why-magnolia', label: 'Why Magnolia' },
  { href: '#situations', label: 'Situations We Help' },
  { href: '/about', label: 'About Us' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Get Cash Offer' },
]

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--bg-footer)',
        padding: 'clamp(56px, 8vw, 96px) clamp(24px, 6vw, 80px) 0',
        borderTop: '1px solid rgba(201,168,76,0.08)',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Top grid */}
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.6fr 1fr 1fr',
            gap: 'clamp(40px, 6vw, 80px)',
            paddingBottom: 'clamp(40px, 6vw, 64px)',
          }}
        >
          {/* Col 1: Brand */}
          <div>
            <Logo size={32} />
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 300,
                fontSize: '0.9rem',
                lineHeight: 1.75,
                color: 'var(--text-muted)',
                marginTop: 20,
                maxWidth: 300,
              }}
            >
              We buy houses fast for cash. Any condition, any situation, anywhere in the USA. No fees, no repairs, no hassle.
            </p>
            <div
              style={{
                marginTop: 24,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <span style={{ color: 'var(--gold)', fontSize: '0.45rem' }}>◆</span>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                }}
              >
                Equal Housing Opportunity
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                fontSize: '0.72rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                marginBottom: 20,
              }}
            >
              Navigation
            </h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 300,
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-warm)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                fontSize: '0.72rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                marginBottom: 20,
              }}
            >
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.68rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: 4,
                  }}
                >
                  Phone
                </div>
                <a
                  href="tel:+18880000000"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    color: 'var(--text-warm)',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-warm)')}
                >
                  (888) 000-0000
                </a>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.68rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: 4,
                  }}
                >
                  Email
                </div>
                <a
                  href="mailto:info@magnoliahomebuyers.com"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    color: 'var(--text-warm)',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-warm)')}
                >
                  info@magnoliahomebuyers.com
                </a>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.68rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: 4,
                  }}
                >
                  Hours
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 300,
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.6,
                  }}
                >
                  Mon – Fri, 8am – 7pm CST
                  <br />
                  Sat, 9am – 4pm CST
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(201,168,76,0.08)',
            padding: '24px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
            }}
          >
            © {new Date().getFullYear()} Magnolia Home Buyers LLC. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <Link
                key={item}
                href="#"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 300,
                  fontSize: '0.78rem',
                  color: 'var(--text-muted)',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-warm)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
