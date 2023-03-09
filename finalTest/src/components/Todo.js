import React from 'react'
import { Provider } from "react-redux";
import configureStore from "../redux/store";
import App from "./App";
import Sidebar from "./sidebar"
function index() {
    const store = configureStore();
  return (
    <div>
     <Sidebar/>
   <Provider store={store}>
    <App />
   </Provider>,
    </div>
  )
}

export default index






