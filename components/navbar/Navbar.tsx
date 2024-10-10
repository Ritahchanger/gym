import React from 'react'

import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="nav">
        <div className="container flex justify-between">

            <div>

                <ul>
                    <li>
                        <Link href="#">About</Link>
                    </li>
                    <li>
                        <Link href="#">Membership</Link>
                    </li>
                    <li>
                        <Link href="#">Blog</Link>
                    </li>
                    <li>
                        <Link href="#">Contact</Link>
                    </li>
                </ul>

            </div>

            <div>
                <a href="#">OURGYM</a>
            </div>

            <div>

                <button>

                    &#9776;

                </button>

            </div>

        </div>
    </nav>
  )
}

export default Navbar