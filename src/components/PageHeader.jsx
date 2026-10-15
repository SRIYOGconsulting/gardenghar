import { Link } from "react-router-dom";

export default function PageHeader({
    title,
    subtitle,
    crumb,
    image = "/images/projects.jpg",
}) {
    const style = {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${image})`,
    };

    return (
        <section className="page-header" style={style}>
            <div className="container">
                {crumb && (
                    <p className="crumbs">
                        <Link to="/">Home</Link>&#8594;<span>{crumb}</span>
                    </p>
                )}
                <h1>{title}</h1>
                {subtitle && <p className="sub">{subtitle}</p>}
            </div>
        </section>
    );
}
