import { useEffect, useState } from 'react';
import {
    Meta, Links, Outlet, Scripts, LiveReload, useCatch, Link
} from '@remix-run/react';
import Header from '~/components/header';
import styles from '~/styles/index.css';
import Footer from '~/components/footer';



export function meta() {
    return ({
        charset: 'utf-8',
        title: 'Guitar La - Remix',
        viewport: 'width=device-width,initial-scale=1'
    });
}
export function links() {
    return [
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin: 'true'
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
        },
        {
            rel: 'stylesheet',
            href: styles
        }
    ];
}

export default function App() {

    const cartLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cart')) ?? [] : null;

    const [cart, setCart] = useState(cartLS);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = guitar => {
        if (cart.some(guitarState => guitarState.id === guitar.id)) {

            setCart(cart.map(guitarState => {
                if (guitarState.id === guitar.id) {
                    guitarState.qty = guitar.qty;
                }
                return guitarState;
            }));
        } else {
            setCart([...cart, guitar]);
        }

    }

    const updateQtyCart = guitar => {
        setCart(
            cart.map(guitarState => {
                if (guitarState.id === guitar.id) {
                    guitarState.qty = guitar.qty
                }
                return guitarState;
            })
        );
    }
    const deleteGuitarCart = id => setCart(cart.filter(guitarState => guitarState.id !== id));


    return (
        <Document>
            <Outlet context={{
                cart,
                addToCart,
                updateQtyCart,
                deleteGuitarCart
            }} />
        </Document>
    );
}

function Document({ children }) {
    return (
        <html lang="es">
            <head>
                <Meta />
                <Links />
            </head>

            <body>
                <Header />
                {children}
                <Footer />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}

export function CatchBoundary() {
    const error = useCatch();
    return (
        <Document>
            <p className='error'> {error.status} {error.statusText}</p>
            <Link className='error-link' to="/"> Talvez quieras volver a la pagina principal</Link>
        </Document>
    );
}

export function ErrorBoundary({ error }) {
    return (
        <Document>
            <p className='error'> {error.status} {error.statusText}</p>
            <Link className='error-link' to="/"> Talvez quieras volver a la pagina principal</Link>
        </Document>
    );
}