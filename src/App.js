import './App.css';
import Home from './Comoponents/Home';
import IphonePage from './Comoponents/IphonePage';
import OnePlus from './Comoponents/Oneplus';
import Vivopage from './Comoponents/Vivopage';
import FormL from "./Comoponents/FormL";
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Popup from './Comoponents/Popup';
import SignupForm from './Comoponents/SignupForm';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/iphonePage' element={<IphonePage/>}/>
          <Route path='/vivopage' element={<Vivopage/>}/>
          <Route path='/onePlus' element={<OnePlus/>}/>
          <Route path='/form' element={<FormL/>}/>
          {/* <Route path='/popup' element={<Popup/>}/> */}
          <Route path='/signup' element={<SignupForm/>}/>
          

        </Routes>
      </Router>
      {/* <IphonePage/>
      <Vivopage/>
      <OnePlus/> */}
      
    </div>
  );
}

export default App;
