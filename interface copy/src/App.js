import './App.css';
import React, {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { HomePage, LoginPage } from './pages';
import {getAllUser} from "./axios/userAxios"
import {getAllItem} from "./axios/itemAxios"
import { getAllBrand } from './axios/brandAxios';
import ProfileUser from "./pages/ShowUsersPage"
import ProfileItem from "./pages/ShowItemsPage"
import ProfileBrand from './pages/ShowbrandsPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [loginStatus, setLoginStatus] = useState(false)
  const loginHandlerCb = (result) => {
    setLoginStatus(result)
  }

  const [users, setUsers] = useState([])
  const getUserHandler = () => {
        getAllUser((result) => setUsers(result))
    }
  
  const [items, setItems] = useState([])
  const getItemHandler = () => {
    getAllItem((result) => setItems(result))
  }

  const [brands, setBrands] = useState([])
  const getBrandHandler = () => {
    getAllBrand((result) => setBrands(result))
  }

  useEffect(() => {
    if(localStorage.getItem('access_token')){
      setLoginStatus(true)
    }
    else{
      setLoginStatus(false)
    }
  },[loginStatus])

  return (
      <div className='main-page container-fluid'>
        {
          loginStatus?
            <HomePage 
            loginStatus={loginStatus} 
            loginHandlerCb={loginHandlerCb} 
            getUserHandler={getUserHandler}
            getItemHandler={getItemHandler}
            getBrandHandler={getBrandHandler}
            ></HomePage>:
            <LoginPage loginHandlerCb={loginHandlerCb}></LoginPage>
        }
        {
          <Routes>
            <Route exact path='/'></Route>
            <Route path='/user/show' element={<ProfileUser users={users}/>}></Route>
            <Route path='/item/show' element={<ProfileItem items={items}/>}></Route>
            <Route path='/brand/show' element={<ProfileBrand brands={brands}/>}></Route>
          </Routes>
        }
        {/* {
          <ProfileUser users={users}></ProfileUser>
        }
        {
          <ProfileItem items={items}></ProfileItem>
        } */}
      </div>
  );
}

export default App;
