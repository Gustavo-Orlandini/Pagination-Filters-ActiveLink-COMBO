export function FormatPercentage(value: number | null | undefined): string | null {
    if (value === null || value === undefined) {
        return null;
    }

    const percentage = (value * 100).toFixed(1).replace(/\.0$/, '');

    return `${percentage}%`;
}