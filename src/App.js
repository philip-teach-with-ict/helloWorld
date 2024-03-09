import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import './App.css';



function App(){
 return (
  <div>
    <Header name="Anna" color="purple"/>
    <Main name="Peter" color="red" />
    <Sidebar name="Harry" color="beige" />
  </div>
 ) 
}

export default App;
