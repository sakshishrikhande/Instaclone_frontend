import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import PostForm from './components/PostForm';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/post" element={<PostForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
