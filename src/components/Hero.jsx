import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { slides } from "../data/content.js";

export default function Hero() {
    const [i, setI] = useState(0);
    useEffect(() => {
        const id = setInterval(
            () => setI((n) => (n + 1) % slides.length),
            5000,
        );
        return () => clearInterval(id);
    }, []);
    const s = slides[i];
    const heroStyle = {
        backgroundImage: `linear-gradient(rgba(20,48,26,0.6), rgba(20,48,26,0.6)), url(${s.image})`,
    };
    return (
        <section className="hero" style={heroStyle}>
            <div className="container">
                <h1>{s.title}</h1>
                <p>{s.text}</p>
                <Link to="/about" className="btn ghost">
                    Read More
                </Link>{" "}
                <Link to="/book" className="btn">
                    Book a Service
                </Link>
                <div className="dots">
                    {slides.map((_, n) => (
                        <button
                            key={n}
                            className={n === i ? "dot on" : "dot"}
                            onClick={() => setI(n)}
                            aria-label={`Slide ${n + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
