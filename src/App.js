
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Createaccnt from './Routes/Createaccnt';
import Signin from './Routes/SignIn'
import{Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    <div>
      <Routes>
          <Route path='/createaccount' element={<Createaccnt />} />
          <Route path='/signin' element={<Signin />} />
          
      </Routes>
    </div>  
    </div>
  );
}

export default App;
