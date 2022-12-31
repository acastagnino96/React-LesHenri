import React, { useContext } from 'react'
import { CartContext } from './CartContext';
import Button from 'react-bootstrap/Button';
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from 'firebase/firestore';
import {db} from '../utils/FirebaseConfig';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Link } from 'react-router-dom';
import {ItemCart, Image, Info, Icon} from "./styledComponents";

const Cart = () => {
    const ctx = useContext(CartContext);

    const createOrder = () => {
      const itemsForDB = ctx.cartList.map(item => ({
        id: item.idItem,
        nombre: item.titleItem,
        precio: item.costItem,
        qty: item.qtyItem
      }));
  
      ctx.cartList.forEach(async (item) => {
        const itemRef = doc(collection (db, "products"), item.idItem);
        await updateDoc(itemRef, {
          stock: increment(-item.qtyItem)
        });
      });
  
      let order = {
        buyer: {
          name: "Agustina",
          email: "acas@gmail.com",
          phone: "1158962569"
        },
        total: ctx.calcTotal(),
        items: itemsForDB,
        date: serverTimestamp()
      };
      
      const createOrderInFirestore = async () => {
        const newOrderRef = doc(collection(db, "orders"));
        await setDoc(newOrderRef, order);
        return newOrderRef;
      }

      function swalorder (result) {
        const swalOrder = withReactContent(Swal)
            swalOrder.fire({
                title: `Tu compra se ha realizado con éxito.`,
                text: `Por favor toma nota del ID de tu orden. \n Orden ID: ${result.id}`
                })
        }
    
      createOrderInFirestore()
        .then(result => swalorder(result))
        .catch(err => console.log(err));
    
      ctx.removeList();
      }

    return (
      <>
            Tu Carrito.
                <br />
                <Link to='/'>Continuar comprando</Link>
                <br /><br />
                {
                  (ctx.cartList.length > 0)
                  ? <Button onClick={ctx.removeList}>Eliminar todos los productos</Button>
                  : <p>Carrito vacío</p>
                }
                {
                  ctx.cartList.length > 0 &&
                  ctx.cartList.map(item => 
                    <ItemCart>
                        <Image src={item.imgItem} alt="" />
                        <Info>
                            <div>{item.titleItem}</div>
                            <Icon>
                                <strong>$ {item.costItem}</strong>
                            </Icon>
                            <Icon>
                                <div>Cantidad: {item.qtyItem}</div>
                            </Icon>
                            <Icon>
                                <div>Costo total: ${ctx.calcTotalPerItem(item.idItem)}</div>
                            </Icon>
                            <Button type="filled" onClick={() => ctx.deleteItem(item.idItem)}>DELETE</Button>
                        </Info>
                    </ItemCart>
                  )
                }
                {
                  ctx.cartList.length > 0 &&
                    <>
                    <div className="container">
                      <div className='product-cart row'>
                        RESUMEN
                      <p>TOTAL: $ {ctx.calcSubTotal()}</p>
                      <Button onClick={createOrder}>Finalizar compra</Button>
                      </div>
                    </div>
                    </>
                }
      </>
    );
}

export default Cart