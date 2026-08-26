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
    <div className="min-h-screen bg-[#050A14] text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-cyan-500/[0.07] blur-[120px] rounded-full"></div>
      </div>

      <header className="relative z-20 max-w-7xl mx-auto mt-4 mx-4 md:mx-auto">
        <div className="flex justify-between items-center px-6 py-3 rounded-full bg-[#0F1C2E]/60 backdrop-blur-xl border border-white/[0.08]">
          <div className="flex items-center gap-3"><div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center"><Shield size={20}/></div><span className="text-[18px] font-bold">RiskGuard AI</span></div>
          <div className="flex gap-3 items-center">
            {!showDashboard? (<><button onClick={()=>setShowLogin(true)} className="px-5 py-2 rounded-full bg-white/[0.06] border border-white/10 text-[13px]">Login</button><button onClick={()=>setShowLogin(true)} className="px-6 py-2.5 rounded-full bg-[#5EE1FF] text-black font-bold text-[13px]">Get Started</button></>):(<div className="flex items-center gap-2"><span className="text-[11px] bg-white/[0.06] border border-white/10 px-3 py-1.5 rounded-full flex gap-1"><User size={12}/>{email}</span><button onClick={()=>{setShowDashboard(false); setEmail('');}} className="px-4 py-1.5 rounded-full bg-white/10 text-[11px] flex gap-1"><LogOut size={12}/>Logout</button></div>)}
          </div>
        </div>
      </header>

      {showDashboard && (
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-6">
          <div className="bg-[#0F1C2E]/80 border border-cyan-400/20 rounded-2xl p-4 flex justify-between items-center">
            <div><h2 className="text-[18px] font-bold">Welcome, {email.split('@')[0]}! 👋</h2><p className="text-cyan-300 text-[11px]">● Premium Active</p></div>
            <button onClick={()=>setShowDemo(true)} className="px-6 py-2.5 rounded-full bg-[#5EE1FF] text-black font-bold text-[13px]">Open Fraud Checker →</button>
          </div>
        </div>
      )}

      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 pt-12 pb-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1C2E] border border-cyan-500/30 text-[12px] text-cyan-300">
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span> Now in Beta • AI-Powered Fraud Protection
        </div>

        <h1 className="mt-6 text-[36px] md:text-[56px] font-bold leading-[1.05]">Stop fraud in real time<br/>with AI that learns</h1>
        <p className="mt-4 text-[15px] text-white/50 max-w-[600px] mx-auto">Monitor transactions, detect anomalies, and protect your users with adaptive AI that evolves to stop fraud before it happens.</p>

        <div className="mt-8 flex justify-center gap-4">
          {!showDashboard? (<><button onClick={()=>setShowLogin(true)} className="px-8 py-3.5 rounded-full bg-[#5EE1FF] text-black font-bold text-[14px]">Start Free Trial →</button><button onClick={()=>setShowDemo(true)} className="px-8 py-3.5 rounded-full border border-white/15 bg-white/[0.05] text-white text-[14px]">See How It Works →</button></>):(<button onClick={()=>setShowDemo(true)} className="px-10 py-4 rounded-full bg-[#5EE1FF] text-black font-bold text-[15px]">Click Here to Open Fraud Checker Card →</button>)}
        </div>

        {/* ✅✅✅ 3D SHIELD - IKKADA UNDI - 100% KANIPISTUNDI ✅✅✅ */}
        <div className="mt-14 relative mx-auto w-[380px] h-[380px] md:w-[520px] md:h-[520px] flex items-center justify-center">
          <div className="absolute w-[400px] h-[400px] bg-cyan-400/20 blur-[80px] rounded-full"></div>

          <div className="relative w-[300px] h-[340px] md:w-[360px] md:h-[400px] bg-gradient-to-b from-cyan-300/40 to-blue-700/40 backdrop-blur-xl border-[2px] border-cyan-200/50 rounded-t-[80px] rounded-b-[150px] shadow-[0_0_100px_rgba(34,211,238,0.6),inset_0_2px_0_rgba(255,255,255,0.4)] flex flex-col items-center justify-center">
            {/* Shine */}
            <div className="absolute top-[10%] left-[15%] w-[35%] h-[25%] bg-white/30 rounded-full blur-[8px] rotate-[-20deg]"></div>

            {/* Inner Shield Border */}
            <div className="absolute inset-[12px] border border-white/20 rounded-t-[68px] rounded-b-[138px]"></div>

            {/* Center Circuit */}
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 bg-cyan-300/30 blur-xl rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-cyan-300/50 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-cyan-400/20 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#5EE1FF] rounded-full shadow-[0_0_20px_#5EE1FF]"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-cyan-200 rounded-full animate-ping"></div>
            </div>

            {/* Circuit lines */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent"></div>
            <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-300/30 to-transparent"></div>

            {/* Dots */}
            <div className="absolute top-[25%] left-[25%] w-2 h-2 bg-cyan-300 rounded-full shadow-[0_0_10px_#5EE1FF]"></div>
            <div className="absolute top-[25%] right-[25%] w-2 h-2 bg-cyan-300 rounded-full shadow-[0_0_10px_#5EE1FF]"></div>
            <div className="absolute bottom-[30%] left-[20%] w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
            <div className="absolute bottom-[30%] right-[20%] w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="bg-[#0F1C2E]/60 border border-white/[0.08] rounded-2xl p-5"><div className="w-9 h-9 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mx-auto mb-3"><Check size={16} className="text-cyan-300"/></div><p className="font-bold">99.9% Accuracy</p><p className="text-[11px] text-white/40">Validated detection rate</p></div>
          <div className="bg-[#0F1C2E]/60 border border-white/[0.08] rounded-2xl p-5"><div className="w-9 h-9 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mx-auto mb-3"><Zap size={16} className="text-cyan-300"/></div><p className="font-bold">Sub-50ms Detection</p><p className="text-[11px] text-white/40">Real-time response</p></div>
          <div className="bg-[#0F1C2E]/60 border border-white/[0.08] rounded-2xl p-5"><div className="w-9 h-9 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mx-auto mb-3"><Shield size={16} className="text-cyan-300"/></div><p className="font-bold">50M+ Protected</p><p className="text-[11px] text-white/40">Trusted by fintechs globally</p></div>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-4 max-w-5xl mx-auto text-left">
          <div className="bg-[#0F1C2E]/40 border border-white/[0.05] rounded-2xl p-4 flex gap-3"><Shield size={18} className="text-cyan-300"/><div><p className="font-semibold text-[13px]">Fraud Shield - Active</p><p className="text-[11px] text-white/40">Monitoring live • No threats</p></div></div>
          <div className="bg-[#0F1C2E]/40 border border-white/[0.05] rounded-2xl p-4 flex gap-3"><CreditCard size={18} className="text-cyan-300"/><div><p className="font-semibold text-[13px]">Card Security</p><p className="text-[11px] text-white/40">3D Secure • 128-bit encryption</p></div></div>
          <div className="bg-[#0F1C2E]/40 border border-cyan-400/10 rounded-2xl p-4 flex gap-3"><Brain size={18} className="text-cyan-300"/><div><p className="font-semibold text-[13px]">AI Brain - 1,247 blocked</p><p className="text-[11px] text-white/40">+12% vs yesterday • 98.4%</p></div></div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/[0.05] text-[11px] text-white/30">Trusted by 200+ fintech startups • SOC 2 compliant • ISO 27001 certified</div>
      </section>

      {showLogin && (
        <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-[380px]">
            <div className="relative bg-[#0F1C2E] border border-cyan-400/20 rounded-[24px] p-7">
              <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mx-auto mb-4"><Shield size={28} className="text-cyan-300"/></div>
              <h3 className="text-[22px] font-bold text-center">Welcome Back</h3><p className="text-[12px] text-white/40 text-center mt-1">Login to RiskGuard AI</p>
              <div className="mt-6 space-y-3"><input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter your Email" className="w-full bg-[#060A18] border border-white/10 rounded-xl p-3.5 text-sm outline-none focus:border-cyan-400/30"/><input type="password" placeholder="Password" className="w-full bg-[#060A18] border border-white/10 rounded-xl p-3.5 text-sm outline-none"/></div>
              <button onClick={handleLogin} className="w-full mt-6 py-3.5 bg-[#5EE1FF] text-black rounded-full font-bold text-[14px]">Login & Continue →</button>
              <button onClick={()=>setShowLogin(false)} className="w-full mt-3 py-2 text-[13px] text-white/40">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {showDemo && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative bg-[#0F172A] border-2 border-white/[0.12] rounded-[28px] p-8 w-full max-w-5xl max-h-[90vh] overflow-y-auto">
            <button onClick={()=>setShowDemo(false)} className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center"><X size={16}/></button>
            <h3 className="text-[24px] font-bold">Transaction Fraud Checker</h3>
            <div className="grid md:grid-cols-3 gap-5 mt-8">
              <div className="bg-[#060A18] border border-white/10 rounded-2xl p-4"><div className="flex gap-2 mb-4"><div className="w-7 h-7 rounded-full bg-white text-black text-xs flex items-center justify-center font-bold">1</div><span className="text-sm font-bold">Enter Transaction</span></div>
                <div className="space-y-3"><input value={amount} onChange={e=>setAmount(e.target.value)} className="w-full bg-[#10182E] border border-white/10 rounded-xl p-3 text-sm"/><select value={country} onChange={e=>setCountry(e.target.value)} className="w-full bg-[#10182E] border border-white/10 rounded-xl p-3 text-xs"><option>Same country</option><option>Different country</option><option>High-risk country</option></select><select value={card} onChange={e=>setCard(e.target.value)} className="w-full bg-[#10182E] border border-white/10 rounded-xl p-3 text-xs"><option>Visa</option><option>MasterCard</option><option>Amex</option><option>Unknown</option></select><select value={time} onChange={e=>setTime(e.target.value)} className="w-full bg-[#10182E] border border-white/10 rounded-xl p-3 text-xs"><option>Normal hours</option><option>3 AM (Suspicious)</option><option>Multiple in 1 min</option></select><select value={device} onChange={e=>setDevice(e.target.value)} className="w-full bg-[#10182E] border border-white/10 rounded-xl p-3 text-xs"><option>Known device</option><option>New device</option><option>VPN / Proxy</option></select><select value={merchant} onChange={e=>setMerchant(e.target.value)} className="w-full bg-[#10182E] border border-white/10 rounded-xl p-3 text-xs"><option>Trusted</option><option>New merchant</option><option>Blacklisted</option></select></div></div>
              <div className="bg-[#060A18] border border-white/10 rounded-2xl p-4 flex flex-col"><div className="flex gap-2 mb-4"><div className="w-7 h-7 rounded-full bg-white text-black text-xs flex items-center justify-center font-bold">2</div><span className="text-sm font-bold">AI Processing</span></div><div className="bg-[#10182E] border border-white/5 rounded-xl p-4 flex-1 text-[11px] space-y-2"><div>• ${amount} • {country} • {card}</div></div><button onClick={runCheck} className="w-full py-3.5 bg-white text-black rounded-full font-bold text-sm mt-4">Analyze Transaction →</button></div>
              <div className="bg-[#060A18] border border-white/10 rounded-2xl p-4"><div className="flex gap-2 mb-4"><div className="w-7 h-7 rounded-full bg-white text-black text-xs flex items-center justify-center font-bold">3</div><span className="text-sm font-bold">Decision</span></div>{!result?(<div className="bg-[#10182E] border border-dashed border-white/10 rounded-xl p-10 text-center h-[280px] flex flex-col justify-center items-center"><div className="text-3xl">🔍</div><p className="text-xs text-white/30 mt-2">Click Analyze</p></div>):(<div className={`rounded-xl p-5 border h-[280px] ${result.startsWith('SAFE')?'bg-green-500/10 border-green-500/30':'bg-red-500/10 border-red-500/30'}`}><div className="text-[10px] text-white/40">RISK SCORE</div><div className="text-[36px] font-bold">{result.split('|')[1]}/100</div><div className="mt-4 py-2.5 rounded-full text-center text-sm font-bold bg-white text-black">{result.split('|')[0]}</div><div className="mt-3 text-xs text-center">{result.split('|')[2]}</div></div>)}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
