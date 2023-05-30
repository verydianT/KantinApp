import React, { useState } from 'react';
import { data3 } from "../constants";
import styles from '../style';

const FeatureCard = ({ img, name, harga }) => (
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
      <div className={`${styles.flexCenter} mr-5`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[40px] h-[40px]">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    </div>
);

const Rekomendasi_1 = () => {
    const [data, setData] = useState(data3);
    const filterResult = (item) => {
        const result = data3.filter((curData) => {
            return curData.category === item
        });
        setData(result);
    }
return (
<>
    <div id="rekomendasi" className={`${styles.flexCenter} flex-col relative`}>
        <div className={`${styles.flexCenter} flex-row flex-wrap mb-5`}>
            <div className={`flex-1 flex justify-center items-center flex-row m-3`} >
                <button className="font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white"
                onClick={()=>setData(data3)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                </button>
            </div>
            <div className={`flex-1 flex justify-center items-center flex-row m-3`} >
                <button className="font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white"
                onClick={()=>filterResult("makanan")}>
                Makanan
                </button>
            </div>
            <div className={`flex-1 flex justify-center items-center flex-row m-3`} >
                <button className="font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white"
                onClick={()=>filterResult("minuman")}>
                Minuman
                </button>
            </div>
            <div className={`flex-1 flex justify-center items-center flex-row m-3`} >
                <button className="font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white"
                onClick={()=>filterResult("cemilan")}>
                Cemilan
                </button>
            </div>
        </div>
        
        <div className={`${styles.boxHeight2} flex flex-wrap justify-center relative z-[1]`}>
        {data.map((dataFood) => (
            <FeatureCard key={dataFood.id} {...dataFood}/>
        ))}
        </div>
    </div>
</>
)};
export default Rekomendasi_1;