import LeadForm from './LeadForm'

export default function CTASection() {
  return (
    <section
      style={{
        background: 'var(--bg-dark)',
        paddingTop: 'var(--section-gap)',
      }}
      id="contact"
    >
      <div
        style={{
          maxWidth: 680,
          margin: '0 auto',
          padding: '0 clamp(24px, 6vw, 80px)',
          textAlign: 'center',
          marginBottom: 'clamp(40px, 6vw, 72px)',
        }}
      >
        <span className="eyebrow">Free · No Obligation · No Pressure</span>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(2.8rem, 6vw, 6rem)',
            letterSpacing: '-0.04em',
            lineHeight: 0.92,
            color: 'var(--text-light)',
          }}
        >
          Ready to{' '}
          <span style={{ color: 'var(--blue)' }}>Sell?</span>
        </h2>
      </div>
      <LeadForm />
    </section>
  )
}
