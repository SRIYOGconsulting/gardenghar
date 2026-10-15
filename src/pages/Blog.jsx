import PageHeader from "../components/PageHeader.jsx";
import { posts } from "../data/content.js";

export default function Blog() {
    return (
        <>
            <PageHeader
                title="Blog"
                subtitle="Search for popular Blog about our Servicing in Nepal"
                crumb="Projects"
                image="/images/headers/projects5.jpg"
            />
            <section className="section container grid3">
                {posts.map((p) => (
                    <article className="card" key={p.id}>
                        <img className="img" src={p.image} alt={p.title} />
                        <h3>{p.title}</h3>
                        <small>
                            {p.author} • {p.date} • {p.read}
                        </small>
                    </article>
                ))}
            </section>
        </>
    );
}
