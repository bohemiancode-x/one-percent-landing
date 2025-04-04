import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <nav className="w-full container flex mx-auto items-center justify-between p-3 md:mb-4">
        <h1 className='text-lg' style={{ fontFamily: 'Spirax, cursive' }}>1%</h1>
            <div className="z-10 ml-10 md:ml-0 overflow-hidden relative">
                <Image
                    src="/images/one-percent-logo.png"
                      alt="1% Logo"
                      width={0}
                      height={0}
                      className="object-cover w-16 md:w-24"
                />
                    
            </div>
        
        <Button variant={"outline"} className='uppercase rounded-none border-white/50 text-xs md:text-sm font-normal'>Log In</Button>
    </nav>
  )
}

export default Navbar