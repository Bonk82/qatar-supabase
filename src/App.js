import './App.css';
import { Login } from './pages/Login';
import {Route, Routes} from 'react-router-dom'
import "primereact/resources/themes/vela-orange/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css'; 
import PrimeReact from 'primereact/api';
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { NotFound } from './pages/NotFound';

PrimeReact.ripple = true;
PrimeReact.autoZIndex = true;

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
