import React, { useState } from "react";
import baseBiImage from "../../../assets/intern(1).png";
import flashReportImage from "../../../assets/intern(2).png";
import klinikImage from "../../../assets/intern(3).png";

const Portofolio = () => {
  const [activeTab, setActiveTab] = useState("web-developer"); // State untuk tab utama
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Dashboard Base BI",
      subtitle: "Independent Exploration Project",
      category: "Data Visualization",
      description:
        "Eksperimen pengembangan 6 jenis dashboard visualisasi data untuk monitoring performa bisnis, analisis penjualan, hingga operasional realtime menggunakan arsitektur modern.",
      modules: [
        "Dashboard Pillar ASDI",
        "Dashboard DSI",
        "OBA R Mandiri",
        "Report OBA Beli",
        "Closing Monthly",
        "Sales Management",
      ],
      tools: ["Laravel", "Golang", "JavaScript", "PostgreSQL", "Tailwind CSS"],
      image: baseBiImage,
    },
    {
      id: 2,
      title: "Dashboard Flash Report",
      subtitle: "Personal Web App Project",
      category: "Web Application",
      description:
        "Mengembangkan dashboard laporan kinerja berbasis web menggunakan React.js dan Firebase untuk mempermudah monitoring data secara terpusat dan realtime dengan integrasi grafik interaktif.",
      modules: ["Flash Report", "Interactive Charts Integration"],
      tools: ["React.js", "Chart.js", "Tailwind CSS", "Firebase"],
      image: flashReportImage,
    },
    {
      id: 3,
      title: "Website Registrasi Klinik Kurnia Medika",
      subtitle: "Case Study & Academic Project",
      category: "Management System",
      description:
        "Studi kasus pembuatan sistem registrasi dan antrian pasien berbasis web menggunakan Laravel dan MySQL untuk menguji efisiensi pengelolaan arsip data medis digital.",
      modules: ["Registrasi Pasien", "Manajemen Antrian"],
      tools: ["Laravel", "MySQL"],
      image: klinikImage,
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-indigo-50/50 pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-10">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full">
            My Creative Space
          </span>
          <h1 className="mt-4 text-5xl md:text-6xl font-black tracking-tight text-slate-900">
            {activeTab === "web-developer" ? "Profesional Project" : "Personal & Academic Project"}
          </h1>
        </div>

        {/* NAVIGATION BUTTONS */}
        <div className="flex justify-center gap-4 mb-16">
          <button
            onClick={() => setActiveTab("web-developer")}
            className={`px-6 py-3 rounded-2xl text-sm font-black tracking-wide transition-all duration-300 ${
              activeTab === "web-developer"
                ? "bg-indigo-600 text-white shadow-xl shadow-indigo-600/20 scale-105"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            💻 As Web Developer
          </button>
          
          <button
            onClick={() => setActiveTab("portfolio-projects")}
            className={`px-6 py-3 rounded-2xl text-sm font-black tracking-wide transition-all duration-300 ${
              activeTab === "portfolio-projects"
                ? "bg-indigo-600 text-white shadow-xl shadow-indigo-600/20 scale-105"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            🚀 Portfolio Projects
          </button>
        </div>

        {activeTab === "portfolio-projects" ? (
        /* ==================== ISI TAB: PORTFOLIO PROJECTS ==================== */
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-5 duration-500">
          
          {/* CARD 1: ANALYTICAL SALES (EXCEL) */}
          <div className="bg-white/80 backdrop-blur-xl border border-slate-200 rounded-[2rem] p-6 md:p-8 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase tracking-wider border border-emerald-200/50">Data Analytics</span>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3">Data Visualization & Analytical Sales</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Proyek analisis data penjualan bisnis yang berfokus pada pengolahan data transaksi mentah. Mengandalkan efisiensi manajemen Pivot Table & Charts untuk menyusun dasbor laporan interaktif guna mendukung keputusan bisnis yang tepat sasaran.
              </p>
              
              <div className="border-t border-slate-150 pt-4">
                <h4 className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 mb-3">Toolkit</h4>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {["Microsoft Excel", "Pivot Table", "Pivot Chart", "Sales Dashboards"].map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-bold border border-slate-200/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* LINK GOOGLE DRIVE */}
            <div className="border-t border-slate-150 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 mt-auto">
              <div className="flex-1">
                <h4 className="text-xs font-bold text-slate-800">Sales Report Spreadsheet</h4>
                <p className="text-[11px] text-slate-400 mt-0.5 leading-tight">Disarankan unduh berkas untuk melihat visualisasi optimal di Ms. Excel.</p>
              </div>
              <a 
                href="https://docs.google.com/spreadsheets/d/1I2qmlsZ6QkRmnj-wHNW92Q4IvGk3gEpH/edit?usp=drive_link&ouid=112059132977951966364&rtpof=true&sd=true" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-black tracking-wide text-center transition-all shadow-sm hover:shadow-emerald-600/20 flex items-center justify-center gap-1.5 shrink-0"
              >
                📁 Open Project
              </a>
            </div>
          </div>

          {/* CARD 2: SKRIPSI AI NLP (T5 TRANSFORMER) */}
          <div className="bg-white/80 backdrop-blur-xl border border-slate-200 rounded-[2rem] p-6 md:p-8 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-[10px] font-black uppercase tracking-wider border border-indigo-200/50">Artificial Intelligence</span>
                <span className="px-2.5 py-1 rounded-lg bg-amber-50 text-amber-700 text-[10px] font-black uppercase tracking-wider border border-amber-200/50">Final Project</span>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3">AI Abstractive Review Summarization</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Proyek akhir skripsi di bidang NLP (Natural Language Processing) untuk meringkas ulasan konsumen secara otomatis. Menggunakan arsitektur model Transformer T5 dengan implementasi metodologi data science standar industri CRISP-DM untuk memastikan siklus penelitian yang terstruktur.
              </p>
              
              <div className="border-t border-slate-150 pt-4">
                <h4 className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 mb-3">Toolkit & Methodology</h4>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {["Python", "T5 Transformer", "NLP", "CRISP-DM", "Gradio UI", "Google Colab"].map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-bold border border-slate-200/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* LINK GOOGLE COLAB */}
            <div className="border-t border-slate-150 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 mt-auto">
              <div className="flex-1">
                <h4 className="text-xs font-bold text-slate-800">Research & Source Code</h4>
                <p className="text-[11px] text-slate-400 mt-0.5 leading-tight">Lihat proses data preparation, model training, hingga demonstrasi antarmuka Gradio.</p>
              </div>
              <a 
                href="https://colab.research.google.com/drive/1uelQY8Fee8-ED94JYmANX68zCO7J_sZu?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-[11px] font-black tracking-wide text-center transition-all shadow-sm hover:shadow-orange-600/20 flex items-center justify-center gap-1.5 shrink-0"
              >
                🚀 Open Project
              </a>
            </div>
          </div>

            {/* CARD 3: SKRIPSI AI NLP (T5 TRANSFORMER) */}
            <div className="bg-white/80 backdrop-blur-xl border border-slate-200 rounded-[2rem] p-6 md:p-8 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-[10px] font-black uppercase tracking-wider border border-indigo-200/50">Power BI Project</span>
                <span className="px-2.5 py-1 rounded-lg bg-amber-50 text-amber-700 text-[10px] font-black uppercase tracking-wider border border-amber-200/50">Sales Dashboard</span>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3">Sales Executive Performance Dashboard</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Dashboard interaktif mengukur total profit dan sales berdasarkan bulan, dan tren total sales per segment.
              </p>
              
              <div className="border-t border-slate-150 pt-4">
                <h4 className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 mb-3">Toolkit & Methodology</h4>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {["Excel", "Power BI"].map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-bold border border-slate-200/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* LINK GOOGLE COLAB */}
            <div className="border-t border-slate-150 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 mt-auto">
              <div className="flex-1">
                <h4 className="text-xs font-bold text-slate-800">Resources and Documentation</h4>
                <p className="text-[11px] text-slate-400 mt-0.5 leading-tight">Lihat Detail Data dan Dashboard.</p>
              </div>
              <a 
                href="https://drive.google.com/drive/folders/1ZBg0uSGb3O1iikw_TMDcbjEOndwzvEwh?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-black tracking-wide text-center transition-all shadow-sm hover:shadow-blue-600/20 flex items-center justify-center gap-1.5 shrink-0"
              >
                💻 Open Project
              </a>
            </div>
          </div>

        </div>
      ) : (
          /* ==================== ISI TAB: AS WEB DEVELOPER (PROJECT CARDS) ==================== */
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-5 duration-500">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative cursor-pointer"
              >
                <div className="absolute inset-0 bg-indigo-300/10 blur-2xl rounded-[2rem] opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <div className="relative h-full bg-white border border-slate-200 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  {/* IMAGE */}
                  <div className="relative p-4 bg-slate-50/50">
                    <div className="rounded-[1.5rem] overflow-hidden border border-slate-100">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-[220px] object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 bg-indigo-50/60 px-2.5 py-1 rounded-md">
                      {project.category}
                    </span>

                    <h2 className="mt-3 text-xl font-black text-slate-900 leading-snug group-hover:text-indigo-600 transition-colors">
                      {project.title}
                    </h2>

                    <p className="mt-1 text-xs text-slate-400 font-medium">
                      {project.subtitle}
                    </p>

                    <p className="mt-3 text-sm text-slate-500 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* TECH STACK */}
                    <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                      {project.tools.slice(0, 3).map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-slate-50 text-slate-600 text-[11px] font-semibold border border-slate-200/60"
                        >
                          {tool}
                        </span>
                      ))}
                      {project.tools.length > 3 && (
                        <span className="px-2 py-1 rounded-lg bg-indigo-50 text-indigo-600 text-[11px] font-bold">
                          +{project.tools.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* MODAL DETAIL PROJECT */}
      {selectedProject && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
          <div className="absolute inset-0" onClick={() => setSelectedProject(null)}></div>
          <div className="relative bg-white w-full max-w-2xl max-h-[85vh] flex flex-col rounded-[2rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-slate-900 text-white font-bold shadow-md hover:bg-indigo-600 transition-all flex items-center justify-center text-xs"
            >
              ✕
            </button>

            <div className="relative bg-slate-100 p-4 pt-10 flex items-center justify-center border-b border-slate-100">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full max-h-[200px] object-contain rounded-xl border border-slate-200 bg-white"
              />
            </div>

            <div className="p-6 overflow-y-auto">
              <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
                {selectedProject.category}
              </span>
              <h2 className="mt-3 text-2xl font-black text-slate-900">
                {selectedProject.title}
              </h2>
              <p className="text-xs text-indigo-600 font-semibold mt-1">
                {selectedProject.subtitle}
              </p>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="mt-6">
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Scope / Fitur Utama</h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.modules.map((module, idx) => (
                    <span key={idx} className="px-2.5 py-1.5 rounded-xl bg-slate-50 text-slate-700 text-xs font-medium border border-slate-100">
                      {module}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Teknologi Terkait</h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tools.map((tool, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-full bg-indigo-50/50 text-indigo-700 text-xs font-bold border border-indigo-100">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portofolio;