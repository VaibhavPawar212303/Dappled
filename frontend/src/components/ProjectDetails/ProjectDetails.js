import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

export default class ProjectDetails extends Component {
  render() {
    return (
      <>
        <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
          <Sidebar />
          <div className="p-2">
            <Header />
            <div>{<Outlet />}</div>
          </div>
        </div>
      </>
    );
  }
}
