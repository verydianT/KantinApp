import React from 'react'

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-black bg-gradient-to-br from-teal-100 to-teal-600 rounded-[10px] outline-none ${styles} rounded-[10px]`}>
    Get Started
  </button>
);

export default Button