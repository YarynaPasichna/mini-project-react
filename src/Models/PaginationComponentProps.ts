export interface PaginationComponentProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (newPage: number) => void;
}