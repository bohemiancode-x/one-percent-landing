import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <nav className="w-full container flex mx-auto items-center justify-between p-2 mb-4">
        <h1 style={{ fontFamily: 'Spirax, cursive' }}>1%</h1>
        <div className="">
            <div className="z-10 overflow-hidden relative">
                <Image
                    src="/images/one-percent-logo.png"
                      alt="1% Logo"
                      width={0}
                      height={0}
                      className="object-cover w-24"
                />
                    
            </div>
        </div>
        <Button variant={"outline"} className='uppercase rounded-none border-white/50 font-normal'>Log In</Button>
    </nav>
  )
}

export default Navbar