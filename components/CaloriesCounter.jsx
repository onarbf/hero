import { useEffect } from "react";


export default function CaloriesCounter({caloriesConsumedPerDay,caloriesPerDay}) {

  useEffect(()=>{

  },[caloriesConsumedPerDay])

  const calculateConsumedCaloriesPercentage = function(caloriesConsumedPerDay,caloriesPerDay){
    return ((caloriesConsumedPerDay/(caloriesPerDay/100)))
  }

  return (
    <div className="container-md pt-2">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className='w-100 d-flex justify-content-end'><small>(te quedan por consumir {caloriesPerDay - caloriesConsumedPerDay} calorias) | {caloriesConsumedPerDay}/{caloriesPerDay}</small></div>
          <div className="progress bg-success d-flex justify-content-end">
            <div className="progress-bar bg-danger" style={{width: (calculateConsumedCaloriesPercentage(caloriesConsumedPerDay,caloriesPerDay)+'%')}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
