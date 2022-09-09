import { Route, Routes } from "react-router-dom"
import { AppHeader } from "./cmps/app-header"
import { Home } from "./views/home"
// import './assets/css/global.css'
import { ToyApp } from "./views/toy-app"
import { About } from "./views/about"
import { ToyDetails } from "./views/toy-details"
import { ToyEdit } from "./views/toy-edit"
import { Dashboard } from "./views/dashboard"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { loadToys } from "./store/actions/toy.action"
import React from 'react'
import { Signup } from "./cmps/signup"

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadToys())
  }, [])

  return (
    <div className=" main-layout">
      <AppHeader />
      <main className="container">
        <Routes>
          <Route path='home' element={<Home />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='' element={<ToyApp />} />
          <Route path='about' element={<About />} />
          <Route path='toy/:id' element={<ToyDetails />} />
          <Route path='toy/edit/:id' element={<ToyEdit />} />
          <Route path='toy/edit' element={<ToyEdit />} />
          <Route path='user/signup' element={<Signup />} />
        </Routes>
      </main>
      <footer className="main-footer">
        <section className="container">
          All Coffee Rights Reserved to Puki &copy;
        </section>
      </footer>
    </div>
  )
}
export default App
