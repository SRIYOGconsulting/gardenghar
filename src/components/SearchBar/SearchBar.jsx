import "./SearchBar.css";

export function SearchBar({ value, onChange }) {
    return (
        <>
            <div className="search">
                <img
                    src="/svg/BlogPage-svg/search.svg"
                    alt="a search icon"
                    className="svg-img"
                />
                <input
                    type="search"
                    placeholder="Search..."
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    aria-label="Search posts"
                />
            </div>
        </>
    );
}
