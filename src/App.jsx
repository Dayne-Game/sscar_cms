import { Outlet, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import ResultScreen from './screens/ResultScreen'
import DriverScreen from './screens/DriverScreen'
import DriverProfileScreen from './screens/DriverProfileScreen'
import ScheduleScreen from './screens/ScheduleScreen'
import SinglePostScreen from './screens/SinglePostScreen'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/results" element={<ResultScreen />} />
        <Route path="/drivers" element={<DriverScreen />} />
        <Route path="/driver/:id" element={<DriverProfileScreen />} />
        <Route path="/schedule" element={<ScheduleScreen />} />
        <Route path="/news/:id" element={<SinglePostScreen />} />
      </Routes>
    </>
  )
}

export default App
