import axios from "axios";

export async function getFoods(){
    let config = { url: '/api/foods' };
    let res = await axios(config);
    res = JSON.parse(res.data)
    console.log(res);
    return res.documents;
}


export async function addFood(food){
    let config = {
        url: '/api/addFood',
        method: 'POST',
        data: food};
    
    let res = await axios(config);
    res = JSON.parse(res.data)
    console.log(res);
    return res.documents;
}

export async function removeFood({id}){
    console.log('id',id)
    let config = {
        url: '/api/removeFood',
        method: 'POST',
        data: {id: id}};
    
    let res = await axios(config);
    res = JSON.parse(res.data)
    console.log(res);
    return res.documents;
}