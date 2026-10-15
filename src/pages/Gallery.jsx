import PageHeader from "../components/PageHeader.jsx";

const galleryImages1 = [
    "/images/service1.jpg",
    "/images/service2.jpg",
    "/images/service3.jpg",
    "/images/projects.jpg",
    "/images/hero1.jpg",
];

const galleryImages2 = [
    "/images/service4.jpg",
    "/images/service5.jpg",
    "/images/service6.jpg",
];

const galleryImages3 = [
    "/images/services/lawn-care-services.jpg",
    "/images/services/planting-and-transplanting-services.jpg",
    "/images/services/garden-maintenance-services.jpg",
    "/images/services/soil-improvement-services.jpg",
    "/images/services/irrigation-services.jpg",
    "/images/services/pest-and-disease-control-services.jpg",
    "/images/services/hardscaping-services.jpg",
    "/images/services/seasonal-services.jpg",
    "/images/services/landscape-lighting-services.jpg",
    "/images/services/tree-sales-and-supply.jpg",
];

export default function Gallery() {
    return (
        <>
            <PageHeader title="Gallery" />
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
