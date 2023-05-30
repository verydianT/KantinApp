import styles from "../style";
import { Navbar } from "../Component";
import { useDispatch, useSelector } from "react-redux";
import { addProductCart, deleteProductCart } from "../Redux/productSlice";
import FeaturedCard2 from "../Component/FeaturedCard2";

const Keranjang = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.productCart);
  const totalAmount = cart.reduce((prev, cur) => prev + cur.harga * cur.qty, 0);

  return (
    <>
      <div className="bg-black w-full h-screen overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <section id="toko" className={`${styles.flexCenter} flex-col sm:flex-row relative`}>
              <div className={`${styles.flexCenter} flex-wrap overflow-y-auto h-[250px] w-[500px] sm:w-[800px] sm:h-[550px] mr-3 relative`}>
                {cart.map((dataFood) => (
                  <FeaturedCard2 key={dataFood.id} {...dataFood} 
                  addToCart={() => dispatch(addProductCart(dataFood))} 
                  deleteFromCard={() => dispatch(deleteProductCart(dataFood))}/>
                ))}
              </div>
              <div className={`${styles.flexCenter} flex-col relative bg-black sm:bg-gradient-to-r sm:from-gray-700 sm:via-gray-900 sm:to-black rounded-xl`}>
                <h5 className="text-white text-normal m-2">Total harus dibayar</h5>
                <h4 className="text-white font-semibold text-[35px] mb-4 sm:mb-10">
                    {`Rp. ${totalAmount}`}
                  </h4>
                <h5 className={`${styles.flexCenter} text-normal text-white mb-2`}>
                  Tambahkan Notes
                </h5>
                <input className={`${styles.paragraph} w-auto h-auto rounded-full mb-4 sm:mb-10 bg-slate-600 border `}/>
                <h5 className={`${styles.flexCenter} text-normal text-white mb-2`}>
                  Pilihan pembayaran
                </h5>
                <div className={`${styles.flexStart}  `}>
                  <button type="button" class="text-black bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 m-2 mb-2 bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                      </svg>
                    Bayar Langsung
                  </button>
                  <button type="button" class="text-black bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 m-2 mb-2 bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
                      </svg>
                    Dengan QRIS
                  </button>
                </div>
              </div>
        </section>
      </div>
    </>
  );
};

export default Keranjang;
