import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './NotFound'
import Lanidng from './Landing'
import Login from './Login'
import Layout from './Home/Layout'
import Welcome from './Home/Welcome'

type Props = {}

const Entrance: React.FC<Props> = (props) => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Welcome />} />
          </Route>
          <Route path="landing" element={<Lanidng />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Entrance
