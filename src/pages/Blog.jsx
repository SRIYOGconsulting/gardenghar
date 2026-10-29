import { useState } from "react";
import BlogCard from "../components/BlogCard.jsx";
import { posts } from "../data/blog.js";
import PageHeader from "../components/PageHeader.jsx";

export default function Blog() {
    const [query, setQuery] = useState("");
    const q = query.trim().toLowerCase();

    const results = posts.filter((p) =>
        [p.title, p.excerpt, p.author].join(" ").toLowerCase().includes(q),
    );

    const popular = posts.find((p) => p.group === "popular");
    const featured = posts.filter((p) => p.group === "featured");
    const recent = posts.filter((p) => p.group === "recent");

    return (
        <>
            <PageHeader
                title="Blog"
                subtitle="Search for Servicing Blog in Nepal"
                crumb="Blog"
                image="/images/headers/projects5.webp"
            >
                <div className="blog-search">
                    <img
                        src="/svg/BlogPage-svg/search.svg"
                        alt="a search icon"
                        className="svg-img"
                    />
                    <input
                        type="search"
                        placeholder="Search..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        aria-label="Search blog posts"
                    />
                </div>
            </PageHeader>
            <div className="section container">
                {q ? (
                    <>
                        <h2 className="blog-title">
                            {results.length} result
                            {results.length === 1 ? "" : "s"} for “
                            {query.trim()}”
                        </h2>
                        {results.length === 0 ? (
                            <p>No posts found. Try a different word.</p>
                        ) : (
                            <div className="blog-grid3">
                                {results.map((p, i) => (
                                    <BlogCard key={p.slug} post={p} index={i} />
                                ))}
                            </div>
                        )}
                    </>
                ) : (
                    <>
                        <h2 className="blog-title">Popular Post</h2>
                        <BlogCard post={popular} variant="popular" index={0} />

                        <h2 className="blog-title">Featured Posts</h2>
                        <div className="blog-grid2">
                            {featured.map((p, i) => (
                                <BlogCard
                                    key={p.slug}
                                    post={p}
                                    variant="featured"
                                    index={i + 1}
                                />
                            ))}
                        </div>

                        <h2 className="blog-title">Recent Posts</h2>
                        <div className="blog-grid3">
                            {recent.map((p, i) => (
                                <BlogCard key={p.slug} post={p} index={i + 3} />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
