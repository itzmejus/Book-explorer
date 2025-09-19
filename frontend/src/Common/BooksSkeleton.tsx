import '../styles/BooksSkeleton.css'

const BooksSkeleton = () => {
    return (
        <div className="skeleton-container">
            <div>
                <div className="book-card">
                    <div className="book-image skeleton"></div>
                    <div className="book-content">
                        <div className="book-title skeleton"></div>

                        <div className="book-author">
                            <div className="author-icon skeleton"></div>
                            <div className="author-text skeleton"></div>
                        </div>

                        <div className="book-language">
                            <div className="language-icon skeleton"></div>
                            <div className="language-text skeleton"></div>
                        </div>

                        <div className="book-downloads">
                            <div className="download-icon skeleton"></div>
                            <div className="download-text skeleton"></div>
                        </div>

                        <div className="download-buttons">
                            <div className="download-btn skeleton"></div>
                            <div className="download-btn skeleton"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BooksSkeleton
