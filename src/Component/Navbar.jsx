import { useState} from 'react'
import { close, menu, logo, kantin } from "../assets";
import { navLinks } from '../constants';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <Link to="/">
      <img src={kantin} alt="Kantin Pintar" className="w-[70px] h-[70px] object-contain sm:w-[80px] sm:h-[80px]"/>
      </Link>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-semibold font-poppins cursor-pointer text-[16px] ${index === navLinks.length - 1 ? `mr-0` : `mr-10`} text-white`}
          >
            <Link to={nav.link}>
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu}
              alt="menu" className="w-[28px] h-[28px] object-contain"
              onClick={() => setToggle((prev) => !prev)}
          />
          <div className={`${toggle ? 'flex' : 'hidden'} p-4
          absolute top-0 right-10 mt-5 h-[70px] rounded-xl sidebar`}
          >
              <ul className='list-none flex flex-row mt-2'>
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`font-normal font-poppins cursor-pointer text-[16px] ${index === navLinks.length - 1 ? `mr-0` : `mb-4`} text-white`}
                  >
                    <Link to={nav.link}>
                      <a href={`#${nav.id}`} className="mx-2 underline">
                        {nav.title}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
          </div>
      </div>
    </nav>
  )
}

export default Navbar;