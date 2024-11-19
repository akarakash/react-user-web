import './App.css';
import Home from './Comoponents/Home';
import IphonePage from './Comoponents/IphonePage';
import OnePlus from './Comoponents/Oneplus';
import Vivopage from './Comoponents/Vivopage';
import FormL from "./Comoponents/FormL";
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Popup from './Comoponents/Popup';
import SignupForm from './Comoponents/SignupForm';
import Apidata from './Comoponents/Apidata';
import Navbarr from './Comoponents/Navbarr';
import Footer from './Comoponents/Footer';
function App() {
  return (
    <div>

      <Router>
        <Navbarr/>
        <Routes>
          <Route path='/apipage/:id' element={<Apidata/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/iphonePage' element={<IphonePage/>}/>
          <Route path='/vivopage' element={<Vivopage/>}/>
          <Route path='/onePlus' element={<OnePlus/>}/>
          <Route path='/form' element={<FormL/>}/>
          {/* <Route path='/popup' element={<Popup/>}/> */}
          <Route path='/signup' element={<SignupForm/>}/> 
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
