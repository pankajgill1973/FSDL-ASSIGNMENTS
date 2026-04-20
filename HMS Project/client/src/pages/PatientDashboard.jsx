import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const PatientDashboard = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    
    return (
        <div className="p-8 max-w-7xl mx-auto min-h-[70vh]">
            <h1 className="text-3xl font-bold text-primary mb-6">Patient Dashboard</h1>
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <h2 className="text-xl font-semibold mb-4">Welcome back, {user?.name}!</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="p-6 bg-blue-50 rounded-xl">
                        <h3 className="font-bold text-lg text-blue-900 mb-2">My Profile</h3>
                        <p className="text-blue-700 mb-4">View and update your personal information.</p>
                        <button onClick={() => navigate('/dashboard/profile')} className="text-blue-600 font-semibold hover:text-blue-800">Manage Profile &rarr;</button>
                    </div>
                    <div className="p-6 bg-green-50 rounded-xl">
                        <h3 className="font-bold text-lg text-green-900 mb-2">Appointments</h3>
                        <p className="text-green-700 mb-4">Book new appointments or view upcoming ones.</p>
                        <button onClick={() => navigate('/dashboard/book-appointment')} className="text-green-600 font-semibold hover:text-green-800">Book Now &rarr;</button>
                    </div>
                    <div className="p-6 bg-purple-50 rounded-xl">
                        <h3 className="font-bold text-lg text-purple-900 mb-2">Medical Records</h3>
                        <p className="text-purple-700 mb-4">Access your history, diagnosis, and prescriptions.</p>
                        <button onClick={() => navigate('/dashboard/records')} className="text-purple-600 font-semibold hover:text-purple-800">View Records &rarr;</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientDashboard;
