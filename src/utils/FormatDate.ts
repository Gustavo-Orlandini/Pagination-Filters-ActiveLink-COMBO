export function FormatDate(dateString: string | null | undefined): string | null {
    if (dateString === null || dateString === undefined) {
        return null;
    }

    const [year, month, day] = dateString.split('-');

    return `${day}/${month}/${year}`;
}