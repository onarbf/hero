import { useEffect, useState } from 'react';
import axios from 'axios';
import {startOfToday} from  'date-fns';
import {getFoods} from '../helpers/queries';

import PageLayout from "../components/PageLayout";
import DateHeader from "../components/DateHeader";
import Menu from "../components/Menu";
import FoodList from '../components/FoodList';

export default function Home({ data }) {
  const [date, setDate] = useState(startOfToday())
  const [foods,setFoods] = useState([]);

  useEffect(()=>{
    const fetchData = async ()=>{
      let data = await getFoods();
      setFoods(data);
    }
    fetchData();
  },[date])
  return (
    <PageLayout>
      <DateHeader date={date} setDate={setDate}/>
      <FoodList  foods={foods} setFoods={setFoods}/>
      <Menu date={date} setFoods={setFoods}/>
    </PageLayout>
  )
}
