import Banner from './components/banner/Banner';
import HomePage from './pages/home/HomePage';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Settings from './pages/settings/Settings';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import { BrowserRouter, Routes, Route, Link, Router } from 'react-router-dom';

function App() {
  const currentUser = true;
  return (
    <BrowserRouter>
      <Banner />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
