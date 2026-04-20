import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function DashboardProfile() {
    const { user } = useAuth();
    const navigate = useNavigate();

    return (
        <div className="p-8 max-w-4xl mx-auto min-h-[70vh]">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold font-headline text-primary">My Profile</h1>
                <button onClick={() => navigate('/dashboard')} className="text-gray-500 hover:text-primary font-medium">&larr; Back to Dashboard</button>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-100">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary text-4xl font-bold uppercase">
                        {user?.name?.charAt(0) || 'U'}
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">{user?.name}</h2>
                        <p className="text-gray-500 capitalize">{user?.role}</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">Email Address</label>
                        <div className="font-semibold text-gray-900">{user?.email}</div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">Account ID</label>
                        <div className="font-semibold text-gray-900 font-mono text-sm">{user?._id}</div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-100">
                    <button className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-xl transition-colors">Edit Details</button>
                    <p className="text-xs text-gray-400 mt-3">* More profile fields will be editable in future updates.</p>
                </div>
            </div>
        </div>
    );
}
