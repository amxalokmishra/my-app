import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './TextForm';
import About from './About';
function App() {
  return (
    <>
     <Navbar title=" AMx Text" About="Nickname"/>
     <div className="container">
       <TextForm heading="Enter the text"/>
       <About/>
      </div>
    </>
  );
}
export default App;
