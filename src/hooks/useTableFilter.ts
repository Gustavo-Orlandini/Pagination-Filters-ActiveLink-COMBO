import { Dispatch, useCallback, useMemo, useState } from 'react';

export interface TableFilterHook<T> {
    handleSort: (name: string) => void;
    sorter: {
        name: string;
        dir: string;
    };
    dataSorted: T[];
    setSorter: Dispatch<React.SetStateAction<{
        name: string;
        dir: string;
    }>>
}

export function useTableSort<T>(data: T[]): TableFilterHook<T> {
    const [sorter, setSorter] = useState({
        name: '',
        dir: 'desc',
    });

    const dataSorted = useMemo(() => {
        if (sorter.name) {
            return [...data].sort((a, b) => {
                if (a[sorter.name as keyof T] === undefined || a[sorter.name as keyof T] === null) {
                    return sorter.dir === 'asc' ? -1 : 1;
                }
                if (b[sorter.name as keyof T] === undefined || b[sorter.name as keyof T] === null) {
                    return sorter.dir === 'asc' ? 1 : -1;
                }
                if (a[sorter.name as keyof T] > b[sorter.name as keyof T]) {
                    if (sorter.dir === 'desc') {
                        return -1;
                    }
                    return 1;
                }
                if (a[sorter.name as keyof T] < b[sorter.name as keyof T]) {
                    if (sorter.dir === 'asc') {
                        return -1;
                    }
                    return 1;
                }
                return 0;
            });
        }
        return data;
    }, [sorter.dir, sorter.name, data]);

    /** Callbacks */
    const handleSort = useCallback((name: string) => {
        if (name === sorter.name) {
            if (sorter.dir === 'asc') {
                setSorter({
                    name,
                    dir: 'desc',
                });
            } else {
                setSorter({
                    name: '',
                    dir: '',
                });
            }
        } else {
            setSorter({
                name,
                dir: 'asc',
            });
        }
    }, [sorter]);

    return {
        handleSort,
        sorter,
        dataSorted,
        setSorter,
    };
}