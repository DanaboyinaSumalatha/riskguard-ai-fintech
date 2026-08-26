import React, { useState } from 'react';
import { Shield, X } from 'lucide-react';

export default function App() {
  const [showDemo, setShowDemo] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('4000');
  const [country, setCountry] = useState('Same country');
  const [card, setCard] = useState('Visa');
  const [time, setTime] = useState('Normal hours');
  const [device, setDevice] = useState('Known device');
  const [merchant, setMerchant] = useState('Trusted');
  const [result, setResult] = useState('');

  const handleLogin = () => { if(email){ setShowDashboard(true); setShowLogin(false); } };
  const runCheck = () => {
    const v = parseFloat(amount) || 0;
    if(v===0){ setResult('ERROR|0|Enter amount'); return; }
    let score = 0;
    if(v>3000) score+=40; else if(v>2000) score+=25;
    if(country==='High-risk country') score+=25; else if(country==='Different country') score+=10;
    if(card==='Unknown') score+=15;
    if(time==='3 AM (Suspicious)') score+=20; else if(time==='Multiple in 1 min') score+=35;
    if(device==='VPN / Proxy') score+=15; else if(device==='New device') score+=5;
    if(merchant==='Blacklisted') score+=30; else if(merchant==='New merchant') score+=10;
    if(score<50) setResult(`SAFE|${score}|Approved ✅`);
    else if(score<80) setResult(`REVIEW|${score}|Manual Review ⚠️`);
    else setResult(`BLOCKED|${score}|Blocked 🚫`);
  };

  return (
    <div className="min-h-screen bg-[#050A14] text-white">
      <header className="max-w-7xl mx-auto pt-4 px-4">
        <div className="flex justify-between items-center px-6 py-3 rounded-full bg-[#0F1C2E]/60 border border-white/10">
          <div className="flex items-center gap-2 font-bold"><Shield size={20} className="text-cyan-300"/> RiskGuard AI</div>
          <div className="flex gap-2"><button onClick={()=>setShowLogin(true)} className="px-4 py-2 rounded-full bg-white/10 text-xs">Login</button><button className="px-5 py-2 rounded-full bg-[#5EE1FF] text-black font-bold text-xs">Get Started</button></div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 pt-12 text-center">
        <div className="inline-flex px-4 py-1 rounded-full bg-[#0B1C2E] border border-cyan-500/30 text-xs text-cyan-300">Now in Beta • AI-Powered Fraud Protection</div>
        <h1 className="mt-6 text-[42px] md:text-[58px] font-bold leading-[1.05]">Stop fraud in real time<br/>with AI that learns</h1>
        <p className="mt-4 text-white/50 max-w-[600px] mx-auto">Monitor transactions, detect anomalies, and protect your users with adaptive AI.</p>
        <div className="mt-8 flex justify-center gap-4">
          <button onClick={()=>setShowLogin(true)} className="px-8 py-3 rounded-full bg-[#5EE1FF] text-black font-bold">Start Free Trial →</button>
          <button onClick={()=>setShowDemo(true)} className="px-8 py-3 rounded-full border border-white/20 bg-white/5">See How It Works →</button>
        </div>

        {/* PREMIUM 3D SHIELD */}
        <div className="mt-14 mx-auto w-[360px] md:w-[520px] flex flex-col items-center">
          <div className="relative w-[340px] h-[420px] rounded-t-[100px] rounded-b-[180px] bg-gradient-to-br from-cyan-200/40 via-[#5EE1FF]/30 to-blue-900/60 border-2 border-cyan-100/60 shadow-[0_0_100px_rgba(94,225,255,0.7),inset_0_2px_0_rgba(255,255,255,0.8)] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-t-[100px] rounded-b-[180px]"></div>
            <div className="absolute top-[10%] left-[15%] w-[35%] h-[20%] bg-white/40 rounded-full blur-[10px] rotate-[-20deg]"></div>
            <div className="relative flex flex-col items-center">
              <div className="relative w-24 h-24">
                <div className="absolute inset-0 bg-cyan-300/20 blur-[20px] rounded-full animate-pulse"></div>
                <div className="absolute inset-0 border-2 border-cyan-200/40 rounded-full animate-spin" style={{animationDuration:'8s'}}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#5EE1FF] rounded-full shadow-[0_0_30px_#5EE1FF] animate-pulse"></div>
              </div>
              <div className="mt-6 px-4 py-1.5 rounded-full bg-cyan-400/20 border border-cyan-300/30 text-[10px] tracking-widest text-cyan-100">AI PROTECTED</div>
            </div>
            <div className="absolute top-[25%] left-[25%] w-2.5 h-2.5 bg-cyan-100 rounded-full shadow-[0_0_10px_#5EE1FF]"></div>
            <div className="absolute top-[25%] right-[25%] w-2.5 h-2.5 bg-cyan-100 rounded-full shadow-[0_0_10px_#5EE1FF]"></div>
          </div>
          <p className="mt-6 text-[11px] tracking-[0.3em] text-cyan-300/60">3D SHIELD • REAL TIME PROTECTION • 99.9% SECURE</p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="bg-[#0F1C2E]/60 border border-white/10 rounded-2xl p-5"><p className="font-bold">99.9% Accuracy</p><p className="text-xs text-white/40">Validated detection rate</p></div>
          <div className="bg-[#0F1C2E]/60 border border-white/10 rounded-2xl p-5"><p className="font-bold">Sub-50ms Detection</p><p className="text-xs text-white/40">Real-time response</p></div>
          <div className="bg-[#0F1C2E]/60 border border-white/10 rounded-2xl p-5"><p className="font-bold">50M+ Protected</p><p className="text-xs text-white/40">Trusted globally</p></div>
        </div>
      </section>

      {showLogin && (<div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50"><div className="bg-[#0F1C2E] border border-cyan-400/20 rounded-2xl p-6 w-full max-w-sm"><h3 className="font-bold text-center">Welcome Back</h3><input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full mt-4 bg-[#060A18] border border-white/10 rounded-xl p-3 text-sm"/><button onClick={handleLogin} className="w-full mt-4 py-3 bg-[#5EE1FF] text-black rounded-full font-bold">Login →</button><button onClick={()=>setShowLogin(false)} className="w-full mt-2 text-xs text-white/40">Cancel</button></div></div>)}
      {showDemo && (<div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"><div className="bg-[#0F172A] border border-white/10 rounded-2xl p-6 w-full max-w-4xl max-h-[90vh] overflow-auto"><button onClick={()=>setShowDemo(false)} className="float-right bg-white/10 rounded-full w-8 h-8 flex items-center justify-center"><X size={14}/></button><h3 className="text-xl font-bold">Transaction Fraud Checker</h3><div className="grid md:grid-cols-3 gap-4 mt-6"><div className="bg-[#060A18] border border-white/10 rounded-xl p-4"><input value={amount} onChange={e=>setAmount(e.target.value)} className="w-full bg-[#10182E] border border-white/10 rounded-lg p-2 text-sm mb-2"/><select value={country} onChange={e=>setCountry(e.target.value)} className="w-full bg-[#10182E] border border-white/10 rounded-lg p-2 text-xs mb-2"><option>Same country</option><option>High-risk country</option></select><select value={time} onChange={e=>setTime(e.target.value)} className="w-full bg-[#10182E] border border-white/10 rounded-lg p-2 text-xs"><option>Normal hours</option><option>3 AM (Suspicious)</option></select></div><div className="bg-[#060A18] border border-white/10 rounded-xl p-4"><div className="bg-[#10182E] rounded-lg p-3 text-xs">${amount}</div><button onClick={runCheck} className="w-full mt-3 py-3 bg-white text-black rounded-full font-bold text-sm">Analyze →</button></div><div className="bg-[#060A18] border border-white/10 rounded-xl p-4">{!result?<div className="text-xs text-white/30">Click Analyze</div>:<div><div className="text-2xl font-bold">{result.split('|')[1]}/100</div><div className="font-bold mt-2">{result.split('|')[0]}</div></div>}</div></div></div></div>)}
    </div>
  );
}
