import React from 'react';
import styles from "../style";

const FeaturedCard1 = ({ img, name, harga, addToCart}) => (
    <div className={`flex flex-row h-[100px] w-[400px] m-3 sm:m-2 rounded-xl border-2`}>
      <div className={`${styles.flexCenter} w-[86px] bg-blue-100 rounded-l-lg`}>
        <img src={img} alt="food" className="w-[70%] h-[70%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col justify-center ml-5">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          {name}
        </h4>
        <p className="font-poppins font-normal text-white text-[16px] leading-[24px]">
          {harga}
        </p>
      </div>
      <button className={`${styles.flexCenter} mr-5 relative`} onClick={addToCart}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[40px] h-[40px] relative">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>
    </div>
);

export default FeaturedCard1;