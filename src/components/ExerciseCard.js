import React from 'react';
import {Link} from 'react-router-dom';
import {Button,Stack,Typography} from '@mui/material';

function ExerciseCard({exercise}) {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
    
    </Link>
  )
}

export default ExerciseCard