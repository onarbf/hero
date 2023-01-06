import {removeFood, getFoods} from '../helpers/queries';

export default function FoodListItem({ food , setFoods, setCaloriesConsumedPerDay}) {
    const handleClick = function (e) {
        const fetchData = async ()=>{
            await removeFood({id: food._id})
            let data = await getFoods();
            setFoods(data);
          }
          
          fetchData();
    }

    return (
        <div className="w-100 list-group-item list-group-item" >
            <div className="w-100 d-flex justify-content-between">
                <h5 className="mb-1">{food.name}</h5>
                <a href='#' class='border px-1 rounded-circle border-primary' onClick={handleClick}>
                <i class="bi bi-trash3"></i>
                </a>
            </div>
            <p className="mb-1">{food.calories} Calories</p>
        </div>
    )
}