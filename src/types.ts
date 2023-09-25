

export type TPizzaSizes = {
    size: string,
    sizeLetter: string,
    length: string
}

export type TPizzaCard = {
    _id: number,
    isNew: boolean,
    name: string,
    image: string,
    ingredients: string[],
    price: number,
    sizes: TPizzaSizes[]
}