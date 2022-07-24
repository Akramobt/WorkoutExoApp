import React,{useState} from 'react';
import { Box } from '@mui/material';

import Excercises from '../components/Excercises';

import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';

export const Home = () => {
  return (
    <Box>
      <HeroBanner/>
      <SearchExercises/>
      <Excercises/>


    </Box>
    
  )
}

export default Home