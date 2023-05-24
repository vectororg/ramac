

import MainPage from './pages/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TestPage from './pages/TestPage';
import LoginButton from './components/LoginButton';
import LoginModal from './components/LoginModal';
import Hinnat from './pages/Hinnat';
import Info from './pages/Info';
import Tili from './pages/Tili';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='mainpage' element={<MainPage />} />
        <Route path='hinnat' element={<Hinnat />} />
        <Route path='info' element={<Info />} />
        <Route path='tili' element={<Tili />} />
        <Route path='login' element={<LoginButton />} />
        <Route path='loginmodal' element={<LoginModal />} />
        <Route path='/' element={<MainPage />} />
        <Route path='test' element={<TestPage />} />
      </Routes>
    </BrowserRouter>
    
  );
};

export default App;
