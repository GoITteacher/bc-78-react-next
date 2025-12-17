import axios from "axios";

export const fetchUser = async (id: number)=>{
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const res = await axios.get(url);
    return res.data
}