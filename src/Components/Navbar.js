import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
        <div className="relative shadow bg-black">
    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"></div>

    <div className="w-full backdrop-blur-sm">
        <div className="relative z-1 h-16 mx-auto px-5 max-w-7xl flex items-center justify-between text-white">
            <Link className="text-2xl hover:text-cyan-400 transition-colors" href="">CarboonFootprint</Link>

            <ul className="flex items-center gap-5">
                <li><Link className="hover:text-cyan-400 transition-colors" href="/">Dashboard</Link></li>
                {/* <li><Link className="hover:text-cyan-400 transition-colors" href="">Link 2</Link></li>
                <li><Link className="hover:text-cyan-400 transition-colors" href="">Link 3</Link></li>
                <li><Link className="hover:text-cyan-400 transition-colors" href="">Link 4</Link></li>
                <li><Link className="hover:text-cyan-400 transition-colors" href="">Link 5</Link></li> */}
            </ul>
        </div>
    </div>
</div>
    </>
  )
}

export default Navbar
