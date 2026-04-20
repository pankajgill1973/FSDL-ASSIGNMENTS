import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden bg-surface py-20 lg:py-32" id="home">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative z-10">
          <h1 className="text-5xl lg:text-7xl font-extrabold font-headline text-on-surface tracking-tight leading-tight mb-6">
            Welcome to Smart Hospital Management System
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-xl">
            Experience a digital sanctuary of healthcare. Our advanced systems streamline your journey from clinical precision to personalized wellness.
          </p>
          <div className="flex flex-wrap gap-4">
            <button onClick={() => navigate('/dashboard/book-appointment')} className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold text-lg shadow-lg hover:shadow-primary/20 transition-all active:scale-95">
              Book Appointment
            </button>
            <a href="#about" className="inline-block px-8 py-4 rounded-xl text-primary font-bold text-lg hover:bg-surface-container-high/50 transition-all active:scale-95">
              Learn More
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary-fixed-dim/20 blur-[100px] rounded-full"></div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              alt="Modern hospital interior"
              className="w-full h-[500px] object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpeneLkXfhSOxODzQOIs2_OgGD-Gb3C_GsE_DCVSi8_ec3oPavOj6F6nHIb6YKmJGZZyqy_0VJw5_SnwjrrbLv-USnEme_tLy6e6ggcOYA9yypcGIjHPBP519b2thcIpO4GcR4Jht3Qt4AC7_FNHmsvnQFq6342ekgBti0lRlMA05ES5Y40xqCYf_8tfb0E4zFS6iwj4rQiYJNXTQz3rlSAHZvbgPQunqb6BQBqhXDDmuFURQvWjiN51SqvlLjmsl5QZe3qf2lY9Y"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-primary-fixed/40 to-transparent"></div>
          </div>
          {/* Floating Data Card */}
          <div className="absolute -bottom-10 -left-10 p-6 bg-surface-container-lowest/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 max-w-xs">
            <div className="flex items-center gap-4 mb-3">
              <span className="material-symbols-outlined text-tertiary text-3xl">verified_user</span>
              <div className="text-sm font-bold text-on-surface">Digital Medical Secure Storage</div>
            </div>
            <p className="text-xs text-on-surface-variant">Your health records are encrypted and accessible only to you and your verified physicians.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
