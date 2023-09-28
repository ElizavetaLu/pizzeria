

export type TPizzaSizes = {
    size: string,
    price: number,
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
    weight: number,
    sizes: TPizzaSizes[]
}

export type TNameAndIngredients = {
    name: string,
    ingredients: string[],
}
