import React, { useState } from 'react';
import { Shield, CreditCard, Brain, X, LogOut, User, Check, Zap } from 'lucide-react';

const shieldDataUri = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 480" width="400" height="480">
  <defs>
    <radialGradient id="glow" cx="50%" cy="45%" r="60%">
      <stop offset="0%" stop-color="#5EE1FF" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#0A1930" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="glass" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7FE8FF" stop-opacity="0.9"/>
      <stop offset="50%" stop-color="#2DD4FF" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#0F2A5A" stop-opacity="0.8"/>
    </linearGradient>
  </defs>
  <ellipse cx="200" cy="240" rx="190" ry="230" fill="url(#glow)" opacity="0.6"/>
  <path d="M200 20 L360 80 L360 200 Q360 360 200 460 Q40 360 40 200 L40 80 Z" fill="url(#glass)" stroke="#A5F3FF" stroke-width="3" stroke-opacity="0.8"/>
  <path d="M200 35 L340 90 L340 200 Q340 340 200 435 Q60 340 60 200 L60 90 Z" fill="none" stroke="white" stroke-width="1.5" stroke-opacity="0.3"/>
  <ellipse cx="140" cy="110" rx="70" ry="35" fill="white" opacity="0.25" transform="rotate(-20 140 110)"/>
  <g stroke="#5EE1FF" stroke-width="1.2" opacity="0.7" fill="none">
    <path d="M200 140 L200 100 M140 160 L100 120 M260 160 L300 120 M120 200 L70 200 M280 200 L330 200 M140 260 L90 300 M260 260 L310 300 M200 300 L200 380"/>
    <circle cx="200" cy="100" r="4" fill="#5EE1FF"/><circle cx="100" cy="120" r="4" fill="#5EE1FF"/><circle cx="300" cy="120" r="4" fill="#5EE1FF"/><circle cx="70" cy="200" r="3" fill="#5EE1FF"/><circle cx="330" cy="200" r="3" fill="#5EE1FF"/>
  </g>
  <circle cx="200" cy="230" r="35" fill="none" stroke="#5EE1FF" stroke-width="1" opacity="0.4"/>
  <circle cx="200" cy="230" r="22" fill="none" stroke="#A5F3FF" stroke-width="1.5" opacity="0.6"/>
  <circle cx="200" cy="230" r="12" fill="#5EE1FF" opacity="0.8"/>
  <circle cx="200" cy="230" r="8" fill="#C7F9FF"/>
  <rect x="135" y="290" width="130" height="22" rx="11" fill="#0B2A4A" stroke="#5EE1FF" stroke-opacity="0.5"/>
  <text x="200" y="305" text-anchor="middle" font-family="Arial" font-size="10" fill="#7FE8FF" letter-spacing="1">AI PROTECTED</text>
