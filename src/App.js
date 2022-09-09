import './App.scss';
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Proyect from './components/Proyect';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='proyect' element={<Proyect />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
