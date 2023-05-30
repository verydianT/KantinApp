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
          <div className={`${toggle ? 'flex' : 'hidden'} p-6
          absolute top-0 right-10 my-1 h-[70px] rounded-xl sidebar`}
          >
              <ul className='list-none flex flex-row'>
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