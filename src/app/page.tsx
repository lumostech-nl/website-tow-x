import { FaWhatsapp } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      {/* Background layers */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-noise" />
        <div className="absolute inset-0 grid-overlay" />
        <div className="absolute top-0 left-0 w-full h-full volumetric-light" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#EE6352]/5 blur-[120px] rounded-full" />
      </div>

      {/* Nav */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-5 flex justify-between items-center border-b border-black/5 bg-white/80 backdrop-blur-md">
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-gray-900 tracking-tighter">
            Towx <span className="text-[#EE6352]">/</span> PRO
          </span>
        </div>
        <div className="hidden lg:flex items-center gap-12 font-mono text-[10px] tracking-[0.3em]">
          <a className="hover:text-[#EE6352] transition-colors" href="#solutions">[ SOLUTIONS ]</a>
          <a className="hover:text-[#EE6352] transition-colors" href="#features">[ FEATURES ]</a>
          <a className="hover:text-[#EE6352] transition-colors" href="#workflow">[ WORKFLOW ]</a>
          <a className="hover:text-[#EE6352] transition-colors text-gray-900 border-b border-black/20 pb-1" href="#deploy">[ GET STARTED ]</a>
        </div>
        <div className="font-mono text-[10px] tracking-widest text-gray-500">
                    <a
                      href="https://wa.me/14375668699"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 text-sm font-bold font-mono tracking-[0.4em] text-[#25d366] hover:text-[#25d366]/70 transition-colors"
                    >
                      <FaWhatsapp className="h-5 w-5" />
                      +1 437 566 8699
                    </a>

        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero */}
        <section className="min-h-screen flex flex-col items-center justify-center relative px-6 py-32 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <div className="scan-line" />
            <div className="absolute top-1/4 left-10 font-mono text-[10px] text-gray-400 flex flex-col gap-1">
              <span>LNG: -118.2437</span>
              <span>LAT: 34.0522</span>
              <div className="w-20 h-px bg-black/10 mt-2" />
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-[25vw] text-black/[0.03] select-none tracking-tighter uppercase whitespace-nowrap">
              DISPATCH
            </div>
          </div>

          <div className="max-w-7xl w-full text-center relative z-20">
            <div className="font-mono text-[#EE6352] text-xs mb-8 tracking-[0.8em] flex items-center justify-center gap-4">
              <span className="w-16 h-px bg-[#EE6352]/40" />
              NEXT-GEN DISPATCH SOLUTIONS
              <span className="w-16 h-px bg-[#EE6352]/40" />
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-bold text-gray-900 leading-[0.9] tracking-tighter mb-12 uppercase italic">
              The All-in-One <br /> Command Center for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#EE6352] via-orange-500 to-[#EE6352] bg-[length:200%_auto] animate-pulse">
                Modern Towing Fleets.
              </span>
            </h1>

            <div className="flex flex-col items-center max-w-3xl mx-auto">
              <p className="text-gray-600 font-light leading-relaxed mb-12 tracking-wide uppercase font-mono text-[14px]">
                Streamline your operations with real-time dispatching, automated tracking, and seamless invoicing. Towx provides the precision intelligence needed for high-volume fleet management.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 items-center">
                <a href="https://my.tow-x.com" className="group relative px-12 py-5 bg-[#EE6352] text-white overflow-hidden transition-all hover:scale-105 active:scale-95">
                  <span className="relative z-10 font-mono text-xs font-bold tracking-[0.4em]">BOOK A DEMO</span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform" />
                </a>
                <a href="https://my.tow-x.com" className="group relative px-12 py-5 border border-black/20 text-gray-900 overflow-hidden transition-all hover:border-[#EE6352]/50">
                  <span className="relative z-10 font-mono text-xs font-bold tracking-[0.4em]">SEE HOW IT WORKS</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Marquee ticker */}
        <div className="border-y border-black/5 bg-black/[0.02] py-6 overflow-hidden flex items-center whitespace-nowrap">
          <div className="flex gap-20 animate-marquee font-mono text-[10px] tracking-[0.5em] text-black/25 uppercase italic">
            <span>
              Automated Job Routing // Real-Time GPS Telemetry // Municipal Compliance Integration // Zero-Latency Dispatch // Secure Payment Processing // Automated Job Routing // Real-Time GPS Telemetry // Municipal Compliance Integration // Zero-Latency Dispatch // Secure Payment Processing
            </span>
          </div>
        </div>

        {/* Solutions / Features */}
        <section className="py-32 px-6" id="solutions">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
              <div className="max-w-xl">
                <div className="font-mono text-[#EE6352] text-[10px] mb-4 tracking-[0.4em]">CORE SYSTEM SOLUTIONS</div>
                <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 tracking-tighter">MAXIMIZE FLEET EFFICIENCY.</h2>
              </div>
              <div className="text-right font-mono text-[10px] text-gray-500">
                <br />ESTABLISHED: 2025
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1" id="features">
              {[
                {
                  icon: "📞",
                  label: "Call Management",
                  desc: "Intelligent call intake with automated data extraction and sub-second job validation.",
                  mod: "MOD_01",
                },
                {
                  icon: "📍",
                  label: "Live Fleet Tracking",
                  desc: "Real-time GPS visualization of every unit in your fleet. Monitor arrival times and route efficiency.",
                  mod: "MOD_02",
                },
                {
                  icon: "🧾",
                  label: "Automated Invoicing",
                  desc: "Generate digital invoices instantly upon job completion with secure payment gateway integration.",
                  mod: "MOD_03",
                },
                {
                  icon: "📊",
                  label: "Performance Analytics",
                  desc: "Data-driven insights into operator performance, regional demand, and business profitability.",
                  mod: "MOD_04",
                },
              ].map((card) => (
                <div
                  key={card.mod}
                  className="group relative bg-black/[0.02] border border-black/5 p-8 transition-all hover:bg-black/[0.04] hover:border-black/10"
                >
                  <div className="text-3xl mb-8">{card.icon}</div>
                  <h3 className="font-mono text-sm font-bold text-gray-900 mb-4 tracking-widest uppercase">
                    {card.label}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-6 font-light">{card.desc}</p>
                  <div className="font-mono text-[9px] text-black/30 flex justify-between">
                    <span>{card.mod}</span>
                    <span className="group-hover:text-[#EE6352] transition-colors">ACTIVE</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="py-32 bg-gray-50" id="workflow">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-24">
              <div className="font-mono text-[#00d4ff] text-[10px] mb-4 tracking-[0.4em]">DISPATCH WORKFLOW</div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tighter">OPERATIONAL LIFECYCLE.</h2>
            </div>

            <div className="space-y-12 relative">
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-black/20 to-transparent" />

              <div className="relative flex flex-col md:flex-row items-start md:items-center gap-12 group">
                <div className="w-full md:w-1/2 md:text-right">
                  <h4 className="font-mono text-lg text-gray-900 mb-2 uppercase tracking-tighter">01. Job Intake</h4>
                  <p className="text-sm text-gray-500 max-w-sm md:ml-auto">
                    Rapid call logging and immediate vehicle triage. Automated data verification via field-input tools.
                  </p>
                </div>
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-[#EE6352] shadow-[0_0_15px_#EE6352] rounded-full z-20 group-hover:scale-150 transition-transform" />
                <div className="w-full md:w-1/2 pl-12 md:pl-0">
                  <div className="inline-block bg-black/5 border border-black/10 p-2 font-mono text-[9px] text-[#EE6352]">
                    [ PENDING JOB ]
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col md:flex-row-reverse items-start md:items-center gap-12 group">
                <div className="w-full md:w-1/2">
                  <h4 className="font-mono text-lg text-gray-900 mb-2 uppercase tracking-tighter">02. Fleet Routing</h4>
                  <p className="text-sm text-gray-500 max-w-sm">
                    Smart assignment to the optimal recovery unit. Integrated navigation push for faster arrivals.
                  </p>
                </div>
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-[#00d4ff] shadow-[0_0_15px_#00d4ff] rounded-full z-20 group-hover:scale-150 transition-transform" />
                <div className="w-full md:w-1/2 pr-12 md:pr-0 md:text-right">
                  <div className="inline-block bg-black/5 border border-black/10 p-2 font-mono text-[9px] text-[#00d4ff]">
                    [ UNIT EN ROUTE ]
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col md:flex-row items-start md:items-center gap-12 group">
                <div className="w-full md:w-1/2 md:text-right">
                  <h4 className="font-mono text-lg text-gray-900 mb-2 uppercase tracking-tighter">03. Job Completion</h4>
                  <p className="text-sm text-gray-500 max-w-sm md:ml-auto">
                    Instant digital invoicing and automated payment collection. Fleet availability updated automatically.
                  </p>
                </div>
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-green-500 shadow-[0_0_15px_#10b981] rounded-full z-20 group-hover:scale-150 transition-transform" />
                <div className="w-full md:w-1/2 pl-12 md:pl-0">
                  <div className="inline-block bg-black/5 border border-black/10 p-2 font-mono text-[9px] text-green-600">
                    [ JOB FINALIZED ]
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-6 relative overflow-hidden" id="deploy">
          <div className="absolute inset-0 bg-[#EE6352] opacity-5 blur-[150px]" />
          <div className="max-w-4xl mx-auto text-center relative z-10 border border-black/5 bg-white/90 backdrop-blur-3xl p-12 lg:p-24">
            <div className="font-mono text-[#EE6352] text-[10px] mb-10 tracking-[1em]">Free Trial</div>
            <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 tracking-tighter mb-8 leading-none">
              MODERNIZE YOUR <br /> DISPATCH CENTER.
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-xl mx-auto font-light">
              Join the industry leaders using Towx to power their recovery operations. Scale your fleet with absolute reliability and zero latency.
            </p>
            <div className="flex flex-col items-center gap-6">
              <a href="https://my.tow-x.com" className="relative group px-12 py-6 bg-[#EE6352] text-white font-bold font-mono tracking-[0.4em] transition-all hover:bg-gray-900 hover:text-white">
                Get a DEMO
                <div className="absolute -inset-2 border border-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-20 px-8 border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-20">
            <div className="lg:col-span-2">
              <div className="flex flex-col gap-2 mb-8">
                <span className="text-xl font-bold text-gray-900 tracking-tighter uppercase">Towx Dispatch Pro</span>
                <span className="font-mono text-[10px] text-[#EE6352] tracking-[0.5em]">FLEET DOMINANCE</span>
              </div>
              <p className="text-xs text-gray-400 max-w-sm font-mono leading-relaxed uppercase">
                Premium dispatching software engineered for high-volume towing environments. Providing industry-leading tracking and invoicing protocols.
              </p>
            </div>
            <div>
              <h5 className="text-black/60 font-mono text-[10px] tracking-widest mb-8 uppercase">PLATFORM</h5>
              <ul className="space-y-4 font-mono text-[10px] text-gray-500 tracking-widest">
                <li><a className="hover:text-[#EE6352] transition-colors" href="#">[ API_ACCESS ]</a></li>
                <li><a className="hover:text-[#EE6352] transition-colors" href="#">[ FLEET_DASHBOARD ]</a></li>
                <li><a className="hover:text-[#EE6352] transition-colors" href="#">[ NETWORK_UPTIME ]</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-black/60 font-mono text-[10px] tracking-widest mb-8 uppercase">LEGAL</h5>
              <ul className="space-y-4 font-mono text-[10px] text-gray-500 tracking-widest">
                <li><a className="hover:text-[#EE6352] transition-colors" href="#">[ DATA_PRIVACY ]</a></li>
                <li><a className="hover:text-[#EE6352] transition-colors" href="#">[ SERVICE_LEVELS ]</a></li>
                <li><a className="hover:text-[#EE6352] transition-colors" href="#">[ SUPPORT_CENTER ]</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-black/5 font-mono text-[9px] text-gray-400 tracking-[0.3em]">
            <div>© 2024 Towx_CORP. ALL_RIGHTS_RESERVED.</div>
            <div className="flex gap-8">
              <a className="hover:text-gray-900 transition-colors" href="#">LINKED_IN</a>
              <a className="hover:text-gray-900 transition-colors" href="#">TERMINAL_X</a>
              <a className="hover:text-gray-900 transition-colors" href="#">SIGNAL_COMM</a>
            </div>
            <div className="text-[#EE6352]/40 animate-pulse">FLEET_SYNC_0.02ms_LATENCY</div>
          </div>
        </div>
      </footer>
    </>
  );
}
