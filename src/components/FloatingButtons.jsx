import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
    return (
        <div className="floating">
            <a
                href="tel:+9779802220030"
                className="fab call"
                aria-label="Call us"
            >
                <FaPhoneAlt />
            </a>
            <a
                href="https://wa.me/9779802220030"
                className="fab whatsapp"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
            >
                <FaWhatsapp />
            </a>
        </div>
    );
}
