import { Link, useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import NotFound from "./NotFound.jsx";
import { services } from "../data/content.js";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  if (!service) return <NotFound />;
  return (
    <>
      <PageHeader title={service.title} />
      <section className="section container">
        <p>{service.text}</p>
        <Link to="/book" className="btn">Book this service</Link>{" "}
        <Link to="/services">← All services</Link>
      </section>
    </>
  );
}
