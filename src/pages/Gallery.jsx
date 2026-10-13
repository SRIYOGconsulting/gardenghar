import PageHeader from "../components/PageHeader.jsx";

const galleryImages = [
  "/images/Service1.jpg",
  "/images/Service2.jpg",
  "/images/Service3.jpg",
  "/images/Service4.jpg",
  "/images/Service5.jpg",
  "/images/Service6.jpg",
  "/images/Projects.jpg",
  "/images/hero1.jpg",
];

export default function Gallery() {
  return (
    <>
      <PageHeader title="Gallery" />
      <section className="section container grid4">
        {galleryImages.map((image, i) => (
          <img className="img tall" src={image} alt={`Gallery image ${i + 1}`} key={i} />
        ))}
      </section>
    </>
  );
}
