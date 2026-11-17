import { useEffect, useState } from "react";
import "./PopUp.css";
import FloatingButtons from "../FloatingButtons/FloatingButtons";

const monthNames = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
];

const PopUp = () => {
    // show only once per browser tab session
    const [seen] = useState(
        () => sessionStorage.getItem("PopUpseen") === "true",
    );
    const [showPopUp, setShowPopUp] = useState(!seen);
    const [timeLeft, setTimeLeft] = useState(10);
    const [imageSrc, setImageSrc] = useState(null);

    const handleClose = () => {
        document.body.style.overflow = "auto";
        setShowPopUp(false);
        sessionStorage.setItem("PopUpClosedAt", Date.now().toString());
        window.dispatchEvent(new Event("PopUp-closed"));
    };

    // mark as seen + lock scroll
    useEffect(() => {
        if (!seen) {
            sessionStorage.setItem("PopUpseen", "true");
            document.body.style.overflow = "hidden";
        }
    }, [seen]);

    // auto close after 15s
    useEffect(() => {
        if (!showPopUp) return;
        const timer = setTimeout(handleClose, 15000);
        return () => clearTimeout(timer);
    }, [showPopUp]);

    // 10s countdown before the X button works
    useEffect(() => {
        if (!showPopUp) return;
        const interval = setInterval(() => {
            setTimeLeft((prev) => (prev <= 1 ? 0 : prev - 1));
        }, 1000);
        return () => clearInterval(interval);
    }, [showPopUp]);

    // pick today's image, fall back to default
    const today = new Date();
    const dailySrc = `/roadblock/${monthNames[today.getMonth()]}/${today.getDate()}.jpg`;
    const fallbackSrc = "/roadblock/default/default.jpg";

    useEffect(() => {
        const img = new window.Image();
        img.src = dailySrc;
        img.onload = () => setImageSrc(dailySrc);
        img.onerror = () => setImageSrc(fallbackSrc);
    }, [dailySrc]);

    if (!imageSrc || !showPopUp) return null;

    return (
        <div className="PopUp-overlay">
            <div className="PopUp-box">
                <button
                    className="PopUp-close"
                    onClick={() => timeLeft <= 0 && handleClose()}
                    disabled={timeLeft > 0}
                >
                    {timeLeft > 0 ? timeLeft : "X"}
                </button>

                <img src={imageSrc} alt="Advertisement" className="PopUp-img" />
            </div>

            <FloatingButtons />
        </div>
    );
};

export default PopUp;
