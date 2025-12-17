export interface Cocktail {
    _id: string;
    drink: string;
    drinkThumb: string;
    description: string;
}


export interface SearchCocktailsParams {
    f?:string;
    s?:string;
    d?:string;
    a?:string;
    c?:string;
    i?:string;
    g?:string;
}