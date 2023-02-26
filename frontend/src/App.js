import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
