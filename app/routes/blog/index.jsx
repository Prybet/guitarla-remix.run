import { useLoaderData } from '@remix-run/react';
import { getPosts } from '~/models/posts.server';
import PostsList from '~/components/posts-list';

export async function loader() {
    return await getPosts();
}

export function meta() {
    return ({
        charset: 'utf-8',
        title: 'Guitar La - Nuestro Blog',
        description: 'Venta de guitarras blog de música y demás',
        viewport: 'width=device-width,initial-scale=1'
    });
}
function Index() {
    const { data } = useLoaderData();
    return (
        <PostsList posts={data} />
    )
}

export default Index