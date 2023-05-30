import styles from "../style";
import { data3 } from "../constants";
import { Navbar, Cart, FeaturedCard1 } from "../Component";
import { useDispatch, useSelector } from "react-redux";
import { addProductCart } from "../Redux/productSlice";

const Toko = () => {
  const dispatch = useDispatch();
  const { total_item } = useSelector((state) => state.productCart);

  return (
    <>
      <div className="bg-black w-full h-screen overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
            <Cart totalItem={total_item} />
          </div>
        </div>
        <section id="toko" className={`${styles.flexCenter} flex-col`}>
            <div className="flex flex-wrap justify-center w-full relative">
              <h2 className={`${styles.flexCenter} ${styles.heading2}`}>
                Toko Bunda
              </h2>
            </div>
              <div className="flex flex-wrap justify-center relative overflow-y-auto h-[480px] w-[60%] md:w-[80%]">
                {data3.map((dataFood) => (
                  <FeaturedCard1
                    key={dataFood.id}
                    {...dataFood}
                    addToCart={() => dispatch(addProductCart(dataFood))}
                  />
                ))}
              </div>
        </section>
      </div>
    </>
  );
};

export default Toko;
