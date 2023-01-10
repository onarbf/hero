import { useEffect, useState } from 'react';
import {startOfToday} from  'date-fns';
import {getFoods,getUserByEmail} from '../helpers/queries';

import PageLayout from "../components/PageLayout";
import DateHeader from "../components/DateHeader";
import Menu from "../components/Menu";
import FoodList from '../components/FoodList';
import CaloriesCounter from '../components/CaloriesCounter';
import { getSession, useSession} from "next-auth/react";


export default function Home({ data }) {
  const { data: session } = useSession();
  const [date, setDate] = useState(startOfToday())
  const [foods,setFoods] = useState([]);
  const [caloriesPerDay, setCaloriesPerDay] = useState(1880)
  const [caloriesConsumedPerDay, setCaloriesConsumedPerDay] = useState(0)

  useEffect(()=>{
    const fetchData = async ()=>{
      console.log(session)
      let data = await getFoods({date, owner: session.email});
      setFoods(data);
    }

    fetchData();
  },[date])

  useEffect(()=>{
    const fetchData = async ()=>{

    const consumedCalories = foods.reduce((accumulator,food)=>{
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
      <FoodList  foods={foods} date={date} setFoods={setFoods} />
      <Menu date={date} setFoods={setFoods} caloriesPerDay={caloriesPerDay}/>
    </PageLayout>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    }
  }

  return {
    props: { ...session }
  }
}