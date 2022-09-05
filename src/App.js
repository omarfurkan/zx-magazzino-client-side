import './App.css';
import Header from './Components/Header/Header';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import InventoryItemDetail from './Components/InventoryItemDetail/InventoryItemDetail';
import RequireAuth from './Components/RequireAuth/RequireAuth';

function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/itemDetail/:itemId" element={
          <RequireAuth>
            <InventoryItemDetail />
          </RequireAuth>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
