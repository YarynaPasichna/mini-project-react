import React from 'react';
import Link from 'next/link';
import { PaginationComponentProps } from "@/Models/PaginationComponentProps";
import './pagination.css'
const PaginationComponent: React.FC<PaginationComponentProps> = ({
                                                                     totalPages = 1,
                                                                     currentPage,
                                                                     query,
                                                                 }) => {
    const prevPage = currentPage - 1;
    const nextPage = currentPage + 1;

    return (
        <div className="pagination">
            <Link
                href={{
                    pathname: '/movies',
                    query: { ...query, page: prevPage.toString() },
                }}
                replace
            >
                <button disabled={currentPage === 1}>
                    Previous
                </button>
            </Link>
            <span>
                Page {currentPage} of {totalPages}
            </span>
            <Link
                href={{
                    pathname: '/movies',
                    query: { ...query, page: nextPage.toString() },
                }}
                replace
            >
                <button disabled={currentPage === totalPages}>
                    Next
                </button>
            </Link>
        </div>
    );
};

export default PaginationComponent;










