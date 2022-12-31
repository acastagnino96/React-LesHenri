import React from 'react';
import {ProductContainer, Image, Info, Icon} from "./styledComponents";
import {Link} from "react-router-dom";

const Item = ({ id, nombre, precio, stock, img }) => {
  return (
    <ProductContainer>
        <Image src={img} alt="" />
        <Info>
            <div>{nombre}</div>
            <Icon>
                <strong>$ {precio}</strong>
            </Icon>
            <Icon>
                {stock} unid.
            </Icon>
            <Icon style={{cursor: "pointer"}}>
                    <Link to={`/item/${id}`}>Detalles</Link>
            </Icon>
        </Info>
    </ProductContainer>
  );
}

export default Item;
