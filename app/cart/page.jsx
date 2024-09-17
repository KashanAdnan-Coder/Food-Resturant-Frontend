'use client'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeSingleCart } from "@/redux/slice/cartSlice"

const page = () => {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  return (
    <div>
      {
        cart.items.map((item) => {
          return (
            <div className='flex items-center justify-start w-full px-4 py-6'>
              <img src={item.image} width={100} height={100} />
              <div>
                <p> {item.title ? 'This is never prerendered' : item.title}</p>
              </div>
              <button className='ml-6' onClick={() => {
                dispatch(removeSingleCart(item._id))
              }}>Remove</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default page
