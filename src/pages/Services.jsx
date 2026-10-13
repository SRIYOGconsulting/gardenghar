import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import { services } from "../data/content.js";

export default function Services() {
  return (
    <>
      <PageHeader title="Our Services" />
      <section className="section container grid3">
        {services.map((s) => (
          <Link to={`/services/${s.slug}`} className="card link-card" key={s.slug}>
            <img className="img" src={s.image} alt={s.title} />
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </Link>
        ))}
      </section>
    </>
  );
}
