import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, CreditCard, Brain, Lock, CheckCircle, BarChart3, LogOut, User } from 'lucide-react';

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState('');
  const [country, setCountry] = useState('Same country');
  const [card, setCard] = useState('Visa');
  const [time, setTime] = useState('Normal hours');
  const [device, setDevice] = useState('Known device');
  const [merchant, setMerchant] = useState('Trusted');
  const [activeStep, setActiveStep] = useState('');
  const [analyzing, setAnalyzing] = useState(false);

  const handleLogin = () => { if(email){ setShowDashboard(true); setShowLogin(false); } };

  const stepsList = [
    {id:'START', label:'START'},
    {id:'ENTER', label:'Enter Transaction'},
    {id:'COLLECT', label:'Collect Data: Amount, Location, Device, Time'},
    {id:'PREPROCESS', label:'Data Preprocessing'},
    {id:'MODEL', label:'Fraud Detection AI/ML Model'},
    {id:'SCORE', label:'Calculate Risk Score'},
    {id:'DECISION', label:'Risk Score?'},
    {id:'LOW', label:'LOW → APPROVE → Transaction Successful'},
    {id:'MED', label:'MEDIUM → REVIEW → Manual Review'},
    {id:'HIGH', label:'HIGH → BLOCK → Alert Merchant'},
    {id:'LOG', label:'Store Audit Log'},
    {id:'END', label:'END'},
  ];

  return (
    <div className="min-h-screen bg-[#050A14] text-white">
      <header className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 font-bold text-xl"><Shield className="text-cyan-400" /> RiskGuard AI</div>
        <div className="flex gap-3">
          {!showDashboard? (<><button onClick={()=>setShowLogin(true)} className="px-4 py-2 rounded-full bg-white/10">Login</button><button onClick={()=>setShowLogin(true)} className="px-5 py-2 rounded-full bg-white text-black font-semibold">Get Started</button></>) : (<div className="flex items-center gap-3"><span className="text-sm flex gap-2 items-center"><User size={16}/>{email} <span className="bg-cyan-500 text-black text-[10px] px-2 py-0.5 rounded-full font-bold">PRO</span></span><button onClick={()=>setShowDashboard(false)} className="px-4 py-2 rounded-full bg-white/10 flex gap-1 items-center"><LogOut size={14}/> Logout</button></div>)}
        </div>
      </header>

      {!showDashboard? (
        <>
          <section className="max-w-7xl mx-auto px-6 pt-10 pb-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex gap-2 text-xs px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 mb-4">✨ Now in GA • AI Fraud Detection v2.1</div>
              <h1 className="text-[40px] md:text-[54px] font-bold leading-[1.05]">Stop fraud in real time,<br/>with AI that learns.</h1>
              <p className="mt-4 text-white/60 max-w-lg">RiskGuard AI detects and prevents fraud across payments, accounts, and onboards — 10x faster, with 99.9% accuracy.</p>
              <div className="mt-6 flex gap-3"><button onClick={()=>setShowLogin(true)} className="px-6 py-3 rounded-full bg-white text-black font-semibold">Start free trial →</button><button onClick={()=>document.getElementById('demo')?.scrollIntoView({behavior:'smooth'})} className="px-6 py-3 rounded-full border border-white/20">Book a demo</button></div>
            </div>
            <div className="relative h-[350px] w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-[30px] blur-2xl" />
              <motion.div animate={{ x: [20, -20, 20] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-10 right-10 bg-white/5 border border-white/10 rounded-2xl p-5 w-48"><Shield className="text-cyan-400 mb-2"/><p className="text-sm font-semibold">Fraud Shield</p><p className="text-[11px] text-white/50">AI Protection Active</p></motion.div>
              <motion.div animate={{ x: [-20, 20, -20] }} transition={{ duration: 7, repeat: Infinity }} className="absolute top-48 left-10 bg-white/5 border border-white/10 rounded-2xl p-5 w-52"><CreditCard className="text-blue-400 mb-2"/><p className="text-sm font-semibold">Card Security</p></motion.div>
              <motion.div animate={{ x: [15, -15, 15] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-10 right-20 bg-white/5 border border-white/10 rounded-2xl p-5 w-48"><Brain className="text-violet-400 mb-2"/><p className="text-sm font-semibold">AI Brain</p><p className="text-[11px]">1,247 blocked today</p></motion.div>
            </div>
          </section>

          <section id="demo" className="max-w-6xl mx-auto p-6">
            <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-semibold">Live Demo - Transaction Fraud Checker</h3>
              <p className="text-xs text-white/40 mb-5">Same flowchart logic - Watch decision live</p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* LEFT INPUTS */}
                <div className="space-y-4">
                  <div><label className="text-[11px] text-white/50">Amount (USD)</label><input value={amount} onChange={e=>setAmount(e.target.value)} placeholder="455" className="w-full mt-1 bg-black/40 border border-cyan-500/20 rounded-lg p-3 outline-none" /></div>
                  <div><p className="text-[11px] text-white/50 mb-2">Country - {country}</p><div className="flex flex-wrap gap-2">{['Same country','Different country','High-risk country'].map(o=><button key={o} onClick={()=>setCountry(o)} className={`px-3 py-2 rounded-full text-[11px] border ${country===o?'bg-cyan-500 text-black border-cyan-500 font-bold':'bg-white/5 border-white/10'}`}>{o}</button>)}</div></div>
                  <div><p className="text-[11px] text-white/50 mb-2">Card Type - {card}</p><div className="flex flex-wrap gap-2">{['Visa','MasterCard','Amex','Unknown'].map(o=><button key={o} onClick={()=>setCard(o)} className={`px-3 py-2 rounded-full text-[11px] border ${card===o?'bg-cyan-500 text-black border-cyan-500 font-bold':'bg-white/5 border-white/10'}`}>{o}</button>)}</div></div>
                  <div><p className="text-[11px] text-white/50 mb-2">Transaction Time - {time}</p><div className="flex flex-wrap gap-2">{['Normal hours','3 AM (Suspicious)','Multiple in 1 min'].map(o=><button key={o} onClick={()=>setTime(o)} className={`px-3 py-2 rounded-full text-[11px] border ${time===o?'bg-cyan-500 text-black border-cyan-500 font-bold':'bg-white/5 border-white/10'}`}>{o}</button>)}</div></div>
                  <div><p className="text-[11px] text-white/50 mb-2">Device - {device}</p><div className="flex flex-wrap gap-2">{['Known device','New device','VPN / Proxy'].map(o=><button key={o} onClick={()=>setDevice(o)} className={`px-3 py-2 rounded-full text-[11px] border ${device===o?'bg-cyan-500 text-black border-cyan-500 font-bold':'bg-white/5 border-white/10'}`}>{o}</button>)}</div></div>
                  <div><p className="text-[11px] text-white/50 mb-2">Merchant - {merchant}</p><div className="flex flex-wrap gap-2">{['Trusted','New merchant','Blacklisted'].map(o=><button key={o} onClick={()=>setMerchant(o)} className={`px-3 py-2 rounded-full text-[11px] border ${merchant===o?'bg-cyan-500 text-black border-cyan-500 font-bold':'bg-white/5 border-white/10'}`}>{o}</button>)}</div></div>

                  <button onClick={async ()=>{
                    const v=parseFloat(amount)||0; if(v===0){setResult('ERROR|Enter amount'); return;}
                    setAnalyzing(true); setResult(''); setActiveStep('');
                    const go = async (id:string, delay=600)=>{ setActiveStep(id); await new Promise(r=>setTimeout(r, delay)); };
                    await go('START',400); await go('ENTER',400); await go('COLLECT',600); await go('PREPROCESS',600); await go('MODEL',800); await go('SCORE',600);
                    let score=0; if(v>3000)score+=40; else if(v>2000)score+=25; if(country==='High-risk country')score+=25; else if(country==='Different country')score+=10; if(card==='Unknown')score+=15; if(time==='3 AM (Suspicious)')score+=20; else if(time==='Multiple in 1 min')score+=35; if(device==='VPN / Proxy')score+=15; else if(device==='New device')score+=5; if(merchant==='Blacklisted')score+=30; else if(merchant==='New merchant')score+=10;
                    await go('DECISION',500);
                    if(score<40) await go('LOW',600); else if(score<70) await go('MED',600); else await go('HIGH',600);
                    await go('LOG',400); await go('END',400);
                    let details=[]; details.push(`Amount $${v} ${v>3000?'+40% CRITICAL':v>2000?'+25% High':'+0% Normal'}`); details.push(`Country: ${country}`); details.push(`Card: ${card}`); details.push(`Time: ${time}`); details.push(`Device: ${device}`); details.push(`Merchant: ${merchant}`);
                    const status=score>=50?'BLOCKED':'SAFE'; setResult(`${status}|Risk Score ${score}/100|${details.join('|')}|DECISION: ${status==='BLOCKED'?'🚫 BLOCKED & Card Frozen':'✅ Approved - Payment Successful'}`); setAnalyzing(false);
                  }} disabled={analyzing} className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold disabled:opacity-50">{analyzing?'Running Flowchart... ⏳':'Analyze Transaction → Run AI Check'}</button>
                </div>

                {/* RIGHT - FLOWCHART VISUAL */}
                <div>
                  <p className="text-[11px] text-cyan-300 mb-3 font-mono">FLOWCHART - LIVE DECISION PATH</p>
                  <div className="space-y-2">
                    {stepsList.map(s=>{
                      const isActive = activeStep===s.id;
                      const isDecision = ['LOW','MED','HIGH'].includes(s.id);
                      return (
                        <div key={s.id} className={`p-2.5 rounded-lg border text-[11px] transition-all duration-300 flex items-center gap-2 ${isActive? 'bg-cyan-500 text-black border-cyan-400 scale-[1.02] shadow-lg shadow-cyan-500/20 font-bold' : isDecision? 'bg-white/[0.03] border-white/10 text-white/50' : 'bg-white/[0.03] border-white/10 text-white/60'} ${s.id==='DECISION'?'rotate-0 border-dashed':''}`}>
                          <div className={`w-2 h-2 rounded-full ${isActive?'bg-black animate-ping':'bg-white/20'}`} />
                          {s.id} → {s.label}
                        </div>
                      )
                    })}
                  </div>

                  {result && (
                    <div className={`mt-4 p-4 rounded-xl border text-sm ${result.includes('BLOCKED')?'bg-red-500/10 border-red-500/30':'bg-green-500/10 border-green-500/30'}`}>
                      {result.split('|').map((line,i)=><div key={i} className={`${i===0?'text-lg font-bold mb-2 pb-2 border-b border-white/10': 'text-[12px] py-1 border-b border-white/5'} ${i===0 && result.includes('BLOCKED')?'text-red-300':'text-white/70'}`}>{i===0?line:`• ${line}`}</div>)}
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

      {showLogin && (<div className="fixed inset-0 bg-black/70 backdrop-blur flex items-center justify-center p-4 z-50"><div className="bg-[#0B1220] border border-white/10 rounded-2xl p-6 w-full max-w-sm"><h3 className="text-xl font-bold mb-4">Login to RiskGuard AI</h3><input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full bg-black/30 border border-white/10 rounded-lg p-3 mb-3" /><input type="password" placeholder="Password" className="w-full bg-black/30 border border-white/10 rounded-lg p-3 mb-4" /><button onClick={handleLogin} className="w-full py-3 bg-white text-black rounded-full font-semibold">Login & Continue</button><button onClick={()=>setShowLogin(false)} className="w-full mt-2 py-2 text-sm text-white/50">Cancel</button></div></div>)}
    </div>
  );
}
