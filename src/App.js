import { Routes, Route } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Header from './components/Header';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';

function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
        <Route path='/' element={<PageOne />} />
        <Route path='/pagetwo' element={<PageTwo />} />
        <Route path='/calculator' element={<Calculator />} />
      </Routes>
    </div>
  );
}

export default App;
