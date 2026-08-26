import React, { useState } from 'react';
import { Shield, CreditCard, Brain, X, LogOut, User } from 'lucide-react';

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
      <div className="absolute inset-0 pointer-events-none"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-cyan-500/5 blur-[100px] rounded-full"></div></div>

      <header className="relative z-10 flex justify-between items-center px-6 md:px-16 py-5 border-b border-white/[0.05]">
        <div className="flex items-center gap-3"><div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center"><Shield size={20}/></div><span className="text-xl font-bold">RiskGuard AI</span></div>
        <div className="flex gap-3">
          {!showDashboard? (<><button onClick={()=>setShowLogin(true)} className="px-5 py-2 rounded-full bg-white/[0.06] border border-white/10 text-sm">Login</button><button onClick={()=>setShowLogin(true)} className="px-6 py-2 rounded-full bg-[#5EE1FF] text-black font-semibold text-sm">Get Started</button></>):(<div className="flex items-center gap-3"><span className="text-sm flex gap-2 items-center"><User size={16}/>{email}</span><button onClick={()=>setShowDashboard(false)} className="px-4 py-2 rounded-full bg-white/10 text-sm flex gap-1 items-center"><LogOut size={14}/>Logout</button></div>)}
        </div>
      </header>

      {!showDashboard && (
        <>
          <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 pt-14 pb-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex px-4 py-1.5 rounded-full bg-[#0B1C2E] border border-cyan-500/20 text-[13px] text-cyan-300">🛡️ AI Fraud Detection v2.1</div>
              <h1 className="mt-6 text-[40px] md:text-[48px] font-bold leading-[1.1]">Stop fraud in real time,<br/>with AI that learns.</h1>
              <p className="mt-4 text-[14px] leading-6 text-white/50 max-w-[480px]">Monitor transactions, detect anomalies, and block fraudulent activity instantly using our self-learning AI.</p>
              <div className="mt-8 flex gap-4"><button onClick={()=>setShowLogin(true)} className="px-7 py-3 rounded-full bg-[#5EE1FF] text-black font-semibold text-[14px]">Start free trial →</button><button onClick={()=>setShowDemo(true)} className="px-7 py-3 rounded-full border border-cyan-400/30 bg-[#0B1C2E]/50 text-cyan-300 text-[14px]">Try Live Demo</button></div>
            </div>
            <div className="space-y-4">
              <div className="bg-[#0F1C2E]/80 border border-white/[0.08] rounded-2xl p-5 flex gap-4"><Shield className="text-cyan-300"/><div><p className="font-semibold text-[15px]">Fraud Shield - AI Protection Active</p><p className="text-[12px] text-white/40">Monitoring live • No threats detected</p></div></div>
              <div className="bg-[#0F1C2E]/60 border border-white/[0.08] rounded-2xl p-5 flex gap-4"><CreditCard className="text-cyan-300"/><div><p className="font-semibold text-[15px]">Card Security</p><p className="text-[12px] text-white/40">3D Secure enabled • 128-bit encryption</p></div></div>
              <div className="bg-[#0F1C2E]/60 border border-cyan-400/20 rounded-2xl p-5 flex gap-4"><Brain className="text-cyan-300"/><div><p className="font-semibold text-[15px]">AI Brain - 1,247 blocked today</p><p className="text-[12px] text-white/40">+12% vs yesterday • Confidence 98.4%</p></div></div>
            </div>
          </section>
          <div className="relative z-10 border-t border-white/[0.05] py-8 flex justify-center"><button onClick={()=>setShowDemo(true)} className="px-8 py-3 rounded-full border border-cyan-400/40 bg-[#0B1C2E]/50 text-cyan-300 text-[14px]">Click Here to Open Fraud Checker Card →</button></div>
        </>
      )}

      {/* LOGIN - HIGHLIGHTED CARD + LIGHT 3D */}
      {showLogin && (
        <div className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="absolute inset-0 pointer-events-none"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-cyan-500/10 blur-[100px] rounded-full"></div></div>
          <div className="relative w-full max-w-[380px]"><div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-400/30 to-blue-500/20 rounded-[24px] blur-[15px]"></div>
            <div className="relative bg-[#0F1C2E] border border-cyan-400/20 rounded-[24px] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
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
