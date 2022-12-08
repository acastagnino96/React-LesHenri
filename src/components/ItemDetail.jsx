import React from 'react';
import ItemCount from './ItemCount';
import {DetailContainer, WrapperDetail, ImgContainer, ImageDetail, InfoContainer, Title, Desc, Price} from "./styledComponents"

const ItemDetail = ({item}) => {

    return (
        <>
        {
            item.img
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
                    <ItemCount/>
                </WrapperDetail>
            </DetailContainer>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;