import React, { useState } from 'react';
import { Shield, CreditCard, Brain, X } from 'lucide-react';

export default function App() {
  const [showDemo, setShowDemo] = useState(false);
  const [amount, setAmount] = useState('4000');
  const [country, setCountry] = useState('Same country');
  const [result, setResult] = useState('');

  const runCheck = () => {
    const v = parseFloat(amount) || 0;
    let score = v > 3000? 85 : 30;
    if(score > 50) setResult(`BLOCKED|${score}|Blocked & Frozen 🚫`);
    else setResult(`SAFE|${score}|Approved ✅`);
  };

  return (
    <div className="min-h-screen bg-[#050A14] text-white relative overflow-hidden">

      {/* BACKGROUND GLOW - Simple & Light */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-cyan-500/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-400/10 blur-[80px] rounded-full"></div>
        <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full"></div>
      </div>

      {/* HEADER */}
      <header className="relative z-10 flex justify-between items-center px-6 md:px-16 py-5 border-b border-white/[0.05]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
            <Shield size={20} className="text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">RiskGuard AI</span>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2 rounded-full bg-white/[0.06] border border-white/10 text-sm hover:bg-white/10">Login</button>
          <button className="px-6 py-2 rounded-full bg-[#5EE1FF] text-black font-semibold text-sm shadow-[0_0_20px_rgba(94,225,255,0.3)]">Get Started</button>
        </div>
      </header>

      {/* HERO - SAME AS IMAGE */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 pt-14 pb-10 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1C2E] border border-cyan-500/20 text-[13px] text-cyan-300">
            <span className="w-4 h-4 rounded-full bg-cyan-400/20 flex items-center justify-center">🛡️</span> AI Fraud Detection v2.1
          </div>

          <h1 className="mt-6 text-[40px] md:text-[48px] font-bold leading-[1.1] tracking-tight">
            Stop fraud in real time,<br/>with AI that learns.
          </h1>

          <p className="mt-4 text-[14px] leading-6 text-white/50 max-w-[480px]">
            Monitor transactions, detect anomalies, and block fraudulent activity instantly using our self-learning AI. Protect your customers and revenue without adding friction to the checkout experience.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-7 py-3 rounded-full bg-[#5EE1FF] text-black font-semibold text-[14px] flex items-center gap-1 shadow-[0_0_25px_rgba(94,225,255,0.35)]">
              Start free trial <span>→</span>
            </button>
            <button onClick={()=>setShowDemo(true)} className="px-7 py-3 rounded-full border border-cyan-400/30 bg-[#0B1C2E]/50 text-cyan-300 font-medium text-[14px] hover:bg-[#0B1C2E]">
              Try Live Demo
            </button>
          </div>
        </div>

        {/* RIGHT - 3 CARDS SAME AS IMAGE */}
        <div className="space-y-4">
          {/* Card 1 */}
          <div className="relative group">
            <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500/20 to-blue-500/10 rounded-2xl blur-[8px]"></div>
            <div className="relative bg-[#0F1C2E]/80 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-5 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
                <Shield size={20} className="text-cyan-300" />
              </div>
              <div className="flex-1">
                <p className="text-[15px] font-semibold">Fraud Shield - AI Protection Active</p>
                <p className="text-[12px] text-white/40 mt-1">Monitoring live <span className="mx-1">•</span> No threats detected</p>
              </div>
              <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_#22c55e]"></div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative">
            <div className="bg-[#0F1C2E]/60 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-5 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                <CreditCard size={20} className="text-cyan-300" />
              </div>
              <div>
                <p className="text-[15px] font-semibold">Card Security</p>
                <p className="text-[12px] text-white/40 mt-1">3D Secure enabled <span className="mx-1">•</span> 128-bit encryption</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative">
            <div className="bg-[#0F1C2E]/60 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-5 flex gap-4 items-start shadow-[0_0_30px_rgba(94,225,255,0.08)]">
              <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center">
                <Brain size={20} className="text-cyan-300" />
              </div>
              <div className="flex-1">
                <p className="text-[15px] font-semibold flex items-center gap-2">AI Brain - 1,247 blocked today <span className="text-[10px]">✨</span></p>
                <p className="text-[12px] text-white/40 mt-1">+12% vs yesterday <span className="mx-1">•</span> Confidence 98.4%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM BUTTON - SAME AS IMAGE */}
      <div className="relative z-10 border-t border-white/[0.05] py-8 flex justify-center">
        <button onClick={()=>setShowDemo(true)} className="px-8 py-3 rounded-full border border-cyan-400/40 bg-[#0B1C2E]/50 text-cyan-300 text-[14px] font-medium hover:bg-[#0B1C2E] hover:border-cyan-400/60 transition shadow-[0_0_20px_rgba(94,225,255,0.15)]">
          Click Here to Open Fraud Checker Card →
        </button>
      </div>

      {/* MODAL - Fraud Checker */}
      {showDemo && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur flex items-center justify-center p-4">
          <div className="relative bg-[#0F172A] border border-white/10 rounded-[24px] p-7 w-full max-w-2xl">
            <button onClick={()=>setShowDemo(false)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><X size={14}/></button>
            <h3 className="text-xl font-bold">Transaction Fraud Checker</h3>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <input value={amount} onChange={e=>setAmount(e.target.value)} className="bg-[#060A18] border border-white/10 rounded-xl p-3 text-sm" placeholder="Amount"/>
              <select value={country} onChange={e=>setCountry(e.target.value)} className="bg-[#060A18] border border-white/10 rounded-xl p-3 text-sm"><option>Same country</option><option>High-risk country</option></select>
            </div>
            <button onClick={runCheck} className="w-full mt-4 py-3 bg-white text-black rounded-full font-bold text-sm">Analyze Transaction →</button>
            {result && <div className={`mt-4 p-4 rounded-xl text-center font-bold ${result.startsWith('SAFE')?'bg-green-500/20 text-green-400':'bg-red-500/20 text-red-400'}`}>{result}</div>}
          </div>
        </div>
      )}
    </div>
  );
}
