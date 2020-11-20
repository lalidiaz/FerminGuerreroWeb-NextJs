import fetch from 'isomorphic-unfetch'
import Item from '@components/PressShow/Item'

export default function Example({ data }) {
  const articles = data

  return (
    <>
      <div className="pageWrapper">
        <div className="projectList">
          {articles.map(({ title, id, description, year }, index) => (
            <div key={id}>
              <Item
                description={description}
                year={year}
                title={title}
                index={index}
                articles={articles}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .pageWrapper {
          width: 100%;
          display: flex;
          align-items: center;
          position: relative;
          font-size: 20px;
        }

        .projectList {
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
        }

        .projectMedia {
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
      `}</style>
    </>
  )
}

export async function getServerSideProps() {
  const { API_URL } = process.env
  const res = await fetch(`${API_URL}/api/press`)
  const data = await res.json()

  return {
    props: {
      data: data,
    },
  }
}
