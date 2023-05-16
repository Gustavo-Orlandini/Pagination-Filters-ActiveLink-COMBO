import { useState } from "react";

export function usePagination<T>(data: T[], itemsPerPage: number) {
    const [currentPage, setCurrentPage] = useState(0);

    const totalPages = Math.ceil(data.length / itemsPerPage);
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentData = data.slice(startIndex, endIndex);

    function goToPage(page: number) {
        setCurrentPage(page);
    }

    return {
        currentPage,
        totalPages,
        currentData,
        goToPage,
    };
}