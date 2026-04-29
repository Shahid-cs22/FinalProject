import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './Components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Job from './pages/Job/Job';
import Job2 from './pages/Job2/Job2';
import Job3 from './pages/Job3/Job3';
import Register from './pages/RegisterPg/Register';
import JobDetails from './pages/JobDetails/JobDetails';
import Login from './pages/Login/Login';
import Job4 from './pages/Job4/Job4';
import Job5 from './pages/Job5/Job5';
import Job6 from './pages/Job6/Job6';


const App = () => {


  return (
    <>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/jobs/it-software' element={<Job />} />
        <Route path='/jobs/bpo-jobs' element={<Job2 />} />
        <Route path='/jobs/sales' element={<Job3 />} />
        <Route path='/jobs/fresher' element={<Job4 />} />
        <Route path='/jobs/java-developer' element={<Job5 />} />
         <Route path='/jobs/content-writer' element={<Job6 />} />
        <Route path='/register' element={<Register />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/login" element={<Login />} />


      </Routes>

    </>
  )
}

export default App
