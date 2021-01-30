import dynamic from 'next/dynamic'

//Component
import Accordion from 'components/Accordion'

//Dynamic imports
const About = dynamic(() => import('@components/About'))
const Contact = dynamic(() => import('@components/Contact'))
const PressMobile = dynamic(() => import('@components/PressMobile'))
const AwardsMobile = dynamic(() => import('@components/AwardsMobile'))
const ExhibitionsMobile = dynamic(() => import('@components/ExhibitionsMobile'))

export default function MobileSectionsMenu() {
  return (
    <>
      <div className="mainWrapper">
        <Accordion title="About" content={<About />} />
        <Accordion title="Contact" content={<Contact />} />
        <Accordion title="Awards" content={<AwardsMobile />} />
        <Accordion title="Research & Articles" content={<PressMobile />} />
        <Accordion title="Exhibitions" content={<ExhibitionsMobile />} />
      </div>

      <style jsx>{`
        .mainWrapper {
          min-height: 340px;
        }
      `}</style>
    </>
  )
}
