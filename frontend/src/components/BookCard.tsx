import { Download, Globe, Users } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import type { bookType } from '../types/type';

const BookCard = ({ book }: any) => {
    const navigate = useNavigate();

    const getBookCover = (book: bookType) => {
        const formats = book.formats || {};
        return formats['image/jpeg'] || `https://via.placeholder.com/200x300/4F46E5/white?text=${encodeURIComponent(book.title.substring(0, 20))}`;
    };

    return (
        <>

            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden"
                onClick={() => navigate(`/book/${book?.id}`)}
            >
                {/* Book Cover */}
                <div className="aspect-w-3 aspect-h-4 bg-gray-100">
                    <img
                        src={getBookCover(book)}
                        alt={book?.title}
                        loading="lazy"
                        className="w-full h-48 object-contain"
                    />
                </div>

                <div className="p-4">
                    <h3 className="font-semibold text-gray-900 text-sm line-clamp-2 mb-2" title={book?.title}>
                        {book?.title.length > 20 ? book.title.substring(0, 29) : book.title}
                    </h3>

                    {book?.authors && book.authors.length > 0 && (
                        <div className="flex items-center text-gray-600 text-sm mb-2">
                            <Users className="h-4 w-4 mr-1 flex-shrink-0" />
                            <span className="truncate">
                                {book?.authors?.map((author: any) => author?.name).join(', ')}
                            </span>
                        </div>
                    )}

                    {book?.languages && book.languages.length > 0 && (
                        <div className="flex items-center text-gray-600 text-sm mb-2">
                            <Globe className="h-4 w-4 mr-1 flex-shrink-0" />
                            <span className="truncate">
                                {book.languages.join(', ').toUpperCase()}
                            </span>
                        </div>
                    )}

                    <div className="flex items-center text-gray-600 text-sm mb-3">
                        <Download className="h-4 w-4 mr-1 flex-shrink-0" />
                        <span>{book?.download_count?.toLocaleString() || 0} downloads</span>
                    </div>
                </div>
            </div>
        </>

    );
};
export default BookCard
