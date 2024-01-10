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
import { Provider } from 'react-redux';
import store from './app/store.js';
import SinglePostScreen from './screens/SinglePostScreen.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/results" element={<ResultScreen />} />
      <Route path="/drivers" element={<DriverScreen />} />
      <Route path="/driver/:id" element={<DriverProfileScreen />} />
      <Route path="/schedule" element={<ScheduleScreen />} />
      <Route path="/news/:id" element={<SinglePostScreen />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  </Provider>
)
