import PageHeader from "../components/PageHeader.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../data/projects.js";

export default function Projects() {
    return (
        <>
            <PageHeader
                title="Garden Development Projects"
                subtitle="Showcasing our finest gardening and landscaping works — from home gardens to corporate spaces, each project is a step towards greener living."
                crumb="Projects"
                image="/images/headers/projects1.jpg"
            />
            <section className="section container">
                <div className="project-grid">
                    {projects.map((p, i) => (
                        <ProjectCard key={p.slug} project={p} index={i} />
                    ))}
                </div>
            </section>
        </>
    );
}
