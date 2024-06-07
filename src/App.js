import logo from './logo.svg';
import './App.css';
import AddBook from './components/AddBook';
import Search from './components/Search';
import Delete from './components/Delete';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddBook/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/delete' element={<Delete/>}/>
      <Route path='/view All' element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
