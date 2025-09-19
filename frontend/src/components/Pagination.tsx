import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react'

interface PaginationProps {
    currentPage: number | string | any;
    totalPages: number | string | any;
    onPageChange: (value: any) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    if (totalPages <= 1) return null;

    return (
        <div className="flex items-center justify-center mt-8 space-x-2">
            <button
                onClick={() => onPageChange(String(currentPage - 1))}
                disabled={currentPage <= 1}
                className="flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
            </button>

            <span className="flex items-center px-4 py-2 text-sm text-gray-700">
                Page {currentPage} of {totalPages}
            </span>

            <button
                onClick={() => onPageChange(String(currentPage + 1))}
                disabled={currentPage >= totalPages}
                className="flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
            </button>
        </div>
    );
};

export default Pagination
