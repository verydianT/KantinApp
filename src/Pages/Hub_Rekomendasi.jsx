import React from 'react';
import styles from '../style';
import Rekomendasi_1 from "./Rekomendasi";
import { Navbar, Cart} from '../Component';

const Rekomendasi = () => {
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
              <Rekomendasi_1/>
            </div>
          </div>
        </div>
      )
}

export default Rekomendasi;