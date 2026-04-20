import React from 'react';
import { useAuth } from '../context/AuthContext';

const AdminDashboard = () => {
    const { user } = useAuth();
    
    return (
        <div className="p-8 max-w-7xl mx-auto min-h-[70vh]">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <h2 className="text-xl font-semibold mb-4">Welcome Administrator {user?.name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                        <h3 className="font-bold text-lg text-gray-900 mb-2">Doctors</h3>
                        <p className="text-gray-700 mb-4">Manage doctor profiles and specializations.</p>
                        <button className="text-primary font-semibold hover:underline">Manage &rarr;</button>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                        <h3 className="font-bold text-lg text-gray-900 mb-2">Patients</h3>
                        <p className="text-gray-700 mb-4">View and manage all registered patients.</p>
                        <button className="text-primary font-semibold hover:underline">Manage &rarr;</button>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                        <h3 className="font-bold text-lg text-gray-900 mb-2">System Stats</h3>
                        <p className="text-gray-700 mb-4">View overall appointments and activity reports.</p>
                        <button className="text-primary font-semibold hover:underline">View Reports &rarr;</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
