export default function Loading() {
  return (
    <>
      <style>{`
        .loader-container {
          height: 100vh;
          background: #0d1117;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: monospace;
          color: #fff;
        }

        .terminal {
          background: #161b22;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 0 30px rgba(0, 255, 0, 0.2);
          width: 350px;
        }

        .green {
          color: #22c55e;
        }

        .yellow {
          color: #eab308;
        }

        .dots::after {
          content: "";
          animation: dots 1.5s steps(4, end) infinite;
        }

        @keyframes dots {
          0% { content: ""; }
          25% { content: "."; }
          50% { content: ".."; }
          75% { content: "..."; }
          100% { content: ""; }
        }
      `}</style>

      <div className="loader-container">
        <div className="terminal">
          <p><span className="green">✔</span> Starting server...</p>
          <p><span className="green">✔</span> Connecting database...</p>
          <p>
            <span className="yellow">➜</span> Loading page
            <span className="dots"></span>
          </p>
        </div>
      </div>
    </>
  );
}
