import React, { useState } from 'react';
import { Shield, CreditCard, Brain, LogOut, User } from 'lucide-react';

export default function App() {
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
    if(email){ setShowDashboard(true); setShowLogin(false); }
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
    <div className="min-h-screen bg-[#050A14] text-white">
      {/* HEADER */}
      <header className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 font-bold text-xl"><Shield className="text-cyan-400" /> RiskGuard AI</div>
        <div className="flex gap-3">
          {!showDashboard? (
            <>
              <button onClick={()=>setShowLogin(true)} className="px-4 py-2 rounded-full bg-white/10 text-sm">Login</button>
              <button onClick={()=>setShowLogin(true)} className="px-5 py-2 rounded-full bg-white text-black font-semibold text-sm">Get Started</button>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <span className="text-sm flex gap-2 items-center"><User size={16}/>{email} <span className="bg-cyan-500 text-black text-[10px] px-2 py-0.5 rounded-full font-bold">PRO</span></span>
              <button onClick={()=>setShowDashboard(false)} className="px-4 py-2 rounded-full bg-white/10 flex gap-1 items-center text-sm"><LogOut size={14}/> Logout</button>
            </div>
          )}
        </div>
      </header>

      {!showDashboard? (
        <>
          {/* HERO */}
          <section className="max-w-7xl mx-auto px-6 pt-10 pb-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex gap-2 text-xs px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 mb-4">✨ AI Fraud Detection v2.1</div>
              <h1 className="text-[42px] md:text-[54px] font-bold leading-[1.05]">Stop fraud in real time,<br/>with AI that learns.</h1>
              <p className="mt-4 text-white/60 max-w-lg text-sm">RiskGuard AI detects and prevents fraud across payments, accounts, and onboards — 10x faster, with 99.9% accuracy.</p>
              <div className="mt-6 flex gap-3">
                <button onClick={()=>setShowLogin(true)} className="px-6 py-3 rounded-full bg-white text-black font-semibold text-sm">Start free trial →</button>
                <button onClick={()=>document.getElementById('demo')?.scrollIntoView({behavior:'smooth'})} className="px-6 py-3 rounded-full border border-white/20 text-sm">Book a demo</button>
              </div>
            </div>
            <div className="relative h-[300px]">
              <div className="absolute top-10 right-10 bg-white/5 border border-white/10 rounded-2xl p-5 w-48"><Shield className="text-cyan-400 mb-2"/><p className="text-sm font-semibold">Fraud Shield</p><p className="text-[11px] text-white/50">AI Protection Active</p></div>
              <div className="absolute top-48 left-10 bg-white/5 border border-white/10 rounded-2xl p-5 w-52"><CreditCard className="text-blue-400 mb-2"/><p className="text-sm font-semibold">Card Security</p></div>
              <div className="absolute bottom-10 right-20 bg-white/5 border border-white/10 rounded-2xl p-5 w-48"><Brain className="text-violet-400 mb-2"/><p className="text-sm font-semibold">AI Brain</p><p className="text-[11px]">1,247 blocked today</p></div>
            </div>
          </section>

          {/* LIVE DEMO - CARD STYLE - FIXED */}
          <section id="demo" className="max-w-5xl mx-auto p-6">
            {/* OUTER CARD - Floating */}
            <div className="relative bg-[#0F172A] border-2 border-white/[0.12] rounded-[28px] p-8 shadow-[0_25px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.06)_inset] overflow-hidden">
              {/* Top Glow Line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-cyan-500/10 blur-[70px] rounded-full pointer-events-none"></div>

              <div className="relative">
                <div className="inline-flex px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-bold tracking-widest text-cyan-300">● LIVE DEMO</div>
                <h3 className="text-[24px] font-bold mt-3">Transaction Fraud Checker</h3>
                <p className="text-[11px] text-white/40 mt-1 font-mono">Flow: START → Collect → Preprocess → AI Model → Risk Score → Decision → END</p>
              </div>

              <div className="relative grid md:grid-cols-3 gap-5 mt-8">
                {/* STEP 1 */}
                <div className="bg-[#060A18] border border-white/10 rounded-2xl p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-7 h-7 rounded-full bg-white text-black text-xs flex items-center justify-center font-bold">1</div>
                    <span className="text-sm font-bold">Enter Transaction</span>
                  </div>
                  <div className="space-y-3">
                    <div><label className="text-[10px] text-white/40 uppercase tracking-widest">Amount (USD)</label><input value={amount} onChange={e=>setAmount(e.target.value)} className="w-full mt-1 bg-[#10182E] border border-white/10 rounded-xl p-3 text-sm outline-none focus:border-cyan-400 text-white" /></div>
                    <div><label className="text-[10px] text-white/40 uppercase tracking-widest">Country</label><select value={country} onChange={e=>setCountry(e.target.value)} className="w-full mt-1 bg-[#10182E] border border-white/10 rounded-xl p-3 text-xs outline-none text-white"><option>Same country</option><option>Different country</option><option>High-risk country</option></select></div>
                    <div><label className="text-[10px] text-white/40 uppercase tracking-widest">Card Type</label><select value={card} onChange={e=>setCard(e.target.value)} className="w-full mt-1 bg-[#10182E] border border-white/10 rounded-xl p-3 text-xs outline-none text-white"><option>Visa</option><option>MasterCard</option><option>Amex</option><option>Unknown</option></select></div>
                    <div><label className="text-[10px] text-white/40 uppercase tracking-widest">Time</label><select value={time} onChange={e=>setTime(e.target.value)} className="w-full mt-1 bg-[#10182E] border border-white/10 rounded-xl p-3 text-xs outline-none text-white"><option>Normal hours</option><option>3 AM (Suspicious)</option><option>Multiple in 1 min</option></select></div>
                    <div><label className="text-[10px] text-white/40 uppercase tracking-widest">Device</label><select value={device} onChange={e=>setDevice(e.target.value)} className="w-full mt-1 bg-[#10182E] border border-white/10 rounded-xl p-3 text-xs outline-none text-white"><option>Known device</option><option>New device</option><option>VPN / Proxy</option></select></div>
                    <div><label className="text-[10px] text-white/40 uppercase tracking-widest">Merchant</label><select value={merchant} onChange={e=>setMerchant(e.target.value)} className="w-full mt-1 bg-[#10182E] border border-white/10 rounded-xl p-3 text-xs outline-none text-white"><option>Trusted</option><option>New merchant</option><option>Blacklisted</option></select></div>
                  </div>
                </div>

                {/* STEP 2 */}
                <div className="bg-[#060A18] border border-white/10 rounded-2xl p-4 flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-7 h-7 rounded-full bg-white text-black text-xs flex items-center justify-center font-bold">2</div>
                    <span className="text-sm font-bold">AI Processing</span>
                  </div>
                  <div className="bg-[#10182E] border border-white/5 rounded-xl p-4 space-y-3 flex-1">
                    <div className="text-[11px] space-y-3">
                      <div className="flex justify-between"><span className="text-white/40">Collect Data</span><span className="text-green-400">✓</span></div>
                      <div className="text-[10px] text-white/50 bg-black/30 p-2.5 rounded-lg border border-white/5">• ${amount} • {country} • {card} • {device}</div>
                      <div className="flex justify-between"><span className="text-white/40">Preprocessing</span><span className="text-green-400">✓</span></div>
                      <div className="flex justify-between"><span className="text-white/40">AI/ML Model</span><span className="text-green-400">✓</span></div>
                      <div className="flex justify-between"><span className="text-white/40">Risk Score</span><span className="text-green-400">✓</span></div>
                    </div>
                  </div>
                  <button onClick={runCheck} className="w-full py-3.5 bg-white text-black rounded-full font-bold text-sm mt-4 hover:bg-white/90 transition">Analyze Transaction →</button>
                </div>

                {/* STEP 3 */}
                <div className="bg-[#060A18] border border-white/10 rounded-2xl p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-7 h-7 rounded-full bg-white text-black text-xs flex items-center justify-center font-bold">3</div>
                    <span className="text-sm font-bold">Decision</span>
                  </div>
                  {!result? (
                    <div className="bg-[#10182E] border border-dashed border-white/10 rounded-xl p-10 text-center h-[280px] flex flex-col items-center justify-center">
                      <div className="text-3xl mb-2">🔍</div>
                      <p className="text-xs text-white/30">Click Analyze to see decision</p>
                    </div>
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
          </section>
        </>
      ) : (
        <section className="max-w-6xl mx-auto p-6"><h2 className="text-3xl font-bold">Welcome {email.split('@')[0]}! 👋</h2><p className="text-cyan-400 text-sm mt-1">Premium Plan Active</p></section>
      )}

      {showLogin && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur flex items-center justify-center p-4 z-50">
          <div className="bg-[#0B1220] border border-white/10 rounded-2xl p-6 w-full max-w-sm">
            <h3 className="text-xl font-bold mb-4">Login to RiskGuard AI</h3>
            <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full bg-black/30 border border-white/10 rounded-lg p-3 mb-3 text-sm" />
            <input type="password" placeholder="Password" className="w-full bg-black/30 border border-white/10 rounded-lg p-3 mb-4 text-sm" />
            <button onClick={handleLogin} className="w-full py-3 bg-white text-black rounded-full font-semibold text-sm">Login & Continue</button>
            <button onClick={()=>setShowLogin(false)} className="w-full mt-2 py-2 text-sm text-white/50">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
