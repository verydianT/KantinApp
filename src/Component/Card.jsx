import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, img }) => (
  <Link to="/Toko">  
    <div className="flex flex-col px-5 py-5 rounded-[20px] max-w-[250px] md:mx-10 sm:mx-5 mx-2 my-4 hover:bg-gray-500">
      <img src={img} alt="kantin" className="w-[100%] h-[100%] object-contain"/>
      <h2 className="flex justify-center font-normal text-[18px] leading-[32.4px] text-white my-2">
        {name}
      </h2>
      
    </div>
    </Link>
  );

export default Card