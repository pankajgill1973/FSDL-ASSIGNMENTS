import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function DoctorSchedule() {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedApt, setSelectedApt] = useState(null);
    const [diagnosis, setDiagnosis] = useState('');
    const [treatment, setTreatment] = useState('');
    const [recordStatus, setRecordStatus] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const userInfo = JSON.parse(localStorage.getItem('userInfo'));
                if (!userInfo) return;
                const config = { headers: { Authorization: `Bearer ${userInfo.token}` } };
                const { data } = await axios.get('/api/appointments', config);
                setAppointments(data);
            } catch (error) {
                console.error("Error fetching appointments", error);
            } finally {
                setLoading(false);
            }
        };
        fetchAppointments();
    }, []);

    const handleAddRecord = async (e) => {
        e.preventDefault();
        try {
            const userInfo = JSON.parse(localStorage.getItem('userInfo'));
            const config = { headers: { Authorization: `Bearer ${userInfo.token}` } };
            await axios.post('/api/records', {
                appointment_id: selectedApt._id,
                patient_id: selectedApt.patient_id._id,
                diagnosis,
                treatment,
                notes: ''
            }, config);
            setRecordStatus('success');
            setTimeout(() => {
                setSelectedApt(null);
                setRecordStatus('');
                setDiagnosis('');
                setTreatment('');
            }, 2000);
        } catch (error) {
            setRecordStatus('error');
        }
    };

    return (
        <div className="p-8 max-w-6xl mx-auto min-h-[70vh]">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold font-headline text-primary">Doctor Schedule</h1>
                <button onClick={() => navigate('/dashboard')} className="text-gray-500 hover:text-primary font-medium">&larr; Back to Dashboard</button>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {loading ? (
                    <div className="p-8 text-center text-gray-500">Loading schedule...</div>
                ) : appointments.length === 0 ? (
                    <div className="p-12 text-center">
                        <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl material-symbols-outlined">event_busy</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">No Upcoming Appointments</h3>
                        <p className="text-gray-500">Your schedule is currently clear.</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 text-gray-600 text-sm">
                                    <th className="p-4 font-semibold border-b">Date</th>
                                    <th className="p-4 font-semibold border-b">Time</th>
                                    <th className="p-4 font-semibold border-b">Patient</th>
                                    <th className="p-4 font-semibold border-b">Reason</th>
                                    <th className="p-4 font-semibold border-b">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {appointments.map((apt) => (
                                    <tr key={apt._id} className="border-b hover:bg-gray-50 transition-colors">
                                        <td className="p-4 font-medium">{new Date(apt.appointment_date).toLocaleDateString()}</td>
                                        <td className="p-4">
                                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold">{apt.time_slot}</span>
                                        </td>
                                        <td className="p-4 text-gray-800">{apt.patient_id?.name || 'Unknown'}</td>
                                        <td className="p-4 text-gray-600">{apt.reason}</td>
                                        <td className="p-4 flex gap-4 items-center">
                                            <span className="capitalize font-semibold text-orange-600">{apt.status || 'pending'}</span>
                                            <button onClick={() => setSelectedApt(apt)} className="text-sm font-bold text-primary hover:bg-primary/10 px-3 py-1 rounded-full transition-colors border border-primary/20">Add Record</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {selectedApt && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-xl p-8 max-w-md w-full shadow-2xl">
                        <h2 className="text-2xl font-bold text-primary mb-4">Add Medical Record</h2>
                        <p className="text-gray-600 mb-6">For {selectedApt.patient_id?.name || 'Unknown Patient'} on {new Date(selectedApt.appointment_date).toLocaleDateString()}</p>
                        
                        {recordStatus === 'success' && <div className="mb-4 text-green-700 bg-green-50 p-3 rounded font-medium">Record saved successfully!</div>}
                        {recordStatus === 'error' && <div className="mb-4 text-red-700 bg-red-50 p-3 rounded font-medium">Error saving record.</div>}
                        
                        <form onSubmit={handleAddRecord} className="space-y-4">
                            <div>
                                <label className="text-sm font-bold text-gray-700">Diagnosis</label>
                                <input required value={diagnosis} onChange={e => setDiagnosis(e.target.value)} className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-primary" placeholder="e.g. Viral Fever" />
                            </div>
                            <div>
                                <label className="text-sm font-bold text-gray-700">Treatment Plan</label>
                                <textarea required value={treatment} onChange={e => setTreatment(e.target.value)} rows="3" className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-primary" placeholder="Prescriptions, rest, etc."></textarea>
                            </div>
                            <div className="flex gap-4 pt-4">
                                <button type="button" onClick={() => { setSelectedApt(null); setRecordStatus(''); }} className="flex-1 px-4 py-2 border border-gray-300 hover:bg-gray-50 transition-colors rounded-lg font-bold text-gray-700">Cancel</button>
                                <button type="submit" className="flex-1 px-4 py-2 bg-primary hover:bg-blue-700 text-white transition-colors rounded-lg font-bold shadow-lg shadow-primary/30">Save Record</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
