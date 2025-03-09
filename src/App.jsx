import { Outlet } from 'react-router'
import './App.css'
import Header from './Components/Header'
import LatestNews from './Components/LatestNews'
import LeftNavbar from './Components/layouts/LeftNavbar'
import RightNavbar from './Components/layouts/RightNavbar'
import Navbar from './Components/Navbar'
function App() {
  return (
    <div className='font-poppins'>
      <header>
        <Header></Header>
        <section className='w-11/12 mx-auto'>
          <LatestNews></LatestNews>
        </section>
        <nav className='w-11/12 mx-auto'>
          <Navbar></Navbar>
        </nav>
      </header>
      <main className='w-11/12 mx-auto grid md:grid-cols-12'>
        <aside className="left col-span-3">
          <LeftNavbar></LeftNavbar>
        </aside>
        <section className="main col-span-6 px-4">
          <Outlet></Outlet>
        </section>
        <aside className="right col-span-3">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
      <footer>

      </footer>
    </div>
  )
}

export default App
