import PageHeader from "../../components/PageHeader/PageHeader.jsx";
import ProjectCard from "../../components/ProjectCard/ProjectCard.jsx";
import { projects, propertyRegions } from "../../data/projects.js";
import "./Projects.css";

export default function Projects() {
    return (
        <>
            <PageHeader
                title="Garden Development Projects"
                subtitle="Showcasing our finest gardening and landscaping works — from home gardens to corporate spaces, each project is a step towards greener living."
                crumb="Projects"
                image="/images/headers/projects1.webp"
            />
            <section className="section container">
                <div className="project-grid">
                    {projects.map((p, i) => (
                        <ProjectCard key={p.slug} project={p} index={i} />
                    ))}
                </div>
            </section>

            <section className="section container properties">
                <h2 className="properties__title">Notable Properties</h2>
                {propertyRegions.map(({ region, items }) => (
                    <div className="properties__region" key={region}>
                        <h3 className="properties__place">{region}</h3>
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
