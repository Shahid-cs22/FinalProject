import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './Components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Job from './pages/Job/Job';


const App = () => {


  return (
    <>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/jobs/it-software' element={<Job />} />

      </Routes>

    </>
  )
}

export default App
