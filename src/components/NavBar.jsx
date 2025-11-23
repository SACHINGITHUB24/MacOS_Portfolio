import dayjs from "dayjs";
import React from 'react'
import { navIcons, navLinks } from '#constants';

const NavBar = () => {
  return (
    <nav className='flex justify-between bg-white/50 backdrop-blur-3xl  px-4 select-none'>
      <div>
      <img className='w-9  ml-2' src="src\assets\applelogo-removebg-preview.png" alt="applelogo" />

      <p className='font-bold'>Sachin's Portfolio</p>


      <ul>
        {navLinks.map(({ name, id }) => (
          <li key={id}>
            <p>{name}</p>
          </li>
        ))}
      </ul>
      </div>


      <div>
        <ul>
          {navIcons.map(({id,img}) => (
            <li key={id}>
              <img className='icon-hover' src={img} alt={`icon-${id}`} />
            </li>
          ))}
        </ul>
        

        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  )
}

export default NavBar



