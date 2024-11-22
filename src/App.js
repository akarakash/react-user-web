import './App.css';
import Home from './Comoponents/Home';
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Apidata from './Comoponents/Apidata';
import Navbarr from './Comoponents/Navbarr';
import Footer from './Comoponents/Footer';
import Login from './Comoponents/Login';
import Productsdetails from './Comoponents/Productsdetails';
// import Iphone from './Comoponents/Iphone';
import Vivopage from './Comoponents/Vivopage';
import OnePlus from './Comoponents/Oneplus';
import IphonePage from './Comoponents/IphonePage';
function App() {
  return (
    <div>

      <Router>
        <Navbarr/>
        <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path='/apipage/:id' element={<Apidata/>}/> 
          <Route path='/login' element={<Login/>}/>
          <Route path='/productsdetails/:id' element={<Productsdetails/>}/>
          <Route path='/vivopage' element={<Vivopage/>}/>
           <Route path='/iphonePage' element={<IphonePage/>}/> 

          
          
          <Route path='/onePlus' element={<OnePlus/>}/>
         {/* <Route path='/popup' element={<Popup/>}/>     */}
        </Routes>
        <Footer/>
      </Router>

      {/* <IphonePage/>
      <Vivopage/>
      <OnePlus/> */}
      
    </div>
  );
}

export default App;
