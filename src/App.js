
import './App.css';
import Navbar from './components/Navbar';
import Viewdata from './components/Viewdata';
import { Route, Routes } from 'react-router-dom';
import Adddetail from './components/Adddetail';

function App() {
  return (
  <div>
    <Navbar/>
    <Routes>
        <Route path='/a' element={<Viewdata/>}/>
        <Route path='/add' element={<Adddetail/>}/>
        <Route path='/back' element={<Navbar/>}/>
      </Routes>
 

    </div>
  );
}

export default App;
