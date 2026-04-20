import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const defaultImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBopts55VgZ1m3GhqgAI4RqdYCas0EzxIikKoSFwDwe3rpf39ZwxczL-tywoTgq_vNyYjKLk2QKkKhtXkAL0qiQDnLa4CHXxuRiIBhxoBL69uIP4Cl4h6k_Mdz7-OECgBiuKXiVHEW8RHyfjH8VJaW0DUOpkXTNKC6U1rca3jrml4w2MxktcAYOI40pKgAYG5GssatJtJU49TbVCd0khSBd0xCsQBi1O9mgl7NIQegf-bjajoHjg8gNRM-PPg0EBYJfUPdyOmHSb4s",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCRCgsBk9_HMOu1jEkP3v4s6fx1Js08nK2h70r2-wDEAIlOAN88eXafhC0Gij6P1zsmo94rP9rXqxlVqW9iriosyLTtSFcFrebkwRrSSazMjdIhcww0gHMvw1RUeYOexJG7MXpVIh9DDrGCCk0xzz5bwz0Jk94GAOot1wu7YLkDc4Khqb8A5yyAMGilwO8gRL_OWEGNIZhb8AAaR6HbPvu6l-kIrSO8h5IW2O5H2-bZTy2jzDW3TjWBjkopngi1iCVs1K-b38gLOsA",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDL_xqpBLa0_if94Lo6Rlv8e-GGsoZOmzWT43QRoNWAJqIV5htMyPlDkgLvF5hiLUjlmjRakNrEaHQMABkgoHeio_OnIZH7dwh9KyAxFAvETKmaOHtKuaF6T02iGFKNPKfK6Y_XGPqaQCKYFLwQ3rpIKhJLHLX7ZPecBZBzVPFWS5utPA72mpcgFAXVRneCl9HXezsmB-1ur9BCPoGDYrxBikheHgZX1RfMiJ2WJWq_rMWlqi-5fYXvp64hdJYsgPfPjT7Xyyr2_Hg"
];

export default function Specialists() {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get('/api/doctors');
        setDoctors(data);
      } catch (error) {
        console.error("Error fetching doctors", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDoctors();
  }, []);

  return (
    <section className="py-24 bg-surface" id="doctors">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-extrabold font-headline text-on-surface mb-2">Our Specialists</h2>
            <p className="text-on-surface-variant">Exceptional minds dedicated to your recovery.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {loading ? (
             <div className="md:col-span-3 text-center text-gray-500 py-12">Loading specialists...</div>
          ) : doctors.length === 0 ? (
             <div className="md:col-span-3 text-center text-gray-500 py-12">No specialists currently available.</div>
          ) : (
            doctors.map((doc, index) => (
              <div key={doc._id} className="group">
                <div className="relative rounded-2xl overflow-hidden mb-6 h-[400px]">
                  <img
                    alt={`Dr. ${doc.name}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={defaultImages[index % defaultImages.length]}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-surface-container-lowest/90 backdrop-blur text-xs font-bold rounded-full text-primary uppercase tracking-wider">
                      {doc.specialization}
                    </span>
                  </div>
                </div>
                <h4 className="text-xl font-bold font-headline text-on-surface">Dr. {doc.name}</h4>
                <p className="text-on-surface-variant mb-4">{doc.qualification || 'Senior Consultant'}</p>
                <button onClick={() => navigate('/dashboard/book-appointment')} className="w-full py-3 rounded-lg border border-primary text-primary font-bold hover:bg-primary hover:text-on-primary transition-all active:scale-[0.98]">Book Appointment</button>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
