import './App.css';
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';
import { BrowserRouter , Routes,  Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route exact path='/' element={<Homepage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
       </Routes>
      </BrowserRouter>
    
   
      {/* <Homepage />
      <Login/>
      <Register/> */}
    </div>
  );
}

export default App;
