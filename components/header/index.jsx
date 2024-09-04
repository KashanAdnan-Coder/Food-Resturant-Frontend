'use client'
import { useEffect, useState } from 'react'
import Nav from "@/components/header/nav"
import { AnimatePresence } from 'framer-motion'
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { useSelector } from 'react-redux';
import Link from 'next/link';

const index = () => {
    const [isActive, setIsActive] = useState(false)
    const cart = useSelector(state => state.cart)

    return (
        <>
            <Link href="/cart" className='fixed right-20 m-[20px] w-[65px] h-[65px] flex justify-center items-center cursor-pointer z-[2] cart' data-count={cart.cart}>
                <HiOutlineShoppingCart size={40} color={isActive ? "#fff" : ""} />
            </Link>
            <div onClick={() => setIsActive(!isActive)} className="fixed right-0 m-[20px] w-[65px] h-[65px] bg-[#455CE9] rounded-full flex justify-center items-center cursor-pointer z-[2]">
                <div className={`burger ${isActive ? "burgerActive" : ""}`}></div>
            </div>
            <AnimatePresence mode='wait'>
                {isActive && <Nav />}
            </AnimatePresence>
        </>
    )
}

export default index
