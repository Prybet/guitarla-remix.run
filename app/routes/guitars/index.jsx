import { useLoaderData } from '@remix-run/react';
import { getGuitars } from '~/models/guitars.server';
import GuitarsList from '~/components/guitars-list';

export function meta() {
    return ({
        charset: 'utf-8',
        title: 'Guitar La - Tienda de guitarras',
        description: 'Nuestra colección de guitarras',
        viewport: 'width=device-width,initial-scale=1'
    });
}


export async function loader() {
    return await getGuitars();
}

function Index() {
    const { data } = useLoaderData();
    return (
        <GuitarsList guitars={data} />
    )
}

export default Index