export interface bookType {
    authors: string[];
    bookshelves: string[];
    copyright: boolean;
    download_count: number;
    formats: string | any;
    id: string | number;
    languages: string[];
    media_type: string;
    subjects: string[];
    summaries: string[];
    title: string;
    translators: string[]
}

export interface PaginationProps {
    currentPage: number | string | any;
    totalPages: number | string | any;
    onPageChange: (value: any) => void;
}

export interface SearchBooksProps {
    searchTerm: string;
    handleSearch: (value: string) => void;
}