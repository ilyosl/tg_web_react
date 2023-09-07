import React from 'react'
import './ProductItem.css'
import Buttons from '../Button/Buttons'
function ProductItem({product, className, onAdd}) {
    const onAddHandler = () => {
        onAdd(product)
    }
    return (
        <div className={'product '+className}>
            <div className={'img'}></div>
            <div className={'title'}>{product.title}</div>
            <div className={'description'}>{product.description}</div>
            <div className={'price'}>
                <span> Narxi: <b>{product.price}</b></span>
            </div>
            <Buttons className='add_btn' onClick={onAddHandler}>
                Savatchaga qo'shish
            </Buttons>
        </div>
    )
}

export default ProductItem