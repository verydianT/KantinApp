import styles from './style';
import { Home, Rekomendasi, Toko} from "./Pages";
import { Navbar, Hero, Stats, Bussiness, Billing, Cart, CardDeal, Testimonials, Clients, CTA, Footer } from './Component';

const Page = () => {
  return (
    <div className="bg-black w-full h-screen overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
          <Cart/>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Rekomendasi/>
        </div>
      </div>
    </div>
  )
}

export default Page;