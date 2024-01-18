import './App.css';
import Home from './pages/home/home';
import Login from './pages/login/login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pure from './pages/pure-component/pure';
import ProtectedRoute from './ProtectedRoute';
import Parent from './pages/parent-context/parent';
import Counter from './pages/counter-use-memo/Counter';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="login" element={<Login />} />
        <Route path="pure" element={<Pure />} />
        <Route path="context-api" element={<Parent />} />
        <Route path="use-memo" element={<Counter />} />
        <Route path="home" element={
        <ProtectedRoute>
        <Home/>
        </ProtectedRoute>
     }/>
        <Route path="*" element={<Login />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
