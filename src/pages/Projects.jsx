import PageHeader from "../components/PageHeader.jsx";
import { projects } from "../data/content.js";

export default function Projects() {
    return (
        <>
            <PageHeader
                title="Garden Development Projects"
                subtitle="Showcasing our finest gardening and landscaping works"
                crumb="Projects"
                image="/images/headers/projects1.jpg"
            />
            <section className="section container grid3">
                {projects.map((p) => (
                    <div className="card" key={p.name}>
                        <img className="img" src={p.image} alt={p.name} />
                        <h3>{p.name}</h3>
                        <p>{p.text}</p>
                    </div>
                ))}
            </section>
        </>
    );
}
