

import MainPage from './pages/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TestPage from './pages/TestPage';
import Hinnat from './pages/Hinnat';
import Info from './pages/Info';
import Tili from './pages/Tili';
import Order from './pages/Order';
import ComputerPlaces from './pages/ComputerPlaces';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/computerplaces' element={<ComputerPlaces />} />
        <Route path='/order' element={<Order />} />
        <Route path='/mainpage' element={<MainPage />} />
        <Route path='/hinnat' element={<Hinnat />} />
        <Route path='/info' element={<Info />} />
        <Route path='/tili' element={<Tili />} />
        <Route path='/test' element={<TestPage />} />
      </Routes>
    </BrowserRouter>
    
  );
};

export default App;
