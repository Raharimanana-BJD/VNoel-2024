export default function Snowfall() {
  return (
    <div className="snowfall">
      {[...Array(50)].map((_, i) => (
        <div key={i} className="snowflake" style={{
          left: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 3 + 2}s`,
          animationDelay: `${Math.random() * 2}s`
        }} />
      ))}
      <style jsx>{`
        .snowfall {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }
        .snowflake {
          position: absolute;
          width: 10px;
          height: 10px;
          background: white;
          border-radius: 50%;
          opacity: 0.8;
          animation-name: fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        @keyframes fall {
          0% {
            transform: translateY(-10vh) rotate(0deg);
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}

