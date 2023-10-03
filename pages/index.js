import Layout from "../component/layout"
import Guitarra from "../component/guitarra"
import Post from "../component/post"
import Curso from "../component/curso"
import styles from "../styles/grid.module.css"
export default function Home({posts, guitarras, curso}) {

  console.log(curso)
  return (
    <>
      <Layout
        title={"inicio"}
        description={"Blog de musica, venta de guitarra"}
      >
        <main className="contenedor">
          <h1 className="heading">Nuestra Coleccion</h1>
          <div className={styles.grid}>
              {guitarras?.map(guitarra =>(
                <Guitarra 
                  key={guitarra.id}
                  guitarra={guitarra.attributes}
                />
                
              ))}
          </div>
        </main>
        <Curso
          curso={curso.attributes}
        />
        <section className="contenedor">
          <h2 className="heading">Blog</h2>
            <div className={styles.grid}>
              {posts?.map(post =>(
                <Post
                  key={post.id}
                  post={post.attributes}
                >

                </Post>
              ))}
            </div>
        </section>

      </Layout>
    </>

  )
}

export async function getStaticProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`
  const urlPosts = `${process.env.API_URL}/posts?populate=imagen`
  const urlCurso = `${process.env.API_URL}/curso?populate=imagen`
  const [ resGuitarra, resPosts, resCurso] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPosts),
    fetch(urlCurso)
  ])
  
  const [{ data: guitarras }, {data: posts}, {data: curso}] = await Promise.all([
    resGuitarra.json(),
    resPosts.json(),
    resCurso.json()
  ])

  return{
    props:{
      guitarras,
      posts,
      curso
    }
  }
}
