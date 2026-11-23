import { Link } from "react-router-dom";
import "./BlogCard.css";
import { DEFAULT_PROFILE_PIC, getProfilePic } from "../../data/profilePics.js";

export default function BlogCard({ post, variant = "recent", index = 0 }) {
    const to = `/blog/${post.slug}`;

    return (
        <article className={`blog-card ${variant}`}>
            <Link to={to} className="blog-img-link">
                <img
                    src={`/images/home/service${(index % 6) + 1}.webp`}
                    alt={post.title}
                    loading="lazy"
                />
            </Link>

            <div className="blog-body">
                <div className="blog-meta">
                    <img
                        className="profile-pic"
                        src={getProfilePic(post.author)}
                        alt={`${post.author} profile`}
                        onError={(event) => {
                            event.currentTarget.onerror = null;
                            event.currentTarget.src = DEFAULT_PROFILE_PIC;
                        }}
                    />
                    <span>{post.author}</span>
                    <span className="sep">•</span>
                    <span>{post.date}</span>
                    <span className="read">
                        <img
                            src="/svg/BlogPage-svg/clock.svg"
                            alt="a clock icon"
                            className="svg-img"
                        />
                        {post.read}
                    </span>
                </div>

                <h3>
                    <Link to={to}>{post.title}</Link>
                </h3>
                <p>{post.excerpt}</p>

                <Link to={to} className="read-more">
                    Read More{" "}
                    <img
                        src="/svg/BlogPage-svg/right-arrow.svg"
                        alt="a right arrow icon"
                        className="svg-img"
                    />
                </Link>
            </div>
        </article>
    );
}
