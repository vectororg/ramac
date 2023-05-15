
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div>
      <Navbar />
      
      
      <Sidebar />
     
      <div className="main-container">
      {/* Other components or navigation */}
      <MainPage />
    </div>
    </div>
  );
};

export default App;
