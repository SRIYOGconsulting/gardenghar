export default function FloatingButtons() {
    return (
        <div className="floating">
            <a
                href="tel:+9779802220030"
                className="fab call"
                aria-label="Call us"
            >
                <img
                    src="/svg/Layout-svg/phone.svg"
                    alt="a phone icon"
                    className="svg-img"
                />
            </a>
            <a
                href="https://wa.me/9779802220030"
                className="fab whatsapp"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
            >
                <img
                    src="/svg/Layout-svg/whatsapp.svg"
                    alt="a whatsapp icon"
                    className="svg-img"
                />
            </a>
        </div>
    );
}
