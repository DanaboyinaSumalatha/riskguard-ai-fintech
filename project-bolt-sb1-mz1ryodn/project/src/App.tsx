import React, { useState } from 'react';
import { Shield, Check, Zap, CreditCard, Brain, X, User, LogOut, ArrowRight, Sparkles } from 'lucide-react';

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

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const handleLogin = () => { if(email){ setShowDashboard(true); setShowLogin(false); } };
  const runCheck = () => {
    const v = parseFloat(amount) || 0;
    if(v===0){ setResult('ERROR|0|Enter valid amount'); return; }
    let score = 0;
    if(v>3000) score+=40; else if(v>2000) score+=25;
    if(country==='High-risk country') score+=25; else if(country==='Different country') score+=10;
    if(card==='Unknown') score+=15;
    if(time==='3 AM (Suspicious)') score+=20; else if(time==='Multiple in 1 min') score+=35;
    if(device==='VPN / Proxy') score+=15; else if(device==='New device') score+=5;
    if(merchant==='Blacklisted') score+=30; else if(merchant==='New merchant') score+=10;
    if(score<50) setResult(`SAFE|${score}|Approved - Low Risk`);
    else if(score<80) setResult(`REVIEW|${score}|Manual Review Required`);
    else setResult(`BLOCKED|${score}|High Risk - Blocked`);
  };

  return (
    <div className="min-h-screen bg-[#050A14] text-white antialiased selection:bg-cyan-500/30">
      {/* Background Glows */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-cyan-500/[0.08] blur-[130px] rounded-full"></div>
        <div className="absolute top-[30%] right-[-20%] w-[600px] h-[600px] bg-blue-600/[0.06] blur-[120px] rounded-full"></div>
      </div>

      {/* HEADER - NEAT */}
      <header className="sticky top-0 z-30 backdrop-blur-2xl bg-[#050A14]/70 border-b border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 h-[64px] flex justify-between items-center">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2.5"><div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center"><Shield size={18} className="text-black"/></div><span className="text-[16px] font-semibold tracking-tight">RiskGuard AI</span></div>
            <nav className="hidden md:flex items-center gap-7 text-[13.5px] text-white/60 font-medium">
              <button onClick={()=>go('product')} className="hover:text-white transition">Product</button>
              <button onClick={()=>go('features')} className="hover:text-white transition">Features</button>
              <button onClick={()=>go('pricing')} className="hover:text-white transition">Pricing</button>
              <button onClick={()=>go('security')} className="hover:text-white transition">Security</button>
              <button onClick={()=>go('docs')} className="hover:text-white transition">Docs</button>
            </nav>
          </div>
          <div className="flex items-center gap-2.5">
            {!showDashboard? (
              <>
                <button onClick={()=>setShowLogin(true)} className="px-4 py-2 text-[13.5px] font-medium text-white/70 hover:text-white transition">Login</button>
                <button onClick={()=>setShowLogin(true)} className="px-5 py-2.5 rounded-full bg-white text-black text-[13.5px] font-semibold hover:bg-white/90 transition flex items-center gap-1.5">Get Started <ArrowRight size={14}/></button>
              </>
            ) : (
              <div className="flex items-center gap-2"><span className="text-[12px] bg-white/10 border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-1.5"><User size={12}/>{email}</span><button onClick={()=>{setShowDashboard(false); setEmail('');}} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><LogOut size={12}/></button></div>
            )}
          </div>
        </div>
      </header>

      {/* HERO - NEAT & CENTERED */}
      <section id="product" className="relative z-10 max-w-[1200px] mx-auto px-6 pt-20 pb-16">
        <div className="max-w-[720px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-[12px] font-medium"><span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span> Now in Beta • AI-Powered Fraud Protection <Sparkles size={12} className="text-white/40 ml-1"/></div>
          <h1 className="mt-8 text-[42px] md:text-[64px] font-[700] leading-[0.95] tracking-[-0.03em]">Stop fraud in<br/>real time with AI</h1>
          <p className="mt-5 text-[16px] leading-6 text-white/55 max-w-[520px] mx-auto font-[450]">Monitor transactions, detect anomalies, and protect your users with adaptive AI that learns and evolves to stop fraud before it happens.</p>
          <div className="mt-8 flex justify-center gap-3">
            <button onClick={()=>setShowLogin(true)} className="px-7 py-3 rounded-full bg-white text-black text-[14px] font-semibold hover:bg-white/90 transition">Start Free Trial <ArrowRight size={16} className="inline ml-1"/></button>
            <button onClick={()=>setShowDemo(true)} className="px-7 py-3 rounded-full bg-white/[0.08] border border-white/[0.12] text-[14px] font-medium hover:bg-white/[0.12] transition">See How It Works</button>
          </div>
        </div>

        {/* SHIELD - CLEAN SVG */}
        <div className="mt-16 mx-auto w-[420px] h-[420px] relative flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/20 to-blue-600/20 blur-[80px] rounded-full"></div>
          <div className="relative w-[300px] h-[360px] bg-gradient-to-b from-cyan-300/20 to-blue-900/40 backdrop-blur-xl border border-cyan-200/20 rounded-[40%_40%_45%_45%_/_30%_30%_70%_70%] shadow-[0_0_80px_rgba(34,211,238,0.4),inset_0_1px_0_rgba(255,255,255,0.4)] flex flex-col items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-cyan-400/20 border border-cyan-300/30 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(34,211,238,0.5)]"><Shield size={36} className="text-cyan-200"/></div>
            <div className="px-4 py-1.5 rounded-full bg-black/40 border border-cyan-400/20 text-[10px] tracking-widest text-cyan-200">AI PROTECTED</div>
            <div className="mt-4 flex gap-1.5"><div className="w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div><div className="w-1 h-1 bg-cyan-400/60 rounded-full"></div><div className="w-1 h-1 bg-cyan-400/30 rounded-full"></div></div>
          </div>
        </div>
        <p className="mt-8 text-center text-[10px] tracking-[0.3em] text-white/30 font-medium">3D SHIELD • REAL TIME PROTECTION • 99.9% SECURE</p>

        {/* STATS - NEAT GRID */}
        <div id="features" className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-3 max-w-[900px] mx-auto">
          {[
            { icon: Check, title: "99.9% Accuracy", desc: "Validated detection rate across 50M+ transactions" },
            { icon: Zap, title: "Sub-50ms Detection", desc: "Real-time response without slowing checkout" },
            { icon: Shield, title: "50M+ Protected", desc: "Trusted by 200+ fintech startups globally" },
          ].map((f,i)=>(
            <div key={i} className="group bg-white/[0.04] hover:bg-white/[0.06] border border-white/[0.06] rounded-2xl p-6 transition">
              <div className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center mb-4 group-hover:bg-white/[0.1] transition"><f.icon size={16} className="text-white/80"/></div>
              <h3 className="text-[15px] font-semibold">{f.title}</h3>
              <p className="text-[13px] leading-5 text-white/45 mt-1.5">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* SECURITY CARDS */}
        <div id="security" className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3 max-w-[900px] mx-auto">
          {[
            { title: "Fraud Shield - Active", sub: "Monitoring live • No threats", icon: Shield },
            { title: "Card Security", sub: "3D Secure • 128-bit encryption", icon: CreditCard },
            { title: "AI Brain - 1,247 blocked", sub: "+12% vs yesterday • 98.4% efficiency", icon: Brain },
          ].map((s,i)=>(
            <div key={i} className="bg-[#0B1222]/60 border border-white/[0.05] rounded-2xl p-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/[0.06] flex items-center justify-center"><s.icon size={14}/></div>
              <div><p className="text-[13px] font-medium">{s.title}</p><p className="text-[11px] text-white/40">{s.sub}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING - NEAT */}
      <section id="pricing" className="relative z-10 max-w-[900px] mx-auto px-6 py-20 border-t border-white/[0.06]">
        <h2 className="text-center text-[28px] font-semibold tracking-tight">Simple pricing, scale as you grow</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-3">
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6"><p className="text-[13px] text-white/50">Starter</p><p className="text-[28px] font-semibold mt-2">$0<span className="text-[14px] font-normal text-white/40">/mo</span></p><p className="text-[13px] text-white/40 mt-3">1k transactions, basic AI</p></div>
          <div className="bg-white text-black rounded-2xl p-6 shadow-[0_0_40px_rgba(255,255,255,0.15)]"><p className="text-[13px] text-black/60">Pro • Most Popular</p><p className="text-[28px] font-semibold mt-2">$99<span className="text-[14px] font-normal text-black/50">/mo</span></p><p className="text-[13px] text-black/60 mt-3">50k transactions, full AI + dashboard</p></div>
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6"><p className="text-[13px] text-white/50">Enterprise</p><p className="text-[28px] font-semibold mt-2">Custom</p><p className="text-[13px] text-white/40 mt-3">Unlimited, SOC2, dedicated support</p></div>
        </div>
      </section>

      <footer id="docs" className="border-t border-white/[0.06] py-10 text-center text-[12px] text-white/30">Trusted by 200+ fintech startups • SOC 2 compliant • ISO 27001 certified • © 2026 RiskGuard AI</footer>

      {/* POPUPS - NEAT */}
      {showLogin && (
        <div className="fixed inset-0 z-[999] bg-[#050A14]/80 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="w-full max-w-[380px] bg-[#0F172A] border border-white/10 rounded-[20px] p-7">
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mx-auto mb-4"><Shield size={22} className="text-black"/></div>
            <h3 className="text-[20px] font-semibold text-center">Welcome back</h3><p className="text-[13px] text-white/40 text-center mt-1">Login to RiskGuard AI</p>
            <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email address" className="w-full mt-6 bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 text-[14px] outline-none focus:border-white/20"/>
            <button onClick={handleLogin} className="w-full mt-4 py-3 bg-white text-black rounded-full font-semibold text-[14px]">Continue →</button>
            <button onClick={()=>setShowLogin(false)} className="w-full mt-3 text-[13px] text-white/40">Cancel</button>
          </div>
        </div>
      )}

      {showDemo && (
        <div className="fixed inset-0 z-50 bg-[#050A14]/90 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="relative bg-[#0F172A] border border-white/10 rounded-[20px] p-6 w-full max-w-5xl max-h-[90vh] overflow-y-auto">
            <button onClick={()=>setShowDemo(false)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><X size={14}/></button>
            <h3 className="text-[20px] font-semibold">Transaction Fraud Checker</h3>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white/[0.04] border border-white/[0.06] rounded-2xl p-4 space-y-3">
                <p className="text-[12px] font-semibold text-white/70">INPUT</p>
                <input value={amount} onChange={e=>setAmount(e.target.value)} className="w-full bg-black/30 border border-white/10 rounded-xl p-3 text-sm"/>
                <select value={country} onChange={e=>setCountry(e.target.value)} className="w-full bg-black/30 border border-white/10 rounded-xl p-3 text-xs"><option>Same country</option><option>Different country</option><option>High-risk country</option></select>
                <select value={card} onChange={e=>setCard(e.target.value)} className="w-full bg-black/30 border border-white/10 rounded-xl p-3 text-xs"><option>Visa</option><option>MasterCard</option><option>Unknown</option></select>
                <select value={time} onChange={e=>setTime(e.target.value)} className="w-full bg-black/30 border border-white/10 rounded-xl p-3 text-xs"><option>Normal hours</option><option>3 AM (Suspicious)</option><option>Multiple in 1 min</option></select>
                <select value={device} onChange={e=>setDevice(e.target.value)} className="w-full bg-black/30 border border-white/10 rounded-xl p-3 text-xs"><option>Known device</option><option>New device</option><option>VPN / Proxy</option></select>
                <select value={merchant} onChange={e=>setMerchant(e.target.value)} className="w-full bg-black/30 border border-white/10 rounded-xl p-3 text-xs"><option>Trusted</option><option>New merchant</option><option>Blacklisted</option></select>
              </div>
              <div className="bg-white/[0.04] border border-white/[0.06] rounded-2xl p-4 flex flex-col">
                <p className="text-[12px] font-semibold text-white/70">AI ANALYSIS</p>
                <div className="mt-4 bg-black/30 rounded-xl p-4 text-[11px] text-white/50 space-y-1 flex-1"><div>Amount: ${amount}</div><div>Location: {country}</div><div>Card: {card}</div><div>Time: {time}</div></div>
                <button onClick={runCheck} className="w-full mt-4 py-3 bg-white text-black rounded-full font-semibold text-sm">Analyze Transaction →</button>
              </div>
              <div className="bg-white/[0.04] border border-white/[0.06] rounded-2xl p-4">
                <p className="text-[12px] font-semibold text-white/70">RESULT</p>
                {!result? <div className="mt-10 text-center text-white/20 text-sm">Click Analyze to see result</div> : <div className={`mt-4 rounded-xl p-5 border ${result.startsWith('SAFE')?'bg-emerald-500/10 border-emerald-500/20':'bg-red-500/10 border-red-500/20'}`}><p className="text-[10px] text-white/40">RISK SCORE</p><p className="text-[32px] font-bold mt-1">{result.split('|')[1]}/100</p><p className="mt-3 px-3 py-2 bg-white text-black rounded-full text-center text-[13px] font-semibold">{result.split('|')[0]}</p><p className="mt-3 text-[12px] text-center text-white/60">{result.split('|')[2]}</p></div>}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
