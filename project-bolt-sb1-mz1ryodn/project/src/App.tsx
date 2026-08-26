import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, AlertTriangle, Globe2, Zap, TrendingUp, Lock, ArrowRight, CheckCircle2, XCircle, DollarSign, MapPin, Smartphone, Clock, CreditCard, Activity, LogOut, User, BarChart3 } from 'lucide-react';
import SmoothScroll from '@/components/cinematic/SmoothScroll';
import FilmOverlay from '@/components/cinematic/FilmOverlay';
import LetterReveal from '@/components/cinematic/LetterReveal';
import TiltCard from '@/components/cinematic/TiltCard';
import Reveal from '@/components/cinematic/Reveal';

type FraudResult = { isFraud: boolean; riskScore: number; status: string; explanation: string; factors: { label: string; flag: boolean }[]; };

function App() {
  const [view, setView] = useState('home');
  const [showLogin, setShowLogin] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [paymentDone, setPaymentDone] = useState(false);

  const chartData = [ {month:'Jan', frauds:400}, {month:'Feb', frauds:650}, {month:'Mar', frauds:800}, {month:'Apr', frauds:520}, {month:'May', frauds:1247}, {month:'Jun', frauds:980} ];

  if (view === 'dashboard') {
    return (
      <div className="relative min-h-screen bg-black text-white">
        <SmoothScroll /><FilmOverlay />
        <div className="relative z-10 max-w-6xl mx-auto p-6 pt-24">
          <div className="flex justify-between items-center mb-8">
            <button onClick={() => setView('home')} className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black">← Back to Home</button>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm"><User className="h-4 w-4"/>{userEmail || 'Sumalatha'} {paymentDone && <span className="bg-green-500 text-black text-xs px-2 py-0.5 rounded-full">PRO</span>}</div>
              <button onClick={() => {setIsLoggedIn(false); setUserEmail(''); setView('home')}} className="bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm flex items-center gap-1"><LogOut className="h-4 w-4"/>Logout</button>
            </div>
          </div>

          <h1 className="text-4xl font-bold mb-2">Welcome {isLoggedIn? userEmail.split('@')[0] : 'Sumalatha'}! 👋</h1>
          <p className="text-neutral-400 mb-8">{paymentDone? 'Premium Plan Active - Unlimited Protection' : 'Free Trial - Upgrade to Premium for full protection'}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6"><p className="text-sm text-neutral-400">Transactions Protected</p><h2 className="text-3xl font-bold mt-2">$2.4B+</h2><p className="text-xs text-green-400 mt-2">+12% this month</p></div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6"><p className="text-sm text-neutral-400">Frauds Blocked Today</p><h2 className="text-3xl font-bold mt-2 text-red-400">1,247</h2></div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6"><p className="text-sm text-neutral-400">Detection Accuracy</p><h2 className="text-3xl font-bold mt-2 text-green-400">99.97%</h2></div>
          </div>

          {/* CHART */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 mb-8">
            <h3 className="font-bold mb-6 flex items-center gap-2"><BarChart3 className="h-5 w-5 text-blue-400"/>Frauds Blocked - Last 6 Months</h3>
            <div className="flex items-end gap-3 h-40">
              {chartData.map((d) => (<div key={d.month} className="flex-1 flex flex-col items-center gap-2"><div className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg transition-all" style={{height: `${(d.frauds/1300)*100}%`, minHeight:'20px'}}></div><span className="text-xs text-neutral-400">{d.month}</span><span className="text-xs font-bold">{d.frauds}</span></div>))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6">
              <h3 className="font-bold mb-4">Recent Activity</h3>
              <div className="space-y-3"><div className="flex justify-between p-3 bg-green-500/10 rounded-xl"><span>$120 - John Doe</span><span className="text-green-400">SAFE</span></div><div className="flex justify-between p-3 bg-red-500/10 rounded-xl"><span>$2,499 - Unknown</span><span className="text-red-400">BLOCKED</span></div><div className="flex justify-between p-3 bg-green-500/10 rounded-xl"><span>$89 - Sarah</span><span className="text-green-400">SAFE</span></div></div>
            </div>
            <div className="rounded-2xl border border-blue-500/30 bg-gradient-to-b from-blue-950/30 to-black/50 p-6">
              <h3 className="font-bold mb-2">{paymentDone? 'Premium Active ✓' : 'Upgrade to Premium'}</h3>
              <p className="text-sm text-neutral-400 mb-4">{paymentDone? 'You have unlimited fraud checks, API access, and priority support.' : 'Get unlimited checks, API keys, and 24/7 support for $29/mo'}</p>
              {!paymentDone && <button onClick={() => setShowPayment(true)} className="w-full bg-blue-600 py-3 rounded-xl font-semibold flex items-center justify-center gap-2"><CreditCard className="h-4 w-4"/>Pay $29 - Unlock Premium</button>}
              {paymentDone && <div className="bg-green-500/20 border border-green-500/30 p-3 rounded-xl text-center text-green-400 text-sm">✓ Payment Successful - Invoice sent to {userEmail}</div>}
            </div>
          </div>
        </div>

        {/* Payment Modal */}
        {showPayment && (
          <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur flex items-center justify-center p-6">
            <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 w-full max-w-md">
              <h2 className="text-xl font-bold mb-4">Secure Payment</h2>
              <div className="bg-white/5 p-4 rounded-xl mb-4 text-sm"><p>Plan: Premium - $29/month</p><p className="text-neutral-400">Includes API, unlimited checks</p></div>
              <input placeholder="Card Number - 4242 4242 4242 4242" className="w-full bg-black border border-white/10 rounded-xl p-3 mb-3 text-white" defaultValue="4242 4242 4242 4242"/>
              <div className="grid grid-cols-2 gap-3 mb-4"><input placeholder="MM/YY" className="bg-black border border-white/10 rounded-xl p-3" defaultValue="12/28"/><input placeholder="CVV" className="bg-black border border-white/10 rounded-xl p-3" defaultValue="123"/></div>
              <button onClick={() => {setPaymentDone(true); setShowPayment(false);}} className="w-full bg-blue-600 py-3 rounded-xl font-bold">Pay $29 Now</button>
              <button onClick={() => setShowPayment(false)} className="w-full mt-3 text-sm text-neutral-500">Cancel</button>
              <p className="text-xs text-neutral-500 mt-3 text-center">Test Mode - Powered by Stripe Mock</p>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="relative min-h-screen bg-black text-white">
      <SmoothScroll /><FilmOverlay />
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden"><div className="absolute top-0 left-0 h-[60vh] w-[60vh] rounded-full blur-[120px]" style={{ background: 'radial-gradient(circle, rgba(30,64,175,0.35), transparent 70%)' }} /><div className="absolute bottom-0 right-0 h-[70vh] w-[70vh] rounded-full blur-[140px]" style={{ background: 'radial-gradient(circle, rgba(127,29,29,0.3), transparent 70%)' }} /></div>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl"><div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"><div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('home')}><ShieldCheck className="h-6 w-6 text-blue-500" /><span className="text-lg font-bold">RiskGuard AI</span></div><div className="flex gap-3">{isLoggedIn? (<button onClick={() => setView('dashboard')} className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black">Dashboard</button>) : (<><button onClick={() => setShowLogin(true)} className="text-sm text-neutral-400 hover:text-white">Login</button><button onClick={() => setShowLogin(true)} className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black">Get Started</button></>)}</div></div></nav>
      <section className="relative z-10 flex min-h-screen items-center justify-center px-6 pt-20"><div className="mx-auto max-w-7xl text-center"><motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} className="relative mx-auto mb-8 h-64 w-64"><Globe2 className="h-full w-full text-blue-500/40" /></motion.div><div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-neutral-300"><span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" /></span>Real-time fraud detection engine</div><h1 className="font-bold leading-[0.9] tracking-tighter text-white text-6xl"><LetterReveal text="RiskGuard AI" delay={0.5} /></h1><p className="mx-auto mt-8 max-w-2xl text-lg text-neutral-400">AI-powered transaction analysis that detects fraudulent payments in milliseconds.</p><div className="mt-10 flex flex-wrap items-center justify-center gap-4"><button onClick={() => setShowLogin(true)} className="group flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white">Start Free Trial<ArrowRight className="h-4 w-4" /></button><button onClick={() => document.getElementById('demo-section')?.scrollIntoView({behavior:'smooth'})} className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white">Watch Demo</button></div></div></section>
      <section className="relative z-10 px-6 py-24"><div className="mx-auto max-w-7xl"><h2 className="mb-12 text-center text-3xl font-bold">Trusted by leaders worldwide</h2><div className="grid grid-cols-1 gap-6 md:grid-cols-3">{[{ icon: TrendingUp, value: '$2.4B+', label: 'Transactions Protected' }, { icon: Zap, value: '99.97%', label: 'Detection Accuracy' }, { icon: Activity, value: '<50ms', label: 'Response Time' }].map((stat) => (<div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-8"><stat.icon className="h-7 w-7 text-blue-400 mb-4" /><div className="text-4xl font-bold">{stat.value}</div><div className="text-lg font-medium mt-2">{stat.label}</div></div>))}</div></div></section>
      <TransactionChecker />
      <footer className="relative z-10 border-t border-white/5 px-6 py-12 text-center"><p className="text-sm text-neutral-500">RiskGuard AI - Securing the future of digital payments.</p></footer>

      {/* LOGIN MODAL */}
      {showLogin && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur flex items-center justify-center p-6">
          <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-1">Welcome Back</h2><p className="text-sm text-neutral-400 mb-6">Login to access your dashboard</p>
            <input value={userEmail} onChange={(e)=>setUserEmail(e.target.value)} placeholder="Email - sumalatha@gmail.com" className="w-full bg-black border border-white/10 rounded-xl p-3 mb-3 text-white"/>
            <input placeholder="Password" type="password" className="w-full bg-black border border-white/10 rounded-xl p-3 mb-4 text-white" defaultValue="password123"/>
            <button onClick={() => { if(userEmail.includes('@')) {setIsLoggedIn(true); setShowLogin(false); setView('dashboard')} else {alert('Please enter valid email')}}} className="w-full bg-white text-black py-3 rounded-xl font-bold">Login & Continue</button>
            <button onClick={() => setShowLogin(false)} className="w-full mt-3 text-sm text-neutral-500">Cancel</button>
            <p className="text-xs text-neutral-500 mt-4 text-center">Real login - saves email in state, no backend needed for demo</p>
          </div>
        </div>
      )}
    </div>
  );
}

function TransactionChecker() {
  const [amount, setAmount] = useState(''); const [location, setLocation] = useState('same'); const [device, setDevice] = useState('trusted'); const [time, setTime] = useState('daytime'); const [paymentMethod, setPaymentMethod] = useState('card'); const [result, setResult] = useState<FraudResult | null>(null); const [isAnalyzing, setIsAnalyzing] = useState(false);
  function handleSubmit(e: FormEvent) { e.preventDefault(); setIsAnalyzing(true); setResult(null); setTimeout(() => { const amt = parseFloat(amount) || 0; const isDifferentCountry = location === 'different'; const isFraud = amt > 50000 || isDifferentCountry; const factors = [{ label: `Amount: ${amt}`, flag: amt > 50000 }, { label: location === 'same'? 'Location: Same country' : 'Location: Different country', flag: isDifferentCountry }, { label: device === 'trusted'? 'Device: Trusted' : 'Device: Unrecognized', flag: device === 'unknown' }, { label: time === 'daytime'? 'Time: Normal hours' : 'Time: Unusual hour', flag: time === 'nighttime' }, { label: paymentMethod === 'card'? 'Payment: Verified card' : 'Payment: Unverified', flag: paymentMethod!== 'card' }]; const flaggedCount = factors.filter((f) => f.flag).length; const riskScore = isFraud? Math.min(95, 75 + flaggedCount * 5) : Math.min(30, 5 + flaggedCount * 8); const explanation = isFraud? `Flagged as fraud. Amount ${amt} exceeds threshold or different country detected.` : `Legitimate transaction. Amount ${amt} is normal.`; setResult({ isFraud, riskScore, status: isFraud? 'FRAUD DETECTED' : 'TRANSACTION SAFE', explanation, factors }); setIsAnalyzing(false); }, 1600); }
  const inputClass = 'w-full rounded-xl border border-white/10 bg-black/30 py-3 px-4 text-white outline-none'; const labelClass = 'mb-2 flex items-center gap-2 text-sm font-medium text-neutral-300';
  return (
    <section id="demo-section" className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-6xl"><div className="mb-12 text-center"><span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-400"><Lock className="h-4 w-4" />Live Demo</span><h2 className="text-4xl font-bold">Transaction Fraud Checker</h2></div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-7"><form onSubmit={handleSubmit} className="space-y-5"><div><label className={labelClass}><DollarSign className="h-4 w-4 text-blue-400" />Amount (USD)</label><input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0.00" required className={inputClass} /></div><div><label className={labelClass}><MapPin className="h-4 w-4 text-blue-400" />Location</label><select value={location} onChange={(e) => setLocation(e.target.value)} className={inputClass}><option value="same">Same country as user</option><option value="different">Different country</option></select></div><div><label className={labelClass}><Smartphone className="h-4 w-4 text-blue-400" />Device</label><select value={device} onChange={(e) => setDevice(e.target.value)} className={inputClass}><option value="trusted">Trusted device</option><option value="unknown">Unrecognized device</option></select></div><div><label className={labelClass}><Clock className="h-4 w-4 text-blue-400" />Time</label><select value={time} onChange={(e) => setTime(e.target.value)} className={inputClass}><option value="daytime">Daytime</option><option value="nighttime">Nighttime</option></select></div><div><label className={labelClass}><CreditCard className="h-4 w-4 text-blue-400" />Payment</label><select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} className={inputClass}><option value="card">Credit Card (verified)</option><option value="wire">Wire Transfer</option></select></div><button type="submit" disabled={isAnalyzing} className="w-full rounded-xl bg-blue-600 py-3.5 font-semibold text-white">{isAnalyzing? 'Analyzing...' : 'Analyze Transaction'}</button></form></div>
          <div>{result? (<div className={`rounded-3xl border p-7 ${result.isFraud? 'border-red-500/50 bg-red-950/40' : 'border-green-500/30 bg-green-950/20'}`}><h3 className={`text-2xl font-bold ${result.isFraud? 'text-red-400' : 'text-green-400'}`}>{result.status}</h3><div className="text-4xl font-bold mt-4">{result.riskScore}/100</div><p className="mt-4 text-sm text-neutral-300">{result.explanation}</p></div>) : (<div className="flex h-full min-h-[400px] flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 p-8 text-center"><ShieldCheck className="h-8 w-8 text-neutral-500 mb-4" /><p className="text-neutral-400">Fill details and click Analyze</p></div>)}</div>
        </div>
      </div>
    </section>
  );
}
export default App;