</svg>
`)}`;

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
    <div className="min-h-screen bg-[#050A14] text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"><div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-cyan-500/[0.07] blur-[120px] rounded-full"></div><div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div></div>

      <header className="relative z-20 max-w-7xl mx-auto mt-4 mx-4 md:mx-auto">
        <div className="flex justify-between items-center px-6 py-3 rounded-full bg-[#0F1C2E]/60 backdrop-blur-xl border border-white/[0.08]">
          <div className="flex items-center gap-3"><div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.4)]"><Shield size={20}/></div><span className="text-[18px] font-bold tracking-tight">RiskGuard AI</span><div className="hidden md:flex items-center gap-6 ml-10 text-[13px] text-white/40"><span className="hover:text-white cursor-pointer">Product</span><span className="hover:text-white cursor-pointer">Features</span><span className="hover:text-white cursor-pointer">Pricing</span><span className="hover:text-white cursor-pointer">Security</span><span className="hover:text-white cursor-pointer">Docs</span></div></div>
          <div className="flex gap-3 items-center">
            {!showDashboard? (<><button onClick={()=>setShowLogin(true)} className="px-5 py-2 rounded-full bg-white/[0.06] border border-white/10 text-[13px] hover:bg-white/10">Login</button><button onClick={()=>setShowLogin(true)} className="px-6 py-2.5 rounded-full bg-[#5EE1FF] text-black font-bold text-[13px] shadow-[0_0_20px_rgba(94,225,255,0.4)]">Get Started</button></>):(<div className="flex items-center gap-2"><span className="text-[11px] flex gap-2 items-center bg-white/[0.06] border border-white/10 px-3 py-1.5 rounded-full max-w-[150px] truncate"><User size={12}/>{email}</span><button onClick={()=>{setShowDashboard(false); setEmail('');}} className="px-4 py-1.5 rounded-full bg-white/10 text-[11px] flex gap-1 items-center"><LogOut size={12}/>Logout</button></div>)}
          </div>
        </div>
      </header>

      {showDashboard && (<div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-6"><div className="bg-[#0F1C2E]/80 border border-cyan-400/20 rounded-2xl p-4 flex justify-between items-center backdrop-blur"><div><h2 className="text-[18px] font-bold">Welcome, {email.split('@')[0]}! 👋</h2><p className="text-cyan-300 text-[11px] mt-0.5">● Premium Active</p></div><button onClick={()=>setShowDemo(true)} className="px-6 py-2.5 rounded-full bg-[#5EE1FF] text-black font-bold text-[13px]">Open Fraud Checker →</button></div></div>)}

      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 pt-12 pb-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1C2E] border border-cyan-500/30 text-[12px] text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.15)]"><span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span> Now in Beta • AI-Powered Fraud Protection</div>
        <h1 className="mt-6 text-[36px] md:text-[56px] font-bold leading-[1.05] tracking-tight">Stop fraud in real time<br/>with AI that learns</h1>
        <p className="mt-4 text-[14px] md:text-[16px] leading-6 text-white/50 max-w-[600px] mx-auto">Monitor transactions, detect anomalies, and protect your users with adaptive AI that evolves to stop fraud before it happens.</p>
        <div className="mt-8 flex justify-center gap-4">{!showDashboard? (<><button onClick={()=>setShowLogin(true)} className="px-8 py-3.5 rounded-full bg-[#5EE1FF] text-black font-bold text-[14px] shadow-[0_0_25px_rgba(94,225,255,0.5)]">Start Free Trial →</button><button onClick={()=>setShowDemo(true)} className="px-8 py-3.5 rounded-full border border-white/15 bg-white/[0.05] backdrop-blur text-white text-[14px] hover:bg-white/10">See How It Works →</button></>):(<button onClick={()=>setShowDemo(true)} className="px-10 py-4 rounded-full bg-[#5EE1FF] text-black font-bold text-[15px] shadow-[0_0_30px_rgba(94,225,255,0.6)]">Click Here to Open Fraud Checker Card →</button>)}</div>

        <div className="mt-12 relative mx-auto w-[400px] md:w-[560px] flex flex-col items-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/20 blur-[100px] rounded-full"></div>
          <img src={shieldDataUri} alt="3D Shield" className="relative w-[380px] md:w-[460px] h-auto drop-shadow-[0_0_80px_rgba(94,225,255,0.8)]" />
          <p className="mt-4 text-[11px] tracking-[0.35em] text-cyan-300/60">3D SHIELD • REAL TIME PROTECTION • 99.9% SECURE</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="bg-[#0F1C2E]/60 backdrop-blur border border-white/[0.08] rounded-2xl p-5"><div className="w-9 h-9 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mx-auto mb-3"><Check size={16} className="text-cyan-300"/></div><p className="font-bold text-[15px]">99.9% Accuracy</p><p className="text-[11px] text-white/40 mt-1">Validated detection rate</p></div>
          <div className="bg-[#0F1C2E]/60 backdrop-blur border border-white/[0.08] rounded-2xl p-5"><div className="w-9 h-9 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mx-auto mb-3"><Zap size={16} className="text-cyan-300"/></div><p className="font-bold text-[15px]">Sub-50ms Detection</p><p className="text-[11px] text-white/40 mt-1">Real-time response</p></div>
          <div className="bg-[#0F1C2E]/60 backdrop-blur border border-white/[0.08] rounded-2xl p-5"><div className="w-9 h-9 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mx-auto mb-3"><Shield size={16} className="text-cyan-300"/></div><p className="font-bold text-[15px]">50M+ Protected</p><p className="text-[11px] text-white/40 mt-1">Trusted by fintechs globally</p></div>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-4 max-w-5xl mx-auto text-left">
          <div className="bg-[#0F1C2E]/40 border border-white/[0.05] rounded-2xl p-4 flex gap-3"><Shield size={18} className="text-cyan-300 mt-0.5"/><div><p className="font-semibold text-[13px]">Fraud Shield - Active</p><p className="text-[11px] text-white/40">Monitoring live • No threats</p></div></div>
          <div className="bg-[#0F1C2E]/40 border border-white/[0.05] rounded-2xl p-4 flex gap-3"><CreditCard size={18} className="text-cyan-300 mt-0.5"/><div><p className="font-semibold text-[13px]">Card Security</p><p className="text-[11px] text-white/40">3D Secure • 128-bit encryption</p></div></div>
          <div className="bg-[#0F1C2E]/40 border border-cyan-400/10 rounded-2xl p-4 flex gap-3"><Brain size={18} className="text-cyan-300 mt-0.5"/><div><p className="font-semibold text-[13px]">AI Brain - 1,247 blocked</p><p className="text-[11px] text-white/40">+12% vs yesterday • 98.4%</p></div></div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/[0.05] text-[11px] text-white/30">Trusted by 200+ fintech startups • SOC 2 compliant • ISO 27001 certified</div>
      </section>

      {showLogin && (<div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-md flex items-center justify-center p-4"><div className="relative w-full max-w-[380px]"><div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-400/30 to-blue-500/20 rounded-[24px] blur-[15px]"></div><div className="relative bg-[#0F1C2E] border border-cyan-400/20 rounded-[24px] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"><div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div><div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mx-auto mb-4"><Shield size={28} className="text-cyan-300"/></div><h3 className="text-[22px] font-bold text-center">Welcome Back</h3><p className="text-[12px] text-white/40 text-center mt-1">Login to RiskGuard AI</p><div className="mt-6 space-y-3"><input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter your Email" className="w-full bg-[#060A18] border border-white/10 rounded-xl p-3.5 text-sm outline-none focus:border-cyan-400/30"/><input type="password" placeholder="Password" className="w-full bg-[#060A18] border border-white/10 rounded-xl p-3.5 text-sm outline-none"/></div><button onClick={handleLogin} className="w-full mt-6 py-3.5 bg-[#5EE1FF] text-black rounded-full font-bold text-[14px]">Login & Continue →</button><button onClick={()=>setShowLogin(false)} className="w-full mt-3 py-2 text-[13px] text-white/40">Cancel</button></div></div></div>)}
      {showDemo && (<div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"><div className="relative bg-[#0F172A] border-2 border-white/[0.12] rounded-[28px] p-8 w-full max-w-5xl max-h-[90vh] overflow-y-auto"><button onClick={()=>setShowDemo(false)} className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center"><X size={16}/></button><h3 className="text-[24px] font-bold">Transaction Fraud Checker</h3><div className="grid md:grid-cols-3 gap-5 mt-8"><div className="bg-[#060A18] border border-white/10 rounded-2xl p-4"><div className="flex gap-2 mb-4"><div className="w-7 h-7 rounded-full bg-white text-black text-xs flex items-center justify-center font-bold">1</div><span className="text-sm font-bold">Enter Transaction</span></div><div className="space-y-3"><input value={amount} onChange={e=>setAmount(e.target.value)} className="w-full bg-[#10182E] border border-white/10 rounded-xl p-3 text-sm"/><select value={country} onChange={e=>setCountry(e.target.value)} className="w-full bg-[#10182E] border border-white/10 rounded-xl p-3 text-xs"><option>Same country</option><option>Different country</option><option>High-risk country</option></select><select value={card} onChange={e=>setCard(e.target.value)} className="w-full bg-[#10182E] border border-white/10 rounded-xl p-3 text-xs"><option>Visa</option><option>MasterCard</option><option>Amex</option><option>Unknown</option></select><select value={time} onChange={e=>setTime(e.target.value)} className="w-full bg-[#10182E] border border-white/10 rounded-xl p-3 text-xs"><option>Normal hours</option><option>3 AM (Suspicious)</option><option>Multiple in 1 min</option></select><select value={device} onChange={e=>setDevice(e.target.value)} className="w-full bg-[#10182E] border border-white/10 rounded-xl p-3 text-xs"><option>Known device</option><option>New device</option><option>VPN / Proxy</option></select><select value={merchant} onChange={e=>setMerchant(e.target.value)} className="w-full bg-[#10182E] border border-white/10 rounded-xl p-3 text-xs"><option>Trusted</option><option>New merchant</option><option>Blacklisted</option></select></div></div><div className="bg-[#060A18] border border-white/10 rounded-2xl p-4 flex flex-col"><div className="flex gap-2 mb-4"><div className="w-7 h-7 rounded-full bg-white text-black text-xs flex items-center justify-center font-bold">2</div><span className="text-sm font-bold">AI Processing</span></div><div className="bg-[#10182E] border border-white/5 rounded-xl p-4 flex-1 text-[11px] space-y-2"><div>• ${amount} • {country} • {card}</div></div><button onClick={runCheck} className="w-full py-3.5 bg-white text-black rounded-full font-bold text-sm mt-4">Analyze Transaction →</button></div><div className="bg-[#060A18] border border-white/10 rounded-2xl p-4"><div className="flex gap-2 mb-4"><div className="w-7 h-7 rounded-full bg-white text-black text-xs flex items-center justify-center font-bold">3</div><span className="text-sm font-bold">Decision</span></div>{!result?(<div className="bg-[#10182E] border border-dashed border-white/10 rounded-xl p-10 text-center h-[280px] flex flex-col justify-center items-center"><div className="text-3xl">🔍</div><p className="text-xs text-white/30 mt-2">Click Analyze</p></div>):(<div className={`rounded-xl p-5 border h-[280px] ${result.startsWith('SAFE')?'bg-green-500/10 border-green-500/30':'bg-red-500/10 border-red-500/30'}`}><div className="text-[10px] text-white/40">RISK SCORE</div><div className="text-[36px] font-bold">{result.split('|')[1]}/100</div><div className="mt-4 py-2.5 rounded-full text-center text-sm font-bold bg-white text-black">{result.split('|')[0]}</div><div className="mt-3 text-xs text-center">{result.split('|')[2]}</div></div>)}</div></div></div></div>)}
    </div>
  );
}
