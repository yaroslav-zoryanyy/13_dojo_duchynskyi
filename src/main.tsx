import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./layouts/Layout.tsx";
import HomePage from "./pages/HomePage.tsx";
import ScheduleAndPricePage from "./pages/ScheduleAndPricePage.tsx";
import TeamPage from "./pages/TeamPage.tsx";
import EventsPage from "./pages/EventsPage.tsx";
import CooperationPage from "./pages/CooperationPage.tsx";

const routes = createBrowserRouter([
    {path:'/', element:<Layout/>, children:[
            {index: true, element:<HomePage/>},
            {path:'schedule_and_price', element:<ScheduleAndPricePage/>},
            {path:'team', element:<TeamPage/>},
            {path:'events', element:<EventsPage/>},
            {path:'cooperation', element:<CooperationPage/>}
        ]},
])

createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={routes}/>)
