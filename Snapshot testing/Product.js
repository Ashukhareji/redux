import React from 'react'
import './Product.css'
const Product = ({ items = [] }) => {
    if (items.length <= 0) {
        return <div>No items Found</div>
    }

    else {
        return <div>
            {items.map((items, index) => {
                return <h4 key={index} >{items}</h4>
            })}
        </div>
    }
}


export default Product