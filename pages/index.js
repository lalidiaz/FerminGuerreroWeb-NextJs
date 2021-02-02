import { useState, useEffect } from 'react'

//Data fetching
import { getLandingData } from '../utils/getData'

//components
import Footer from 'components/Footer'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

//Styles
import styles from 'styles/home.module.scss'

const Home = ({ dataParse }) => {
  const mobileImages = dataParse.mobile
  const desktopImages = dataParse.desktop
  const [current, setCurrent] = useState(0)
  const [mouse, setMouse] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!mouse) {
        setCurrent((current) => current + 1)
      }
    }, 2000)

    return () => clearInterval(interval)
  }, [mouse])

  function handleMouseOver(key) {
    setMouse(true)
    setCurrent(key)
  }

  // function handleMouseOut() {
  //   setMouse(false)
  // }

  const responsive = {
    tablet: {
      breakpoint: { max: 1024, min: 677 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 677, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  }

  const CustomDot = ({ onClick, active }) => {
    return (
      <li
        style={{
          background: active ? 'white' : 'transparent',
          mixBlendMode: 'difference',
          borderRadius: '100px',
          marginBottom: '20px',
          marginRight: '5px',
          width: '10px',
          height: '10px',
          border: '2px solid white',
          borderRadius: '10px',
          marginBottom: '80px',
        }}
      >
        <button
          style={{
            background: 'transparent',
            mixBlendMode: 'difference',
            borderRadius: '100px',
            outline: 'none',
            border: 'none',
            height: '10px',
          }}
          onClick={() => onClick()}
        />
      </li>
    )
  }

  return (
    <>
      <div className={styles.hero} id="#home">
        <div className={styles.image}>
          <img src={desktopImages[current]} alt={desktopImages[current]} />
        </div>
        {desktopImages.map((image, key) => {
          return (
            <div
              key={key}
              style={{ width: `calc(100% / ${desktopImages.length})` }}
              onMouseMove={() => handleMouseOver(key)}
              // onMouseOut={handleMouseOut}
            />
          )
        })}
      </div>
      <div className={styles.homeMobile}>
        <Carousel
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlaySpeed={3000}
          swipeable={true}
          customTransition="transform 300ms ease-in-out"
          draggable={false}
          autoPlay
          arrows={false}
          showDots={true}
          containerClass="carouselContainer"
          customDot={<CustomDot />}
        >
          {mobileImages.map((image, key) => (
            <div style={{ height: '100vh' }}>
              <img
                style={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
                src={image}
                key={`${key} ${image}`}
              />
            </div>
          ))}
        </Carousel>
      </div>

      <Footer component="home" />
      <style jsx>{`
        .imageContainer {
          height: 100%;
          width: 100%;
        }

        img {
          height: 100%;
          width: 100%;
          object-fit: 'cover';
          object-position: 'center';
        }
      `}</style>
    </>
  )
}

export async function getStaticProps() {
  const dataJson = await getLandingData()
  return {
    props: {
      dataParse: dataJson,
    },
  }
}

export default Home
