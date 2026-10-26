import { Link, useParams } from "react-router-dom";
import { FaRegClock } from "react-icons/fa";
import BlogCard from "../components/BlogCard.jsx";
import NotFound from "./NotFound.jsx";
import { posts } from "../data/blog.js";

export default function BlogPost() {
    const { slug } = useParams();
    const index = posts.findIndex((p) => p.slug === slug);
    if (index === -1) return <NotFound />;

    const post = posts[index];
    const related = posts.filter((p) => p.slug !== slug).slice(0, 3);
    const fallback = `/images/service${(index % 6) + 1}.webp`;

    return (
        <>
            <section className="blog-hero">
                <div className="container">
                    <p className="blog-crumbs">
                        <Link to="/">Home</Link> › <Link to="/blog">Blog</Link>{" "}
                        › <span>Post</span>
                    </p>
                    <h1 className="post-title">{post.title}</h1>
                    <div className="blog-meta center">
                        <span className="avatar">{post.author[0]}</span>
                        <span>{post.author}</span>
                        <span className="sep">•</span>
                        <span>{post.date}</span>
                        <span className="sep">•</span>
                        <span>
                            <FaRegClock /> {post.read}
                        </span>
                    </div>
                </div>
            </section>

            <article className="section container narrow-text">
                <img
                    className="post-img"
                    src={`/images/blog/${post.slug}.webp`}
                    alt={post.title}
                    onError={(e) => {
                        if (!e.currentTarget.src.endsWith(fallback))
                            e.currentTarget.src = fallback;
                    }}
                />
                {post.body.map((para, i) => (
                    <p key={i}>{para}</p>
                ))}
                <Link to="/blog" className="read-more">
                    ← Back to Blog
                </Link>
            </article>

            <section className="section alt">
                <div className="container">
                    <h2 className="blog-title">More Posts</h2>
                    <div className="blog-grid3">
                        {related.map((p, i) => (
                            <BlogCard key={p.slug} post={p} index={i} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
