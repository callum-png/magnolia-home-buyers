const items = [
  'No Agent Fees',
  'Cash Offers',
  'Close in 7 Days',
  'Any Condition',
  'Nationwide',
  'Zero Repairs',
  'No Closing Costs',
  'Offer in 24 Hours',
]

const ticker = [...items, ...items]

export default function MarqueeTicker() {
  return (
    <div
      style={{
        overflow: 'hidden',
        height: 44,
        background: 'var(--gold)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div
        className="ticker-track"
        style={{
          display: 'flex',
          width: 'max-content',
          animation: 'marquee 32s linear infinite',
          willChange: 'transform',
        }}
      >
        {ticker.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              fontSize: '0.72rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--bg-dark)',
              padding: '0 28px',
              whiteSpace: 'nowrap',
              display: 'flex',
              alignItems: 'center',
              gap: 28,
            }}
          >
            {item}
            <span style={{ fontSize: '0.35rem', opacity: 0.7 }}>◆</span>
          </span>
        ))}
      </div>

      <style>{`
        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
