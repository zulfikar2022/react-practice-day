
const addToLocalStorage = (productName) => {
    const mealCart = getCart();
    
    if(productName in mealCart)
    {
        mealCart.productName++;
    }
    else {
        mealCart.productName = 1;
    }
    localStorage.setItem('mealCart',JSON.stringify(mealCart));

}


const getCart = () => {
    const mealCart = {};
    const storedCart = localStorage.getItem('mealCart');
    if(storedCart){
        return JSON.parse(storedCart);
    }
    return mealCart;
}