import styles, { layout } from "../style";
import { data3 } from "../constants";
import { Navbar, Cart, FeaturedCard1 } from '../Component';

const Keranjang = () => {
    return (
        <>
            <div className="bg-black w-full h-screen overflow-hidden">
              <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                  <Navbar/>
                </div>
              </div>
            <section id="toko" className={`${styles.flexCenter} flex-col relative`}>
                <div className={`${styles.boxWidth}`}>
                    <div className={`${styles.flexCenter} flex-col relative`}>
                        <div className="flex flex-wrap justify-center relative overflow-y-auto h-[250px] bg-emerald-700">
                            {data3.map((dataFood) => (
                                <FeaturedCard1 key={dataFood.id} {...dataFood}/>
                            ))}
                        </div>
                        <h5 className="text-white mt-3">Total harus dibayar</h5>
                        <h5 className="text-white font-semibold text-[35px] sm:text-[50px]">xx.xxx</h5>
                    </div>
                </div>
                <div className={`${styles.boxWidth} ${layout.section}`}>
                    <div className={`${layout.sectionInfo2}`}>
                        <h2 className={`${styles.flexCenter} text-[20px] text-white mb-3`}>
                            Tambahkan Notes
                        </h2>
                        <div className={`${styles.flexStart} `}>
                            <input className={`${styles.paragraph} w-[500px] h-[100px] rounded-2xl mx-5`}/>
                        </div>
                    </div>
                    <div className={`${layout.sectionInfo2} mb-2`}>
                        <h2 className={`${styles.flexCenter} text-[20px] text-white`}>
                            Pilihan pembayaran
                        </h2>
                        <div className={`${styles.flexStart} `}>
                        <button className="h-[50px] px-20 ml-5 mt-5 text-white bg-rose-600">Bayar Langsung</button>
                        <button className="h-[50px] px-20 ml-5 mt-5 text-white bg-rose-600">Virtual Account</button>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        </>
    )
}

export default Keranjang