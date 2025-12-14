import './css/App.css';
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Favourites from './pages/Favourites'
import NavBar from './components/NavBar';
import { MovieProvier } from './contexts/MovieContext';



function App() {

  return (
    <MovieProvier>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </main>
    </MovieProvier>
  )
}

export default App
