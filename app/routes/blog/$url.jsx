import { useLoaderData } from '@remix-run/react';
import { getPost } from '~/models/posts.server';
import { formatDate } from '~/utils/helpers';

export async function loader({ params }) {
    const { url } = params;
    const post = await getPost(url);

    if (post.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Entrada no encontrada'
        });
    }
    return post;
}

export function meta({ data }) {
    if (!data) {
        return {
            title: 'Guitarla - Entrada no encontrada',
            description: `Guitarras, Venta de Guitarras, Entrada no encontrada`,
        }
    }
    return ({
        charset: 'utf-8',
        title: `Guitar La - ${data.data[0].attributes.title}`,
        description: `Guitarras, Venta de Guitarras, entrada ${data.data[0].attributes.title}`,
        viewport: 'width=device-width,initial-scale=1'
    });
}

export default function Post() {
    const { title, image, content, publishedAt } = useLoaderData().data[0].attributes;
    return (
        <article className='post mt-3'>
            <img className="image" src={image.data.attributes.url} alt={`Blog image ${title}`} />
            <div className="content">
                <h3>{title}</h3>
                <p className="date">{formatDate(publishedAt)}</p>
                <p className="text">{content}</p>
            </div>
        </article>
    )
}
