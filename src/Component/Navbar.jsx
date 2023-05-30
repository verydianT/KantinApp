import { useState} from 'react'
import { close, menu, logo } from "../assets";
import { navLinks } from '../constants';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <Link to="/">
      <img src={logo} alt="Kantin Pintar" className="w-[124px] h-[32px]"/>
      </Link>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-normal font-poppins cursor-pointer text-[16px] ${index === navLinks.length - 1 ? `mr-0` : `mr-10`} text-white`}
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
          <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-gradient-to-r from-zinc-700 from-50% to-zinc-900
          absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
              <ul className='list-none flex flex-col justify-end items-center flex-1'>
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`font-normal font-poppins cursor-pointer text-[16px] ${index === navLinks.length - 1 ? `mr-0` : `mb-4`} text-white`}
                  >
                    <a href={`#${nav.id}`}>
                      {nav.title}
                    </a>
                  </li>
                ))}
              </ul>
          </div>
      </div>
    </nav>
  )
}

export default Navbar;