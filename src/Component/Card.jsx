import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, img }) => (
  <Link to="/Toko">  
    <div className="flex flex-col p-5 rounded-[20px] w-[145px] h-[170px] sm:mx-5 mx-2 my-4 hover:bg-gray-500">
      <img src={img} alt="kantin" className="w-[75px] h-[75px] flex justify-center mx-auto object-contain bg-blue-100 rounded-lg"/>
      <h2 className="flex justify-center font-normal text-[18px] text-white text-center mt-2">
        {name}
      </h2>
    </div>
    </Link>
  );

export default Card