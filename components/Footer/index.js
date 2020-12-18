export default function Footer() {
  return (
    <>
      <footer>
        <div className="footermove">Copyright © . All rights reserved.</div>
      </footer>

      <style jsx>{`
        footer {
          width: 100%;
          height: 50px;
          bottom: 0;
          background-color: transparent;
          font-size: 16px;
          mix-blend-mode: difference;
          position: fixed;
          padding: 10px 20px 10px 20px;
          display: flex;
          justify-content: space-between;
          text-align: center;
        }

        @media screen and (max-width: 667px) {
          footer {
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            color: white;
            text-align: center;
          }
        }

        .footermove {
          overflow: hidden;
          transform: translate3d(0, 0, 0);
          animation: moveSlideshow 10s linear infinite;
        }
        @keyframes moveSlideshow {
          100% {
            transform: translateX(-66.6666%);
          }
        }
        @keyframes move-left {
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </>
  )
}
