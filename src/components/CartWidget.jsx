import { BsCart2 } from 'react-icons/bs';

function CartWidget() {
    return (
        <a href="#cart">
            <BsCart2 />
            <button className="btn">{"0"}</button>
        </a>
    );
}

export default CartWidget;