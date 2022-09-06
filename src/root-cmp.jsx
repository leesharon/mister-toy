import { Route, Routes } from "react-router-dom"
import { AppHeader } from "./cmps/app-header"
import { Home } from "./views/home"
import './assets/css/global.css'

function App() {
  return (
    <div className="main-app">
      <AppHeader />
      <main className="main-container">
        <Routes>
          <Route path='' element={<Home />} />
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
