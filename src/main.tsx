import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./layouts/Layout.tsx";
import HomePage from "./pages/HomePage.tsx";
import SchedulePage from "./pages/SchedulePage.tsx";
import TeamPage from "./pages/TeamPage.tsx";
import PricePage from "./pages/PricePage.tsx";
import EventsPage from "./pages/EventsPage.tsx";
import CooperationPage from "./pages/CooperationPage.tsx";

const routes = createBrowserRouter([
    {path:'/', element:<Layout/>, children:[
            {index: true, element:<HomePage/>},
            {path:'schedule', element:<SchedulePage/>},
            {path:'team', element:<TeamPage/>},
            {path:'price', element:<PricePage/>},
            {path:'events', element:<EventsPage/>},
            {path:'cooperation', element:<CooperationPage/>}
        ]},
])

createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={routes}/>)
