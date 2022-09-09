import './App.css';
import Header from './Components/Header/Header';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import InventoryItemDetail from './Components/InventoryItemDetail/InventoryItemDetail';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import ManageInventories from './Components/ManageInventories/ManageInventories';
import AddItem from './Components/AddItem/AddItem';
import MyItems from './Components/MyItems/MyItems';
import Blogs from './Components/Blogs/Blogs';
import NotFound from './Components/NotFound/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
        <Route path="/manage-inventories" element={
          <RequireAuth>
            <ManageInventories />
          </RequireAuth>
        } />
        <Route path="/add-item" element={
          <RequireAuth>
            <AddItem />
          </RequireAuth>
        } />
        <Route path="/myitems" element={
          <RequireAuth>
            <MyItems />
          </RequireAuth>
        } />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
