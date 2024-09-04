'use client'
import React from 'react'
import { useSelector } from 'react-redux'

const page = () => {
  const cart = useSelector(state => state.cart)

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
            </div>
          )
        })
      }
    </div>
  )
}

export default page
