import PageHeader from "../components/PageHeader.jsx";
import { posts } from "../data/content.js";

export default function Blog() {
  return (
    <>
      <PageHeader title="Blog" />
      <section className="section container grid3">
        {posts.map((p) => (
          <article className="card" key={p.id}>
            <img className="img" src={p.image} alt={p.title} />
            <h3>{p.title}</h3>
            <small>{p.author} • {p.date} • {p.read}</small>
          </article>
        ))}
      </section>
    </>
  );
}
