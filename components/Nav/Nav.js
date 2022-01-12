import React from 'react';
import Link from 'next/link';
export const Nav = ()=>{

    return(
        <nav className="navbar navbar-light bg-light">
            <div className='container-fluid'>
                <Link className="navbar-brand mb-0 h1" href="/" >Navbar</Link>
            </div>
        </nav>
    )
}
export default Nav;