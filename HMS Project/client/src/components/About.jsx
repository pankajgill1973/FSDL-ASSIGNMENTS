import React from 'react';

export default function About() {
  return (
    <section className="py-24 bg-surface-container-low overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4 pt-12">
            <img
              alt="Medical Team"
              className="rounded-2xl shadow-lg w-full h-64 object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCV-wiYIZMNsM4-da4HQl9m6YbS2sWE2IHhky5Q3oKfCrXtwYZE2hhWGaMV4vTGSjv-e0mObvyYZr5H9CiOtoQpfrElMCL08m7_33ZFfZ5CBZzvVneYoSgmmIdHC9lstYfLB3K1d-qfMxn42OpWisjDog--tSqfMauTmD35a4eiLJVQ-_LqK8zb3HXTPUKI566rOjnr_rJY1XfLeQdO8wH3YR_52ihYmnu5w7IG5UPRLIWji4nLxh2PIHcHi0xMiYP0KsciTt2o5o"
            />
            <div className="bg-primary p-8 rounded-2xl text-on-primary">
              <div className="text-4xl font-extrabold font-headline mb-2">15+</div>
              <div className="text-sm opacity-80 font-medium">Years of Clinical Excellence</div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-surface-container-lowest p-8 rounded-2xl">
              <div className="text-4xl font-extrabold font-headline text-secondary mb-2">99%</div>
              <div className="text-sm text-on-surface-variant font-medium">Patient Satisfaction Rate</div>
            </div>
            <img
              alt="Lab"
              className="rounded-2xl shadow-lg w-full h-80 object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZuUeKIxO-tvi8eaQmxPl5jYsbho6EkdVdsioT1CRFracW84or1iuZ4u-3SvWeFJL2XiY-IsEcmv0mM-hbRyQAe8xFeTZF1k9amtOjR0wGw1E5c8yfb5OAXJo-C_VRdmzpJOi7c-UvaaQZec7TU55zREAxbZCkAwK3yoqdq4mHerqYS8HUxJAZBAxN0a2Cd-ND23isOozADWnXdRdJvQQMTnftHZqxzPfkVaarpF_-q7LfKeYRArm74uGORiKkF3GlXML-c8DVTPs"
            />
          </div>
        </div>
        <div>
          <h2 className="text-4xl lg:text-5xl font-extrabold font-headline text-on-surface tracking-tight mb-8">Transcending traditional medical care.</h2>
          <div className="space-y-6">
            <div className="p-6 bg-surface-container-lowest rounded-xl">
              <h4 className="font-bold font-headline text-primary mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined">visibility</span> Our Vision
              </h4>
              <p className="text-on-surface-variant leading-relaxed">To become the global benchmark for patient-centric digital healthcare systems, where technology and human compassion coexist perfectly.</p>
            </div>
            <div className="p-6 bg-surface-container-lowest rounded-xl">
              <h4 className="font-bold font-headline text-secondary mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined">flag</span> Our Mission
              </h4>
              <p className="text-on-surface-variant leading-relaxed">Providing accessible, high-quality healthcare through innovative management systems that empower both clinicians and patients alike.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
