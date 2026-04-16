import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './Components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Job from './pages/Job/Job';
import Job2 from './pages/Job2/Job2';


const App = () => {


  return (
    <>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/jobs/it-software' element={<Job />} />
        <Route path='/jobs/bpo-jobs' element={<Job2 />} />


      </Routes>

    </>
  )
}

export default App
