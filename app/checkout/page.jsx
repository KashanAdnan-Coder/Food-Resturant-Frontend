'use client'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeSingleCart } from "@/redux/slice/cartSlice"

const page = () => {
    const cart = useSelector(state => state.cart)
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    let prices = []
    const [pay, setPay] = useState("")
    const payMoney = () => {
        
    }
    cart.items.forEach(element => {
        prices.push(element.price)
    });
    return (
        <div>
            <h1 className='text-xl'>Checkout</h1>
            <p>Review</p>
            {
                cart.items.map((item) => {
                    return (
                        <div className='flex items-center justify-start w-full px-4 py-6'>
                            <img src={item.image} width={100} height={100} />
                            <div className='ml-4'>
                                <span> {item.title}</span>
                                <span> ${item.price}</span>
                            </div>
                        </div>
                    )
                })
            }
            <div>Payment Methods</div>
            <select className='flex gap-4 mt-4' onChange={(e) => setPay(e.target.value)}>
                <option>Select Payment Methods</option>
                <option value={"stripe"}>Stripe</option>
                <option value={"cash method"}>Cash Pay</option>
                <option value={"easy paisa"}>Easy Pasia</option>
            </select>
            <button className='bg-[#455CE9] text-white px-4 py-3 rounded-md mt-4' onClick={pay}>Pay Now</button>
        </div>
    )
}

export default page
