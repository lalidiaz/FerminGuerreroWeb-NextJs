import React, { useState } from 'react'
import Media from './Media'

export default function ({ title, description, year, index, articles }) {
  const [activeIndex, setActiveIndex] = useState(-1)
  return (
    <>
      <div
        className="projectItem"
        onMouseEnter={() => setActiveIndex(index)}
        onMouseLeave={() => setActiveIndex(-1)}
      >
        <div className="info">
          <p className="year">{year}</p>

          <h3 className="projectTitle">
            <span>{title}</span>
          </h3>

          <span className="description">{description}</span>
        </div>
        <Media image={articles[activeIndex]?.image} />
      </div>

      <style jsx>{`
        .projectItem {
          color: white;
          display: flex;
          align-items: center;
          cursor: pointer;
          width: 100%;
        }
        .projectTitle {
          font-size: 20px;
          color: white;
          font-weight: 300;
          display: flex;
          z-index: 2;
        }

        .info {
          width: 80%;
          display: flex;
          align-items: center;
        }

        .description {
          margin-right: 50px;
        }

        .year {
        }

        .projectTitle:hover {
          opacity: 0.1;
        }
      `}</style>
    </>
  )
}

// transition: opacity .35s cubic-bezier(.77, 0 , 0.175, 1);
