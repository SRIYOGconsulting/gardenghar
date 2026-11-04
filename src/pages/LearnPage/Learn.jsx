import { useCallback, useMemo, useState } from "react";
import { videos, categories } from "../../data/learn.js";
import PageHeader from "../../components/PageHeader/PageHeader.jsx";
import VideoCard from "../../components/VideoCard/VideoCard.jsx";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoModal from "../../components/VideoModal/VideoModal";
import "./Learn.css";
import { SearchBar } from "../../components/SearchBar/SearchBar.jsx";

const ALL = "All";
const featured = videos[2];

export default function Learn() {
    const [category, setCategory] = useState(ALL);
    const [activeVideo, setActiveVideo] = useState(null);

    const [query, setQuery] = useState("");
    const visible = useMemo(() => {
        const q = query.trim().toLowerCase();
        return videos.filter((v) => {
            const matchesCategory = category === ALL || v.type === category;
            const matchesQuery = !q || v.title.toLowerCase().includes(q);
            return matchesCategory && matchesQuery;
        });
    }, [category, query]);
    const isSearching = query.trim() !== "";

    const closeModal = useCallback(() => setActiveVideo(null), []);

    return (
        <>
            <PageHeader
                title="Learn Gardening"
                subtitle="Free video tutorials on gardening, plant care and the skills
                    every gardener needs."
                crumb="Learn"
                image="/images/headers/Project7/projects7.1.webp"
                imageMobile="/images/headers/Project7/projects7.2.webp"
            >
                <SearchBar value={query} onChange={setQuery} />
            </PageHeader>
            <main className="learn">
                {!isSearching && (
                    <section
                        className="learn__featured"
                        aria-labelledby="featured-heading"
                    >
                        <h2 id="featured-heading">Featured Video</h2>
                        <VideoPlayer video={featured} />
                        <p className="learn__featured-title">
                            {featured.title}
                        </p>
                    </section>
                )}

                <section className="learn__list" aria-labelledby="all-heading">
                    <h2 id="all-heading">All Videos</h2>

                    <div
                        className="learn__filters"
                        role="group"
                        aria-label="Filter videos by topic"
                    >
                        {[ALL, ...categories].map((c) => (
                            <button
                                key={c}
                                type="button"
                                className={`learn__chip${c === category ? " is-active" : ""}`}
                                aria-pressed={c === category}
                                onClick={() => setCategory(c)}
                            >
                                {c}
                            </button>
                        ))}
                    </div>

                    <p className="learn__count" aria-live="polite">
                        Showing {visible.length} of {videos.length} videos
                    </p>

                    {visible.length === 0 ? (
                        <p>No videos found. Try a diffrent word.</p>
                    ) : (
                        <div className="learn__grid">
                            {visible.map((v) => (
                                <VideoCard
                                    key={v.sn}
                                    video={v}
                                    onPlay={setActiveVideo}
                                />
                            ))}
                        </div>
                    )}
                </section>

                {activeVideo && (
                    <VideoModal video={activeVideo} onClose={closeModal} />
                )}
            </main>
        </>
    );
}
