import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Router } from 'react-router-dom'
import Home from '../Pages/Home';
import Main from '../layout/main';
import Book1 from '../Pages/Book1';
import Book2 from '../Pages/Book2';
import Book3 from '../Pages/Book3';
import Book4 from '../Pages/Book4';
import About from '../components/About';
import Contact from '../components/Contact'; 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<Main />}>

      <Route index element={<Home />} />
      <Route path='/Book1' element={<Book1 />} />
      <Route path='/Book2' element={<Book2 />} />
      <Route path='/Book3' element={<Book3 />} />
      <Route path='/Book4' element={<Book4 />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Contact' element={<Contact />} />
    </Route>

  )
);
const App = () => {
  return <RouterProvider router={router} />
}

export default App