import { urlFetch } from "../constants";

export const getListContryName = async (country: string) => {
    
    const response = await fetch(`${urlFetch}${country}`,{
        method:'GET'
    });
    const data = response.json();
    return data
}
