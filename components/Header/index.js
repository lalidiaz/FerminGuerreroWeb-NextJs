import Link from '../ActiveLink'

export default function Header(props) {
  return (
    <>
      <div className="headerWrapper">
        <div>
          <Link href="/" activeClassName="active" passHref>
            Fermin Guerrero
          </Link>
        </div>
        <div>
          <Link href="/graphicDesign" activeClassName="active" passHref>
            Graphic Design
          </Link>
        </div>
        <div>
          <Link href="/allProjects" activeClassName="active" passHref>
            &
          </Link>
        </div>
        <div>
          <Link href="/typefaceDesign" activeClassName="active" passHref>
            Typeface Desgin
          </Link>
        </div>

        <div>
          <Link href="/info" activeClassName="active" passHref>
            Info
          </Link>
        </div>
      </div>

      <style jsx>{`
        .headerWrapper {
          width: 100%;
          height: 40px;
          align-items: center;
          justify-content: center;
          padding: 3px 20px 5px 20px;
          mix-blend-mode: difference;
          position: fixed;
          top: 0;
          z-index: 1;
          font-size: 20px;
          outline: none;
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-template-rows: 1;
          font-weight: bold;
        }

        div:nth-child(1) {
          grid-column: 1/5;
        }
        div:nth-child(2) {
          grid-column: 5/7;
          padding-left: 3px;
        }
        div:nth-child(3) {
          grid-column: 7;
          padding-left: 6.5px;
        }
        div:nth-child(4) {
          grid-column: 8 /10;
          padding-left: 6.5px;
        }
        div:nth-child(5) {
          grid-column: 12;
          margin-right: 0;
          text-align: right;
        }

        a {
          text-decoration: none;
          outline: none;
        }

        .ampersan {
          padding-left: 8px;
          text-decoration: none;
          outline: none;
        }
      `}</style>
    </>
  )
}
