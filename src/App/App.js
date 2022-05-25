import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/AdminPage/Home/Home";
import OuterPage from "../pages/Outerpage/OuterPage";
import AdminPage from "../pages/AdminPage/AdminPage";
import UserList from "../pages/AdminPage/UserList/UserList";
import Login from "../pages/LoginPage/Login";
import AgentPage from "../pages/AgentPage/Agent";
import Restaurant from "../pages/RestaurantPage/RestaurantPage";
import EcommercePage from "../pages/EcommercePage/Ecommerce";

import Ecommerce from "../pages/AdminPage/Ecommerce/Ecommerce";
import FoodDelivery from "../pages/AdminPage/FoodDelivery/FoodDelivery";
import Taxi from "../pages/AdminPage/Taxi/Taxi";
import Vacancy from "../pages/AdminPage/Vacancy/Vacancy";
import VerifyItems from "../pages/AdminPage/VerifyItems/VerifyItems";
import VerifyOrganization from "../pages/AdminPage/VerifyOrganization/VerifyOrganization";
import AddDriver from "../pages/AdminPage/AddDriver/AddDriver";
import AddOrganization from "../pages/AdminPage/AddOrganization/AddOrganization";
import ErrorPage from "../pages/ErrorPage";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OuterPage />}>
            <Route path="" element={<Login />} />
            <Route path="agent" element={<AgentPage />} />
            <Route path="restaurant" element={<Restaurant />} />
            <Route path="ecommerce" element={<EcommercePage />} />
          </Route>
          <Route path="/home" element={<AdminPage />}>
            <Route path="" element={<Home />} />
            <Route path="useranalytics" element={<UserList />} />
            <Route path="ecommerce" element={<Ecommerce />} />
            <Route path="fooddelivery" element={<FoodDelivery />} />
            <Route path="taxi" element={<Taxi />} />
            <Route path="freelance" element={<Vacancy />} />
            <Route path="verifyitem" element={<VerifyItems />} />
            <Route path="verifyorganization" element={<VerifyOrganization />} />
            <Route path="adddriver" element={<AddDriver />} />
            <Route path="adddeliveryperson" element={<AddOrganization />} />
            <Route />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
