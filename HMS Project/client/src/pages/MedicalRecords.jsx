import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function MedicalRecords() {
    const [records, setRecords] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRecords = async () => {
            try {
                const userInfo = JSON.parse(localStorage.getItem('userInfo'));
                if (!userInfo) return;
                const config = { headers: { Authorization: `Bearer ${userInfo.token}` } };
                // Using generic records endpoint. Backend handles logic by role.
                const { data } = await axios.get('/api/records', config);
                setRecords(data);
            } catch (error) {
                console.error("Error fetching records", error);
            } finally {
                setLoading(false);
            }
        };
        fetchRecords();
    }, []);

    return (
        <div className="p-8 max-w-6xl mx-auto min-h-[70vh]">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold font-headline text-primary">Medical Records</h1>
                <button onClick={() => navigate('/dashboard')} className="text-gray-500 hover:text-primary font-medium">&larr; Back to Dashboard</button>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {loading ? (
                    <div className="p-8 text-center text-gray-500">Loading records...</div>
                ) : records.length === 0 ? (
                    <div className="p-12 text-center">
                        <div className="w-16 h-16 bg-purple-50 text-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl material-symbols-outlined">folder_open</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">No Medical Records Found</h3>
                        <p className="text-gray-500">Your digital medical history is empty.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                        {records.map((rec) => (
                            <div key={rec._id} className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{rec.diagnosis}</h3>
                                <p className="text-gray-600 mb-4">{rec.treatment_plan}</p>
                                <div className="text-sm text-gray-500">Prescription: {rec.prescription || 'N/A'}</div>
                                <div className="text-xs text-gray-400 mt-4">Record ID: {rec._id}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
