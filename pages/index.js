import { useEffect, useState } from 'react';
import axios from 'axios';
import {startOfToday} from  'date-fns';
import {getFoods} from '../helpers/queries';

import PageLayout from "../components/PageLayout";
import DateHeader from "../components/DateHeader";
import Menu from "../components/Menu";
import FoodList from '../components/FoodList';
import CaloriesCounter from '../components/CaloriesCounter';


export default function Home({ data }) {
  const [date, setDate] = useState(startOfToday())
  const [foods,setFoods] = useState([]);
  const [caloriesPerDay, setCaloriesPerDay] = useState(1880)
  const [caloriesConsumedPerDay, setCaloriesConsumedPerDay] = useState(0)

  useEffect(()=>{
    
    const fetchData = async ()=>{
      let data = await getFoods();
      setFoods(data);
    }

    fetchData();
  },[date])

  useEffect(()=>{
    const fetchData = async ()=>{

    const consumedCalories = foods.reduce((accumulator,food)=>{
      console.log(accumulator)
      return accumulator + food.calories
    },0)
    setCaloriesConsumedPerDay(consumedCalories);
    }

    fetchData();
  },[foods])
  return (
    <PageLayout>
      <DateHeader date={date} setDate={setDate}/>
      <CaloriesCounter caloriesConsumedPerDay={caloriesConsumedPerDay} caloriesPerDay={caloriesPerDay}/>
      <FoodList  foods={foods} setFoods={setFoods} />
      <Menu date={date} setFoods={setFoods}/>
    </PageLayout>
  )
}
