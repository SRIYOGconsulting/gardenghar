import { thumbnailUrl, formatDuration } from "../../data/learn.js";
import "./VideoCard.css";

export default function VideoCard({ video, onPlay }) {
    return (
        <button
            type="button"
            className="video-card"
            onClick={() => onPlay(video)}
            aria-label={`Play video: ${video.title}`}
        >
            <span className="video-card__thumb">
                <img
                    src={thumbnailUrl(video.id)}
                    alt=""
                    width="480"
                    height="360"
                    loading="lazy"
                    decoding="async"
                />
                <span className="video-card__play" aria-hidden="true">
                    <svg
                        viewBox="0 0 24 24"
                        width="22"
                        height="22"
                        fill="currentColor"
                    >
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </span>
                <span className="video-card__duration">
                    {formatDuration(video.duration)}
                </span>
            </span>
            <span className="video-card__body">
                <span className="video-card__type">{video.type}</span>
                <span className="video-card__title">{video.title}</span>
            </span>
        </button>
    );
}
