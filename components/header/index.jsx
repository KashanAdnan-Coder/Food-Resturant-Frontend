'use client'
import { useState } from 'react'
import Nav from "@/components/header/nav"
import { AnimatePresence } from 'framer-motion'

const index = () => {
    const [isActive, setIsActive] = useState(false)
    return (
        <>
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
