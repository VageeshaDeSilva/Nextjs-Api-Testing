import React from 'react'
import Link from 'next/link'

function NavBar() {
  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <ul className="flex space-x-6 items-center justify-center">
          <li>
            <Link href="/" className="text-white font-semibold hover:text-blue-400 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="text-white font-semibold hover:text-blue-400 transition-colors">
              Products
            </Link>
          </li>
          <li>
            <Link href="/users" className="text-white font-semibold hover:text-blue-400 transition-colors">
              Users
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar