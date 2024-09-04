'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

const Product = () => {
    let [food, setFood] = useState([])
    async function getFood() {
        let products = await axios.get("http://localhost:4000/api/food/")
        setFood(products.data.foods)
    }
    useEffect(() => {
        getFood()
    }, [])
    return (
        <div>
            {
                food.map((data) => {
                    return <ProductCard data={data} />
                })
            }
        </div>
    )
}

export default Product
