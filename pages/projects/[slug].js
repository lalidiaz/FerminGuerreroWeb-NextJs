import Link from 'next/link'
import Head from 'next/head'
import { useState, useRouter } from 'react'

//social media
import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share'

//Styles
import { makeStyles } from '@material-ui/core/styles'
import styles from 'styles/project.module.scss'
import { CgMenuGridR } from 'react-icons/cg'
import { VscArrowRight } from 'react-icons/vsc'
import { VscArrowLeft } from 'react-icons/vsc'

//Components
import Footer from 'components/Footer'
import Grid from '@material-ui/core/Grid'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'

//Lazyloading
import LazyLoad from 'react-lazyload'
import { LazyLoadImage } from 'react-lazy-load-image-component'

//Data fetching
import { getPaths, getProject, getProjectsData } from 'utils/getData'

const useStyles = makeStyles({
  imageList: {
    width: '100%',
    height: '100%',
    ['@media (max-width:480px)']: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
})

function srcset(image, size, rows = 1, cols = 1) {
  return `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format 1x,
  ${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`
}

const Projects = ({ data, navigationProjects, path }) => {
  const classes = useStyles()

  // const currentId = data.map((current) => current.id)

  // console.log({ currentId })

  // const [current, setCurrent] = useState(currentId[0])
  // const mapNavigation = navigationProjects.map((nav) => nav.id)

  // console.log('soy map navigation', mapNavigation)
  // console.log('SOY MAP NAVIGATION + 1', mapNavigation[current + 1])
  // console.log('SOY MAP NAVIGATION - 1', mapNavigation[current - 1])

  //  const handlePrev = (e) => {
  //     e.preventDefault()
  //     setCurrent((current) => console.log(mapNavigation[current - 1])
  //   };

  //   const handleNext = (e) => {
  //     e.preventDefault()
  //    setCurrent((current) => console.log(mapNavigation[current + 1]))
  //   };

  return (
    <>
      <div className={styles.container}>
        {data.map((element) => {
          console.log('soy el id', element.id)
          return (
            <>
              <Head>
                <title>{element.name} </title>
                <meta name="description" content={element.description} />
              </Head>
              {element.mp4 ? (
                <video
                  loop
                  autoPlay
                  muted
                  playsinline
                  webkit-playsinline
                  controlsList="nofullscreen"
                  className={styles.mainVideo}
                >
                  <source src={element.mp4Slug} type="video/mp4" />
                </video>
              ) : (
                <div>
                  <LazyLoadImage
                    alt="graphic-design"
                    src={element.imageSlag}
                    width="800px"
                    height="534px"
                    className={styles.mainImage}
                  />
                </div>
              )}

              <Grid container>
                <div className={styles.gridContainer}>
                  <Grid item xs={12} lg={2}>
                    <div className={styles.name}>{element.name}</div>
                    {/* <div className={styles.socialShare}>
                      <FacebookIcon round={true} iconFillColor="white"/>
                      <LinkedinIcon round={true} iconFillColor="white" />
                      <TwitterIcon round={true} iconFillColor="white" />
                      <WhatsappIcon round={true} iconFillColor="white" />
                    </div> */}
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={4}
                    className={styles.tagYearContainer}
                  >
                    <div>
                      <p>{element.year}</p>
                      {element.credits && (
                        <p
                          className={styles.middleText}
                          dangerouslySetInnerHTML={{
                            __html: element.credits,
                          }}
                        ></p>
                      )}

                      {element.externalLinkBrick && (
                        <p className={styles.middleText}>
                          Get Brick at{' '}
                          <a
                            className={styles.tagLink}
                            href={element.externalLinkBrick}
                          >
                            <u>{element.nameExternalLink}</u>
                          </a>
                        </p>
                      )}

                      {element.externalLinkThesaurus && (
                        <p className={styles.middleText}>
                          Get Thesaurus at{' '}
                          <a
                            className={styles.tagLink}
                            href={element.externalLinkThesaurus}
                          >
                            <u>{element.nameExternalLink}</u>
                          </a>
                        </p>
                      )}
                    </div>
                    <div className={styles.tagName}>
                      {element.tags &&
                        element.tags.map((tag) => {
                          const transformName = tag.replace('-', ' ')
                          return (
                            <>
                              <Link href={`/tag/${tag}`}>
                                <a className={styles.tagLink}>
                                  <u>{transformName}</u>
                                </a>
                              </Link>
                            </>
                          )
                        })}
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} lg={6}>
                    <div className={styles.description}>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: element.description,
                        }}
                      ></p>
                    </div>
                  </Grid>
                </div>
              </Grid>
              <ImageList
                gap={13}
                variant="quilted"
                cols={4}
                rowHeight="auto"
                className={classes.imageList}
              >
                {Object.values(element.sources).map((source) => {
                  return (
                    <ImageListItem
                      key={element.id}
                      cols={source.cols}
                      rows={source.rows}
                      className={styles.imageListItem}
                    >
                      {source.type === 'img' ? (
                        <LazyLoadImage
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                          }}
                          src={source.img}
                          alt="graphic-design"
                          srcSet={srcset(
                            source.img,
                            121,
                            source.rows,
                            source.cols
                          )}
                        />
                      ) : (
                        <LazyLoad>
                          <video
                            autoplay
                            muted
                            loop
                            playsinline
                            webkit-playsinline
                            controls
                            controlsList="nofullscreen"
                            className={styles.video}
                            poster={source.poster}
                          >
                            <source
                              src={source.url}
                              srcSet={srcset(
                                source.url,
                                121,
                                source.rows,
                                source.cols
                              )}
                            />
                          </video>
                        </LazyLoad>
                      )}
                    </ImageListItem>
                  )
                })}
              </ImageList>
              {/* <div className={styles.navigation}>
                <Grid container>
                  <Grid item xs={12} lg={2}>
                    <button
                      onClick={(e) => handlePrev(e)}
                      className={styles.buttonNavigation}
                    >
                      <VscArrowLeft color="white" size={35} />
                    </button>
                  </Grid>
                  <Grid item xs={12} sm={12} lg={3}>
                    <div className={styles.tagName}>
                      {element.tags &&
                        element.tags.map((tag) => {
                          const transformName = tag.replace('-', ' ')
                          return (
                            <>
                              <Link href={`/tag/${tag}`}>
                                <a className={styles.tagLink}>
                                  <u>{transformName}</u>
                                </a>
                              </Link>
                            </>
                          )
                        })}
                    </div>
                  </Grid>
                 <Grid item xs={12} sm={12} lg={5}>
                    <button className={styles.buttonNavigation}>
                      <CgMenuGridR color="white" size={35} />
                    </button>
                  </Grid>
                  <Grid item xs={12} lg={2} style={{ textAlign: 'end' }}>
                    <button
                      onClick={(e) => handleNext(e)}
                      className={styles.buttonNavigation}
                    >
                      <VscArrowRight color="white" size={35} />
                    </button>
                  </Grid> 
                </Grid>
              </div>*/}
            </>
          )
        })}

        <Footer />
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const paths = await getPaths()
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const path = params.slug
  const data = await getProject(path)
  const navigationProjects = await getProjectsData()

  return {
    props: {
      data,
      navigationProjects,
      path,
    },
  }
}

export default Projects
