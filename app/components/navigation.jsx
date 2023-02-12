import { Link, useLocation } from '@remix-run/react';
import cart from '../../public/img/cart.png';
function Navigation() {
    const location = useLocation();
    return (
        <nav className="navigation">
            <Link to={'/'} prefetch="render" className={location.pathname === '/' ? 'active' : ''}> Inicio</Link>
            <Link to={'/about'} prefetch="render" className={location.pathname === '/about' ? 'active' : ''}> Nosotros </Link>
            <Link to={'/guitars'} prefetch="render" className={location.pathname === '/guitars' ? 'active' : ''}> Tienda </Link>
            <Link to={'/blog'} prefetch="render" className={location.pathname === '/blog' ? 'active' : ''}> Blog </Link>
            <Link to={'/cart'} prefetch="render" > <img src={cart} alt="Shopping cart" /> </Link>
        </nav>
    )
}

export default Navigation