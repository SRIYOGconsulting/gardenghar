import { Link } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import { features, projects, posts, testimonials } from "../data/content.js";
import { services } from "../data/services.js";
import ServiceCard from "../components/ServiceCard.jsx";

export default function Home() {
    return (
        <>
            <Hero />

            <section className="section container">
                <h2>Why Choose Us?</h2>
                <div className="grid4">
                    {features.map((f) => (
                        <div className="card" key={f.title}>
                            <div className="icon-circle">
                                <img src={f.image} alt={f.text} />
                            </div>
                            <h3>{f.title}</h3>
                            <p>{f.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section alt">
                <div className="container">
                    <div className="row">
                        <h2>Our Projects</h2>
                        <Link to="/projects">View All</Link>
                    </div>
                    <div className="grid4">
                        {projects.map((p) => (
                            <div className="card" key={p.name}>
                                <img
                                    className="img"
                                    src={p.image}
                                    alt={p.name}
                                />
                                <h3>{p.name}</h3>
                                <p>{p.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section container">
                <div className="row">
                    <h2>Our Services</h2>
                    <Link to="/services">View All</Link>
                </div>
                <div className="grid3">
                    {services.slice(0, 6).map((s, i) => (
                        <ServiceCard key={s.slug} service={s} index={i} />
                    ))}
                </div>
            </section>

            <section className="section alt">
                <div className="container">
                    <div className="row">
                        <h2>Latest Updates</h2>
                        <Link to="/blog">View All</Link>
                    </div>
                    <div className="grid3">
                        {posts.map((p) => (
                            <div className="card" key={p.id}>
                                <img
                                    className="img"
                                    src={p.image}
                                    alt={p.title}
                                />
                                <h3>{p.title}</h3>
                                <small>
                                    {p.author} • {p.date} • {p.read}
                                </small>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section container">
                <h2>Testimonials</h2>
                <div className="grid3">
                    {testimonials.map((t) => (
                        <blockquote className="card" key={t.name}>
                            <div className="avatar">{t.name[0]}</div>
                            <p>“{t.text}”</p>
                            <strong>{t.name}</strong>
                            <small>{t.place}</small>
                        </blockquote>
                    ))}
                </div>
            </section>
        </>
    );
}
