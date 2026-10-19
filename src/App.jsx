import { useState } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Books from './components/Books/Books';
import Cart from './components/Cart/Cart';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div>
      {cartIsShown && <Cart onCloseCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Books />
      </main>
    </div>
  );
}

export default App;