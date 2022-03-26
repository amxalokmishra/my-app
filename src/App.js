import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './TextForm';
import About from './About';
import Alert from './Alert'
import React,{ useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
function App() {
  const[mode,setMode]=useState('light');
  const [alert, setalert] = useState(null);
  const setAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>
      {setalert(null)},1200);
  }
  const toggle=()=>{
    if(mode=='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      setAlert('Dark Mode has been enabled',"success");
      document.title='Text Utils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      setAlert('Light Mode has been enabled',"success");
      document.title='Text Utils - Light Mode';
    }
  }
  return (
    <>
    <Router>
     <Navbar title=" AMx Text" mode={mode} toggle={toggle}/>
     <Alert alert={alert}/>
     <div className="container">
       <Routes>
         <Route path="/" element={<TextForm setAlert={setAlert} heading="Enter the text" mode={mode}/>}/>
         <Route path="/about" element={<About mode={mode}/>} />
       </Routes>
      </div>
      </Router>
    </>
  );
}
export default App;
