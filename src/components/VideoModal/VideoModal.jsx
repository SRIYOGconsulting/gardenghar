import { useEffect, useRef } from "react";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import "./VideoModal.css";

export default function VideoModal({ video, onClose }) {
    const closeRef = useRef(null);

    useEffect(() => {
        const onKey = (e) => e.key === "Escape" && onClose();
        document.addEventListener("keydown", onKey);
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        closeRef.current?.focus();

        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = previousOverflow;
        };
    }, [onClose]);

    return (
        <div className="video-modal" onClick={onClose}>
            <div
                className="video-modal__dialog"
                role="dialog"
                aria-modal="true"
                aria-label={video.title}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    ref={closeRef}
                    type="button"
                    className="video-modal__close"
                    onClick={onClose}
                    aria-label="Close video"
                >
                    ×
                </button>
                <VideoPlayer video={video} autoPlay />
                <p className="video-modal__title">{video.title}</p>
            </div>
        </div>
    );
}
