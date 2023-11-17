import { Routes, Route } from 'react-router-dom'
import './App.css'
import MainPage from './components/mainPage/MainPage'
import FullPost from './components/takePost/FullPost'

function App() {
  return (
    <div className='content'>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/posts/:id' element={<FullPost/>} />
      </Routes>
    </div>
  );
}

export default App;
