import React, { useState } from 'react';
import { Shield, CreditCard, Brain, X, LogOut, User, Check, Zap } from 'lucide-react';

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
      <header className="max-w-7xl mx-auto mt-4 px-4">
        <div className="flex justify-between items-center px-6 py-3 rounded-full bg-[#0F1C2E]/60 border border-white/10">
          <div className="flex items-center gap-2"><div className="w-8 h-8 rounded-xl bg-cyan-400 flex items-center justify-center"><Shield size={18}/></div><span className="font-bold">RiskGuard AI</span></div>
          <div className="flex gap-2">{!showDashboard? (<><button onClick={()=>setShowLogin(true)} className="px-4 py-2 rounded-full bg-white/10 text-xs">Login</button><button onClick={()=>setShowLogin(true)} className="px-5 py-2 rounded-full bg-[#5EE1FF] text-black font-bold text-xs">Get Started</button></>):(<span className="text-xs">{email}</span>)}</div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 pt-10 text-center">
        <div className="inline-flex px-4 py-1 rounded-full bg-[#0B1C2E] border border-cyan-500/30 text-xs text-cyan-300">Now in Beta • AI-Powered Fraud Protection</div>
        <h1 className="mt-6 text-[40px] md:text-[56px] font-bold leading-[1.1]">Stop fraud in real time<br/>with AI that learns</h1>
        <p className="mt-4 text-white/50 max-w-[600px] mx-auto">Monitor transactions, detect anomalies, and protect your users with adaptive AI.</p>
        <div className="mt-8 flex justify-center gap-4">
          <button onClick={()=>setShowLogin(true)} className="px-8 py-3 rounded-full bg-[#5EE1FF] text-black font-bold">Start Free Trial →</button>
          <button onClick={()=>setShowDemo(true)} className="px-8 py-3 rounded-full border border-white/20 bg-white/5">See How It Works →</button>
        </div>

        {/* === 3D SHIELD - 100% VISIBLE - DATA URI IMAGE === */}
        <div className="mt-10 flex justify-center">
          <img
            src="https://i.ibb.co/3mQJvQp4/3d-shield.png"
            alt="3D Shield"
            className="w-[380px] md:w-[500px] h-auto drop-shadow-[0_0_80px_rgba(34,211,238,0.8)]"
            onError={(e) => {
              // fallback if cdn fails -> pure emoji shield
              e.currentTarget.style.display='none';
              document.getElementById('fallback-shield')!.style.display='flex';
            }}
          />
          {/* Fallback CSS Shield - always works */}
          <div id="fallback-shield" style={{display:'none'}} className="w-[300px] h-[340px] bg-gradient-to-b from-cyan-300 to-blue-700 rounded-t-[70px] rounded-b-[140px] border-2 border-cyan-200 shadow-[0_0_80px_rgba(34,211,238,0.6)] flex items-center justify-center text-[120px]">
            🛡️
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="bg-[#0F1C2E]/60 border border-white/10 rounded-2xl p-5"><p className="font-bold">99.9% Accuracy</p><p className="text-xs text-white/40">Validated detection rate</p></div>
          <div className="bg-[#0F1C2E]/60 border border-white/10 rounded-2xl p-5"><p className="font-bold">Sub-50ms Detection</p><p className="text-xs text-white/40">Real-time response</p></div>
          <div className="bg-[#0F1C2E]/60 border border-white/10 rounded-2xl p-5"><p className="font-bold">50M+ Protected</p><p className="text-xs text-white/40">Trusted globally</p></div>
        </div>
      </section>

      {showLogin && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-[#0F1C2E] border border-cyan-400/20 rounded-2xl p-6 w-full max-w-sm">
            <h3 className="font-bold text-center">Welcome Back</h3>
            <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full mt-4 bg-[#060A18] border border-white/10 rounded-xl p-3 text-sm"/>
            <input type="password" placeholder="Password" className="w-full mt-3 bg-[#060A18] border border-white/10 rounded-xl p-3 text-sm"/>
            <button onClick={handleLogin} className="w-full mt-4 py-3 bg-[#5EE1FF] text-black rounded-full font-bold">Login →</button>
            <button onClick={()=>setShowLogin(false)} className="w-full mt-2 text-xs text-white/40">Cancel</button>
          </div>
        </div>
      )}

      {showDemo && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-6 w-full max-w-4xl max-h-[90vh] overflow-auto">
            <button onClick={()=>setShowDemo(false)} className="float-right bg-white/10 rounded-full w-8 h-8 flex items-center justify-center"><X size={14}/></button>
            <h3 className="text-xl font-bold">Transaction Fraud Checker</h3>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-[#060A18] border border-white/10 rounded-xl p-4"><p className="text-sm font-bold mb-3">1. Enter</p><input value={amount} onChange={e=>setAmount(e.target.value)} className="w-full bg-[#10182E] border border-white/10 rounded-lg p-2 text-sm mb-2"/><select value={country} onChange={e=>setCountry(e.target.value)} className="w-full bg-[#10182E] border border-white/10 rounded-lg p-2 text-xs mb-2"><option>Same country</option><option>Different country</option><option>High-risk country</option></select><select value={card} onChange={e=>setCard(e.target.value)} className="w-full bg-[#10182E] border border-white/10 rounded-lg p-2 text-xs mb-2"><option>Visa</option><option>Unknown</option></select><select value={time} onChange={e=>setTime(e.target.value)} className="w-full bg-[#10182E] border border-white/10 rounded-lg p-2 text-xs mb-2"><option>Normal hours</option><option>3 AM (Suspicious)</option><option>Multiple in 1 min</option></select><select value={device} onChange={e=>setDevice(e.target.value)} className="w-full bg-[#10182E] border border-white/10 rounded-lg p-2 text-xs mb-2"><option>Known device</option><option>VPN / Proxy</option></select><select value={merchant} onChange={e=>setMerchant(e.target.value)} className="w-full bg-[#10182E] border border-white/10 rounded-lg p-2 text-xs"><option>Trusted</option><option>Blacklisted</option></select></div>
              <div className="bg-[#060A18] border border-white/10 rounded-xl p-4 flex flex-col"><p className="text-sm font-bold mb-3">2. Process</p><div className="bg-[#10182E] rounded-lg p-3 text-xs flex-1">${amount} • {country}</div><button onClick={runCheck} className="w-full mt-3 py-3 bg-white text-black rounded-full font-bold text-sm">Analyze →</button></div>
              <div className="bg-[#060A18] border border-white/10 rounded-xl p-4"><p className="text-sm font-bold mb-3">3. Decision</p>{!result?<div className="bg-[#10182E] border border-dashed border-white/10 rounded-lg p-8 text-center text-xs text-white/30">Click Analyze</div>:<div className="rounded-lg p-4 border bg-white/5"><div className="text-2xl font-bold">{result.split('|')[1]}/100</div><div className="mt-2 font-bold">{result.split('|')[0]}</div><div className="text-xs mt-1">{result.split('|')[2]}</div></div>}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
