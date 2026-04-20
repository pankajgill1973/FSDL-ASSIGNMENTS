import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const DoctorDashboard = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    
    return (
        <div className="p-8 max-w-7xl mx-auto min-h-[70vh]">
            <h1 className="text-3xl font-bold text-primary mb-6">Doctor Dashboard</h1>
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <h2 className="text-xl font-semibold mb-4">Welcome, Dr. {user?.name}!</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 border border-gray-200 rounded-xl">
                        <h3 className="font-bold text-lg mb-2">Upcoming Appointments</h3>
                        <p className="text-gray-600 mb-4">View your schedule and manage patient visits.</p>
                        <button onClick={() => navigate('/dashboard/appointments')} className="text-primary font-semibold hover:underline">View Schedule &rarr;</button>
                    </div>
                    <div className="p-6 border border-gray-200 rounded-xl">
                        <h3 className="font-bold text-lg mb-2">Patient Records</h3>
                        <p className="text-gray-600 mb-4">Update diagnosis and add new medical records.</p>
                        <button onClick={() => navigate('/dashboard/records')} className="text-primary font-semibold hover:underline">Manage Records &rarr;</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorDashboard;
