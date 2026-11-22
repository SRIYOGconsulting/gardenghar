import PageHeader from "../../components/PageHeader/PageHeader.jsx";
import ServiceCard from "../../components/ServiceCard/ServiceCard.jsx";
import { services, propertyRegions } from "../../data/services.js";
import "./Services.css";

const categories = [...new Set(services.map((s) => s.category))];

export default function Services() {
    return (
        <>
            <PageHeader
                title="Our Services"
                subtitle="Best Gardening and landscaping in Kathmandu Nepal"
                crumb="Services"
                image="/images/headers/projects3.webp"
            />

            {categories.map((cat) => (
                <section className="section container" key={cat}>
                    <h2>{cat}</h2>
                    <div className="grid3">
                        {services
                            .filter((s) => s.category === cat)
                            .map((s) => (
                                <ServiceCard
                                    key={s.slug}
                                    service={s}
                                    index={services.indexOf(s)}
                                    showText
                                />
                            ))}
                    </div>
                </section>
            ))}

            <section className="section container properties">
                <h2>Notable Properties</h2>
                {propertyRegions.map(({ region, items }) => (
                    <div className="properties__region" key={region}>
                        <h3>{region}</h3>
                        <ol className="properties__list" start={undefined}>
                            {items.map((p) => (
                                <li key={p.name}>
                                    <img
                                        src={p.img}
                                        alt={`${p.name} garden landscaping`}
                                        loading="lazy"
                                    />
                                    <div className="properties__content">
                                        <strong>{p.name}</strong>
                                        <span>{p.desc}</span>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                ))}
            </section>
        </>
    );
}
