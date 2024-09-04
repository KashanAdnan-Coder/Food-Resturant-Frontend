import React from 'react'
import Curve from "@/components/header/nav/curve"
import Link from "@/components/header/nav/Link"
import { motion } from "framer-motion"
import { signOut } from "@/redux/slice/authSlice";
import { toast } from "react-toastify";
import { menuSlide } from '../anim'
import { useDispatch, useSelector } from 'react-redux'

const index = () => {
    const user = useSelector(state => state.user)
   
    const navItems = [
        {
            title: "Home",
            href: "/"
        },
        {
            title: "Sign Up",
            href: "/signup"
        },
        {
            title: "Login",
            href: "/signin"
        },
    ]
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(signOut())
        toast.success("Logout Successfull!")
    }
    return (
        <motion.div variants={menuSlide} animate={"enter"} exit={"exit"} initial={"initial"} className='fixed  right-0 h-screen bg-[rgb(41,41,41)] text-white'>
            <div className='p-[100px] flex justify-between'>
                <div className="flex flex-col text-[56px] gap-[12px] mt-[40px]">
                    <div className="text-[#999999] border-b-[1px] uppercase text-[14px] pb-2">
                        <p>Navigation</p>
                    </div>
                    {
                        navItems.map((item, index) => {
                            return <Link data={{ ...item, index }} />
                        })
                    }
                    <h1 className=''>{user?.currentUser?.username}</h1>
                    {user.currentUser && <button onClick={logout} className="text-2xl bg-[#455CE9] text-white px-6 rounded-lg py-4">Logout</button>}
                </div>
            </div>
            <Curve />
        </motion.div>
    )
}

export default index
