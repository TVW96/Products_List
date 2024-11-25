import ProductsList from './components/ProductsList';
import './App.css';

function App() {
  return (
    <div className="section">

      <h1 className='header'>JSX - Products List</h1>
      <div className='opaque-block'>
        <ProductsList />
      </div>
    </div>
  );
}

export default App;
