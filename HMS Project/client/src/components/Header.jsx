import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-surface/80 backdrop-blur-md w-full sticky top-0 z-50 shadow-[0_24px_40px_rgba(0,71,141,0.04)]">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold font-headline text-primary tracking-tight">Clinical Serenity</Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link className="text-primary font-bold border-b-2 border-primary pb-1" to="/">Home</Link>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="/#doctors">Doctors</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="/#about">About</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="/#contact">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
          {user ? (
            <>
               <Link to="/dashboard" className="text-primary font-medium hover:underline">Dashboard</Link>
               <button onClick={handleLogout} className="px-6 py-2 rounded-lg bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300 transition-all duration-200">
                 Logout
               </button>
            </>
          ) : (
            <Link to="/login" className="px-6 py-2 rounded-lg bg-gradient-to-r from-primary to-primary-container text-on-primary font-semibold hover:opacity-90 transition-all active:scale-95 duration-200">
              Login / Register
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
