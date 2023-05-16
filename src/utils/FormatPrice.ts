export function FormatPrice(price?: number) {
    return price
        ? new Intl.NumberFormat('pt-BR',
            { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 }).format(price)
        : undefined;
}

export function formatPriceCurrencyNULL(price: number) {
    return new Intl.NumberFormat('pt-BR',
        { minimumFractionDigits: 2 }).format(price);
}