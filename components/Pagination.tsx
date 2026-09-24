'use client';

import { useSearchParams, usePathname } from 'next/navigation';
import Link from 'next/link';

interface PaginationProps {
    totalPages: number;
}

export default function Pagination({ totalPages }: PaginationProps) {
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const currentPage = parseInt(searchParams.get('page') || '1', 10);

    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('page', pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    };

    return (
        <div className="flex gap-4 justify-center items-center">
            <Link
                href={createPageURL(currentPage - 1)}
                className={`px-4 py-2 rounded ${
                    currentPage <= 1
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
                aria-disabled={currentPage <= 1}
                tabIndex={currentPage <= 1 ? -1 : 0}
            >
                Previous
            </Link>

            <span className="px-4">
                page {currentPage} of {totalPages}
            </span>

            <Link
                href={createPageURL(currentPage + 1)}
                className={`px-4 py-2 rounded ${
                    currentPage >= totalPages
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
                aria-disabled={currentPage >= totalPages}
                tabIndex={currentPage >= totalPages ? -1 : 0}
            >
                Next
            </Link>
        </div>
    );
}