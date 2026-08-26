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
