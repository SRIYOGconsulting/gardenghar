import { Link, useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import NotFound from "./NotFound.jsx";
import { services } from "../data/services.js";

export default function ServiceDetail() {
    const { slug } = useParams();
    const service = services.find((s) => s.slug === slug);
    if (!service) return <NotFound />;

    return (
        <>
            <PageHeader title={service.title} subtitle={service.short} />

            <section className="section container narrow-text">
                {service.body.map((p, i) => (
                    <p key={i}>{p}</p>
                ))}
                <Link to="/book" className="btn">
                    Book this service
                </Link>{" "}
                <Link to="/services">← All services</Link>
            </section>

            {service.faqs.length > 0 && (
                <section className="section alt">
                    <div className="container narrow-text">
                        <h2>Frequently Asked Questions</h2>
                        {service.faqs.map((f, i) => (
                            <details className="faq" key={i}>
                                <summary>{f.q}</summary>
                                <p>{f.a}</p>
                            </details>
                        ))}
                    </div>
                </section>
            )}
        </>
    );
}
