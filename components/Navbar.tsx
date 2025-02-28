"use client"

import { useState, useEffect, FunctionComponent } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const NavItem: FunctionComponent<{
   active: string
   setActive: (name: string) => void 
   name: string
   route: string
}> = ({ active, setActive, name, route }) => {
   return active !== name ? (
      <Link href={route}>
         <span
            className='mx-2 cursor-pointer hover:border-b-4 hover:text-green'
            onClick={() => setActive(name)}>
            {name}
         </span>
      </Link>
   ) : null
}


const Navbar = () => {
   const pathname = usePathname() 

   const [active, setActive] = useState('')

   useEffect(() => {
      if (pathname === '/') setActive('About')
      else if (pathname === '/portfolio') setActive('Portfolio')
      else if (pathname === '/experience') setActive('Experience')
   }, [pathname]) 

   return (
      <div className='flex items-center justify-between px-5 py-3 mt-3'>
         <span className='text-xl font-bold border-b-4 md:text-2xl border-green-400'>
            {active}
         </span>

         <div className='text-base font-normal md:text-xl'>
            <NavItem
               active={active}
               setActive={setActive}
               name='About'
               route='/'
            />
            <NavItem
               active={active}
               setActive={setActive}
               name='Experience'
               route='/experience'
            />
            <NavItem
               active={active}
               setActive={setActive}
               name='Portfolio'
               route='/portfolio'
            />
         </div>
      </div>
   )
}

export default Navbar
