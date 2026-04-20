import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-surface-container-low w-full pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <div className="text-xl font-bold font-headline text-primary">Clinical Serenity</div>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Transcending traditional medical care. A digital sanctuary for modern healthcare management.
          </p>
        </div>
        <div>
          <h5 className="font-bold font-headline mb-4 text-on-surface">Quick Links</h5>
          <ul className="space-y-2 text-sm">
            <li><a className="text-on-surface-variant hover:text-primary transition-all hover:underline decoration-primary/30" href="#home">Home</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-all hover:underline decoration-primary/30" href="#doctors">Doctors</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-all hover:underline decoration-primary/30" href="#about">About</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-all hover:underline decoration-primary/30" href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold font-headline mb-4 text-on-surface">Legal</h5>
          <ul className="space-y-2 text-sm">
            <li><a className="text-on-surface-variant hover:text-primary transition-all hover:underline decoration-primary/30" href="#">Privacy Policy</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-all hover:underline decoration-primary/30" href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold font-headline mb-4 text-on-surface">Stay Updated</h5>
          <p className="text-sm text-on-surface-variant mb-4">Join our newsletter for health tips.</p>
          <div className="flex">
            <input
              className="w-full bg-surface-container-high border-none rounded-l-lg text-sm px-4 focus:ring-0"
              placeholder="Email"
              type="email"
            />
            <button className="bg-primary text-on-primary px-4 py-2 rounded-r-lg font-bold">Join</button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-outline-variant/15 text-center">
        <p className="text-on-surface-variant text-xs font-medium">© 2026 Clinical Serenity. Transcending traditional medical care.</p>
      </div>
    </footer>
  );
}
