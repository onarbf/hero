import {removeFood, getFoods} from '../helpers/queries';
import { useSession} from "next-auth/react";
export default function FoodListItem({ food , setFoods, date}) {

    const { data: session } = useSession();
    const handleClick = function (e) {
        const fetchData = async ()=>{
            await removeFood({id: food._id})
            let data = await getFoods({date, owner: session.user.email});
            setFoods(data);
          }
          
          fetchData();
    }

    return (
        <div className="w-100 list-group-item list-group-item" >
            <div className="w-100 d-flex justify-content-between">
                <h5 className="mb-1">{food.name}</h5>
                <a href='#' className='border px-1 rounded-circle border-primary' onClick={handleClick}>
                <i className="bi bi-trash3"></i>
                </a>
            </div>
            <p className="mb-1">{food.calories} Calories</p>
        </div>
    )
}