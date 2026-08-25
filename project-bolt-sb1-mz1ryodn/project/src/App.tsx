import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  AlertTriangle,
  Globe2,
  Zap,
  TrendingUp,
  Lock,
  ArrowRight,
  CheckCircle2,
  XCircle,
  DollarSign,
  MapPin,
  Smartphone,
  Clock,
  CreditCard,
  Activity,
} from 'lucide-react';
import SmoothScroll from '@/components/cinematic/SmoothScroll';
import FilmOverlay from '@/components/cinematic/FilmOverlay';
import LetterReveal from '@/components/cinematic/LetterReveal';
import TiltCard from '@/components/cinematic/TiltCard';
import Reveal from '@/components/cinematic/Reveal';

type FraudResult = {
  isFraud: boolean;
  riskScore: number;
  status: string;
  explanation: string;
  factors: { label: string; flag: boolean }[];
};

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <SmoothScroll />
      <FilmOverlay />

      {/* Spotlights */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div
          className="absolute top-0 left-0 h-[60vh] w-[60vh] rounded-full blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(30,64,175,0.35), transparent 70%)',
            animation: 'spotlight-a 14s ease-in-out infinite',
          }}
        />
        <div
          className="absolute bottom-0 right-0 h-[70vh] w-[70vh] rounded-full blur-[140px]"
          style={{
            background: 'radial-gradient(circle, rgba(127,29,29,0.3), transparent 70%)',
            animation: 'spotlight-b 18s ease-in-out infinite',
          }}
        />
      </div>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-6 w-6 text-blue-500" />
            <span className="text-lg font-bold tracking-tight">RiskGuard AI</span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            {['Platform', 'Solutions', 'Pricing', 'Resources'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-neutral-400 transition-colors hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
          <button className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition-transform hover:scale-105">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex min-h-screen items-center justify-center px-6 pt-20">
        <div className="mx-auto max-w-7xl text-center">
          {/* Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="relative mx-auto mb-8 h-64 w-64"
          >
            <div className="absolute inset-0 rounded-full border border-blue-500/20" />
            <div
              className="absolute inset-0 rounded-full border border-blue-500/10"
              style={{ transform: 'scale(1.2)' }}
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0"
            >
              <Globe2 className="h-full w-full text-blue-500/40" strokeWidth={0.5} />
            </motion.div>
            <div className="absolute inset-0 rounded-full bg-gradient-radial from-blue-500/10 to-transparent blur-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-neutral-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            Real-time fraud detection engine
          </motion.div>

          <h1 className="font-bold leading-[0.9] tracking-tighter text-white">
            <LetterReveal text="RiskGuard AI" delay={0.5} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mx-auto mt-8 max-w-2xl text-lg text-neutral-400"
          >
            AI-powered transaction analysis that detects fraudulent payments in
            milliseconds. Protect your business with military-grade intelligence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <button className="group flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
              Start Free Trial
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/5">
              Watch Demo
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">
              Trusted by leaders worldwide
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                icon: TrendingUp,
                value: '$2.4B+',
                label: 'Transactions Protected',
                desc: 'Every single day across 190+ countries',
              },
              {
                icon: Zap,
                value: '99.97%',
                label: 'Detection Accuracy',
                desc: 'AI models trained on 10B+ data points',
              },
              {
                icon: Activity,
                value: '<50ms',
                label: 'Response Time',
                desc: 'Real-time scoring at the speed of thought',
              },
            ].map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.15}>
                <TiltCard
                  className="group relative h-full rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-8 transition-colors hover:border-blue-500/30"
                  intensity={8}
                >
                  <div
                    style={{ transform: 'translateZ(40px)' }}
                    className="mb-6 inline-flex rounded-xl bg-blue-500/10 p-3"
                  >
                    <stat.icon className="h-7 w-7 text-blue-400" />
                  </div>
                  <div
                    style={{ transform: 'translateZ(25px)' }}
                    className="mb-2 text-4xl font-bold tracking-tight text-white"
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{ transform: 'translateZ(15px)' }}
                    className="mb-1 text-lg font-medium text-white"
                  >
                    {stat.label}
                  </div>
                  <p className="text-sm text-neutral-400">{stat.desc}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Transaction Checker */}
      <TransactionChecker />

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-blue-500" />
            <span className="font-semibold">RiskGuard AI</span>
          </div>
          <p className="text-sm text-neutral-500">
            Securing the future of digital payments.
          </p>
          <div className="flex items-center gap-6 text-sm text-neutral-400">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Security</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function TransactionChecker() {
  const [amount, setAmount] = useState('');
  const [location, setLocation] = useState('same');
  const [device, setDevice] = useState('trusted');
  const [time, setTime] = useState('daytime');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [result, setResult] = useState<FraudResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsAnalyzing(true);
    setResult(null);

    setTimeout(() => {
      const amt = parseFloat(amount) || 0;
      const isDifferentCountry = location === 'different';
      const isFraud = amt > 50000 || isDifferentCountry;

      const factors: { label: string; flag: boolean }[] = [
        { label: `Amount: ${amt.toLocaleString()}`, flag: amt > 50000 },
        {
          label:
            location === 'same'
              ? 'Location: Same country as user'
              : 'Location: Different country detected',
          flag: isDifferentCountry,
        },
        {
          label:
            device === 'trusted'
              ? 'Device: Known & trusted device'
              : 'Device: Unrecognized device',
          flag: device === 'unknown',
        },
        {
          label:
            time === 'daytime'
              ? 'Time: Within normal activity hours'
              : 'Time: Unusual hour (2:00 AM - 5:00 AM)',
          flag: time === 'nighttime',
        },
        {
          label:
            paymentMethod === 'card'
              ? 'Payment: Verified credit card'
              : 'Payment: Unverified method',
          flag: paymentMethod !== 'card',
        },
      ];

      const flaggedCount = factors.filter((f) => f.flag).length;
      const riskScore = isFraud
        ? Math.min(95, 75 + flaggedCount * 5)
        : Math.min(30, 5 + flaggedCount * 8);

      const explanation = isFraud
        ? `This transaction has been flagged as potentially fraudulent. ${
            amt > 50000
              ? `The transaction amount of ${amt.toLocaleString()} exceeds the high-risk threshold of $50,000.`
              : ''
          } ${
            isDifferentCountry
              ? 'The transaction originates from a different country than the user\'s registered location, which is a strong indicator of account takeover.'
              : ''
          } Combined with ${flaggedCount} risk factor(s), our AI model recommends blocking this transaction pending manual review.`
        : `This transaction appears legitimate. The amount of ${amt.toLocaleString()} is within normal parameters, and the transaction context matches the user's typical behavior patterns. ${
            flaggedCount > 0
              ? `${flaggedCount} minor risk factor(s) were noted but do not warrant blocking.`
              : 'No risk factors were detected.'
          } The transaction has been approved automatically.`;

      setResult({
        isFraud,
        riskScore,
        status: isFraud ? 'FRAUD DETECTED' : 'TRANSACTION SAFE',
        explanation,
        factors,
      });
      setIsAnalyzing(false);
    }, 1600);
  }

  const inputClass =
    'w-full rounded-xl border border-white/10 bg-black/30 py-3 px-4 text-white outline-none transition-colors focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20';
  const labelClass =
    'mb-2 flex items-center gap-2 text-sm font-medium text-neutral-300';

  return (
    <section className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-12 text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-400">
              <Lock className="h-4 w-4" />
              Live Demo
            </span>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Transaction Fraud Checker
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-neutral-400">
              Enter transaction details on the left and our AI engine will
              instantly assess the risk level on the right.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Left: Form */}
          <Reveal>
            <TiltCard
              className="h-full rounded-3xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur-xl md:p-8"
              intensity={6}
            >
              <form onSubmit={handleSubmit} className="space-y-5" style={{ transform: 'translateZ(30px)' }}>
                <div>
                  <label className={labelClass}>
                    <DollarSign className="h-4 w-4 text-blue-400" />
                    Amount (USD)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-neutral-500">
                      $
                    </span>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.00"
                      required
                      min="0"
                      className={`${inputClass} pl-9 text-lg`}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>
                    <MapPin className="h-4 w-4 text-blue-400" />
                    Location
                  </label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className={inputClass}
                  >
                    <option value="same">Same country as user</option>
                    <option value="different">Different country</option>
                  </select>
                </div>

                <div>
                  <label className={labelClass}>
                    <Smartphone className="h-4 w-4 text-blue-400" />
                    Device
                  </label>
                  <select
                    value={device}
                    onChange={(e) => setDevice(e.target.value)}
                    className={inputClass}
                  >
                    <option value="trusted">Trusted / Known device</option>
                    <option value="unknown">Unrecognized device</option>
                  </select>
                </div>

                <div>
                  <label className={labelClass}>
                    <Clock className="h-4 w-4 text-blue-400" />
                    Transaction Time
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className={inputClass}
                  >
                    <option value="daytime">Daytime (9 AM - 10 PM)</option>
                    <option value="nighttime">Nighttime (2 AM - 5 AM)</option>
                  </select>
                </div>

                <div>
                  <label className={labelClass}>
                    <CreditCard className="h-4 w-4 text-blue-400" />
                    Payment Method
                  </label>
                  <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className={inputClass}
                  >
                    <option value="card">Credit Card (verified)</option>
                    <option value="wire">Wire Transfer</option>
                    <option value="crypto">Cryptocurrency</option>
                    <option value="prepaid">Prepaid Card</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isAnalyzing}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 text-base font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] disabled:opacity-50"
                >
                  {isAnalyzing ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white"
                      />
                      Analyzing transaction...
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="h-5 w-5" />
                      Analyze Transaction
                    </>
                  )}
                </button>
              </form>
            </TiltCard>
          </Reveal>

          {/* Right: Result */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <AnimatePresence mode="wait">
              {result ? (
                <motion.div
                  key={result.isFraud ? 'fraud' : 'safe'}
                  initial={{ opacity: 0, x: 40, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
                  className={`overflow-hidden rounded-3xl border p-7 md:p-8 ${
                    result.isFraud
                      ? 'animate-shake animate-alarm border-red-500/50 bg-gradient-to-b from-red-950/40 to-black/60'
                      : 'border-green-500/30 bg-gradient-to-b from-green-950/20 to-black/40'
                  }`}
                >
                  {/* Status header */}
                  <div className="mb-6 flex items-center gap-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                        result.isFraud ? 'bg-red-500/20' : 'bg-green-500/20'
                      }`}
                    >
                      {result.isFraud ? (
                        <AlertTriangle className="h-8 w-8 text-red-400" />
                      ) : (
                        <CheckCircle2 className="h-8 w-8 text-green-400" />
                      )}
                    </motion.div>
                    <div>
                      <h3
                        className={`text-2xl font-bold tracking-tight ${
                          result.isFraud
                            ? 'glitch-text text-red-400'
                            : 'text-green-400'
                        }`}
                        data-text={result.status}
                      >
                        {result.status}
                      </h3>
                      <p className="text-sm text-neutral-400">AI Analysis Complete</p>
                    </div>
                  </div>

                  {/* Risk Score */}
                  <div className="mb-6">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-medium text-neutral-300">
                        Risk Score
                      </span>
                      <span
                        className={`text-3xl font-bold ${
                          result.isFraud ? 'text-red-400' : 'text-green-400'
                        }`}
                      >
                        {result.riskScore}
                        <span className="text-lg text-neutral-500">/100</span>
                      </span>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${result.riskScore}%` }}
                        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                        className={`h-full rounded-full ${
                          result.isFraud
                            ? 'bg-gradient-to-r from-red-600 to-red-400'
                            : 'bg-gradient-to-r from-green-600 to-green-400'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Factors */}
                  <div className="mb-5 space-y-2">
                    <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      Risk Factors Analyzed
                    </h4>
                    {result.factors.map((factor, i) => (
                      <motion.div
                        key={factor.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.08 }}
                        className="flex items-center gap-3 rounded-lg bg-white/[0.03] px-3 py-2"
                      >
                        {factor.flag ? (
                          <XCircle className="h-4 w-4 flex-shrink-0 text-red-400" />
                        ) : (
                          <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-green-400" />
                        )}
                        <span
                          className={`text-sm ${
                            factor.flag ? 'text-red-200' : 'text-neutral-300'
                          }`}
                        >
                          {factor.label}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* AI Explanation */}
                  <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <Activity className="h-4 w-4 text-blue-400" />
                      <span className="text-sm font-semibold text-blue-400">
                        AI Explanation
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-neutral-300">
                      {result.explanation}
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex h-full min-h-[400px] flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-white/[0.02] p-8 text-center"
                >
                  {isAnalyzing ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="mb-4 h-12 w-12 rounded-full border-2 border-white/20 border-t-blue-500"
                      />
                      <p className="text-lg font-medium text-neutral-300">
                        AI is analyzing the transaction...
                      </p>
                      <p className="mt-1 text-sm text-neutral-500">
                        Cross-referencing global fraud patterns
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5">
                        <ShieldCheck className="h-8 w-8 text-neutral-500" />
                      </div>
                      <p className="text-lg font-medium text-neutral-400">
                        Awaiting Analysis
                      </p>
                      <p className="mt-1 max-w-xs text-sm text-neutral-500">
                        Fill in the transaction details and click Analyze to see
                        the fraud risk assessment here.
                      </p>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
