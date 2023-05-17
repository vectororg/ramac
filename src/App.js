

import MainPage from './pages/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TestPage from './pages/TestPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='test' element={<TestPage />} />
      </Routes>
    </BrowserRouter>
    
  );
};

export default App;
