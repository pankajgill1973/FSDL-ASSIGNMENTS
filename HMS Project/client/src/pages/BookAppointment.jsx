import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function BookAppointment() {
    const [doctors, setDoctors] = useState([]);
    const [doctorId, setDoctorId] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [reason, setReason] = useState('');
    const [status, setStatus] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const { data } = await axios.get('/api/doctors');
                setDoctors(data);
                if (data.length > 0) setDoctorId(data[0]._id);
            } catch (error) {
                console.error('Error fetching doctors');
            }
        };
        fetchDoctors();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userInfo = JSON.parse(localStorage.getItem('userInfo'));
            const config = { headers: { Authorization: `Bearer ${userInfo.token}` } };
            await axios.post('/api/appointments', {
                doctor_id: doctorId,
                appointment_date: date,
                time_slot: time,
                reason,
                notes: ''
            }, config);
            setStatus('success');
            setTimeout(() => navigate('/dashboard'), 2000);
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div className="p-8 max-w-4xl mx-auto min-h-[70vh]">
            <h1 className="text-3xl font-bold font-headline text-primary mb-6">Book an Appointment</h1>
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                {status === 'success' && <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">Appointment booked successfully! Returning to dashboard...</div>}
                {status === 'error' && <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">Error booking appointment. Please try again.</div>}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2 md:col-span-2">
                            <label className="text-sm font-bold text-gray-700">Select Doctor</label>
                            <select required value={doctorId} onChange={e => setDoctorId(e.target.value)} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary bg-white">
                                {doctors.map(doc => (
                                    <option key={doc._id} value={doc._id}>Dr. {doc.name} - {doc.specialization}</option>
                                ))}
                                {doctors.length === 0 && <option value="">Loading doctors...</option>}
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700">Select Date</label>
                            <input required type="date" value={date} onChange={e => setDate(e.target.value)} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700">Select Time</label>
                            <select required value={time} onChange={e => setTime(e.target.value)} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary bg-white">
                                <option value="">Choose a time slot</option>
                                <option value="09:00 AM">09:00 AM</option>
                                <option value="11:00 AM">11:00 AM</option>
                                <option value="02:00 PM">02:00 PM</option>
                                <option value="04:00 PM">04:00 PM</option>
                            </select>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Reason for Visit</label>
                        <textarea required value={reason} onChange={e => setReason(e.target.value)} rows="3" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary" placeholder="Briefly describe your symptoms..."></textarea>
                    </div>
                    <div className="pt-4 flex gap-4">
                        <button type="button" onClick={() => navigate('/dashboard')} className="px-6 py-3 rounded-xl border border-gray-300 font-bold hover:bg-gray-50 flex-1">Cancel</button>
                        <button type="submit" className="px-6 py-3 rounded-xl bg-primary text-white font-bold hover:bg-blue-700 flex-1 shadow-lg shadow-primary/30">Confirm Booking</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
