import { useState } from "react";
import { thumbnailUrl, embedUrl } from "../../data/learn.js";
import "./VideoPlayer.css";

export default function VideoPlayer({ video, autoPlay = false }) {
    const [playing, setPlaying] = useState(autoPlay);

    return (
        <div className="video-player">
            {playing ? (
                <iframe
                    src={embedUrl(video.id, video.start)}
                    title={video.title}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    allowFullScreen
                />
            ) : (
                <button
                    type="button"
                    className="video-player__poster"
                    onClick={() => setPlaying(true)}
                    aria-label={`Play video: ${video.title}`}
                >
                    <img
                        src={thumbnailUrl(video.id)}
                        alt=""
                        width="480"
                        height="360"
                        decoding="async"
                    />
                    <span className="video-player__play" aria-hidden="true">
                        <svg
                            viewBox="0 0 24 24"
                            width="34"
                            height="34"
                            fill="currentColor"
                        >
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </span>
                </button>
            )}
        </div>
    );
}
