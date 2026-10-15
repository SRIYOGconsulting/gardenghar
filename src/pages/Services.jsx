import PageHeader from "../components/PageHeader.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import { services } from "../data/services.js";

const categories = [...new Set(services.map((s) => s.category))];

export default function Services() {
    return (
        <>
            <PageHeader
                title="Our Services"
                subtitle="Best Gardening and landscaping in Kathmandu Nepal"
                crumb="Services"
                image="/images/headers/projects3.jpg"
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
        </>
    );
}
