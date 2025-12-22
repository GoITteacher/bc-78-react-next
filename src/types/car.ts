export interface Car{
    id:string;
    model:string;
    price: number;
    year: number;
    speed: number;
    color: string;
    onSale: boolean;
}

export interface NewCar{
    model:string;
    price: number;
    year: number;
    speed: number;
    color: string;
    onSale?: boolean;
}

export interface UpdateCar{
    model?:string;
    price?: number;
    year?: number;
    speed?: number;
    color?: string;
    onSale?: boolean;
}