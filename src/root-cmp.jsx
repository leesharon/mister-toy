import { Route, Routes } from "react-router-dom"
import { AppHeader } from "./cmps/app-header"
import { Home } from "./views/home"
import './assets/css/global.css'
import { ToyApp } from "./views/toy-app"
import { About } from "./views/about"
import { ToyDetails } from "./views/toy-details"

function App() {
  return (
    <div className="main-app">
      <AppHeader />
      <main className="container">
        <Routes>
          <Route path='home' element={<Home />} />
          <Route path='' element={<ToyApp />} />
          <Route path='about' element={<About />} />
          <Route path='toy/:id' element={<ToyDetails />} />
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
