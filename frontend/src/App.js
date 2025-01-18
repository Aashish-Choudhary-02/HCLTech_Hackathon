import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import { useState } from 'react';
import LoginPage from './components/LoginPage';
import DemographicForm from './components/DemographicForm';

function App() {

  const [Mode, setMode] = useState('light');

  const toggleMode =  ()=> {    
    if(Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#13375b';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/PI" element={<Navbar title = 'CTPM' mode = {Mode} toggleMode = {toggleMode} role = 'PI'/>} />
        <Route exact path="/CRC" element = { <DemographicForm mode = {Mode} toggleMode = {toggleMode} /> } />
      </Routes>
    </Router>
  );
}

export default App;
