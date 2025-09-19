import React from 'react'
import type { SearchBooksProps } from '../types/type'

const SearchBooks: React.FC<SearchBooksProps> = ({ searchTerm, handleSearch }) => {
    return (
        <section className="bg-white border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="max-w-2xl mx-auto">
                    <input
                        value={searchTerm}
                        onChange={(e) => handleSearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        type="text"
                        placeholder="Search books by title or author..."
                    />
                </div>
            </div>
        </section >
    )
}

export default SearchBooks
