import React from 'react'
import Item from "./Item";
import {ProductsContainer} from "./styledComponents"

const ItemList = ({items}) => {
  return (
    <ProductsContainer>
    {
        items.length > 0
        ? items.map(item => <Item key={item.id} {...item} />)
        : <p>Cargando...</p>
    }
    </ProductsContainer>
  )
}

export default ItemList;
