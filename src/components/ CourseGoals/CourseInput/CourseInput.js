import React, { useState } from 'react';

import Button from '../../UI/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
const [isValid,SetisValid]=  useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length>0)
    {
      SetisValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0)
    { SetisValid(false);
        return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ?'invalid':'' }`}>
        <label style={{color: !isValid ?'red' : '#ccc'}}>Course Goal</label>
        <input style ={{borderColor :!isValid?'red' : 'black', background:!isValid?'salmon' : 'transpsrent'}}type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
