import { Link } from "@remix-run/react";
import { formatDate } from '~/utils/helpers';
export default function Post({ post }) {
    const { title, image, content, url, publishedAt } = post;
    return (
        <article className="post">
            <img className="image" src={image.data.attributes.formats.small.url} alt={`Blog image ${title}`} />
            <div className="content">
                <h3>{title}</h3>
                <p className="date">{formatDate(publishedAt)}</p>
                <p className="summary">{content}</p>
                <Link className="link" to={`/blog/${url}`}> Leer entrada</Link>
            </div>
        </article>
    )
}
