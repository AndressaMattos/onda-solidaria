export const formattedDate = (data: Date) => {
    return new Intl.DateTimeFormat("fr-CA", { year: "numeric", month: "2-digit", day: "2-digit" }).format(data)
}

//deletar evento, criar headerzinho, redirecionamento