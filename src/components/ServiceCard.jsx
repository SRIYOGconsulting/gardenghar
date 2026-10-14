import { Link } from "react-router-dom";

export default function ServiceCard({ service, index = 0, showText = false }) {
    const fallback = `/images/service${(index % 6) + 1}.jpg`;

    const handleError = (e) => {
        if (!e.currentTarget.src.endsWith(fallback)) {
            e.currentTarget.src = fallback;
        }
    };

    return (
        <Link to={`/services/${service.slug}`} className="card link-card">
            <img
                className="img"
                src={`/images/services/${service.slug}.jpg`}
                alt={service.title}
                loading="lazy"
                onError={handleError}
            />
            <h3>{service.title}</h3>
            {showText && <p>{service.short}</p>}
        </Link>
    );
}
