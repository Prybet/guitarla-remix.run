import { useLoaderData } from '@remix-run/react';
import { getGuitars } from '~/models/guitars.server';
import { getCourse } from '~/models/course.server';
import { getPosts } from '~/models/posts.server';
import GuitarsList from '../components/guitars-list';
import PostsList from '../components/posts-list';
import stylesGuitars from '~/styles/guitars.css';
import stylesPosts from '~/styles/blog.css';
import Course from '../components/course';
import stylesCourse from '~/styles/course.css';

export function meta() {
    return ({
        charset: 'utf-8',
        title: 'Guitar La - Tienda de guitarras',
        description: 'Nuestra colección de guitarras',
        viewport: 'width=device-width,initial-scale=1'
    });
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: stylesGuitars
        },
        {
            rel: 'stylesheet',
            href: stylesCourse
        },
        {
            rel: 'stylesheet',
            href: stylesPosts
        }
    ];
}

export async function loader() {

    const [guitars, course, posts] = await Promise.all([
        getGuitars(),
        getCourse(),
        getPosts()

    ]);

    return { guitars: guitars.data, course: course.data, posts: posts.data };
}

function Index() {
    const { guitars, course, posts } = useLoaderData();
    return (
        <>
            <main className='container'>
                <GuitarsList guitars={guitars} />
            </main>
            <Course course={course?.attributes} />
            <section className='container'>
                <PostsList posts={posts} />
            </section>

        </>
    )
}

export default Index