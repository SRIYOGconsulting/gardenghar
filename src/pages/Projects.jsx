import PageHeader from "../components/PageHeader.jsx";
import { projects } from "../data/content.js";

export default function Projects() {
  return (
    <>
      <PageHeader title="Our Projects" />
      <section className="section container grid3">
        {projects.map((p) => (
          <div className="card" key={p.name}>
            <img className="img" src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.text}</p>
          </div>
        ))}
      </section>
    </>
  );
}
