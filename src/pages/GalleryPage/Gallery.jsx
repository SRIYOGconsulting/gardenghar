import PageHeader from "../../components/PageHeader/PageHeader.jsx";
import "./Gallery.css";

const galleryImages1 = [
    "/images/home/service1.webp",
    "/images/home/service2.webp",
    "/images/home/service3.webp",
    "/images/home/projects.webp",
    "/images/home/hero1.webp",
];

const galleryImages2 = [
    "/images/home/service4.webp",
    "/images/home/service5.webp",
    "/images/home/service6.webp",
];

const galleryImages3 = [
    "/images/services/lawn-care-services.webp",
    "/images/services/planting-and-transplanting-services.webp",
    "/images/services/garden-maintenance-services.webp",
    "/images/services/soil-improvement-services.webp",
    "/images/services/irrigation-services.webp",
    "/images/services/pest-and-disease-control-services.webp",
    "/images/services/hardscaping-services.webp",
    "/images/services/seasonal-services.webp",
    "/images/services/landscape-lighting-services.webp",
    "/images/services/tree-sales-and-supply.webp",
];

export default function Gallery() {
    return (
        <>
            <PageHeader
                title="The Gallery"
                subtitle="Showcasing our finest gardening and landscaping Pictures in Nepal"
                crumb="Services"
                image="/images/headers/projects2.webp"
            />
            <section className="section container">
                <h2> Top Services </h2>
                <div className="gallery-grid">
                    {galleryImages1.map((image, i) => (
                        <img
                            className="img tall"
                            src={image}
                            alt={`Gallery image ${i + 1}`}
                            key={i}
                        />
                    ))}
                </div>
            </section>

            <section className="section container">
                <h2>Indoor/Outdoor plant</h2>
                <div className="gallery-grid">
                    {galleryImages2.map((image, i) => (
                        <img
                            className="img tall"
                            src={image}
                            alt={`Gallery image ${i + 1}`}
                            key={i}
                        />
                    ))}
                </div>
            </section>

            <section className="section container">
                <h2>Gallery</h2>
                <div className="gallery-grid">
                    {galleryImages3.map((image, i) => (
                        <img
                            className="img tall"
                            src={image}
                            alt={`Gallery image ${i + 1}`}
                            key={i}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}
