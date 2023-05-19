import './App.css';
import Header from './components/header/Header.jsx';
import Home from './pages/Home.jsx';
import Add from "./pages/Add.jsx";
import Footer from './components/footer/Footer.jsx';
import {  
  BrowserRouter,  
  Routes,  
  Route,  
}   
from 'react-router-dom';  
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/add' element={<Add/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
