

import MainPage from './pages/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TestPage from './pages/TestPage';
import LoginButton from './components/LoginButton';
import LoginModal from './components/LoginModal';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='login' element={<LoginButton />} />
        <Route path='loginmodal' element={<LoginModal />} />
        <Route path='/' element={<MainPage />} />
        <Route path='test' element={<TestPage />} />
      </Routes>
    </BrowserRouter>
    
  );
};

export default App;
