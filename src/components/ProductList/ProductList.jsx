import React from "react";
import './ProductList.css';
import ProductItem from '../ProductItem/ProductItem';
import useTelega from '../../hooks/UseTelegram'

const products = [
  {id: '1', title: 'Куртка', price: 100, description: 'Размер: средний; цвет: синий'},
  {id: '2', title: 'Майка', price: 200, description: 'Размер: средний; цвет: синий'},
  {id: '3', title: 'Футболка', price: 300, description: 'Размер: средний; цвет: синий'},
  {id: '4', title: 'Кофта', price: 400, description: 'Размер: средний; цвет: синий'},
  {id: '5', title: 'Худи', price: 500, description: 'Размер: средний; цвет: синий'},
  {id: '6', title: 'Штаны', price: 600, description: 'Размер: средний; цвет: синий'},
  {id: '7', title: 'Шляпа', price: 700, description: 'Размер: средний; цвет: синий'},
  {id: '8', title: 'Гвозди', price: 800, description: 'Размер: средний; цвет: синий'},
  {id: '9', title: 'Кеды', price: 900, description: 'Размер: средний; цвет: синий'},
  {id: '10', title: 'Шорты', price: 1000, description: 'Размер: средний; цвет: синий'},
  {id: '11', title: 'Джинсы', price: 1100, description: 'Размер: средний; цвет: синий'},
]

const getTotalPrice = (items) => {
  return items.reduce((acc, item) => {
    return acc += item.price
  }, 0)
}

const ProductList = () => {
  const [
    addedItems, 
    setAddedItems
  ] = React.useState([]);

  const { tg } = useTelega();

  const onAdd = (product) => {
    const alreadyAdded = addedItems.find((item) => 
      item.id === product.id
    );

    let newItems = [];

    if(alreadyAdded) {
      newItems = addedItems.filter(item => 
        item.id !== product.id
      )
    } else {
      newItems = [...newItems, ...product]
    }

    setAddedItems(newItems);

    if(newItems.length === 0) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
      tg.MainButton.setParams({
        text: `Купить: ${getTotalPrice(newItems)}`
      });
    }
  }

  return(
    <div className="list">
      {products.map((item) => (
        <ProductItem
          product={item} 
          onAdd={onAdd}
          className='item'
        />
      ))}
    </div>
  )
}

export default ProductList;