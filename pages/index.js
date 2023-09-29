import Link from "next/link"
import Layout from "../component/layout"
export default function Home() {
  return (
    <>
      <Layout
        title={"inicio"}
        description={"Blog de musica, venta de guitarra"}
      >
        <h1>hola asdf mundo</h1>

        <Link href="/nosotros">nosotros</Link>
      </Layout>
    </>

  )
}
