import React,{useState} from 'react';
import { Box } from '@mui/material';

import Excercises from '../components/Excercises';

import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';

export const Home = () => {
  const [bodyPart,setBodyPart] =useState('all')
  const [excercises,setExercises] = useState ([]);
  return (
    <Box>
      <HeroBanner/>
      <SearchExercises setExercises={setExercises} 
      bodyPart={bodyPart} 
      setBodyPart={setBodyPart}/>
      <Excercises setExercises={setExercises} 
      bodyPart={bodyPart} 
      excercises={excercises}/>


    </Box>
    
  )
}

export default Home