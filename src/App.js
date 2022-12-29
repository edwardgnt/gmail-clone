import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Mail from "./Mail";
import EmailList from "./EmailList";
import { Route, Routes } from 'react-router-dom'
import SendMail from "./SendMail";

function App() {
  return (
      <div className="app">
        <Header />

        <div className="app__body">
          <Sidebar />
          
          <Routes>
            <Route path="/mail" element={<Mail />} />
            <Route path="/" element={<EmailList />} />
          </Routes>
        </div>

        <SendMail />
      </div>
  );
}

export default App;
