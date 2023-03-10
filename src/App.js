import { Container } from '@mui/system';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import SimpleBottomNavigation from './components/mainNav';
import Trending from './components/Pages/Trending/Trending';
import Movies from './components/Pages/Movies/Movies';
import Series from './components/Pages/Series/Series';
import Search from './components/Pages/Search/Search';

// https://developers.themoviedb.org/3/getting-started/introduction


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">


      <Container>
        <Routes>
          <Route path='/' element={<Trending/>} exact/>
          <Route path='/movies' element={<Movies/>} />
          <Route path='/series' element={<Series/>} />
          <Route path='/search' element={<Search/>} />

        </Routes>
      </Container>

      </div>

      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;