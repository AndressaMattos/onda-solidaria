export const formattedDate = (data: Date) => {
    return new Intl.DateTimeFormat("fr-CA", { year: "numeric", month: "2-digit", day: "2-digit" }).format(data)
}

export const formattedDateToBr = (data: string) => {
    const date = new Date(data)
    return new Intl.DateTimeFormat("pt-BR", { year: "numeric", month: "2-digit", day: "2-digit", timeZone: "UTC"}).format(date)
}
