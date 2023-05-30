import { Link } from "react-router-dom";
import styles from "../style";

const Cart = ({ totalItem = 0 }) => {
  return (
    <Link to="/Keranjang">
      <button className={`w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full ${styles.flexCenter} bg-blue-100 fixed bottom-8 right-8`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
          {totalItem > 0 ? (
              <span className="w-[30px] h-[28px] flex justify-center absolute top-0 right-0 rounded-full bg-red-600">
                {totalItem > 99 ? "99+" : totalItem}
                <span className="hidden">unread messages</span>
              </span>
          ) : null}
      </button>
    </Link>
  )
}

export default Cart