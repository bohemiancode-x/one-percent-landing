import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const Navbar = () => {
  return (
    <nav className="w-full container flex mx-auto items-center md:items-start justify-between py-2 md:py-0 md:px-3 md:mb-4">
        <div className="z-10 overflow-hidden relative md:mt-5">
                <Image
                    src="/images/logo.svg"
                      alt="1% logo"
                      width={0}
                      height={0}
                      className="object-cover w-full"
                />
                    
            </div>
        
            <div className="z-10 overflow-hidden relative">
                <Image
                    src="/images/one-percent-logo.png"
                      alt="1% Logo"
                      width={0}
                      height={0}
                      className="object-cover w-16 md:w-full"
                />
                    
            </div>
        <Button variant={"outline"} className='uppercase md:mt-5 rounded-none border-white/50 text-xs md:text-sm font-normal'>Log In</Button>
    </nav>
  )
}

export default Navbar