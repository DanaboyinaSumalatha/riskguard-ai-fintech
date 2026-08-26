import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, CreditCard, Brain, Lock, CheckCircle, BarChart3, LogOut, User } from 'lucide-react';

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState('');

  const handleLogin = () => {
    if(email){ setShowDashboard(true); setShowLogin(false); }
  };

  return (
    <div className="min-h-screen bg-[#050A14] text-white overflow-hidden relative">
      <header className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 font-bold text-xl">
          <Shield className="text-cyan-400" /> RiskGuard AI
        </div>
        <div className="flex gap-3">
          {!showDashboard? (
            <>
              <button onClick={()=>setShowLogin(true)} className="px-4 py-2 rounded-full bg-white/10">Login</button>
              <button onClick={()=>setShowLogin(true)} className="px-5 py-2 rounded-full bg-white text-black font-semibold">Get Started</button>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <span className="text-sm flex gap-2 items-center"><User size={16}/>{email} <span className="bg-cyan-500 text-black text-[10px] px-2 py-0.5 rounded-full font-bold">PRO</span></span>
              <button onClick={()=>setShowDashboard(false)} className="px-4 py-2 rounded-full bg-white/10 flex gap-1 items-center"><LogOut size={14}/> Logout</button>
            </div>
          )}
        </div>
      </header>

      {!showDashboard? (
        <>
          <section className="max-w-7xl mx-auto px-6 pt-10 pb-20 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex gap-2 text-xs px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 mb-4">✨ Now in GA • AI Fraud Detection v2.1</div>
              <h1 className="text-[40px] md:text-[54px] font-bold leading-[1.05] tracking-tight max-w-[580px]">
                Stop fraud in real time,<br />
                with AI that learns.
              </h1>
              <p className="mt-4 text-white/60 max-w-lg">RiskGuard AI detects and prevents fraud across payments, accounts, and onboards — 10x faster, with 99.9% accuracy.</p>
              <div className="mt-6 flex gap-3">
                <button onClick={()=>setShowLogin(true)} className="px-6 py-3 rounded-full bg-white text-black font-semibold">Start free trial →</button>
                <button onClick={()=>document.getElementById('demo')?.scrollIntoView({behavior:'smooth'})} className="px-6 py-3 rounded-full border border-white/20">Book a demo</button>
              </div>
              <div className="mt-8 flex gap-6 text-xs text-white/50">
                <span className="flex gap-1"><CheckCircle size={14}/> SOC 2 Type II</span>
                <span className="flex gap-1"><Shield size={14}/> PCI DSS Compliant</span>
                <span>⚡ 50ms avg latency</span>
              </div>
            </div>

            <div className="relative h-[450px] w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-[30px] blur-2xl" />
              <motion.div animate={{ x: [20, -20, 20], y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-10 right-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 w-48 shadow-2xl">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center mb-3"><Shield /></div>
                <p className="text-sm font-semibold">Fraud Shield</p>
                <p className="text-[11px] text-white/50">AI Protection Active</p>
                <div className="mt-2 text-cyan-400 text-xs">✓ 99.9% Safe</div>
              </motion.div>
              <motion.div animate={{ x: [-20, 20, -20], y: [0, 10, 0] }} transition={{ duration: 7, repeat: Infinity, delay: 1 }} className="absolute top-48 left-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 w-52 shadow-2xl">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center mb-3"><CreditCard /><Lock size={14} className="absolute ml-4 mt-4"/></div>
                <p className="text-sm font-semibold">Card Security</p>
                <p className="text-[11px] text-white/50">End-to-end encrypted</p>
                <div className="mt-2 flex gap-1">
                  <div className="h-1 w-8 bg-cyan-400 rounded-full" /><div className="h-1 w-4 bg-white/20 rounded-full" />
                </div>
              </motion.div>
              <motion.div animate={{ x: [15, -15, 15], y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 2 }} className="absolute bottom-10 right-20 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 w-48 shadow-2xl">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-violet-400 to-cyan-600 flex items-center justify-center mb-3"><Brain /></div>
                <p className="text-sm font-semibold">AI Brain</p>
                <div className="flex gap-1 mt-1"><BarChart3 size={14} className="text-cyan-400"/> <span className="text-[11px]">1,247 blocked today</span></div>
              </motion.div>
              {[...Array(8)].map((_, i) => (
                <motion.div key={i} className="absolute h-[2px] w-24 bg-gradient-to-l from-cyan-400 to-transparent" style={{ top: `${20 + i*9}%`, right: -20 }} animate={{ x: [-50, -500], opacity: [0,1,0] }} transition={{ duration: 3, repeat: Infinity, delay: i*0.4 }} />
              ))}
            </div>
          </section>

{/* NEW PRO DEMO - ALL OPTIONS VISIBLE + DETAILED AI */}
<section id="demo" className="max-w-5xl mx-auto p-6">
  <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 backdrop-blur">
    <h3 className="text-xl font-semibold">Live Demo - Transaction Fraud Checker</h3>
    <p className="text-xs text-white/40 mb-5">Real-time AI analysis • 6 parameters • Full risk breakdown</p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="text-[11px] text-white/50">Amount (USD)</label>
        <input value={amount} onChange={e=>setAmount(e.target.value)} placeholder="Enter amount - ex: 3500" className="w-full mt-1 bg-black/40 border border-cyan-500/20 rounded-lg p-3 focus:border-cyan-400 outline-none" />
        <div className="grid grid-cols-3 gap-2 mt-3 text-[11px]">
          {['Same country','Different country','High-risk country'].map(o=><div key={o} className="bg-white/5 border border-white/10 rounded-lg p-2 text-center">{o}</div>)}
        </div>
        <p className="text-[10px] text-white/30 mt-1">Country options ↑</p>

        <div className="grid grid-cols-4 gap-2 mt-4 text-[11px]">
          {['Visa','MasterCard','Amex','Unknown'].map(o=><div key={o} className="bg-white/5 border border-white/10 rounded-lg p-2 text-center">{o}</div>)}
        </div>
        <p className="text-[10px] text-white/30 mt-1">Card Type options ↑</p>

        <div className="grid grid-cols-3 gap-2 mt-4 text-[11px]">
          {['Normal hours','3 AM (Suspicious)','Multiple in 1 min'].map(o=><div key={o} className="bg-white/5 border border-white/10 rounded-lg p-2 text-center">{o}</div>)}
        </div>
        <p className="text-[10px] text-white/30 mt-1">Transaction Time options ↑</p>

        <div className="grid grid-cols-3 gap-2 mt-4 text-[11px]">
          {['Known device','New device','VPN / Proxy'].map(o=><div key={o} className="bg-white/5 border border-white/10 rounded-lg p-2 text-center">{o}</div>)}
        </div>
        <p className="text-[10px] text-white/30 mt-1">Device options ↑</p>

        <div className="grid grid-cols-3 gap-2 mt-4 text-[11px]">
          {['Trusted','New merchant','Blacklisted'].map(o=><div key={o} className="bg-white/5 border border-white/10 rounded-lg p-2 text-center">{o}</div>)}
        </div>
        <p className="text-[10px] text-white/30 mt-1">Merchant options ↑</p>
      </div>

      <div>
        <button onClick={()=>{
          const v=parseFloat(amount)||0;
          if(v==0) setResult('Enter amount');
          else if(v>2000) setResult(`BLOCKED|High risk 89/100|Amount: $${v} > $2000 (Risk +40%)|Time: 3 AM Suspicious (Risk +25%)|Device: VPN/Proxy (Risk +15%)|Merchant: Blacklisted (Risk +20%)|Country: High-risk (Risk +10%)|Action: Transaction BLOCKED & Card Frozen`);
          else setResult(`SAFE|Low risk 12/100|Amount: $${v} Normal (Safe)|Time: Normal hours (Safe)|Device: Known device (Safe)|Merchant: Trusted (Safe)|Country: Same country (Safe)|Action: Approved - Payment Successful`);
        }} className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold">Analyze Transaction → Run AI Check</button>

        {result && (
          <div className={`mt-4 p-4 rounded-xl border text-sm ${result.includes('BLOCKED')? 'bg-red-500/10 border-red-500/20' : 'bg-green-500/10 border-green-500/20'}`}>
            {result.split('|').map((line,i)=>(
              <div key={i} className={`${i==0? 'text-lg font-bold mb-2' : 'text-xs py-1 border-b border-white/5'} ${i==0 && result.includes('BLOCKED')? 'text-red-300' : i==0? 'text-green-300' : 'text-white/70'}`}>
                {i==0? (result.includes('BLOCKED')? '🚫 '+line : '✅ '+line) : '• '+line}
              </div>
            ))}
          </div>
        )}

        <div className="mt-4 bg-black/30 border border-white/10 rounded-lg p-3 text-[11px] text-white/50">
          <p className="font-semibold text-white/70 mb-1">How AI Decides:</p>
          <p>✓ Amount {'>'} $2000 = High risk</p>
          <p>✓ 3AM + VPN + Blacklisted = Auto BLOCK</p>
          <p>✓ Normal + Known + Trusted = Auto SAFE</p>
        </div>
      </div>
    </div>
  </div>
</section>

        </>
      ) : (
        <section className="max-w-6xl mx-auto p-6">
          <h2 className="text-3xl font-bold">Welcome {email.split('@')[0]}! 👋</h2>
          <p className="text-cyan-400 text-sm mt-1">Premium Plan Active - Unlimited Protection</p>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4"><p className="text-xs text-white/50">Transactions Protected</p><p className="text-2xl font-bold">$2.4B+</p></div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4"><p className="text-xs text-white/50">Frauds Blocked Today</p><p className="text-2xl font-bold">1,247</p></div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4"><p className="text-xs text-white/50">Detection Accuracy</p><p className="text-2xl font-bold">99.97%</p></div>
          </div>
          <div className="mt-6 bg-white/5 border border-white/10 rounded-xl p-4">
            <p className="text-sm mb-3">Frauds Blocked - Last 6 Months</p>
            <div className="flex items-end gap-2 h-24">
              {[400,650,800,520,1247,980].map((v,i)=><div key={i} className="flex-1 bg-gradient-to-t from-cyan-500 to-blue-400 rounded-t" style={{height: `${v/13}%`}} />)}
            </div>
            <div className="flex justify-between text-[10px] text-white/40 mt-1"><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span></div>
          </div>
          <div className="mt-4 bg-green-500/10 border border-green-500/20 rounded-xl p-3 text-sm text-green-300">✓ Payment Successful - Invoice sent to {email}</div>
        </section>
      )}

      {showLogin && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur flex items-center justify-center p-4 z-50">
          <div className="bg-[#0B1220] border border-white/10 rounded-2xl p-6 w-full max-w-sm">
            <h3 className="text-xl font-bold mb-4">Login to RiskGuard AI</h3>
            <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email - suma@gmail.com" className="w-full bg-black/30 border border-white/10 rounded-lg p-3 mb-3" />
            <input type="password" placeholder="Password" className="w-full bg-black/30 border border-white/10 rounded-lg p-3 mb-4" />
            <button onClick={handleLogin} className="w-full py-3 bg-white text-black rounded-full font-semibold">Login & Continue</button>
            <button onClick={()=>setShowLogin(false)} className="w-full mt-2 py-2 text-sm text-white/50">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
