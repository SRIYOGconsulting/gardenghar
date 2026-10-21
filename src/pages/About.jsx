import PageHeader from "../components/PageHeader.jsx";
import { about } from "../data/services.js";

export default function About() {
    return (
        <>
            <PageHeader
                title="About Us"
                crumb="About"
                subtitle="Best Gardening Services in Kathmandu, Nepal"
            />

            <section className="section container narrow-text">
                {about.intro.map((p, i) => (
                    <p key={i}>{p}</p>
                ))}
            </section>

            <section className="section alt">
                <div className="container grid3">
                    <div className="card">
                        <h3>Mission</h3>
                        <p>{about.mission}</p>
                    </div>
                    <div className="card">
                        <h3>Motive</h3>
                        <p>{about.motive}</p>
                    </div>
                    <div className="card">
                        <h3>Vision</h3>
                        <p>{about.vision}</p>
                    </div>
                </div>
            </section>
        </>
    );
}
