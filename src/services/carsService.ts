import axios from 'axios';
import { Car, NewCar } from "../types/car";

const server = axios.create({
    baseURL: 'http://localhost:3000',
})


export const getCars = async ()=>{
    const res = await server.get<Car[]>('/cars');
    return res.data
}

export const createCar = async (carInfo: NewCar)=>{
    const res = await server.post<Car>('/cars', carInfo);
    return res.data
}

export const updateCar = async (id:string, carInfo: NewCar)=>{
    const res = await server.patch<Car>(`/cars/${id}`, carInfo);
    return res.data
}


export const sellCar = async (id:string)=>{
    const res = await server.patch<Car>(`/cars/${id}`, {onSale: false});
    return res.data
}


export const deleteCar = async (id:string)=>{
    const res = await server.delete<Car>(`/cars/${id}`);
    return res.data
}