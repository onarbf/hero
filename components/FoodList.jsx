import { render } from "react-dom";
import { useEffect } from "react";

import FoodListItem from "./FoodListItem";
export default function FoodList({date, foods, setFoods}) {
  useEffect(()=>{
    console.log('foods', foods)
  },[foods])

  const renderFoodListItems = function (foods){
    return foods.map((food,key)=>{
      return <FoodListItem food={food} setFoods={setFoods} key={key}/>
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