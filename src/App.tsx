import { useState } from 'react'
import Home from './Front_end/Home'
import Header from './Front_end/Header';
import Search from './Front_end/Search';
import About from './Front_end/About'
import Cart from './Front_end/Cart';
import Footer from './Front_end/Footer'
import Log from './Front_end/Log';
import Owner from './Front_end/Owner';
import Show from './Front_end/OwnerShow'


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/Header' element={<Header></Header>}></Route>
          <Route path='/Footer' element={<Footer></Footer>}></Route>
          <Route path='/Search' element={<Search></Search>}></Route>
          <Route path='/About' element={<About></About>}></Route>
          <Route path='/Cart' element={<Cart></Cart>}></Route>
          <Route path='/Log' element={<Log></Log>}></Route>
          <Route path='/Owner' element={<Owner></Owner>}></Route>
          <Route path='/Show' element={<Show></Show>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
