import logo from './logo.svg';
import './App.css';
import ListProduct from './components/ListProduct';
import Cart from './components/Cart';

function App() {
  return (
    <div className="container">
      {/* TITLE : START */}
      <div className="page-header">
        <h1>
          Project 04 - Shopping Cart <small>ReactJS</small>
        </h1>
      </div>
      {/* TITLE : END */}
      <div className="row">
        {/* LIST PRODUCT : START */}
        <ListProduct />
        {/* LIST PRODUCT : END */}
        {/* CART : START */}
        <Cart />
        {/* CART : END */}
      </div>
    </div>

  );
}

export default App;
