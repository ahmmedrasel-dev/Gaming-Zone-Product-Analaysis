import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';
import Dashboard from './components/Dashboard/Dashboard';
import Nofound from './components/Nofound/Nofound';
import Question1 from './components/Blog/Question1';
import Question2 from './components/Blog/Question2';
import Question3 from './components/Blog/Question3';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}>
          <Route path='question1' element={<Question1></Question1>}></Route>
          <Route path='question2' element={<Question2></Question2>}></Route>
          <Route path='question3' element={<Question3></Question3>}></Route>
        </Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<Nofound></Nofound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
