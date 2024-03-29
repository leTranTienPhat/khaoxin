import Head from 'next/head'
import Gallery from '../components/gallery/Gallery'
import styles from '../styles/Home.module.scss'
import PromotionCarousel from '../components/promotion_carousel/PromotionCarousel';
import GridProduct from '../components/grid_product/gridProduct';
import OrderMethod from '../components/order_method/OrderMethod'
import Fade from '../components/animated_component/Fade'

export default function Home({ images }) {
  return (
    <Fade>
      <div className={styles.webBackground}>
        <Head>
          <title>Trà sữa Khaoxin</title>
          <meta name="description" content="Trà sữa Khaoxin" />
        </Head>

        <PromotionCarousel />
        <GridProduct />
        <OrderMethod />
        {/* <Gallery images={images} /> */}
      </div>
    </Fade>
  )
}

// export async function getServerSideProps() {
//   try {
//     const response = await fetch('https://picsum.photos/v2/list?limit=10');
//     const data = await response.json()
//     return {
//       props: {
//         images: data
//       }
//     }
//   } catch (error) {
//     console.error(error);
//   }

// }