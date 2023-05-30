import React from "react";
import styles from "../style";

const FeaturedCard2 = ({ img, name, harga, addToCart, deleteFromCard, qty }) => (
  <div
    className={`flex flex-row h-[75px] w-[320px] m-3 sm:m-2 rounded-xl border-2 hover:bg-gradient-to-bl hover:from-gray-400 hover:via-gray-600 hover:to-blue-800`}
  >
    <div className={`${styles.flexCenter} w-[86px] bg-blue-100 rounded-l-lg`}>
      <img src={img} alt="food" className="w-[70%] h-[70%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col justify-center ml-2">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {name}
      </h4>
      <p className="font-poppins font-normal text-white text-[16px] leading-[24px]">
        {`Rp. ${harga} ${qty ? `x ${qty}` : ""}`}
      </p>
    </div>
    <button
      className={`${styles.flexCenter} relative`}
      onClick={deleteFromCard}
    >
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" class="w-[30px] h-[30px] relative">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

    </button>
    <button
      className={`${styles.flexCenter} relative`}
      onClick={addToCart}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-[30px] h-[30px] relative"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </button>
  </div>
);

export default FeaturedCard2;
