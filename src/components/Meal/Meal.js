import React from 'react';
import './Meal.css';


const Meal = (props) => {
    console.log(props.meal);

    const { strCategory, strArea, strInstructions, strMeal, strMealThumb, idMeal } = props.meal;

    const addToLocalStorage = (productId) => {
        const mealCart = getCart();
        console.log(productId);
        

        if (productId in mealCart) {
            mealCart[productId] = mealCart[productId]+1;
        }
        else {
            mealCart[productId] = 1;
        }
        localStorage.setItem('mealCart', JSON.stringify(mealCart));

    }


    const getCart = () => {
        const mealCart = {};
        const storedCart = localStorage.getItem('mealCart');
        if (storedCart) {
            return JSON.parse(storedCart);
        }
        return mealCart;
    }

    const addToCart = (productId) => {
        console.log("this is the onclick function");
        console.log(productId);
        addToLocalStorage(productId);
    }


    return (
        <div className='meal'>
            <h1>Name : {strMeal} </h1>
            <h3>Meal Category is : {strCategory} </h3>
            <h4>Meal Area is : {strArea} </h4>
            <p>How to make the meal : {strInstructions} </p>
            <img src={strMealThumb} alt="" /><br />
            <button onClick={() => addToCart(idMeal)}>Add Meal to your like list</button>
        </div>
    );
};

export default Meal;