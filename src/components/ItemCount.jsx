import React from 'react'
import { useEffect, useState } from 'react';
import { ProductAmountContainer, ProductAmount, ProductAdd } from './styledComponents';

class ItemCount extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
    }

    sumar(){
        this.setState({
            counter:this.state.counter + 1 
        })
    }

    restar(){
        this.setState({
            counter:this.state.counter - 1 
        })
    }

    render(){
        return (
        <ProductAmountContainer>
            <button onClick={this.restar}>-</button>
            <ProductAmount>
                {this.state.counter}
            </ProductAmount>
            <button onClick={this.sumar}>+</button>
            <hr />
            <ProductAdd>
                <button onClick>Agregar</button>
            </ProductAdd>
        </ProductAmountContainer>
        )
    }
}
export default ItemCount;