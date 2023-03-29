import React from 'react';
import './Meals.css';
import { useEffect } from 'react';
import { useState } from 'react';
import Meal from '../Meal/Meal';

const Meals = () => {
    const [meals, setMeals] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => {
                setMeals(data.meals);
                setIsLoading(false);
            });
    }, [])
    // console.log(meals);

    if (!isLoading) {
        return (
            <div>

                {
                   meals.map(meal => <Meal key={meal.idMeal} meal = {meal}></Meal>)
                }
            </div>
        );
    }
};

export default Meals;