import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import SingleBookSkeleton from "../Common/SingleBookSkeleton";

const BookDetail = () => {
    const { id } = useParams<{ id: string }>();
    const [book, setBook] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    const baseURL = useMemo(() => "https://book-explorer-backend-zx8h.onrender.com", []);

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const res = await fetch(`${baseURL}/api/books/${id}`);
                console.log("res", res);

                const data = await res.json();
                setBook(data);
            } catch (err) {
                console.error("Error fetching book:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchBook();
    }, [id]);

    if (loading) {
        return (
            <SingleBookSkeleton />
        );
    }

    return (
        <>
            {!loading && <div className="min-h-screen bg-gray-50">
                <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="bg-gray-600 text-white p-6 sm:p-8">
                            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                                <div className="flex-shrink-0 mx-auto lg:mx-0">
                                    <img
                                        src={book?.formats["image/jpeg"]}
                                        alt={book?.title}
                                        loading="lazy"
                                        className="w-48 h-64 sm:w-56 sm:h-72 object-contain rounded-lg shadow-xl border-1 border-white/20"
                                    />
                                </div>

                                <div className="flex-1 text-center lg:text-left">
                                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                                        {book?.title}
                                    </h1>

                                    {book?.authors?.length > 0 && (
                                        <div className="mb-4">
                                            <p className="text-lg sm:text-xl text-blue-100 mb-2">
                                                {book.authors.map((author: any, index: number) => (
                                                    <span key={index}>
                                                        {author?.name}
                                                        {author?.birth_year && author?.death_year && (
                                                            <span className="text-sm ml-2 opacity-75">
                                                                ({author.birth_year} - {author.death_year})
                                                            </span>
                                                        )}
                                                        {index < book.authors.length - 1 && ', '}
                                                    </span>
                                                ))}
                                            </p>
                                        </div>
                                    )}

                                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm">
                                        <div className="bg-white/20 px-3 py-1 rounded-full">
                                            📥 {book?.download_count?.toLocaleString() || 0} downloads
                                        </div>
                                        <div className="bg-white/20 px-3 py-1 rounded-full">
                                            🌍 {book?.languages?.join(", ").toUpperCase()}
                                        </div>
                                        <div className="bg-white/20 px-3 py-1 rounded-full">
                                            📚 {book?.media_type}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 sm:p-8">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                <div className="lg:col-span-2 space-y-8">
                                    {book?.summaries && book.summaries.length > 0 && (
                                        <section>
                                            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                                                📖 Summary
                                            </h2>
                                            <div className="bg-gray-50 rounded-lg p-6">
                                                <p className="text-gray-700 leading-relaxed">
                                                    {book.summaries[0]}
                                                </p>
                                            </div>
                                        </section>
                                    )}
                                </div>

                                <div className="space-y-6">
                                    {book?.subjects && book.subjects.length > 0 && (
                                        <section>
                                            <h3 className="text-lg font-bold text-gray-800 mb-3">
                                                🏷️ Subjects
                                            </h3>
                                            <div className="space-y-2">
                                                {book.subjects.map((subject: string, index: number) => (
                                                    <span
                                                        key={index}
                                                        className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                                                    >
                                                        {subject}
                                                    </span>
                                                ))}
                                            </div>
                                        </section>
                                    )}

                                    {book?.bookshelves && book.bookshelves.length > 0 && (
                                        <section>
                                            <h3 className="text-lg font-bold text-gray-800 mb-3">
                                                📚 Categories
                                            </h3>
                                            <div className="space-y-2">
                                                {book.bookshelves.map((shelf: string, index: number) => (
                                                    <div
                                                        key={index}
                                                        className="bg-gray-100 px-3 py-2 rounded text-sm text-gray-700"
                                                    >
                                                        {shelf}
                                                    </div>
                                                ))}
                                            </div>
                                        </section>
                                    )}

                                    <section className="bg-gray-50 rounded-lg p-4">
                                        <h3 className="text-lg font-bold text-gray-800 mb-3">
                                            ℹ️ Details
                                        </h3>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Book ID:</span>
                                                <span className="font-medium">#{book?.id}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Copyright:</span>
                                                <span className="font-medium">
                                                    {book?.copyright ? 'Yes' : 'Public Domain'}
                                                </span>
                                            </div>
                                            {book?.translators && book.translators.length > 0 && (
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Translators:</span>
                                                    <span className="font-medium">
                                                        {book?.translators.map((t: any) => t.name).join(", ")}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    );
};

export default BookDetail;