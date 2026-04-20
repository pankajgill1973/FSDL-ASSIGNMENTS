import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Services() {
  const navigate = useNavigate();
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold font-headline text-on-surface mb-4">Our Premium Services</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">Transcending traditional medical care through seamless technology integration.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Card */}
          <div className="md:col-span-2 p-10 bg-surface-container-lowest rounded-xl flex flex-col justify-between group hover:bg-primary hover:text-on-primary transition-all duration-300">
            <div>
              <span className="material-symbols-outlined text-4xl mb-6 block text-primary group-hover:text-on-primary">calendar_month</span>
              <h3 className="text-2xl font-bold font-headline mb-4">Online Appointment Booking</h3>
              <p className="text-on-surface-variant group-hover:text-on-primary/80 leading-relaxed max-w-md">Schedule your visits with clinical precision. Choose your preferred specialist and time slot instantly without the wait.</p>
            </div>
            <div onClick={() => navigate('/dashboard/book-appointment')} className="mt-8 flex items-center gap-2 font-bold cursor-pointer">
              Book Now <span className="material-symbols-outlined">arrow_forward</span>
            </div>
          </div>
          {/* Small Card */}
          <div className="p-10 bg-surface-container-lowest rounded-xl group hover:bg-secondary hover:text-on-secondary transition-all duration-300">
            <span className="material-symbols-outlined text-4xl mb-6 block text-secondary group-hover:text-on-secondary">description</span>
            <h3 className="text-2xl font-bold font-headline mb-4">Digital Medical Records</h3>
            <p className="text-on-surface-variant group-hover:text-on-secondary/80">Access your complete history anywhere, anytime with our secure patient portal.</p>
          </div>
          {/* Small Card */}
          <div className="p-10 bg-surface-container-lowest rounded-xl group hover:bg-tertiary hover:text-on-tertiary transition-all duration-300">
            <span className="material-symbols-outlined text-4xl mb-6 block text-tertiary group-hover:text-on-tertiary">medical_services</span>
            <h3 className="text-2xl font-bold font-headline mb-4">Expert Doctors</h3>
            <p className="text-on-surface-variant group-hover:text-on-tertiary/80">Consult with world-class specialists across multiple disciplines.</p>
          </div>
          {/* Small Card (spanning 2 cols) */}
          <div className="md:col-span-2 p-10 bg-surface-container-lowest rounded-xl group hover:bg-error hover:text-on-error transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="flex-1">
                <span className="material-symbols-outlined text-4xl mb-6 block text-error group-hover:text-on-error">emergency</span>
                <h3 className="text-2xl font-bold font-headline mb-4">24/7 Emergency Support</h3>
                <p className="text-on-surface-variant group-hover:text-on-error/80 leading-relaxed">Our trauma center is always open. Immediate response units ready for any medical crisis around the clock.</p>
              </div>
              <div className="w-full md:w-48 h-32 bg-surface-container-high/20 rounded-lg flex items-center justify-center">
                <span className="text-4xl font-extrabold group-hover:scale-110 transition-transform">911</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
