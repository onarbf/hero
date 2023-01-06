import { render } from "react-dom";
import { useEffect } from "react";

import FoodListItem from "./FoodListItem";
export default function FoodList({date, foods, setFoods}) {

  const renderFoodListItems = function (foods){
    return foods.map((food,key)=>{
      return <FoodListItem
      food={food}
      date={date}
      setFoods={setFoods}
      key={key}/>
    })    
  }
  
  return (
    <div className="container-md mt-2">
      <div className="row justify-content-center">
        <div className="col-md-4 d-flex justify-content-center">
          <div className="list-group w-100 ">
           {renderFoodListItems(foods)}
          </div>
        </div>
      </div>
    </div>
  )
}