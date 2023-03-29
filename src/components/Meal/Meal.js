import React from 'react';
import './Meal.css';

const Meal = (props) => {
    console.log(props.meal);
    const {strCategory,strArea,strInstructions,strMeal,strMealThumb} = props.meal;
    return (
        <div className='meal'>
            <h1>Name : {strMeal} </h1>
            <h3>Meal Category is : {strCategory} </h3>
            <h4>Meal Area is : {strArea} </h4>
            <p>How to make the meal : {strInstructions} </p>
            <img src={strMealThumb} alt="" /><br/>
            <button>Add Meal to your like list</button>
        </div>
    );
};

export default Meal;