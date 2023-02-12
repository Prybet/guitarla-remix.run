import { useOutletContext } from '@remix-run/react';
import { useEffect, useState } from 'react';
import { ClientOnly } from 'remix-utils'
import styles from '~/styles/cart.css';

export function meta() {
    return ({
        charset: 'utf-8',
        title: 'Guitar La - Carrito de compras',
        description: 'Venta de guitrras, musica, blog, carrito de compras, tienda',
        viewport: 'width=device-width,initial-scale=1'
    });
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ];
}

function Cart() {
    const [total, setTotal] = useState(0);
    const { cart, updateQtyCart, deleteGuitarCart } = useOutletContext();

    useEffect(() => setTotal(cart.reduce((total, item) => total + (item.qty * item.price), 0)), [cart]);

    return (
        <ClientOnly fallback={'loading...'}>
            {() => (
                <main className="container">
                    <h1 className="heading"> Carrito de compras</h1>
                    <div className="content">
                        <div className='cart'>
                            <h2>Articulos</h2>
                            {cart?.length === 0 ? 'Carrito de compras vacio' : (
                                cart?.map(item => (
                                    <div className='product' key={item.id} >
                                        <div>
                                            <img src={item.image} alt={`Produc Image ${item.name}`} />
                                        </div>
                                        <div>
                                            <p className='name'>{item.name}</p>
                                            <p >Cantidad:</p>
                                            <select onChange={e => updateQtyCart({ qty: parseInt(e.target.value), id: item.id })} className='select' value={item.qty}>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                            <p className='price'> Price : $ <span> {item.price}</span> </p>
                                            <p className='subtotal'> Subtotal : $ <span> {item.qty * item.price}</span> </p>
                                        </div>
                                        <button onClick={() => deleteGuitarCart(item.id)} type='button' className='btn-delete'>x</button>
                                    </div>
                                ))
                            )}
                        </div>
                        <aside className="summary">
                            <h3>Resumen de tu pedido</h3>
                            <p>Total a pagar: ${total}</p>
                        </aside>
                    </div>

                </main>
            )}

        </ClientOnly>

    )
}

export default Cart