import './App.css';
import Cart from './components/Cart/Cart';
import Meals from './components/Meals/Meals';

function App() {
  return (
    <div className="App">
      <Meals></Meals>
      <div className='cart-container'>
        <Cart></Cart>
      </div>

    </div>
  );
}

export default App;
