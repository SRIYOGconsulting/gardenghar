import PageHeader from "../components/PageHeader.jsx";

const galleryImages = [
    "/images/service1.jpg",
    "/images/service2.jpg",
    "/images/service3.jpg",
    "/images/service4.jpg",
    "/images/service5.jpg",
    "/images/service6.jpg",
    "/images/projects.jpg",
    "/images/hero1.jpg",
];

export default function Gallery() {
    return (
        <>
            <PageHeader title="Gallery" />
            <section className="section container grid4">
                {galleryImages.map((image, i) => (
                    <img
                        className="img tall"
                        src={image}
                        alt={`Gallery image ${i + 1}`}
                        key={i}
                    />
                ))}
            </section>
        </>
    );
}
