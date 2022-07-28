import React,{useEffect,useState} from 'react'
import  Pagination  from '@mui/material/Pagination';
import { Box,Stack,Typography } from '@mui/material/';
import {exerciseOptions,fetchData} from '../utils/fetchData';
import ExerciseCard from '../components/ExerciseCard';

const Excersises = ({excercises,setExercises,bodyPart}) => {
  console.log(excercises);
  const [currentPage,setCurrentPage] =useState(1);
  const exercisesPerPage=9; 
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = excercises.slice (indexOfFirstExercise,indexOfLastExercise);


  const paginate=(e,value) => {
    setCurrentPage(value)
    window.scrollTo({top:1800,behavior:'smooth'})

  }

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
        {currentExercises.map((exercise,idx)=> (
        <ExerciseCard key={idx} exercise={exercise}/>))}

      </Stack>
      <Stack mt="100px" alignItems="center">
        {excercises.length > 9 && (
          <Pagination
          color="standard"
          shape="rounded"
          defaultPage={1}
          count={Math.ceil(excercises.length/ exercisesPerPage)}
          page={currentPage}
          onChange={paginate}
          size="large"
          />
        )

        }
      
    

      </Stack>

    </Box>
  )
}

export default Excersises