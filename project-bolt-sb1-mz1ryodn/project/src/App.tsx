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

  const handleLogin = () => {
    if(email){
      setShowDashboard(true);
      setShowLogin(false);
    }
  };

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
    if(score<50) setResult(`SAFE|${score}|Approved ✅ Payment Successful`);
    else if(score<80) setResult(`REVIEW|${score}|Manual Review ⚠️`);
    else setResult(`BLOCKED|${score}|Blocked & Card Frozen 🚫`);
  };

  return (
    <div className="min-h-screen bg-[#050A14] text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-cyan-500/5 blur-[100px] rounded-full"></div>
      </div>

      {/* HEADER - Login & Get Started WORK */}
      <header className="relative z-10 flex justify-between items-center px-6 md:px-16 py-5 border-b border-white/[0.05]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center"><Shield size={20} /></div>
          <span className="text-xl font-bold">RiskGuard AI</span>
        </div>
        <div className="flex gap-3">
          {!showDashboard? (
            <>
              <button onClick={()=>setShowLogin(true)} className="px-5 py-2 rounded-full bg-white/[0.06] border border-white/10 text-sm hover:bg-white/10 transition">Login</button>
              <button onClick={()=>setShowLogin(true)} className="px-6 py-2 rounded-full bg-[#5EE1FF] text-black font-semibold text-sm hover:bg-[#7FE8FF] transition">Get Started</button>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <span className="text-sm flex items-center gap-2"><User size={16}/>{email} <span className="bg-cyan-400 text-black text-[10px] px-2 py-0.5 rounded-full font-bold">PRO</span></span>
              <button onClick={()=>setShowDashboard(false)} className="px-4 py-2 rounded-full bg-white/10 flex items-center gap-1 text-sm"><LogOut size={14}/>Logout</button>
            </div>
          )}
        </div>
      </header>

      {!showDashboard? (
        <>
          <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 pt-14 pb-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1C2E] border border-cyan-500/20 text-[13px] text-cyan-300">🛡️ AI Fraud Detection v2.1</div>
              <h1 className="mt-6 text-[40px] md:text-[48px] font-bold leading-[1.1]">Stop fraud in real time,<br/>with AI that learns.</h1>
              <p className="mt-4 text-[14px] leading-6 text-white/50 max-w-[480px]">Monitor transactions, detect anomalies, and block fraudulent activity instantly using our self-learning AI. Protect your customers and revenue without adding friction to the checkout experience.</p>
              <div className="mt-8 flex gap-4">
                <button onClick={()=>setShowLogin(true)} className="px-7 py-3 rounded-full bg-[#5EE1FF] text-black font-semibold text-[14px] hover:bg-[#7FE8FF] transition">Start free trial →</button>
                <button onClick={()=>setShowDemo(true)} className="px-7 py-3 rounded-full border border-cyan-400/30 bg-[#0B1C2E]/50 text-cyan-300 text-[14px]">Try Live Demo</button>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-[#0F1C2E]/80 backdrop-blur border border-white/[0.08] rounded-2xl p-5 flex gap-4"><Shield className="text-cyan-300" /><div><p className="text-[15px] font-semibold">Fraud Shield - AI Protection Active</p><p className="text-[12px] text-white/40 mt-1">Monitoring live • No threats detected</p></div></div>
              <div className="bg-[#0F1C2E]/60 backdrop-blur border border-white/[0.08] rounded-2xl p-5 flex gap-4"><CreditCard className="text-cyan-300" /><div><p className="text-[15px] font-semibold">Card Security</p><p className="text-[12px] text-white/40 mt-1">3D Secure enabled • 128-bit encryption</p></div></div>
              <div className="bg-[#0F1C2E]/60 backdrop-blur border border-cyan-400/20 rounded-2xl p-5 flex gap-4"><Brain className="text-cyan-300" /><div><p className="text-[15px] font-semibold">AI Brain - 1,247 blocked today</p><p className="text-[12px] text-white/40 mt-1">+12% vs yesterday • Confidence 98.4%</p></div></div>
            </div>
          </section>

          <div className="relative z-10 border-t border-white/[0.05] py-8 flex justify-center">
            <button onClick={()=>setShowDemo(true)} className="px-8 py-3 rounded-full border border-cyan-400/40 bg-[#0B1C2E]/50 text-cyan-300 text-[14px] font-medium shadow-[0_0_20px_rgba(94,225,255,0.15)]">Click Here to Open Fraud Checker Card →</button>
          </div>
        </>
      ) : (
        <section className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 pt-10">
          <h2 className="text-3xl font-bold">Welcome {email.split('@')[0]}! 👋</h2>
          <p className="text-cyan-400 text-sm mt-2">Premium Plan Active</p>
        </section>
      )}

      {/* LOGIN MODAL - NEW ADD */}
      {showLogin && (
        <div className="fixed inset-0 z-[80] bg-black/70 backdrop-blur flex items-center justify-center p-4">
          <div className="bg-[#0B1220] border border-white/10 rounded-2xl p-6 w-full max-w-sm">
            <h3 className="text-xl font-bold mb-4">Login to RiskGuard AI</h3>
            <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter your Email" className="w-full bg-black/30 border border-white/10 rounded-lg p-3 mb-3 text-sm text-white outline-none" />
            <input type="password" placeholder="Password" className="w-full bg-black/30 border border-white/10 rounded-lg p-3 mb-4 text-sm text-white outline-none" />
            <button onClick={handleLogin} className="w-full py-3 bg-white text-black rounded-full font-semibold text-sm">Login & Continue</button>
            <button onClick={()=>setShowLogin(false)} className="w-full mt-2 py-2 text-sm text-white/50">Cancel</button>
          </div>
        </div>
      )}

      {/* OLD Transaction Fraud Checker SAME - NO CHANGE */}
      {showDemo && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative bg-[#0F172A] border-2 border-white/[0.12] rounded-[28px] p-8 w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-[0_25px_80px_rgba(0,0,0,0.8)]">
            <button onClick={()=>setShowDemo(false)} className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"><X size={16}/></button>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            <div className="inline-flex px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-bold tracking-widest text-cyan-300">● LIVE DEMO - MODAL</div>
            <h3 className="text-[24px] font-bold mt-3">Transaction Fraud Checker</h3>
            <p className="text-[11px] text-white/40 mt-1 font-mono">Flow: START → Collect → Preprocess → AI Model → Risk Score → Decision → END</p>
            <div className="grid md:grid-cols-3 gap-5 mt-8">
              <div className="bg-[#060A18] border border-white/10 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-4"><div className="w-7 h-7 rounded-full bg-white text-black text-xs flex items-center justify-center font-bold">1</div><span className="text-sm font-bold">Enter Transaction</span></div>
                <div className="space-y-3">
                  <div><label className="text-[10px] text-white/40 uppercase">Amount (USD)</label><input value={amount} onChange={e=>setAmount(e.target.value)} className="w-full mt-1 bg-[#10182E] border border-white/10 rounded-xl p-3 text-sm text-white outline-none" /></div>
                  <div><label className="text-[10px] text-white/40 uppercase">Country</label><select value={country} onChange={e=>setCountry(e.target.value)} className="w-full mt-1 bg-[#10182E] border border-white/10 rounded-xl p-3 text-xs text-white"><option>Same country</option><option>Different country</option><option>High-risk country</option></select></div>
                  <div><label className="text-[10px] text-white/40 uppercase">Card Type</label><select value={card} onChange={e=>setCard(e.target.value)} className="w-full mt-1 bg-[#10182E] border border-white/10 rounded-xl p-3 text-xs text-white"><option>Visa</option><option>MasterCard</option><option>Amex</option><option>Unknown</option></select></div>
                  <div><label className="text-[10px] text-white/40 uppercase">Time</label><select value={time} onChange={e=>setTime(e.target.value)} className="w-full mt-1 bg-[#10182E] border border-white/10 rounded-xl p-3 text-xs text-white"><option>Normal hours</option><option>3 AM (Suspicious)</option><option>Multiple in 1 min</option></select></div>
                  <div><label className="text-[10px] text-white/40 uppercase">Device</label><select value={device} onChange={e=>setDevice(e.target.value)} className="w-full mt-1 bg-[#10182E] border border-white/10 rounded-xl p-3 text-xs text-white"><option>Known device</option><option>New device</option><option>VPN / Proxy</option></select></div>
                  <div><label className="text-[10px] text-white/40 uppercase">Merchant</label><select value={merchant} onChange={e=>setMerchant(e.target.value)} className="w-full mt-1 bg-[#10182E] border border-white/10 rounded-xl p-3 text-xs text-white"><option>Trusted</option><option>New merchant</option><option>Blacklisted</option></select></div>
                </div>
              </div>
              <div className="bg-[#060A18] border border-white/10 rounded-2xl p-4 flex flex-col">
                <div className="flex items-center gap-2 mb-4"><div className="w-7 h-7 rounded-full bg-white text-black text-xs flex items-center justify-center font-bold">2</div><span className="text-sm font-bold">AI Processing</span></div>
                <div className="bg-[#10182E] border border-white/5 rounded-xl p-4 space-y-3 flex-1">
                  <div className="text-[11px] space-y-3">
                    <div className="flex justify-between"><span className="text-white/40">Collect Data</span><span className="text-green-400">✓</span></div>
                    <div className="text-[10px] text-white/50 bg-black/30 p-2.5 rounded-lg border border-white/5">• ${amount} • {country} • {card} • {device}</div>
                    <div className="flex justify-between"><span className="text-white/40">Preprocessing</span><span className="text-green-400">✓</span></div>
                    <div className="flex justify-between"><span className="text-white/40">AI/ML Model</span><span className="text-green-400">✓</span></div>
                    <div className="flex justify-between"><span className="text-white/40">Risk Score</span><span className="text-green-400">✓</span></div>
                  </div>
                </div>
                <button onClick={runCheck} className="w-full py-3.5 bg-white text-black rounded-full font-bold text-sm mt-4">Analyze Transaction →</button>
              </div>
              <div className="bg-[#060A18] border border-white/10 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-4"><div className="w-7 h-7 rounded-full bg-white text-black text-xs flex items-center justify-center font-bold">3</div><span className="text-sm font-bold">Decision</span></div>
                {!result? (
                  <div className="bg-[#10182E] border border-dashed border-white/10 rounded-xl p-10 text-center h-[280px] flex flex-col items-center justify-center"><div className="text-3xl mb-2">🔍</div><p className="text-xs text-white/30">Click Analyze to see decision</p></div>
                ) : (
                  <div className={`rounded-xl p-5 border h-[280px] flex flex-col ${result.startsWith('SAFE')?'bg-green-500/10 border-green-500/30':'bg-red-500/10 border-red-500/30'}`}>
                    <div className="text-[10px] tracking-widest text-white/40">RISK SCORE</div>
                    <div className="text-[36px] font-bold leading-none mt-1 text-white">{result.split('|')[1]}<span className="text-[16px] text-white/40">/100</span></div>
                    <div className={`mt-4 py-2.5 rounded-full text-center text-sm font-bold ${result.startsWith('SAFE')?'bg-green-500 text-black':result.startsWith('REVIEW')?'bg-yellow-500 text-black':'bg-red-500 text-white'}`}>{result.split('|')[0]}</div>
                    <div className="mt-3 text-center text-xs font-medium text-white">{result.split('|')[2]}</div>
                    <div className="mt-auto pt-4 border-t border-white/10 text-[11px] space-y-1.5 text-white/40">
                      <div>Amount ${amount}</div>
                      <div>Flow: LOW→APPROVE | HIGH→BLOCK</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
