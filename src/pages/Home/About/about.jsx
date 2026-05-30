import React from 'react';
import fotoProfil from '../../../assets/mell.jpeg';

const About = () => {
  const experiences = [
    {
      title: "Web Developer Intern",
      subtitle: "PT. Sumber Trijaya Lestari (Tangerang)",
      description: "Mengoptimalkan sistem reporting berbasis PostgreSQL untuk meningkatkan akurasi dan efisiensi pemrosesan data. Mengembangkan fitur backend menggunakan Laravel dan Golang guna mendukung integrasi data yang scalable. Membangun dashboard interaktif dengan visualisasi data untuk monitoring performa secara real-time.",
      color: "bg-indigo-50",
      dotColor: "bg-indigo-600",
      label: "11/2025 – Sekarang"
    },
    {
      title: "General Affair Intern (Web Dev)",
      subtitle: "BPPK (Jakarta Selatan)",
      description: "Mengembangkan dashboard laporan kinerja berbasis web menggunakan React.js dan Firebase untuk mempermudah monitoring dan pelaporan data secara terpusat. Berkontribusi dalam mendukung operasional kegiatan sebagai bagian dari tim General Affair.",
      color: "bg-purple-50",
      dotColor: "bg-purple-600",
      label: "12/2024 – 02/2025"
    },
    {
      title: "Web Developer Intern",
      subtitle: "Klinik Kurnia Medika (Tangerang)",
      description: "Mengembangkan sistem registrasi dan antrian pasien berbasis web menggunakan Laravel dan MySQL untuk meningkatkan efisiensi administrasi. Mengimplementasikan sistem terintegrasi yang mendukung penyimpanan arsip dan riwayat pasien secara terpusat.",
      color: "bg-rose-50",
      dotColor: "bg-rose-600",
      label: "09/2024 – 11/2024"
    }
  ];

  return (
    <div className="h-screen bg-slate-50 pt-24 pb-6 px-10 flex justify-center items-center overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row gap-8 items-stretch h-[85vh]">
        
        {/* --- KIRI: KARTU NAMA (DIPENDEK/PERSEMPIT) --- */}
        <div className="w-full md:w-[310px] shrink-0 sticky top-28">
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 p-5 pt-14 pb-8">
            <div className="absolute top-0 left-0 right-0 h-12 flex justify-center items-center">
              <div className="w-32 h-6 bg-indigo-100 rounded-full flex justify-center items-center shadow-inner">
                <div className="w-2.5 h-2.5 bg-slate-400 rounded-full"></div>
              </div>
            </div>
            <div className="w-full aspect-[3/4] bg-slate-100 rounded-xl overflow-hidden border-2 border-slate-50 mb-8 shadow-sm">
              <img src={fotoProfil} alt="Desi Ainul Amelia" className="w-full h-full object-cover" />
            </div>
            <div className="text-center px-2 mb-8">
              <h2 className="text-3xl font-black text-indigo-950 uppercase tracking-tighter">Desi Ainul Amelia</h2>
              <p className="text-indigo-600 font-bold text-sm tracking-widest mt-1">Full-Stack Web Developer</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg shadow-sm border-l-8 border-yellow-300 text-left -rotate-1">
              <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Contact Identification</h4>
              <div className="space-y-3 text-[14px] text-yellow-950 font-medium font-mono">
                <p className="flex items-center gap-3 border-b border-yellow-200/50 pb-2"><span className="opacity-40">TEL:</span> +62 897-8539-719</p>
                <p className="flex items-center gap-3 border-b border-yellow-200/50 pb-2"><span className="opacity-40">EML:</span> desiainulll@gmail.com</p>
                <p className="flex items-center gap-3"><span className="opacity-40">LOC:</span> Tangerang, Banten</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- KANAN: KONTEN UTAMA (SANGAT LEBAR) --- */}
        <div className="flex-1 bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden">
          
          {/* BAGIAN ATAS: TENTANG SAYA (LEBAR) */}
          <div className="p-10 md:p-12 border-b border-slate-50 shrink-0 bg-gradient-to-r from-white to-slate-50/50">
            <h1 className="text-4xl font-black text-indigo-950 mb-6 tracking-tighter">Tentang Saya</h1>
            <div className="text-lg text-slate-600 leading-relaxed font-medium">
              <p>
                Lulusan <strong>Teknik Informatika</strong> dari <strong>UIN Sunan Gunung Djati Bandung</strong> yang berfokus pada Full-Stack Web Developer. 
                Berpengalaman dalam mengembangkan aplikasi web dan dashboard reporting menggunakan <strong>Laravel, Golang, dan React.js</strong>, serta mengelola database <strong>PostgreSQL dan MySQL</strong>.
                Memiliki kemampuan dalam visualisasi data, optimasi query, serta pengembangan UI responsif menggunakan <strong>Tailwind CSS</strong>.
              </p>
            </div>
            <h1 className="mt-12 text-4xl font-black text-indigo-950 mb-6 tracking-tighter">Education & Experience</h1>
          </div>

          {/* BAGIAN BAWAH: SCROLLABLE TIMELINE (EDUCATION & EXPERIENCE) */}
          <div className="flex-1 overflow-y-auto p-5 md:p-10 custom-scrollbar bg-white">
            <div className="max-w-4xl">
              <div className="relative pl-8 space-y-12">
                {/* Garis Vertikal */}
                <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-slate-100"></div>

                {/* Box Pendidikan */}
                <div className="relative">
                  <div className="absolute left-[-39px] top-1.5 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-sm z-10"></div>
                  <div className="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100 shadow-sm transition-transform hover:scale-[1.01]">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-lg font-black text-indigo-950 uppercase">Teknik Informatika</h3>
                        <p className="text-[11px] text-slate-500 font-bold mt-1 uppercase">GPA 3.68 — UIN Sunan Gunung Djati Bandung</p>
                      </div>
                      <span className="text-[9px] bg-indigo-600 text-white px-3 py-1 rounded-full font-black uppercase tracking-widest">Graduated</span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Lulus dengan predikat memuaskan. Fokus pada algoritma, struktur data, dan dasar-dasar kecerdasan buatan.
                    </p>
                  </div>
                </div>

                {/* Map Experience */}
                {experiences.map((item, index) => (
                  <div key={index} className="relative">
                    <div className={`absolute left-[-39px] top-1.5 w-4 h-4 rounded-full ${item.dotColor} border-4 border-white shadow-sm z-10`}></div>
                    <div className={`${item.color} p-6 rounded-2xl border border-slate-100 shadow-sm transition-transform hover:scale-[1.01]`}>
                      <div className="flex flex-wrap justify-between items-start gap-4 mb-2">
                        <div className="flex-1">
                          <h3 className="text-lg font-black text-slate-900 uppercase leading-tight">{item.title}</h3>
                          <p className="text-[11px] text-slate-500 font-bold mt-1 uppercase tracking-wider italic">{item.subtitle}</p>
                        </div>
                        <span className="text-[9px] bg-white/80 px-3 py-1 rounded-full font-black text-slate-500 border border-slate-200 uppercase tracking-widest">
                          {item.label}
                        </span>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;