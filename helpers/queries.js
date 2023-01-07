import axios from "axios";

export async function getFoods({date, owner}){
    let config = {
        url: '/api/foods',
        method: 'POST',
        data: {date, owner}};

    let res = await axios(config);
    res = JSON.parse(res.data)
    return res.documents;
}


export async function addFood(food){
    let config = {
        url: '/api/addFood',
        method: 'POST',
        data: food};
    
    let res = await axios(config);
    res = JSON.parse(res.data)
    return res.documents;
}

export async function removeFood({id}){
    
    let config = {
        url: '/api/removeFood',
        method: 'POST',
        data: {id: id}};
    
    let res = await axios(config);
    res = JSON.parse(res.data)
    return res.documents;
}