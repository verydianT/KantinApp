import styles from "../style";
import dropbox from "../assets/dropbox.png";
import { data3 } from "../constants";
import { Navbar, Cart, FeaturedCard1 } from '../Component';
import { useEffect, useState } from "react";

const Toko = () => {
  const [total, setTotal] = useState(0);
  const [purchasedItem, setPurchasedItem] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setPurchasedItem(cart.reduce((prev, current) => current.amount + prev, 0));
    setTotal(cart.reduce((prev, current) => current.amount * current.price + prev, 0));
  }, [cart]);

  const addToCart = (id) => {
    const menu = data3.find((e) => e.id === id);
    const IdCart = cart.find((e) => e.id === id);
    if (!IdCart) {
      setCart([
        ...cart,
        {
          id,
          name: menu.name,
          category: menu.category,
          img: menu.img,
          harga: menu.harga,
          amount: 1,
        }
      ]);
    } else {
      increaseCartAmount(id);
    }
  };

  const decreaseCartAmount = (id) => {
    const IdCart = cart.find((e) => e.id === id);
    if (IdCart.amount > 1) {
      setCart(
        cart.map((x) => (x.id === id ? { ...x, amount: x.amount - 1 } : x))
      );
    } else {
      setCart(cart.filter((x) => x.id !== id));
    }
  };

  const increaseCartAmount = (id) => {
    setCart(
      cart.map((x) => (x.id === id ? { ...x, amount: x.amount + 1 } : x))
    );
  };

return (
<>
  <div className="bg-black w-full h-screen overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
          <Cart totalItem={purchasedItem}/>
        </div>
      </div>
      <section id="toko" className={`${styles.flexCenter} flex-col relative`}>
        <div className={`${styles.boxWidth}`}>
              <div className="flex flex-wrap justify-center w-full mb-3 relative">
                  <img src={dropbox} alt="banner" className="w-full h-40 object-cover"/>
                  <h2 className={`${styles.flexCenter} ${styles.heading2}`}>Toko Bunda</h2>
              </div>
                  <div className={`${styles.flexCenter} flex-col relative`}>
                      <div className="flex flex-wrap justify-center relative overflow-y-auto h-[480px]">
                        {data3.map((dataFood) => (
                              <FeaturedCard1 key={dataFood.id} {...dataFood} addToCart={() => addToCart(dataFood.id)}/>
                        ))}
                      </div>
                  </div>
        </div>
      </section>
  </div>
</>   
)};

export default Toko;