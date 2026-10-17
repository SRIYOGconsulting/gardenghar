export default function ProjectCard({ project, index = 0 }) {
    const fallback = `/images/service${(index % 6) + 1}.jpg`;

    const handleError = (e) => {
        if (!e.currentTarget.src.endsWith(fallback))
            e.currentTarget.src = fallback;
    };

    return (
        <article className="project-card">
            <div className="project-img">
                <img
                    src={`/images/projects/${project.slug}.jpg`}
                    alt={project.title}
                    loading="lazy"
                    onError={handleError}
                />
            </div>
            <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.text}</p>
            </div>
        </article>
    );
}
