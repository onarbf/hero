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

export async function getUserByEmail({email}){
    console.log('1',email)
    let config = {
        url: 'http://localhost:3000/api/getUserByEmail',
        method: 'POST',
        
        data: {email: email}};
    
    let res = await axios(config);
    res = JSON.parse(res.data)
    return res.documents;
}