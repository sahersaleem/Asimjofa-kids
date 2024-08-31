import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom";
import {Chamkeeli, Main , AsimJofaKids, Luxury, NewIn}from "../src/components/index.js";
import UnstitchedLuxury from "./components/UnstitchedLuxury.jsx";
import MensWear from "./components/MensWear.jsx";
import Jwellery from "./components/Jwellery.jsx";
import Kids from "./components/Kids.jsx";
import LuxuryPage from "./components/LuxuryPage.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Main />,
        children:[
          {
            path:"/chamkeeli",
            element:<Chamkeeli/>
          },
          {
            path:"/asimjofakids",
            element:<AsimJofaKids/>
          },
            {
              path:"/afsanay",
              element:<Luxury/>
            }
          
        ]

        

        
      },


    {
      path:"/newin",
      element:<NewIn/>
    },{
      path:"/unstitch",
      element:<UnstitchedLuxury/>
    },{
      path:"/kids",
      element:<Kids/>
    },
     {
      path:"/luxury",
      element:<LuxuryPage/>
     },{
      
        path:"/mens",
        element:<MensWear/>
       
     },{
      path:"/jwellery",
      element:<Jwellery/>
     }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
