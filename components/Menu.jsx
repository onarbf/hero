import { useState } from "react";
import { addFood, getFoods } from '../helpers/queries';
import { useSession} from "next-auth/react"

export default function Menu({ date, setFoods,caloriesPerDay }) {
  const { data: session } = useSession();

  const [inputName, setInputName] = useState('');
  const [inputCalories, setInputCalories] = useState('');

  const handleInputChange = function (e, type) {
    if (type === 'inputName') {
      setInputName(e.target.value)
    } else if (type === 'inputCalories') {
      setInputCalories(e.target.value)
    }
  }

  const handleClick = function (e, food) {
    const fetchData = async () => {
      await addFood(food);
      let data = await getFoods({date, owner: session.user.email});
      setFoods(data);

      setInputName('')
      setInputCalories('')
    }

    fetchData();
  }

  return (<div className="container-md pt-4 fixed-bottom">
    <div className="row justify-content-center">
      <div className="col-md-4 ">
        <div >
          <div className="collapse" id="UserMenuCollapse">
            <div className="card card-body mb-2">
            <h5>Calories per day</h5>
            <div className='d-flex'>
              <button className="btn btn-primary me-2"
                onClick={(e) => handleClick(e, {
                  date: date,
                  name: inputName,
                  calories: Number(inputCalories),
                  owner: session.user.email || undefined
                })}
                type="button" id="button-addon3">Change</button>
              <input type="text"
              onChange={(e) => { handleInputChange(e, 'inputName') }}
              className="form-control"
              value={caloriesPerDay}
              aria-describedby="button-addon1" 
              />
            </div>
            </div>
          </div>
        </div>
        <div className="card card-body mb-4">
          <div className='d-flex flex-nowrap'>
            <button className="btn btn-light border-dark px-4 py-2 me-1 "
              onClick={(e) => handleClick(e, {
                date: date,
                name: 'Tercio de Mahou',
                calories: 170,
                owner: session.user.email
              })}>
             <span style={{fontSize:'1.4rem'}}>🍺</span>
            </button>
            <button className="btn btn-light border-dark px-4 py-2 me-1 "
              onClick={(e) => handleClick(e, {
                date: date,
                name: 'Café con leche desnatada',
                calories: 47,
                owner: session.user.email || undefined
              })}>
              <span style={{fontSize:'1.4rem'}}>☕</span>
            </button>
            <button className="btn btn-light border-dark px-4 py-2 me-1 "
              onClick={(e) => handleClick(e, {
                date: date,
                name: 'Batch breakfast',
                calories: 654 ,
                owner: session.user.email || undefined
              })}>
              <span style={{fontSize:'1.4rem'}}>🥣</span>
            </button>
            
            

            <button className="btn btn-light border-dark px-4 py-2 me-1 "
              onClick={(e) => handleClick(e, {
                date: date,
                name: 'Meal breakfast',
                calories: 491,
                owner: session.user.email || undefined
              })}>
              <span style={{fontSize:'1.4rem'}}>🥗</span>
            </button>

            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#UserMenuCollapse" aria-expanded="false" aria-controls="collapseWidthExample">
              ⚙️
              </button>

          </div>

          <div className='d-flex flex-nowrap mt-2'>
            <div className="input-group">
              <button className="btn btn-primary"
                onClick={(e) => handleClick(e, {
                  date: date,
                  name: inputName,
                  calories: Number(inputCalories),
                  owner: session.user.email || undefined
                })}
                type="button" id="button-addon1">Add</button>
              <input type="text"
              onChange={(e) => { handleInputChange(e, 'inputName') }}
              className="form-control" placeholder={"Food name"}
              value={inputName}
              aria-describedby="button-addon1" 
              />
              <input type="number"
              onChange={(e) => { handleInputChange(e, 'inputCalories') }}
              className="form-control" placeholder={"Calories"}
              value={inputCalories}
              aria-describedby="button-addon2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>)
}