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

const getTodayKey = () => {
    const d = new Date();
    return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
};

const PopUp = () => {
    // show only once per browser tab session
    const [seen] = useState(() => {
        try {
            return localStorage.getItem("PopUpSeenDate") === getTodayKey();
        } catch {
            return false;
        }
    });
    const [showPopUp, setShowPopUp] = useState(!seen);
    const [timeLeft, setTimeLeft] = useState(5);
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
            try {
                localStorage.setItem("roadblockSeenDate", getTodayKey());
            } catch {}
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [seen]);

    // auto close after 10s
    useEffect(() => {
        if (!showPopUp) return;
        const timer = setTimeout(handleClose, 10000);
        return () => clearTimeout(timer);
    }, [showPopUp]);

    // 5s countdown before the X button works
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
