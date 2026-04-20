import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PatientDashboard from './pages/PatientDashboard';
import DoctorDashboard from './pages/DoctorDashboard';
import AdminDashboard from './pages/AdminDashboard';
import BookAppointment from './pages/BookAppointment';
import DashboardProfile from './pages/DashboardProfile';
import DoctorSchedule from './pages/DoctorSchedule';
import MedicalRecords from './pages/MedicalRecords';
import ProtectedRoute from './components/ProtectedRoute';
import { useAuth } from './context/AuthContext';

const DashboardRouter = () => {
    const { user } = useAuth();
    if (!user) return <Navigate to="/login" replace />;
    
    if (user.role === 'patient') return <PatientDashboard />;
    if (user.role === 'doctor') return <DoctorDashboard />;
    if (user.role === 'admin') return <AdminDashboard />;
    
    return <Navigate to="/" replace />;
};

function App() {
  return (
    <Router>
      <div className="bg-surface text-on-surface antialiased font-body min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Protected Dashboard Routes */}
            <Route path="/dashboard" element={<ProtectedRoute />}>
               <Route index element={<DashboardRouter />} />
               <Route path="book-appointment" element={<BookAppointment />} />
               <Route path="profile" element={<DashboardProfile />} />
               <Route path="appointments" element={<DoctorSchedule />} />
               <Route path="records" element={<MedicalRecords />} />
            </Route>

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
