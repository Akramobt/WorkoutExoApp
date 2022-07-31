import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { exerciseOptions,fetchData } from '../utils/fetchData';
import Details from '../components/Details';
import ExerciseVeideos from '../components/ExerciseVeideos';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
const [exerciseDetail,setExerciseDetail] = 
useState({});
const {id} = useParams();
useEffect (() => {
  const fetchExercisesData = async()=> {
    const exercisedbUrl ='https://exercisedb.p.rapidapi.com';
    const youtubeSearch = 'https://youtube-search-and-download.p.rapidapi.com';

    const exerciseDetailData = await fetchData(`${exercisedbUrl}/exercises/exercise/${id}`,exerciseOptions);
    setExerciseDetail(exerciseDetailData);

  }
fetchExercisesData();
}, [id]);

  return (
    <Box>
      <Details exerciseDetail={exerciseDetail}/>
      <ExerciseVeideos/>
      <SimilarExercises/>
      
     </Box>
  )
}

export default ExerciseDetail