import { addCart, removeCart } from '@/redux/slice/cartSlice'
import React from 'react'
import { useDispatch } from 'react-redux'
const ProductCard = ({ data }) => {
    const dispatch = useDispatch()
    const addCartCount = () => {
        dispatch(addCart(data))
    }
    return (
        <div>
            <img src={data.image} width={400} height={400} alt={data.title} />
            <h1>{data.title}</h1>
            <p>{data.desc}</p>
            <button onClick={addCartCount}>Add to Cart</button>
        </div>
    )
}

export default ProductCard
