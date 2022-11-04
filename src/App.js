import React from "react";
import "./App.scss";
import Navbar from "./components/elements/Navbar";
import Contacts from "./components/contacts/Contacts";
import { Provider } from "react-redux";
import store from "./store";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AddContact from "./components/contacts/AddContact";
import EditContact  from "./components/contacts/EditContact";



function App() {
  return (
    <Provider store={store}>
      <Router>
          
              <Routes>
                <Route exact  path="/" element={<Contacts />} />
                <Route exact path="/contacts/add" element={<AddContact />} />
                <Route
                  
                  path="/contacts/edit/:id"
                  element={<EditContact />}
                />
              </Routes>
          
      </Router>
    </Provider>
  );
}

export default App;
