'use client'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeSingleCart } from "@/redux/slice/cartSlice"
import Link from 'next/link'

const page = () => {
  const cart = useSelector(state => state.cart)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  let prices = []

  cart.items.forEach(element => {
    prices.push(element.price)
  });

  return (
    <div>
      {
        cart.items.map((item, index) => {
          return (
            <div className='flex items-center justify-start w-full px-4 py-6'>
              <img src={item.image} width={100} height={100} />
              <div>
                <span> {item.title}</span>
                <span> ${item.price}</span>
              </div>
              <button className='ml-6' onClick={() => {
                dispatch(removeSingleCart(index))
              }}>Remove</button>
            </div>
          )
        })
      }

      <h1>Total</h1>
      <p>total : ${prices.reduce((partialSum, a) => partialSum + a, 0)}</p>
      {user && <Link href={"/checkout"}>Checkout</Link>}
    </div>
  )
}

export default page
