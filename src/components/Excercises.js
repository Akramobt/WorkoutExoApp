import React,{useEffect,useState} from 'react'
import { Pagination } from '@mui/material/Pagination';
import { Box,Stack,Typography } from '@mui/material/';
import {exerciseOptions,fetchData} from '../utils/fetchData';
import ExerciseCard from '../components/ExerciseCard';

const Excersises = ({excercises,setExercises,bodyPart}) => {
  console.log(excercises);
  return (
    <Box id="excercises"
    sx={{mt:{lg:'110px'}}}
    mt="50px"
    p="20px"
    >
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack direction="row" sx={{gap:{lg:'110px',sx:'50px'} }}
      flexWrap="wrap" justifyContent="center">
        {excercises.map((exercise,idx)=> (
        <ExerciseCard key={idx} exercise={exercise}/>))}

      </Stack>

    </Box>
  )
}

export default Excersises