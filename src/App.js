import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home/Home';
import Login from './page/Login/Login';
import AppLayout from './layout/AppLayout';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
