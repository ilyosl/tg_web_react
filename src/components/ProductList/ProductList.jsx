import React, { useState } from 'react'
import './ProductList.css'
import ProductItem from '../ProductItem/ProductItem'
import { useTelegram } from '../../hooks/useTelegram';

const products = [
  {id: 1, title: "Maxsulot 1", price: 4000, description: "Maxsulot 1 haqida ma'lumotlar"},
  {id: 2, title: "Maxsulot 2", price: 5000, description: "Maxsulot 1 haqida ma'lumotlar"},
  {id: 3, title: "Maxsulot 3", price: 3000, description: "Maxsulot 1 haqida ma'lumotlar"},
  {id: 4, title: "Maxsulot 4", price: 8000, description: "Maxsulot 1 haqida ma'lumotlar"},
  {id: 5, title: "Maxsulot 5", price: 2000, description: "Maxsulot 1 haqida ma'lumotlar"},
  {id: 6, title: "Maxsulot 6", price: 7000, description: "Maxsulot 1 haqida ma'lumotlar"},
]

const getTotalPrice = (items=[]) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}

function ProductList() {
  const [addedItems, setAddedItems] = useState([]);
  const {tg} = useTelegram();


  const onAdd = (product) => {
      const alerdyAdded = addedItems.find(item=>item.id === product.id);
      let newItems = [];
      if(alerdyAdded){
        newItems = addedItems.find(item => item.id !== product.id)
      }else{
        newItems = [...addedItems, product]
      }
      setAddedItems(newItems)

      if(newItems.length === 0){
        tg.MainButton.hide();
      }else{
        tg.MainButton.show();
        tg.MainButton.setParams({
          text: `Sotib olish ${getTotalPrice(newItems)}`
        })
      }
  }
  return (
    <div className={'list'}>
      {
        products.map((item=>(
          <ProductItem 
            product={item}
            onAdd={onAdd }
            className={'item'}
          />
        )))
      }
    </div>
  )
}

export default ProductList