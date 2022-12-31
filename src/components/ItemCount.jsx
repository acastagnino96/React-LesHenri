import React from 'react'
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { ProductAmountContainer, ProductAmount} from './styledComponents';

const ItemCount = ({ stock = 0, initial = 1,  onAdd }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[]);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    
    const decrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }
    return (
        <ProductAmountContainer>
            <Button variant="primary" onClick={decrement}>-</Button>
            <ProductAmount>{count}</ProductAmount>
            <Button variant="primary" onClick={increment}>+</Button>
            
            {
                stock && count
                ? <Button variant="primary" onClick={() => onAdd(count)}>Agregar al carrito</Button>
                : <Button variant="primary" disabled>Agregar al carrito</Button>
            }
            
        </ProductAmountContainer>
    );
}

export default ItemCount;