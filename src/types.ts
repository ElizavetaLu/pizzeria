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
    weight: number
}

export type TNameAndIngredients = {
    name: string,
    isNew: boolean,
    ingredients: string[],
}

export type TFormInput = {
    isRequired?: boolean,
    textarea?: boolean,
    file?: boolean,
    title: string
}

export type TPosition = {
    title: string,
    image: string,
    scroll: any
}

export type TLoaction = {
    lat: number,
    lng: number,
    id?: string
}

export type TMap = {
    currentPizzeria: TLoaction,
    setCurrentPizzeria: (location: TLoaction) => void
} 