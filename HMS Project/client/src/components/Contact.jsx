import React, { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/contact', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="py-24 bg-surface" id="contact">
      <div className="max-w-7xl mx-auto px-8">
        <div className="bg-surface-container-low rounded-[2rem] p-12 lg:p-20 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-20"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="text-4xl font-extrabold font-headline text-on-surface mb-6">Get in Touch</h2>
              <p className="text-on-surface-variant mb-12 max-w-md">Have questions? Our support team is here to assist you 24/7 with any inquiries about our services.</p>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary">mail</span>
                  </div>
                  <div>
                    <h4 className="font-bold font-headline text-on-surface">Email Us</h4>
                    <p className="text-on-surface-variant">support@clinicalserenity.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-secondary">call</span>
                  </div>
                  <div>
                    <h4 className="font-bold font-headline text-on-surface">Call Center</h4>
                    <p className="text-on-surface-variant">+1 (555) 000-1234</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-tertiary/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-tertiary">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-bold font-headline text-on-surface">Location</h4>
                    <p className="text-on-surface-variant">123 Wellness Blvd, Medical District, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-8 lg:p-12 rounded-2xl shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === 'success' && <div className="p-3 bg-green-100 text-green-700 rounded-lg text-sm font-bold">Message sent successfully! Our team will get back to you shortly.</div>}
                {status === 'error' && <div className="p-3 bg-red-100 text-red-700 rounded-lg text-sm font-bold">Error sending message. Please try again.</div>}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant">Full Name</label>
                    <input
                      required
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-surface-container-highest border-none rounded-lg focus:ring-2 focus:ring-primary transition-all px-4 py-3"
                      placeholder="John Doe"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant">Email Address</label>
                    <input
                      required
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-surface-container-highest border-none rounded-lg focus:ring-2 focus:ring-primary transition-all px-4 py-3"
                      placeholder="john@example.com"
                      type="email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant">Message</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-surface-container-highest border-none rounded-lg focus:ring-2 focus:ring-primary transition-all px-4 py-3"
                    placeholder="How can we help you today?"
                    rows="4"
                  ></textarea>
                </div>
                <button
                  className="w-full py-4 bg-primary text-on-primary font-bold rounded-xl hover:opacity-90 transition-all active:scale-[0.98]"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
