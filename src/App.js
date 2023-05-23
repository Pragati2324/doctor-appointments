import React from 'react';
import { BrowserRouter as Router,Routes ,Route  } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import AppointmentPage from './Components/AppointmentPage';
import BookedAppointments from './Components/BookedAppointments';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/appointment/:doctorId" element={<AppointmentPage/>} />
          <Route path="/booked-appointments/" element={<BookedAppointments/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;