import { Link } from "react-router-dom";
import { FaRegClock, FaArrowRight } from "react-icons/fa";

export default function BlogCard({ post, variant = "recent", index = 0 }) {
    const fallback = `/images/service${(index % 6) + 1}.webp`;
    const to = `/blog/${post.slug}`;

    const handleError = (e) => {
        if (!e.currentTarget.src.endsWith(fallback))
            e.currentTarget.src = fallback;
    };

    return (
        <article className={`blog-card ${variant}`}>
            <Link to={to} className="blog-img-link">
                <img
                    src={`/images/blog/${post.slug}.webp`}
                    alt={post.title}
                    loading="lazy"
                    onError={handleError}
                />
            </Link>

            <div className="blog-body">
                <div className="blog-meta">
                    <span className="avatar">{post.author[0]}</span>
                    <span>{post.author}</span>
                    <span className="sep">•</span>
                    <span>{post.date}</span>
                    <span className="read">
                        <FaRegClock /> {post.read}
                    </span>
                </div>

                <h3>
                    <Link to={to}>{post.title}</Link>
                </h3>
                <p>{post.excerpt}</p>

                <Link to={to} className="read-more">
                    Read More <FaArrowRight />
                </Link>
            </div>
        </article>
    );
}
