import { useState, useEffect } from 'react';

import { BookOpen } from 'lucide-react';
import Header from './Header';
import SearchBooks from './SearchBooks';
import BookCard from './BookCard.tsx';
import Pagination from './Pagination.tsx';
import BooksSkeleton from '../Common/BooksSkeleton.tsx';

const BooksHomepage = () => {
    const [books, setBooks] = useState<string[]>([]);
    const [loading, setLoading] = useState<Boolean>(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [searchTimeout, setSearchTimeout] = useState(null);

    const baseURL = process.env.REACT_APP_GET_BOOKS_API_URL;

    const fetchBooks = async (page = 1, search = '') => {
        setLoading(true);
        setError(null);

        try {
            let localURL = `${baseURL}/api/books/?page=${page}`;

            if (search.trim()) {
                localURL += `&search=${encodeURIComponent(search.trim())}`;
            }

            const response = await fetch(localURL);
            if (!response.ok) throw new Error('Failed to fetch books');

            const data = await response.json();
            setBooks(data.results);
            setTotalPages(Math.ceil(data.count / 32)); // Gutendex returns 32 books per page
            setCurrentPage(page);
        } catch (err) {
            console.error('Error fetching books:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBooks(1, '');
    }, []);

    const handleSearch = (value: string | any) => {
        setSearchTerm(value);

        // Clear previous timeout
        if (searchTimeout) {
            clearTimeout(searchTimeout);
        }

        // Set new timeout for debounced search
        const timeout: any = setTimeout(() => {
            fetchBooks(1, value);
        }, 500);

        setSearchTimeout(timeout);
    };

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            fetchBooks(newPage, searchTerm);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            <SearchBooks searchTerm={searchTerm} handleSearch={handleSearch} />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                        <p className="text-red-800">{error}</p>
                        <button
                            onClick={() => fetchBooks(currentPage, searchTerm)}
                            className="mt-2 text-red-600 hover:text-red-800 font-medium"
                        >
                            Try Again
                        </button>
                    </div>
                )}

                {books.length === 0 && !loading && (
                    <div className="text-center py-12">
                        <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-xl font-medium text-gray-900 mb-2">No books found</h3>
                        <p className="text-gray-600">Try adjusting your search terms or browse all books.</p>
                    </div>
                )}
                {!books.length &&
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                        <BooksSkeleton />
                        <BooksSkeleton />
                        <BooksSkeleton />
                        <BooksSkeleton />
                    </div>
                }

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {books.map((book) => (
                        <BookCard book={book} />
                    ))}
                </div>

                {loading && books.length > 0 && (
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                        <BooksSkeleton />
                        <BooksSkeleton />
                        <BooksSkeleton />
                        <BooksSkeleton />
                    </div>
                )}

                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </main>

            <footer className="bg-white border-t mt-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <p className="text-center text-gray-600 text-sm">
                        Developed by <a className="text-blue-600 hover:text-blue-800">Justin Johnson</a>
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default BooksHomepage;