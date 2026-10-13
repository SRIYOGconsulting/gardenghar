import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="footer-wrap">
            <section className="cta">
                <div className="container cta-inner">
                    <div>
                        <h2>Join as a Gardener and start earning.</h2>
                        <p>
                            Connect with customers and grow your professional
                            opportunities.
                        </p>
                    </div>
                    <Link to="/contact" className="btn outline">
                        We are Hiring
                    </Link>
                </div>
            </section>

            <footer className="footer">
                <div className="container grid4">
                    <div>
                        <h4>GardenClone</h4>
                        <p>
                            Professional gardening services. Plants, people and
                            nature together.
                        </p>
                    </div>
                    <div>
                        <h4>Quick Links</h4>
                        <Link to="/blog">Blog</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/gallery">Gallery</Link>
                    </div>
                    <div>
                        <h4>Explore</h4>
                        <Link to="/about">About</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/book">Book a Service</Link>
                    </div>
                    <div>
                        <h4>Contact</h4>
                        <p>Kathmandu, Nepal</p>
                        <p>hello@example.com</p>
                        <Link to="/contact" className="btn outline">
                            Contact Us
                        </Link>
                    </div>
                </div>
                <p className="copy">© 2026 GardenClone. Practice project.</p>
            </footer>
        </div>
    );
}
