import React from 'react'
import Home from './pages/Home'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import PageNotFaund from './pages/PageNotFaund'
import MainLayout from './layout/MainLayout'
import Aksiya from './pages/Aksiya'
import Kontakt from './pages/Kontakt'
import Narxlarjadvali from './pages/Narxlarjadvali'
import Certifikat from './pages/Certifikat'
import Okompany from './pages/Okompany'

const App = () => {

  const roter = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>

        <Route path='/' element={<Home />} />
        <Route path='*' element={<PageNotFaund />} />
        <Route path='aksiya' element={<Aksiya />} />
        <Route path='narxlar' element={<Narxlarjadvali/>}/>
        <Route path='okompany' element={<Okompany/>}/>

        {/* <Route path='/' element={<Okompany />}>
          <Route index element={<Tutorial />} />
          <Route path='bir' element={<Tutorial />} />
          <Route path='ikki' element={<Think />} />
        </Route> */}
        <Route path='certifikat' element={<Certifikat/>}/>
        <Route path='kontakt' element={<Kontakt />} />

      </Route>
    )
  )
  return (
    <RouterProvider router={roter} />
  )
}


export default App
