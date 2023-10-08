import React from "react";
import { Link } from 'react-router-dom';
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";

import { getFirestore, addDoc, collection, } from "firebase/firestore";

const Cart = () => {
    const { Cart, totalPrice } = useCartContext();

    const order = {
        buyer: {
            name: 'pablo',
            phone: '123123',
            address: 'asdd'
        },
        items: Cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then(({ id }) => console.log(id))

    }

    if (Cart.length === 0) {
        return (
            <>
                 <p>No hay elementos en el carrito</p>
                 <Link to='/'>Hacer Compras</Link>
            </>
        );
    }

    return (
        <>
            {
                Cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <p>
                total: {totalPrice()}
            </p>
            <button onClick={handleClick}>Emitir Compra</button>
        </>
    )
}

export default Cart;
