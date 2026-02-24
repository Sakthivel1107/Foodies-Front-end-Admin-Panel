import React, { useState } from "react";
import AddFood from "./pages/AddFood";
import ListFood from "./pages/listfood/ListFood";
import Orders from "./pages/Orders/Orders";
import SideBar from "./components/SideBar";
import MenuBar from "./components/MenuBar";
import { Routes,Route } from "react-router-dom";
import {ToastContainer} from "react-toastify";

const App = () => {
  const toggleSideBarVisibility = () => {
    document.body.classList.toggle("sb-sidenav-toggled");
  }
  return (
    <div className="d-flex" id="wrapper">
        <SideBar />
        <div id="page-content-wrapper">
            <MenuBar toggleSideBarVisibility={toggleSideBarVisibility}/>
            <ToastContainer />
            <div className="container-fluid">
                <Routes>
                  <Route path='/add' element={<AddFood/>} />
                  <Route path='/list' element={<ListFood/>} />
                  <Route path='/orders' element={<Orders/>} />
                  <Route path='/' element={<ListFood/>} />
                </Routes>
            </div>
        </div>
    </div>
  )
}

export default App