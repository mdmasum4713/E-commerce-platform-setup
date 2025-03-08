"use client";
import Link from "next/link";

export  function Navbar() {
  return (
    <nav className="bg-blue-900 text-white py-4 px-6 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">
        FlexPay
      </Link>
      <ul className="flex gap-6">
        <li>
          <Link href="/shop/products" className="hover:text-gray-300">
            Shop
          </Link>
        </li>
        <li>
          <Link href="/user/dashboard" className="hover:text-gray-300">
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/auth/login" className="hover:text-gray-300">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar