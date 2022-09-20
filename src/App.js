import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import Header from './Components/Header';
import Main from './Components/Main';
import Sidebar from './Components/Sidebar';
import News from './Routes/News';
import Events from './Routes/Events';
import './App.css';
import LogIn from './Routes/LogIn';

function App() {
  
  if(!sessionStorage.signedIn) {
    return (
      <div className="App">
        <Header />
        <Main/>
        <Routes>
          <Route path='/' element={<Navigate to='/signin' replace/>}/>
          <Route path='/signin' element={<LogIn/>}/>
          <Route className="register-link" path='/createaccount'/>
        </Routes>
        {/* <AppPage/> */}
      </div>
    )
  }
    return (
      <main className="App">
        <Header/>
        <Sidebar />
        <Main/>
        
          {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
            <Routes>
              <Route path='/all' element={<Main/>}/>
              <Route path='/signin' element={<LogIn/>}/>
              <Route path='/news' element={<News/>}/>
              <Route path='/events' element={<Events/>}/>
            </Routes>
          {/* </BrowserRouter> */}
         
      </main>
    )
  }
  
  
export default App;