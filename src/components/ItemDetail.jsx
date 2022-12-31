import React from 'react';
import { useState, useContext } from 'react';
import ItemCount from './ItemCount';
import Button from 'react-bootstrap/Button';
import {DetailContainer, WrapperDetail, ImgContainer, ImageDetail, InfoContainer, Title, Desc, Price} from "./styledComponents"
import { CartContext } from './CartContext';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState (0)
    
    const ctx = useContext(CartContext);

    function swalqty (qty) {
        const swalQty = withReactContent(Swal)
        if (qty > 1) {
            swalQty.fire({
                title: `Seleccionaste ${qty} items`,
                })
        } else {
            swalQty.fire({
                title: `Seleccionaste ${qty} item`,
                })
        }
    } 

    const onAdd = (qty) => {
        if ((qty) > 0) {
        swalqty(qty)
        setItemCount(qty);
        ctx.addToCart(item, qty);
    }}

    return (
        <>
        {
            item && item.img
            ? 
            <DetailContainer>
                <WrapperDetail>
                    <ImgContainer>
                        <ImageDetail src={item.img} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.nombre}</Title>
                        <Desc>{item.tipo}</Desc>
                        <Price>$ {item.precio}</Price>
                        <Desc>{item.stock} unidades en stock</Desc>
                    </InfoContainer>
                    {
                        itemCount === 0
                        ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                        : <Link to='/cart' style={{textDecoration: "none"}}><Button>Ir al carrito</Button></Link>
                    }
                </WrapperDetail>
            </DetailContainer>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;