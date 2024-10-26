import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Teachers from './pages/Teachers'
import Courses from './pages/Courses'
import Events from './pages/Events'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}></Route>

            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact /> }></Route>
            <Route path='/teachers' element={<Teachers /> }></Route>
            <Route path='/courses' element={<Courses /> }></Route>
            <Route path='/events' element={<Events /> }></Route>
            
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
