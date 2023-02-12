import { useLoaderData, useOutletContext } from '@remix-run/react';
import { useState } from 'react';
import { getGuitar } from '~/models/guitars.server';

export async function loader({ params }) {
    const { url } = params;
    const guitar = await getGuitar(url);

    if (guitar.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Guitarra no encontrada'
        });
    }
    return guitar;
}

export function meta({ data }) {
    if (!data) {
        return {
            title: 'Guitarla - Guitarra no encontrada',
            description: `Guitarras, Venta de Guitarras, guitarra no encontrada`,
        }
    }
    return ({
        charset: 'utf-8',
        title: `Guitar La - ${data.data[0].attributes.name}`,
        description: `Guitarras, Venta de Guitarras, guitarra ${data.data[0].attributes.name}`,
        viewport: 'width=device-width,initial-scale=1'
    });
}

function Guitar() {

    const { addToCart } = useOutletContext();
    const [qty, setQty] = useState(0);
    const data = useLoaderData().data[0];
    const { name, price, image, description } = data.attributes;

    const handleSubmit = e => {
        e.preventDefault();
        if (qty < 1) {
            alert('Debe seleccionar una cantidad');
            return;
        }
        addToCart({
            id: data.id,
            image: image.data.attributes.formats.small.url,
            name,
            price,
            qty
        })
    }

    return (
        <div className='guitar'>
            <img src={image.data.attributes.url} alt={`Guitar image ${name}`} />
            <div className='content'>
                <h3>{name}</h3>
                <p className='text'>{description}</p>
                <p className='price'>{price}</p>

                <form onSubmit={handleSubmit} className='form'>
                    <label htmlFor="qty">Catidad</label>
                    <select onChange={e => setQty(parseInt(e.target.value))} name="" id="qty">
                        <option value="0">-- Seleccione --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <input type="submit" value="Agregar al carrito" />
                </form>
            </div>
        </div>
    )
}

export default Guitar