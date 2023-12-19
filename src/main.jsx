import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen.jsx';
import ResultScreen from './screens/ResultScreen.jsx';
import DriverScreen from './screens/DriverScreen.jsx';
import DriverProfileScreen from './screens/DriverProfileScreen.jsx';
import ScheduleScreen from './screens/ScheduleScreen.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/results" element={<ResultScreen />} />
      <Route path="/drivers" element={<DriverScreen />} />
      <Route path="/driver/:id" element={<DriverProfileScreen />} />
      <Route path="/schedule" element={<ScheduleScreen />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
