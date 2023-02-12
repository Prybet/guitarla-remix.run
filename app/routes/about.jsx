import image from '../../public/img/about.jpg';
import styles from '~/styles/about.css';

export function meta() {
    return ({
        charset: 'utf-8',
        title: 'Guitar La - Nosotros',
        description: 'Venta de guitarras blog de música y demás',
        viewport: 'width=device-width,initial-scale=1'
    });
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        },
        {
            rel: 'stylesheet',
            href: image,
            as: image
        }
    ];
}

function About() {
    return (
        <main className="container about">
            <h2 className="heading">Nosotros</h2>

            <div className="content">
                <img src={image} alt="about image" />
                <div>
                    <p>
                        justo lectus sollicitudin ante, in scelerisque risus sem non est. Donec mattis imperdiet
                        Sed vulputate, tortor et facilisis iaculis, lacus augue scelerisque massa, non faucibus est libero in mi.
                        Praesent id nunc quis ipsum porta rutrum. Praesent mollis lectus sit amet facilisis tristique.
                    </p>
                    <p>
                        Vivamus bibendum urna suscipit placerat semper. Ut sollicitudin lorem urna, id feugiat nunc tempor in.
                        Curabitur in feugiat erat. Donec auctor, elit sit amet convallis finibus, dolor sem eleifend arcu, ac
                        faucibus lorem lectus in risus. Suspendisse ornare velit scelerisque, tempor velit at, placerat sem.
                        aliquet urna turpis ac quam. Vestibulum eget dui eu risus ultrices ultricies. Sed eget volutpat odio.
                    </p>
                </div>
            </div>
        </main>
    )
}

export default About