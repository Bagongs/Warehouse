import React, {useState, useEffect} from "react";
import {NavBarMenu} from '../components'

const HomePage = (props) => {
    const {
        loginStatus, 
        loginHandlerCb, 
        getUserHandler, 
        getItemHandler,
        getBrandHandler} = props

    return(
        <>
            <div className="home-page">
                <h1>Dashboard Warehouse</h1>
                <NavBarMenu 
                loginStatus={loginStatus} 
                loginHandlerCb={loginHandlerCb} 
                getUserHandler={getUserHandler}
                getItemHandler={getItemHandler}
                getBrandHandler={getBrandHandler}></NavBarMenu>
            </div>
        </>
    )
}

export default HomePage
