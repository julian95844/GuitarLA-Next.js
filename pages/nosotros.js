import Image from "next/image"
import Layout from "../component/layout"
import styles from "../styles/nosotros.module.css"
export default function Nosotros() {
  return (
    <>
      <Layout
        title={"Nosotros"}
        description={"Sobre nosotros GuitarLA, tienda de musica "}
      >
        <main className="contenedor">
          <h2 className="heading">Nosotros</h2>

          <div className={styles.contenido}>
            <Image src="/img/nosotros.jpg" width={1000} height={800} alt="imagen nosotros"/>

            <div>
                <p>In sollicitudin lobortis bibendum. Curabitur eros nisi, pellentesque eget dignissim eu, dignissim in dolor. Quisque eget blandit tortor. Vivamus a congue nibh, vel venenatis neque. Etiam tristique ullamcorper leo, in porta dui semper ac. Morbi aliquam aliquam ante in fringilla. Morbi sit amet nisi ultricies, 
                tincidunt diam ut, laoreet tellus.</p>
                <p>In sollicitudin lobortis bibendum. Curabitur eros nisi, pellentesque eget dignissim eu, dignissim in dolor. Quisque eget blandit tortor. Vivamus a congue nibh, vel venenatis neque. Etiam tristique ullamcorper leo, in porta dui semper ac. Morbi aliquam aliquam ante in fringilla. Morbi sit amet nisi ultricies, tincidunt
                diam ut, laoreet tellus.</p>
            </div>
          </div>
        </main>

      </Layout>
    </>
  )
}

